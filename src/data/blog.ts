const sourcePaths = [
  "/blog/10-best-ai-productivity-tools",
  "/blog/10-best-ai-tools-for-business-efficiency-in-2024",
  "/blog/10-best-hacks-for-youtube-ads",
  "/blog/10-best-ways-to-leverage-social-media",
  "/blog/10-best-youtube-video-ideas-for-2024",
  "/blog/10-essential-workflow-automation-tools-to-boost-productivity",
  "/blog/10-most-popular-ai-software-for-boosting-your-business-online",
  "/blog/10-mustknow-statistics-for-freelancers-in-industry-analysis",
  "/blog/10-musttry-small-agency-affiliate-programs-for-marketers",
  "/blog/10-realworld-problems-ai-can-solve-for-your-business",
  "/blog/10-reasons-how-niche-targeting-can-benefit-your-small-agency",
  "/blog/10-tips-to-optimize-your-youtube-seo",
  "/blog/10-top-tips-for-creating-an-effective-workflow-model",
  "/blog/11-content-marketing-trends-to-optimize-for-in-2024",
  "/blog/11-social-media-metrics-to-track-to-improve-your-conversions",
  "/blog/11-successful-case-studies-of-niche-market-identification",
  "/blog/11-tips-to-selecting-the-right-workflow-automation-software",
  "/blog/12-exciting-freelancer-industry-trends-you-should-know",
  "/blog/120-youtube-video-ideas-to-inspire-you",
  "/blog/13-essential-social-media-metrics-in-2024",
  "/blog/13-hottest-niche-markets-that-small-agencies-can-target-",
  "/blog/13-musthave-tools-for-freelancers-to-boost-industry-expertise",
  "/blog/14-proven-ecommerce-customer-retention-strategies",
  "/blog/14-quick-ways-to-find-freelance-jobs-right-now",
  "/blog/15-examples-of-small-agencies-excelling-in-niche-targeting",
  "/blog/15-gamechanging-freelancer-industry-trends-to-watch-out-for",
  "/blog/15-instagram-marketing-trends-you-need-to-know-in-2024",
  "/blog/19-instagram-reels-ideas-to-build-your-brand",
  "/blog/20-top-social-media-analytics-tools-in-2024",
  "/blog/24-niche-opportunities-for-small-agencies-to-explore-in-2025",
  "/blog/4-effective-strategies-for-niche-market-identification",
  "/blog/4-hacks-for-your-next-networking-event",
  "/blog/5-steps-for-an-effective-process-workflow-automation",
  "/blog/5-tips-to-create-more-memorable-youtube-ads",
  "/blog/5-youtube-hacks-for-explosive-growth",
  "/blog/6-automation-strategies-for-small-business",
  "/blog/6-easy-tips-for-more-profitable-youtube-advertising",
  "/blog/6-effective-strategies-for-social-media-marketing",
  "/blog/6-expert-tips-for-pinpointing-your-target-industry",
  "/blog/6-key-steps-to-penetrate-niche-markets-successfully",
  "/blog/6-psychologybacked-hacks-for-making-engaging-videos",
  "/blog/6-simple-tips-for-building-a-professional-network",
  "/blog/6-sponsorship-strategies-that-brands-can-leverage",
  "/blog/6-steps-to-scale-your-ecommerce-business-successfully",
  "/blog/6-tips-for-social-media-marketing",
  "/blog/6-tips-to-succeed-in-brand-collaborations-on-youtube",
  "/blog/7-best-processes-to-automate-at-work",
  "/blog/7-expert-insights-on-industry-analysis-for-freelancers",
  "/blog/7-hacks-to-write-a-product-description-that-multiplies-sales",
  "/blog/7-inspiring-examples-of-freelancers-with-exceptional-industryfocused-brands",
  "/blog/7-key-steps-to-implementing-ai-in-your-business",
  "/blog/7-metrics-to-analyze-your-youtube-ad-performance",
  "/blog/7-successful-strategies-for-conversion-rate-optimization",
  "/blog/7-technologies-to-streamline-business-processes",
  "/blog/7-tips-to-build-meaningful-connections-in-your-industry",
  "/blog/7-top-tips-for-creating-a-content-calendar",
  "/blog/7-unique-freelancer-niches-you-havent-considered",
  "/blog/7-ways-ecommerce-sites-can-optimize-conversions",
  "/blog/8-essential-tips-for-new-youtubers",
  "/blog/8-ideas-for-a-successful-youtube-collab-a146f",
  "/blog/8-lucrative-niches-for-small-agencies",
  "/blog/8-simple-youtube-seo-tips-to-rank-your-videos-higher",
  "/blog/8-steps-to-implement-a-social-media-marketing-strategy",
  "/blog/8-tips-for-an-effective-video-marketing-strategy",
  "/blog/8-ways-to-increase-youtube-subscribers-in-2024",
  "/blog/9-best-workflow-automation-software-for-small-businesses",
  "/blog/9-steps-to-choose-the-right-industry-specialization-as-a-freelancer",
  "/blog/9-tips-and-tricks-to-increase-your-youtube-engagement",
  "/blog/checklist-to-start-an-ecommerce-business-in-2024",
  "/blog/how-can-brands-maximize-roi-through-youtube-marketing-campaigns",
  "/blog/how-can-freelancers-benefit-from-market-segmentation",
  "/blog/how-do-industryspecific-services-impact-freelancers-success",
  "/blog/how-to-choose-workflow-automation-tools-and-software",
  "/blog/how-to-conduct-a-comprehensive-niche-analysis-for-small-agencies",
  "/blog/how-to-create-a-social-media-calendar-to-plan-your-content-fde00",
  "/blog/how-to-develop-a-unique-selling-proposition-for-your-small-agency",
  "/blog/how-to-expand-your-niche-and-increase-profits-as-a-freelancer",
  "/blog/how-to-get-better-projects-through-networking",
  "/blog/how-to-get-more-views-on-youtube",
  "/blog/how-to-implement-a-datadriven-social-media-marketing",
  "/blog/how-to-increase-social-media-engagement",
  "/blog/how-to-make-money-on-youtube-as-a-creator",
  "/blog/how-to-measure-and-improve-youtube-ads",
  "/blog/how-to-promote-your-youtube-channel",
  "/blog/how-to-self-publish-a-book-in-7-steps",
  "/blog/how-to-stand-out-in-a-competitive-niche-as-a-freelancer",
  "/blog/how-to-start-an-ecommerce-business-in-2024",
  "/blog/how-to-streamline-and-automate-your-business-processes",
  "/blog/how-to-successfully-promote-small-agency-affiliate-programs",
  "/blog/how-to-use-keywords-for-youtube-seo",
  "/blog/how-to-write-a-killer-ecommerce-product-description",
  "/blog/how-workflow-automation-can-maximize-efficiency",
  "/blog/the-9-most-common-target-industries-and-how-to-identify-yours",
  "/blog/top-10-instagram-growth-tools-2024",
  "/blog/top-15-most-indemand-freelance-skills",
  "/blog/top-25-tools-for-conducting-industry-analysis-as-a-freelancer",
  "/blog/top-5-industryspecific-services-every-freelancer-needs",
  "/blog/top-5-small-agency-affiliate-programs-for-lucrative-commissions",
  "/blog/top-5-tips-for-marketing-and-networking-as-a-freelancer-",
  "/blog/top-5-trends-for-the-future-of-marketing",
];

