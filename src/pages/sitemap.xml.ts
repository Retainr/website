import type { APIRoute } from "astro";
import { primaryBlogArticles } from "@/data/blog";
import { pages } from "@/data/pages";
import { niches } from "@/data/niches";

const site = "https://www.retainr.io";

const siteUpdatedAt = "2026-07-27";

const entries = new Map<string, string>([
  ["/", siteUpdatedAt],
  ["/pricing/", siteUpdatedAt],
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
