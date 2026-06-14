import type { APIRoute } from "astro";

export const GET: APIRoute = () =>
  new Response(
    `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0; url=/guides/agency-freelancing-skills-you-need-to-know/"><link rel="canonical" href="https://www.retainr.io/guides/agency-freelancing-skills-you-need-to-know/"><title>High In-Demand Freelance Skills</title></head><body><p>This guide has moved to <a href="/guides/agency-freelancing-skills-you-need-to-know/">the evergreen high-demand freelance skills guide</a>.</p></body></html>`,
    {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
      },
    }
  );