export type BlogArticle = {
  slug: string;
  sourceSlug: string;
  canonicalSlug: string;
  title: string;
  description: string;
  category: string;
  audience: string;
  updatedAt: string;
  legacy: boolean;
  sections: { title: string; body: string; points: string[] }[];
};

const updatedAt = "2026-06-14";
const audiences = [
  "indie nutritionists",
  "registered dietitians",
  "SEO experts",
  "online life coaches",
  "ebook novelists",
  "cartoonists",
  "info product creators",
  "designers",
  "AI consultants",
  "crypto educators",
];

const titleCase = (value: string) =>
  value
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .replace(/\bAi\b/g, "AI")
    .replace(/\bSeo\b/g, "SEO")
    .replace(/\bRoi\b/g, "ROI")
    .replace(/\bYoutube\b/g, "YouTube");

const evergreenSlug = (slug: string) =>
  slug
    .replace(/-in-20\d{2}/g, "")
    .replace(/-20\d{2}/g, "")
    .replace(/-(a146f|fde00)$/g, "")
    .replace(/-+$/g, "");

const cleanTitle = (slug: string) => {
  const base = evergreenSlug(slug).replace(/^blog\//, "");
  const title = titleCase(base);
  if (/youtube|instagram|social-media|content|video/i.test(base)) return `${title} for Digital Creators`;
  if (/ai|automation|workflow/i.test(base)) return `${title} for Solo Experts`;
  if (/ecommerce|product-description|conversion|retention/i.test(base)) return `${title} for Productized Services`;
  if (/niche|industry|freelancer|agency|skills/i.test(base)) return `${title} for Niche Freelancers`;
  return `${title} for Digital Creators`;
};

const categoryFor = (slug: string) => {
  if (/ai|automation|workflow|process/i.test(slug)) return "Automation";
  if (/youtube|instagram|social-media|content|video|marketing/i.test(slug)) return "Creator Marketing";
  if (/ecommerce|conversion|retention|product-description/i.test(slug)) return "Selling Online";
  if (/affiliate|sponsorship|collab/i.test(slug)) return "Partnerships";
  if (/niche|industry|freelancer|agency|skills|networking/i.test(slug)) return "Niche Strategy";
  return "Creator Business";
};

const audienceFor = (slug: string) => {
  const index = Math.abs([...slug].reduce((sum, char) => sum + char.charCodeAt(0), 0)) % audiences.length;
  if (/seo|keyword/i.test(slug)) return "SEO experts";
  if (/book|publish|writing/i.test(slug)) return "ebook novelists";
  if (/ai|automation/i.test(slug)) return "AI consultants";
  if (/nutrition|health|wellness/i.test(slug)) return "registered dietitians";
  return audiences[index];
};

const buildSections = (slug: string, title: string, category: string, audience: string) => [
  {
    title: "What changed for digital creators",
    body: `${title} is no longer only a traffic or productivity topic. For ${audience}, this ${slug.includes("2024") || slug.includes("2025") ? "formerly date-bound" : "evergreen"} topic now has to connect directly to offers, onboarding, payment, delivery, and recurring client value.`,
    points: [
      "Build around a specific buyer and painful use case",
      "Turn advice into a productized service with clear scope",
      "Move every lead toward a paid recurring relationship",
    ],
  },
  {
    title: "How to apply it without adding more tools",
    body: `The practical move is to keep your creator business simple: one landing page, one productized offer, one intake flow, and one client portal. That is where ${category.toLowerCase()} becomes revenue instead of another content task.`,
    points: [
      "Create a starter package that can be delivered repeatedly",
      "Use a magic signup link for the exact offer",
      "Attach tasks, files, support, and approvals to the client record",
    ],
  },
  {
    title: "Turn existing clients into recurring revenue",
    body: `Existing clients are the best growth channel for niche freelancers. Use this topic to identify repeatable outcomes, then package those outcomes into monthly retainers, check-ins, reports, or implementation support.`,
    points: [
      "Audit current clients for repeated requests",
      "Bundle the repeated work into a monthly plan",
      "Use Retainr to sell, onboard, invoice, and deliver the plan",
    ],
  },
];

const canonicalSources = sourcePaths.map((path) => path.replace(/^\/blog\//, ""));
const aliasSources = [
  ...new Set(
    canonicalSources
      .map(evergreenSlug)
      .filter((slug, index) => slug !== canonicalSources[index] && !canonicalSources.includes(slug))
  ),
];
const allSlugs = [...canonicalSources, ...aliasSources];

export const blogArticles: BlogArticle[] = allSlugs.map((slug) => {
  const sourceSlug = canonicalSources.includes(slug)
    ? slug
    : canonicalSources.find((item) => evergreenSlug(item) === slug) ?? slug;
  const canonicalSlug = evergreenSlug(sourceSlug);
  const title = cleanTitle(sourceSlug);
  const category = categoryFor(sourceSlug);
  const audience = audienceFor(sourceSlug);
  return {
    slug,
    sourceSlug,
    canonicalSlug,
    title,
    description: `${title}, updated for ${audience}, niche freelancers, and digital creators who want to turn existing clients into recurring revenue with Retainr.`,
    category,
    audience,
    updatedAt,
    legacy: slug !== canonicalSlug,
    sections: buildSections(sourceSlug, title, category, audience),
  };
});

export const primaryBlogArticles = blogArticles.filter((article) => article.slug === article.canonicalSlug);

export const blogCategories = [...new Set(primaryBlogArticles.map((article) => article.category))];
