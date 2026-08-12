import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dist = fileURLToPath(new URL("../dist/", import.meta.url));
const productionOrigin = "https://www.retainr.io";
const failures = new Set();

const requiredFiles = [
  ".nojekyll",
  "CNAME",
  "404.html",
  "index.html",
  "llms.txt",
  "robots.txt",
  "sitemap.xml",
  "compare/index.html",
  "niches/index.html",
  "pricing/index.html",
];

const exists = async (file) => {
  try {
    await access(file);
    return true;
  } catch {
    return false;
  }
};

const walk = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const item = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(item) : [item];
  }));
  return files.flat();
};

const pageUrlFor = (file) => {
  const relative = path.relative(dist, file).split(path.sep).join("/");
  if (relative === "index.html") return `${productionOrigin}/`;
  if (relative.endsWith("/index.html")) {
    return `${productionOrigin}/${relative.slice(0, -"index.html".length)}`;
  }
  return `${productionOrigin}/${relative}`;
};

const outputCandidates = (pathname) => {
  const decodedPath = decodeURIComponent(pathname).replace(/^\/+/, "");
  if (!decodedPath) return [path.join(dist, "index.html")];
  if (decodedPath.endsWith("/")) return [path.join(dist, decodedPath, "index.html")];
  if (path.extname(decodedPath)) return [path.join(dist, decodedPath)];
  return [
    path.join(dist, decodedPath),
    path.join(dist, `${decodedPath}.html`),
    path.join(dist, decodedPath, "index.html"),
  ];
};

for (const relative of requiredFiles) {
  if (!(await exists(path.join(dist, relative)))) failures.add(`Missing required output: ${relative}`);
}

if (await exists(path.join(dist, "CNAME"))) {
  const cname = (await readFile(path.join(dist, "CNAME"), "utf8")).trim();
  if (cname !== "www.retainr.io") failures.add(`CNAME must be www.retainr.io, found: ${cname || "empty"}`);
}

const allFiles = await walk(dist);
const htmlFiles = allFiles.filter((file) => file.endsWith(".html"));
let internalLinks = 0;
let crispPages = 0;

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  const relative = path.relative(dist, file).split(path.sep).join("/");
  const isRedirect = /http-equiv=["']refresh["']/i.test(html);

  if (!/<link\s+[^>]*rel=["']canonical["'][^>]*>/i.test(html)) {
    failures.add(`Missing canonical link: ${relative}`);
  }

  if (!isRedirect) {
    if (!/<meta\s+[^>]*name=["']description["'][^>]*>/i.test(html)) {
      failures.add(`Missing meta description: ${relative}`);
    }
    if (!html.includes("https://client.crisp.chat/l.js")) {
      failures.add(`Missing Crisp chat: ${relative}`);
    } else {
      crispPages += 1;
    }
  }

  const stalePatterns = [
    /Start Your \$1 Trial/i,
    /Start for \$1/i,
    /\?(?:plan|billing|trial|checkout)=/i,
  ];
  if (stalePatterns.some((pattern) => pattern.test(html))) {
    failures.add(`Retired pricing language or query parameter: ${relative}`);
  }

  const hrefPattern = /\bhref\s*=\s*(?:"([^"]*)"|'([^']*)')/gi;
  for (const match of html.matchAll(hrefPattern)) {
    const href = match[1] ?? match[2] ?? "";
    if (!href || href === "#") {
      if (href === "#") failures.add(`Empty anchor target: ${relative}`);
      continue;
    }
    if (/^(?:mailto:|tel:|javascript:|data:)/i.test(href) || href.startsWith("#")) continue;

    let destination;
    try {
      destination = new URL(href, pageUrlFor(file));
    } catch {
      failures.add(`Invalid link in ${relative}: ${href}`);
      continue;
    }

    if (destination.origin !== productionOrigin) continue;
    internalLinks += 1;
    const candidates = outputCandidates(destination.pathname);
    if (!(await Promise.any(candidates.map(async (candidate) => {
      if (await exists(candidate)) return true;
      throw new Error("missing");
    })).catch(() => false))) {
      failures.add(`Broken internal link in ${relative}: ${destination.pathname}`);
    }
  }
}

if (await exists(path.join(dist, "robots.txt"))) {
  const robots = await readFile(path.join(dist, "robots.txt"), "utf8");
  if (!robots.includes("Sitemap: https://www.retainr.io/sitemap.xml")) {
    failures.add("robots.txt does not advertise the production sitemap");
  }
}

if (await exists(path.join(dist, "sitemap.xml"))) {
  const sitemap = await readFile(path.join(dist, "sitemap.xml"), "utf8");
  for (const route of ["/", "/pricing/", "/compare/", "/niches/", "/blog/"]) {
    if (!sitemap.includes(`<loc>${productionOrigin}${route}</loc>`)) {
      failures.add(`Sitemap is missing: ${route}`);
    }
  }
}

if (await exists(path.join(dist, "llms.txt"))) {
  const llms = await readFile(path.join(dist, "llms.txt"), "utf8");
  const lines = llms.split(/\r?\n/);
  const firstSectionIndex = lines.findIndex((line) => line.startsWith("## "));
  const sections = lines.filter((line) => line.startsWith("## "));
  const optionalIndex = sections.indexOf("## Optional");

  if (lines[0] !== "# Retainr" || !lines[2]?.startsWith("> Retainr is ")) {
    failures.add("llms.txt must start with the Retainr H1 followed by a summary blockquote");
  }
  if (!llms.includes("Canonical identity: Retainr is the product name")) {
    failures.add("llms.txt is missing the canonical product identity");
  }
  if (!llms.includes("https://www.retainr.io/") || /https?:\/\/(?:www\.)?retainr\.com/i.test(llms)) {
    failures.add("llms.txt must use the canonical retainr.io domain");
  }
  for (const route of ["/method/", "/features/", "/pricing/", "/niches/", "/compare/", "/blog/"]) {
    if (!llms.includes(`](${productionOrigin}${route})`)) {
      failures.add(`llms.txt is missing the canonical route: ${route}`);
    }
  }
  if (optionalIndex === -1 || optionalIndex !== sections.length - 1) {
    failures.add("llms.txt Optional section must exist and be the final H2 section");
  }
  if (firstSectionIndex !== -1) {
    const invalidSectionLine = lines
      .slice(firstSectionIndex)
      .find((line) => line && !line.startsWith("## ") && !line.startsWith("- ["));
    if (invalidSectionLine) {
      failures.add(`llms.txt contains a non-link line inside its link sections: ${invalidSectionLine}`);
    }
  }
}

const summary = {
  htmlPages: htmlFiles.length,
  internalLinks,
  crispPages,
  failures: [...failures],
};

console.log(JSON.stringify(summary, null, 2));
if (failures.size > 0) process.exitCode = 1;
