import type { APIRoute } from "astro";
import { primaryBlogArticles } from "@/data/blog";
import { comparisons, comparisonsReviewedAt } from "@/data/comparisons";
import { pages } from "@/data/pages";
import { niches } from "@/data/niches";
import { freeTools, freeToolsUpdatedAt } from "@/data/freeTools";

const site = "https://www.retainr.io";

const siteUpdatedAt = "2026-08-26";

const entries = new Map<string, string>([
  ["/", siteUpdatedAt],
  ["/pricing/", siteUpdatedAt],
  ["/niches/", siteUpdatedAt],
  ["/compare/", comparisonsReviewedAt],
  ["/tools/", freeToolsUpdatedAt],
  ["/Retainr.io-skills-you-need-to-know.pdf", siteUpdatedAt],
  ...freeTools.map((tool) => [tool.path, freeToolsUpdatedAt] as const),
  ...comparisons.map((comparison) => [`/compare/${comparison.slug}/`, comparisonsReviewedAt] as const),
  ...pages.map((page) => [`/${page.slug}/`, siteUpdatedAt] as const),
  ...primaryBlogArticles.map((article) => [`/blog/${article.slug}/`, article.updatedAt] as const),
  ...niches.map((niche) => [`/niches/${niche.slug}/`, siteUpdatedAt] as const),
]);

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...entries]
  .map(
    ([url, lastmod]) => `  <url>
    <loc>${site}${url}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
