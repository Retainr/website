import { flagshipBlogArticles } from "./flagshipBlog";

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
  "/blog/how-nutritionists-can-sell-meal-plan-subscriptions",
  "/blog/registered-dietitian-client-portal-for-recurring-care",
  "/blog/how-seo-experts-can-productize-monthly-retainers",
  "/blog/dog-walker-recurring-client-management-system",
  "/blog/how-ebook-novelists-can-sell-editing-and-launch-services",
  "/blog/cartoonist-client-portal-for-commissioned-art",
  "/blog/info-product-creator-service-packages",
  "/blog/designer-recurring-revenue-service-system",
  "/blog/ai-consultant-automation-sprint-offers",
  "/blog/crypto-education-client-onboarding-system",
  "/blog/digital-coach-sell-online-programs-with-client-portal",
  "/blog/course-creator-recurring-service-offers",
  "/blog/copywriter-retainer-client-management",
  "/blog/video-editor-productized-service-workflow",
  "/blog/community-manager-recurring-client-packages",
  "/blog/virtual-assistant-client-onboarding-and-retainers",
  "/blog/notion-consultant-productized-workspace-services",
  "/blog/fitness-coach-online-program-client-portal",
  "/blog/podcast-producer-retainer-workflow",
  "/blog/web-designer-care-plan-recurring-revenue",
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
  featured: boolean;
  image: string;
  imageAlt: string;
  sections: { title: string; body: string; points: string[] }[];
  sources: { label: string; url: string }[];
};

const updatedAt = "2026-07-27";
const reviewedAtLabel = "27 July 2026";
const audiences = [
  "AI consultants",
  "SEO experts",
  "brand & web designers",
  "digital life & business coaches",
  "info product creators",
  "illustrators & cartoonists",
];

const titleCase = (value: string) =>
  value
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .replace(/\bAi\b/g, "AI")
    .replace(/\bSeo\b/g, "SEO")
    .replace(/\bRoi\b/g, "ROI")
    .replace(/\bYoutube\b/g, "YouTube")
    .replace(/\bIndemand\b/g, "In-Demand")
    .replace(/\bDatadriven\b/g, "Data-Driven")
    .replace(/\bIndustryspecific\b/g, "Industry-Specific")
    .replace(/\bMustknow\b/g, "Must-Know")
    .replace(/\bMusttry\b/g, "Must-Try")
    .replace(/\bMusthave\b/g, "Must-Have")
    .replace(/\bRealworld\b/g, "Real-World")
    .replace(/\bGamechanging\b/g, "Game-Changing")
    .replace(/\bHavent\b/g, "Haven't")
    .replace(/\bPsychologybacked\b/g, "Psychology-Backed");

const evergreenSlug = (slug: string) =>
  slug
    .replace(/-(?:in-|for-)?20\d{2}/g, "")
    .replace(/-(a146f|fde00)$/g, "")
    .replace(/-+$/g, "");

const previousEvergreenSlug = (slug: string) =>
  slug
    .replace(/-in-20\d{2}/g, "")
    .replace(/-20\d{2}/g, "")
    .replace(/-(a146f|fde00)$/g, "")
    .replace(/-+$/g, "");

const cleanTitle = (slug: string) => {
  const base = evergreenSlug(slug).replace(/^blog\//, "");
  return titleCase(base)
    .replace(
      "7 Inspiring Examples Of Freelancers With Exceptional Industryfocused Brands",
      "7 Freelancer Brands Built Around Industry Expertise"
    )
    .replace(
      "9 Steps To Choose The Right Industry Specialization As A Freelancer",
      "Choose a Freelance Industry Specialization in 9 Steps"
    )
    .replace("Industryfocused", "Industry-Focused");
};

const conciseDescription = (value: string) => {
  if (value.length <= 158) return value;
  return `${value.slice(0, 155).replace(/\s+\S*$/, "")}...`;
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
  if (/seo|keyword|growth/i.test(slug)) return "SEO experts";
  if (/ai|automation|workflow/i.test(slug)) return "AI consultants";
  if (/design|brand|creative/i.test(slug)) return "brand & web designers";
  if (/coach|coaching|accountability/i.test(slug)) return "digital life & business coaches";
  if (/info.?product|course|template/i.test(slug)) return "info product creators";
  if (/illustrat|cartoon|visual|character/i.test(slug)) return "illustrators & cartoonists";

  const index = Math.abs([...slug].reduce((sum, char) => sum + char.charCodeAt(0), 0)) % audiences.length;
  return audiences[index];
};

const imageFor = (category: string) => {
  if (category === "Automation") return "/assets/team-collab.png";
  if (category === "Creator Marketing") return "/assets/revenue-graph.png";
  if (category === "Selling Online") return "/assets/packages.png";
  if (category === "Partnerships") return "/assets/support-mockup.svg";
  if (category === "Niche Strategy") return "/assets/onboarding.png";
  return "/assets/dashboard-hero.png";
};

const currentToolsFor = (slug: string, category: string) => {
  if (/seo|keyword|search|industry|niche/i.test(slug)) {
    return [
      "Google Search Console for query, page, indexing, and conversion-path diagnosis",
      "Google Trends for comparing language and seasonality, not predicting demand alone",
      "Bing Webmaster Tools for additional crawl and search visibility signals",
      "Google Analytics for qualified journeys and commercial outcomes",
      "A structured content brief with primary-source citations and explicit update dates",
      "Retainr for connecting high-intent guides to niche packages and onboarding",
    ];
  }

  if (category === "Automation") {
    return [
      "ChatGPT or Claude for bounded research, transformation, and draft-review tasks",
      "Perplexity for source discovery followed by verification against primary sources",
      "Zapier or Make for accessible app-to-app workflows",
      "n8n for teams that need more control over technical automation",
      "A human review checklist for facts, permissions, privacy, and failure handling",
      "Retainr for the client-facing package, intake, delivery, and support record",
    ];
  }

  if (category === "Creator Marketing") {
    return [
      "Native platform analytics such as YouTube Studio and Instagram Insights",
      "Google Trends for language and seasonal demand checks",
      "A lightweight editorial calendar based on buyer questions",
      "Descript or CapCut for transcript-led editing and repurposing workflows",
      "Google Analytics for journeys that continue beyond views and followers",
      "Retainr for turning qualified attention into a paid client path",
    ];
  }

  if (category === "Selling Online") {
    return [
      "Stripe or the payment provider supported by your operating region",
      "Google Analytics for purchase and assisted-conversion journeys",
      "Microsoft Clarity for consent-aware usability observation",
      "A reusable offer brief covering buyer, outcome, scope, proof, and next step",
      "A client feedback loop for improving the package after delivery",
      "Retainr for package checkout, onboarding, delivery, and recurring plans",
    ];
  }

  if (category === "Partnerships") {
    return [
      "A lightweight partner brief defining audience fit, deliverables, usage, and disclosure",
      "Native platform analytics for verified reach and audience response",
      "Unique landing pages or campaign links for attributable enquiries",
      "A simple pipeline with owner, next action, deadline, and commercial status",
      "Written approval for claims, creative, licensing, and publication timing",
      "Retainr for packaging partner services, onboarding, delivery, and repeat campaigns",
    ];
  }

  return [
    "Google Trends and first-party client questions for demand language",
    "A simple CRM or pipeline with one recorded next action per lead",
    "A reusable offer brief and niche-specific onboarding checklist",
    "An AI assistant for bounded drafting with human review and data controls",
    "Native analytics for the channel where the intended buyer finds you",
    "Retainr for packages, payment, client delivery, support, and retention",
  ];
};

const editorialSources = {
  aiRisk: {
    label: "NIST AI Risk Management Framework",
    url: "https://www.nist.gov/itl/ai-risk-management-framework",
  },
  copyright: {
    label: "U.S. Copyright Office: What is Copyright?",
    url: "https://www.copyright.gov/what-is-copyright/",
  },
  endorsements: {
    label: "FTC guidance on endorsements, influencers, and reviews",
    url: "https://www.ftc.gov/business-guidance/advertising-marketing/endorsements-influencers-reviews",
  },
  kdp: {
    label: "Amazon KDP paperback formatting guidance",
    url: "https://kdp.amazon.com/en_US/help/topic/G201834190",
  },
  nutritionScope: {
    label: "Academy of Nutrition and Dietetics scope and standards of practice",
    url: "https://www.eatrightpro.org/practice/practice-competence/scope-and-standards-of-practice",
  },
  search: {
    label: "Google Search Central guide for developers",
    url: "https://developers.google.com/search/docs/fundamentals/get-started-developers",
  },
  smallBusinessResearch: {
    label: "U.S. Small Business Administration market research guidance",
    url: "https://www.sba.gov/business-guide/plan-your-business/market-research-competitive-analysis",
  },
  storeAnalytics: {
    label: "Shopify analytics documentation",
    url: "https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports",
  },
  youtubeAnalytics: {
    label: "YouTube Help: interpret impressions and click-through rate",
    url: "https://support.google.com/youtube/answer/16767369?hl=en",
  },
  youtubeRetention: {
    label: "YouTube Help: measure audience retention",
    url: "https://support.google.com/youtube/answer/9314415?hl=en",
  },
} as const;

const sourcesFor = (slug: string, category: string) => {
  if (/nutrition|dietitian|meal-plan/i.test(slug)) {
    return [editorialSources.nutritionScope, editorialSources.smallBusinessResearch];
  }

  if (/book|ebook|novelist|self-publish/i.test(slug)) {
    return [editorialSources.kdp, editorialSources.copyright];
  }

  if (/seo|keyword|search/i.test(slug)) {
    return [editorialSources.search, editorialSources.smallBusinessResearch];
  }

  if (/youtube/i.test(slug)) {
    return [editorialSources.youtubeAnalytics, editorialSources.youtubeRetention];
  }

  if (category === "Automation") {
    return [editorialSources.aiRisk, editorialSources.smallBusinessResearch];
  }

  if (category === "Partnerships") {
    return [editorialSources.endorsements, editorialSources.copyright];
  }

  if (category === "Creator Marketing") {
    return [editorialSources.endorsements, editorialSources.smallBusinessResearch];
  }

  if (category === "Selling Online") {
    return [editorialSources.storeAnalytics, editorialSources.smallBusinessResearch];
  }

  if (/design|brand|illustrat|cartoon|copywrit|video-editor|ugc/i.test(slug)) {
    return [editorialSources.copyright, editorialSources.smallBusinessResearch];
  }

  return [editorialSources.smallBusinessResearch];
};

type ArticlePlan = {
  buyer: string;
  problem: string;
  starterOffer: string;
  coreOffer: string;
  recurringOffer: string;
  firstMilestone: string;
  proof: string;
  metric: string;
  inputs: string[];
  workflow: string[];
  risks: string[];
};

const articlePlanFor = (slug: string, audience: string): ArticlePlan => {
  if (/youtube.*ad|advertis.*youtube/i.test(slug)) {
    return {
      buyer: "a specialist business already spending on YouTube but unable to connect campaign activity to qualified enquiries",
      problem: "creative, targeting, landing-page intent, and follow-up are being reviewed separately, so nobody can explain why useful attention does or does not become revenue",
      starterOffer: "YouTube campaign diagnosis",
      coreOffer: "campaign message, creative, landing-page, and measurement sprint",
      recurringOffer: "monthly creative testing and lead-quality review",
      firstMilestone: "a campaign map showing the audience, promise, creative hypothesis, conversion event, and first test",
      proof: "a before-and-after campaign decision log that connects each change to lead quality rather than views alone",
      metric: "qualified enquiry cost and the share of enquiries that become sales conversations",
      inputs: ["campaign objective and budget", "audience and exclusions", "current creative", "landing page", "conversion definition", "sales follow-up process"],
      workflow: ["Audit one campaign", "Name the failed assumption", "Design one controlled test", "Confirm conversion tracking", "Review lead quality", "Record the next decision"],
      risks: ["optimizing for cheap views", "changing several variables at once", "weak disclosure or consent", "sending paid traffic to a generic home page"],
    };
  }

  if (/youtube/i.test(slug)) {
    return {
      buyer: "an expert-led channel that publishes consistently but does not turn the right viewers into enquiries, buyers, or repeat clients",
      problem: "topic choice, packaging, search intent, retention, and the commercial next step are disconnected",
      starterOffer: "YouTube channel and content-path audit",
      coreOffer: "buyer-question content system with titles, formats, scripts, and conversion paths",
      recurringOffer: "monthly channel strategy, review, and repurposing desk",
      firstMilestone: "a prioritized content map built from buyer questions, channel evidence, and one clear next action per video",
      proof: "a content decision sheet showing why each topic exists, who it serves, and what qualified action it produced",
      metric: "qualified actions per video, supported by retention and returning-viewer signals",
      inputs: ["channel goal", "ideal buyer", "past video performance", "current offers", "production capacity", "conversion destination"],
      workflow: ["Collect buyer questions", "Group by intent", "Choose a format", "Write the promise", "Publish with one next step", "Review qualified response"],
      risks: ["copying trend lists", "judging success by views alone", "publishing without an offer path", "using titles the video does not satisfy"],
    };
  }

  if (/instagram|social-media|content-calendar|content-marketing|video-marketing|reels/i.test(slug)) {
    return {
      buyer: "a niche expert whose content activity creates attention but not a dependable path to paid specialist work",
      problem: "publishing is organized around frequency and formats instead of buyer questions, proof, and the next commercial decision",
      starterOffer: "content-to-client journey audit",
      coreOffer: "channel strategy, editorial system, and conversion-path implementation",
      recurringOffer: "monthly content operations and performance review",
      firstMilestone: "a four-week content map that pairs each buyer question with proof, format, owner, and next action",
      proof: "a small set of posts that can be traced to useful replies, email signups, service-page visits, or qualified enquiries",
      metric: "qualified actions and assisted enquiries per content theme",
      inputs: ["buyer questions", "current offers", "channel analytics", "available proof", "production capacity", "approval constraints"],
      workflow: ["Collect real questions", "Assign intent", "Choose proof", "Create once", "Adapt by channel", "Measure the next action"],
      risks: ["posting for volume", "reusing identical creative everywhere", "mistaking engagement for demand", "sending every reader to the same generic link"],
    };
  }

  if (/ai|automation|workflow|process|streamline|technologies/i.test(slug)) {
    return {
      buyer: "a specialist business with repeated manual work, unclear handoffs, and enough variation that blind automation would create new risk",
      problem: "the team is choosing tools before documenting the trigger, decision, owner, exception, and client-visible outcome",
      starterOffer: "workflow opportunity and risk audit",
      coreOffer: "one bounded automation sprint with human review and rollback",
      recurringOffer: "monthly automation monitoring, optimization, and exception support",
      firstMilestone: "a current-state workflow map with time cost, failure points, data sensitivity, and the first safe automation boundary",
      proof: "a run log comparing time, error rate, exception handling, and client outcome before and after implementation",
      metric: "verified time saved per successful run after review and exception costs",
      inputs: ["trigger and desired outcome", "current steps", "systems involved", "data classification", "decision owner", "failure and rollback process"],
      workflow: ["Map the current state", "Measure the baseline", "Choose one bounded step", "Add human review", "Test exceptions", "Monitor in production"],
      risks: ["automating a broken process", "exposing client data", "invented AI output", "missing ownership when a workflow fails"],
    };
  }

  if (/ecommerce|product-description|conversion|retention/i.test(slug)) {
    return {
      buyer: "an online seller with traffic or customers but avoidable friction between product understanding, purchase, delivery, and the next order",
      problem: "the offer, proof, checkout, post-purchase experience, and retention work are optimized as separate tasks",
      starterOffer: "offer and conversion-friction review",
      coreOffer: "product-page, checkout, onboarding, and retention sprint",
      recurringOffer: "monthly conversion and customer-retention review",
      firstMilestone: "a prioritized friction map based on buyer intent, evidence, usability, and commercial impact",
      proof: "a change log that connects a specific hypothesis to conversion quality, support burden, repeat purchase, or refund behaviour",
      metric: "qualified conversion and repeat-customer value, not raw click-through rate",
      inputs: ["buyer and use case", "product economics", "traffic sources", "page and checkout data", "support questions", "repeat-purchase pattern"],
      workflow: ["Clarify the promise", "Remove uncertainty", "Strengthen proof", "Reduce checkout friction", "Improve first delivery", "Offer the next useful purchase"],
      risks: ["testing without enough signal", "discounting instead of clarifying value", "hiding material terms", "optimizing clicks that create poor-fit buyers"],
    };
  }

  if (/affiliate|sponsorship|collab|collaboration/i.test(slug)) {
    return {
      buyer: "a niche publisher, specialist, or small brand that wants commercially useful partnerships without damaging audience trust",
      problem: "audience fit, deliverables, disclosure, attribution, usage rights, and follow-up are not agreed before work begins",
      starterOffer: "partner-fit and campaign brief",
      coreOffer: "campaign strategy, production, launch, and performance review",
      recurringOffer: "quarterly or monthly partner campaign programme",
      firstMilestone: "a signed brief defining the shared audience, promise, deliverables, rights, disclosure, success criteria, and decision owners",
      proof: "a transparent campaign recap covering reach, qualified response, attribution limits, lessons, and next recommendation",
      metric: "qualified response and attributable commercial value within the agreed measurement window",
      inputs: ["shared audience", "commercial objective", "deliverables", "usage rights", "disclosure requirements", "measurement window"],
      workflow: ["Check audience fit", "Agree the brief", "Approve claims", "Publish with disclosure", "Measure qualified response", "Document the next campaign"],
      risks: ["poor audience fit", "unclear disclosure", "unlimited usage rights", "promising attribution the data cannot support"],
    };
  }

  if (/networking|freelance-jobs|connections/i.test(slug)) {
    return {
      buyer: "an independent expert who needs better-fit conversations but does not want to rely on high-volume cold outreach",
      problem: "networking activity is not tied to a memorable specialty, useful proof, or a recorded next action",
      starterOffer: "positioning and warm-pipeline review",
      coreOffer: "referral system, proof assets, reactivation messages, and follow-up workflow",
      recurringOffer: "monthly pipeline review and partner development",
      firstMilestone: "a list of warm accounts and complementary partners, each with a relevant problem, proof asset, and next action",
      proof: "a compact case note that a past client or partner can understand and confidently forward",
      metric: "qualified conversations and introductions that progress to a defined next step",
      inputs: ["specialty", "best client type", "past clients", "proof assets", "complementary partners", "open conversations"],
      workflow: ["Clarify the specialty", "Choose warm accounts", "Create proof", "Send a relevant note", "Follow up once", "Record the next action"],
      risks: ["collecting contacts without follow-up", "asking for referrals before giving context", "generic outreach", "failing to close the loop"],
    };
  }

  if (/niche|industry|specialization|market-segmentation|target-industries|freelance-skills/i.test(slug)) {
    return {
      buyer: "a freelancer or small specialist team with broad capability but weak differentiation and inconsistent lead quality",
      problem: "the niche is being chosen from trend lists instead of repeated pain, budget, access, proof, and the potential for ongoing work",
      starterOffer: "niche opportunity and positioning audit",
      coreOffer: "specialist offer, proof, messaging, and acquisition sprint",
      recurringOffer: "monthly market learning and offer optimization",
      firstMilestone: "a scored shortlist comparing urgency, buyer access, proof, delivery fit, budget, and recurring need",
      proof: "three real buyer conversations and one paid pilot that test the positioning before a full rebrand",
      metric: "qualified lead rate and close rate for the chosen buyer-problem pair",
      inputs: ["past profitable work", "repeated requests", "buyer access", "available proof", "delivery strengths", "ongoing client needs"],
      workflow: ["Review past wins", "List repeated pain", "Score candidate niches", "Interview buyers", "Sell one pilot", "Refine from evidence"],
      risks: ["choosing only by market size", "rebranding before validation", "confusing an industry with a problem", "targeting buyers you cannot reach"],
    };
  }

  if (/nutrition|dietitian|meal-plan/i.test(slug)) {
    return {
      buyer: "an independent nutrition professional who needs a respectful, organized path from first programme purchase to appropriate ongoing support",
      problem: "programme scope, intake, client communication, files, progress, and continuation are split across email, forms, and calendars",
      starterOffer: "paid nutrition planning or education session",
      coreOffer: "structured programme with defined educational deliverables and check-ins",
      recurringOffer: "ongoing education, accountability, and plan-review membership within professional scope",
      firstMilestone: "a confirmed intake, scope statement, first educational plan, and clear next check-in",
      proof: "client-reported experience and process completion without promising health outcomes",
      metric: "onboarding completion, programme engagement, and appropriate continuation rate",
      inputs: ["client goal", "relevant history within scope", "constraints and preferences", "programme boundaries", "communication cadence", "consent and privacy needs"],
      workflow: ["Define scope", "Collect essential context", "Confirm suitability", "Deliver the first plan", "Review progress", "Offer appropriate continuation"],
      risks: ["making clinical claims outside scope", "collecting unnecessary sensitive data", "unclear emergency boundaries", "promising guaranteed outcomes"],
    };
  }

  if (/dog-walker|pet/i.test(slug)) {
    return {
      buyer: "an independent dog walker or pet-care specialist managing repeat bookings, household instructions, keys, updates, and schedule changes",
      problem: "recurring service details and client communication are scattered, making each booking feel manual",
      starterOffer: "single walk or meet-and-greet package",
      coreOffer: "multi-visit weekly care package",
      recurringOffer: "monthly reserved walking or care plan",
      firstMilestone: "a completed pet profile, access instructions, service window, emergency contact, and confirmed first visit",
      proof: "reliable visit records and clear owner updates rather than exaggerated care claims",
      metric: "repeat booking rate, schedule utilization, and avoidable support messages",
      inputs: ["pet routine", "behaviour and safety notes", "access instructions", "service window", "emergency contact", "update preference"],
      workflow: ["Confirm fit", "Collect care details", "Schedule the first visit", "Send the update", "Review recurring needs", "Reserve the monthly plan"],
      risks: ["unclear access responsibility", "missing safety information", "overbooking travel windows", "informal schedule changes"],
    };
  }

  if (/book|ebook|novelist|self-publish/i.test(slug)) {
    return {
      buyer: "an independent author who needs a visible route from manuscript stage to publication and reader growth",
      problem: "editing, design, metadata, launch assets, approvals, and post-launch work are treated as disconnected purchases",
      starterOffer: "manuscript or launch-readiness review",
      coreOffer: "defined editing, production, or launch implementation package",
      recurringOffer: "monthly launch support, reader communication, or backlist growth plan",
      firstMilestone: "a stage-specific roadmap with responsibilities, files, decisions, dates, and the next approval",
      proof: "a transparent production case note showing the starting stage, decisions, deliverables, and completed outcome",
      metric: "milestone completion, qualified reader actions, and profitable follow-on work",
      inputs: ["manuscript stage", "genre and reader", "publishing route", "editorial needs", "rights and assets", "launch timing"],
      workflow: ["Assess the stage", "Choose the next milestone", "Define deliverables", "Collect files", "Run approvals", "Plan the next release activity"],
      risks: ["selling launch tactics before the book is ready", "unclear rights", "unbounded revisions", "promising sales outcomes"],
    };
  }

  if (/seo|keyword|search/i.test(slug)) {
    return {
      buyer: "a business with commercial search demand but no dependable system for diagnosis, prioritization, implementation, and review",
      problem: "rankings, content, technical work, and revenue are discussed without an agreed baseline or decision cadence",
      starterOffer: "search opportunity and technical diagnosis",
      coreOffer: "prioritized SEO implementation roadmap",
      recurringOffer: "monthly search performance, content, and technical improvement retainer",
      firstMilestone: "a baseline covering indexation, query demand, priority pages, technical blockers, competitors, and conversion paths",
      proof: "a decision log showing what changed, why it changed, and how qualified search journeys responded",
      metric: "qualified organic conversions and commercial page progress, supported by visibility signals",
      inputs: ["business priorities", "site access", "Search Console", "analytics", "priority markets", "implementation capacity"],
      workflow: ["Confirm commercial goals", "Build the baseline", "Prioritize constraints", "Ship one improvement set", "Measure qualified impact", "Choose the next cycle"],
      risks: ["guaranteeing rankings", "publishing without expertise", "measuring traffic alone", "recommending work the client cannot implement"],
    };
  }

  if (/design|cartoon|illustrat|creative/i.test(slug)) {
    return {
      buyer: "a client who values specialist creative judgment but needs clearer scope, feedback, approvals, usage, and ongoing output",
      problem: "creative requests arrive informally, revisions expand without decisions, and recurring needs are never packaged",
      starterOffer: "creative direction or visual-system review",
      coreOffer: "fixed-scope design or illustration sprint",
      recurringOffer: "monthly creative desk with defined capacity and response times",
      firstMilestone: "an approved brief covering audience, objective, references, deliverables, decision maker, usage, and revision rules",
      proof: "a case note showing the brief, creative reasoning, approval path, and delivered system without exposing confidential work",
      metric: "approval-cycle time, revision efficiency, and recurring capacity utilization",
      inputs: ["audience and objective", "brand assets", "references", "deliverables", "usage rights", "decision maker"],
      workflow: ["Confirm the brief", "Set boundaries", "Explore direction", "Review with one owner", "Deliver final assets", "Plan recurring production"],
      risks: ["subjective briefs", "multiple unaligned approvers", "unclear usage rights", "unlimited revisions"],
    };
  }

  if (/coach|course|info-product|fitness/i.test(slug)) {
    return {
      buyer: "an expert selling knowledge who needs a defined transformation, useful accountability, and a professional client journey",
      problem: "content access is mistaken for implementation, while intake, milestones, support, and continuation remain unclear",
      starterOffer: "diagnostic or roadmap session",
      coreOffer: "structured programme with milestones, feedback, and defined support",
      recurringOffer: "monthly implementation, accountability, or advisory membership",
      firstMilestone: "a shared outcome, baseline, programme boundary, first action, and review cadence",
      proof: "process evidence and client-reported progress without guaranteed transformation claims",
      metric: "milestone completion, appropriate engagement, and continuation after the core programme",
      inputs: ["desired outcome", "starting point", "constraints", "programme fit", "support expectations", "review cadence"],
      workflow: ["Confirm fit", "Set the outcome", "Choose milestones", "Deliver the first action", "Review evidence", "Offer continued support"],
      risks: ["vague transformation claims", "unlimited access", "too much content", "no boundary between education and regulated advice"],
    };
  }

  return {
    buyer: `${audience} with a repeated client problem that can be delivered more clearly than an open-ended custom engagement`,
    problem: "the valuable expertise is real, but the offer, intake, delivery, proof, and continuation path have not been turned into one repeatable system",
    starterOffer: "paid diagnosis or planning session",
    coreOffer: "fixed-scope implementation package",
    recurringOffer: "monthly review, support, optimization, or production plan",
    firstMilestone: "a confirmed scope, completed intake, delivery plan, and first visible result",
    proof: "a concise case note showing the starting condition, expert decision, delivered result, and next recommendation",
    metric: "qualified conversion, time to first value, and recurring-plan acceptance",
    inputs: ["desired outcome", "current state", "constraints", "required assets", "decision owner", "preferred cadence"],
    workflow: ["Diagnose the problem", "Define the outcome", "Package the work", "Collect context", "Deliver the first result", "Offer the next useful cycle"],
    risks: ["generic positioning", "unclear scope", "manual onboarding", "waiting too long to introduce ongoing value"],
  };
};

const buildSections = (slug: string, title: string, category: string, audience: string) => {
  const topic = title.toLowerCase();
  const currentTools = currentToolsFor(slug, category);
  const plan = articlePlanFor(slug, audience);

  return [
    {
      title: `The practical answer to ${topic}`,
      body: `${title} should help ${audience} make a better decision, not simply provide another list. The useful starting point is ${plan.buyer}. Their real constraint is that ${plan.problem}. Begin with the buyer, establish what a good outcome means, and choose the smallest workflow that can produce evidence. Then turn the repeated work into a defined service. This creates a direct line from useful guidance to a paid result without asking the reader to assemble a complicated stack or interpret broad advice.`,
      points: [
        `Best-fit buyer: ${plan.buyer}`,
        `Immediate problem: ${plan.problem}`,
        `First useful result: ${plan.firstMilestone}`,
        `Primary measure: ${plan.metric}`,
      ],
    },
    {
      title: "Diagnose before choosing tactics or tools",
      body: `Do not begin by copying a tool list or a competitor's playbook. Reconstruct the current path from trigger to outcome. Identify who owns each decision, what evidence is available, where work waits, what causes rework, and what the client sees. A diagnosis protects the expert from solving the wrong problem and gives the client a defensible reason to act. It also creates a baseline for demonstrating value later. If the baseline cannot be explained in plain language, the work is not ready to be automated, scaled, or sold as a recurring plan.`,
      points: [
        "Map the current process before proposing the future process",
        "Separate observed evidence from assumptions",
        "Name the decision owner and the person doing the work",
        "Measure the baseline with the same definition you will use later",
      ],
    },
    {
      title: "Use this step-by-step workflow",
      body: `The workflow below turns ${topic} into a sequence a freelancer can deliver and improve. Keep one owner and one definition of done for each stage. Save inputs, decisions, outputs, and approvals with the client record so a future review does not depend on memory. The sequence is deliberately small: it should create the first useful evidence before the client commits to a larger programme. Adapt the terminology to the niche, but do not skip the baseline, review, or recorded next decision.`,
      points: plan.workflow,
    },
    {
      title: "Choose a current stack without creating tool debt",
      body: `This tool set was reviewed on ${reviewedAtLabel}. Treat every named product as an option, not a permanent requirement. Check availability, data handling, regional support, pricing, export, and client permissions before adoption. Prefer the smallest stack that preserves an authoritative record and gives the client one obvious place to act. AI can accelerate research, classification, transformation, and drafting, but the specialist remains responsible for facts, judgment, consent, and the final recommendation.`,
      points: currentTools,
    },
    {
      title: "Package a low-friction starting point",
      body: `The first paid offer should reduce uncertainty for both sides. For this topic, a strong entry point is a ${plan.starterOffer}. It should name the buyer, the question being answered, the evidence reviewed, the deliverable, the timeline, the price, and what is explicitly outside scope. The client is not buying a vague consultation; they are buying a decision they can use. A compact starter offer also gives the freelancer a repeatable way to qualify fit without preparing a free custom strategy for every enquiry.`,
      points: [
        `Name the offer: ${plan.starterOffer}`,
        "Promise one decision or deliverable",
        "Publish the scope, timeline, price, and exclusions",
        "Credit part of the fee toward the core offer only when commercially sensible",
      ],
    },
    {
      title: "Turn the diagnosis into the core package",
      body: `When the diagnosis confirms fit, the core offer can become a ${plan.coreOffer}. Price it around the clarity of the outcome, responsibility, expertise, and delivery capacity rather than hours alone. Define the number of review cycles, client responsibilities, dependencies, change process, and completion criteria. A productized package is not rigid; it is predictable. It gives the expert enough structure to deliver well and gives the client enough visibility to trust the process.`,
      points: [
        `Core offer: ${plan.coreOffer}`,
        `First milestone: ${plan.firstMilestone}`,
        "State client responsibilities before payment",
        "Define how new requests affect scope, timing, or price",
      ],
    },
    {
      title: "Collect only the onboarding context you will use",
      body: `Work backward from the first milestone and ask only for information that changes how delivery begins. Long generic questionnaires create abandonment and still miss the detail the specialist needs. Route the buyer from the exact offer or niche page, explain why sensitive information is required, and collect follow-up context only when it becomes relevant. For this workflow, the initial intake should cover the items below. Keep the answers with the project, files, decisions, and support history rather than in an isolated form inbox.`,
      points: plan.inputs,
    },
    {
      title: "Design the first 48 hours after purchase",
      body: `Confidence is shaped immediately after payment. Confirm what was purchased, show the next action, acknowledge the completed intake within one business day, and either schedule or deliver the first milestone within the promised window. If something blocks progress, name the exact missing item and its consequence. Retainr can keep the package, payment context, intake, tasks, files, and support path together so the client does not have to search across several messages before work has even begun.`,
      points: [
        "Confirm the order and next action immediately",
        "Review the intake within one business day",
        "Show the first milestone and its owner",
        "Keep one named place for files, questions, and approvals",
      ],
    },
    {
      title: "Add quality control where expert judgment matters",
      body: `A repeatable system still needs explicit review. Decide what can be automated, what requires specialist approval, what the client approves, and what happens when evidence is weak. Document assumptions and changes so success is not reconstructed after the fact. The most important failure modes for this topic are listed below. Turn each one into a checklist item, approval gate, permission rule, or scope boundary. Quality control should reduce hidden risk without turning the workflow into bureaucracy.`,
      points: plan.risks.map((risk) => `Prevent ${risk}`),
    },
    {
      title: "Create proof a buyer can evaluate",
      body: `Proof should reveal the expert decision, not only a polished final output. For this topic, use ${plan.proof}. Explain the starting condition, the relevant constraint, what changed, what did not change, the measurement window, and the next recommendation. Protect confidential information and avoid implying causation the evidence cannot establish. A small library of clear case notes helps future buyers self-qualify and gives existing clients a concrete reason to discuss the next engagement.`,
      points: [
        "Show the starting condition and commercial context",
        "Explain the expert decision and tradeoff",
        "Use the same metric definition before and after",
        "End with who should use this approach and who should not",
      ],
    },
    {
      title: "Introduce recurring value after the first result",
      body: `The continuation offer for this workflow is a ${plan.recurringOffer}. Introduce it when the first result makes the next need visible, not as a surprise at the end of the project. Explain what will be reviewed or delivered each cycle, how priorities are chosen, what response time applies, and how the client can pause or change scope. The retainer should protect or extend a result; vague access to the freelancer is not a strong recurring product.`,
      points: [
        `Recurring offer: ${plan.recurringOffer}`,
        `Ongoing measure: ${plan.metric}`,
        "Set a defined cycle, capacity, and response time",
        "Review fit before each renewal or scope change",
      ],
    },
    {
      title: "Start with clients and warm relationships you already have",
      body: `Before building a large acquisition campaign, review completed projects, active clients, past enquiries, and complementary partners. Look for the recurring version of a problem you have already solved. Send a short note with shared context, one relevant observation, the named offer, and a low-pressure next step. This is more credible than a generic announcement because the recipient can connect the offer to a real need. Record the next action and close the loop respectfully when there is no fit.`,
      points: [
        "Review past work for repeated follow-on needs",
        "Contact the people for whom the offer is genuinely relevant",
        "Lead with context and an observation, not a brochure",
        "Follow up once with useful information, then close the loop",
      ],
    },
    {
      title: "Measure the client journey, not vanity activity",
      body: `Use ${plan.metric} as the primary commercial measure, then add operational signals that explain it: qualified enquiries, package conversion, intake completion, time to first milestone, approval delay, avoidable support, and recurring-plan acceptance. Review a small scorecard monthly. If a metric changes, inspect the underlying clients and decisions before declaring success. Good measurement should help the freelancer decide what to improve next, not create a dashboard no one uses.`,
      points: [
        `Primary commercial measure: ${plan.metric}`,
        "Package-page to paid-client conversion",
        "Time from payment to first useful milestone",
        "Recurring-plan acceptance and retention",
      ],
    },
    {
      title: "Automate administration without automating trust",
      body: `Automate predictable state changes: order confirmation, missing-input reminders, project creation, standard tasks, due-date alerts, and internal handoffs. Keep diagnosis, sensitive communication, exception handling, and material recommendations human. Every automation needs an owner, a visible failure state, and a way to recover. The goal is not maximal automation; it is to protect the specialist's time while preserving a client experience that feels attentive and accountable.`,
      points: [
        "Automate confirmations and predictable reminders",
        "Keep judgment and sensitive messages human",
        "Assign an owner for failures and exceptions",
        "Review whether each automation actually saves verified time",
      ],
    },
    {
      title: "A seven-day implementation plan",
      body: `Day one: interview the current workflow and record the baseline. Day two: define the ${plan.starterOffer}. Day three: write the scope, exclusions, price, and intake. Day four: build the package and niche-aware signup path in Retainr. Day five: prepare the first milestone and quality checklist. Day six: invite a small number of relevant past clients or warm prospects. Day seven: review every question and hesitation, then improve the offer before increasing promotion. This produces a live learning loop instead of another month of planning.`,
      points: [
        "Publish one diagnostic or starter package",
        "Create one buyer-specific intake path",
        "Prepare the first milestone before selling",
        "Improve the package from real buyer questions",
      ],
    },
    {
      title: "Common mistakes that make useful advice hard to apply",
      body: `The most common failure is treating ${topic} as an isolated tactic. Other failures include using a generic buyer, choosing tools before diagnosis, hiding the commercial next step, collecting excessive intake, leaving approvals informal, and calling undefined access a retainer. Correct these by keeping one visible sequence from promise to proof. The buyer should understand what they are purchasing, what happens next, where decisions live, how progress is reviewed, and what continuing value is available.`,
      points: [
        "Do not broaden the buyer to make the market look larger",
        "Do not confuse a list of tools with an operating method",
        "Do not begin work without scope and decision ownership",
        "Do not wait until the relationship ends to explain continuation",
      ],
    },
    {
      title: "Turn this guide into a working client system",
      body: `The durable value of this guide is the operating path it supports. Use Productize to turn the problem into a named offer. Use the niche playbooks to match language and onboarding to the specialist audience. Use Client Onboarding to collect the minimum context required for ${plan.firstMilestone}. Then use Retainr to keep the package, payment, project, files, tasks, support, approvals, and ${plan.recurringOffer} in one branded client journey. The objective is a better client experience and a business that does not have to rebuild its process after every sale.`,
      points: [
        "Productize the first paid decision",
        "Choose the niche page closest to the buyer",
        "Collect only the inputs needed to begin",
        "Make the recurring value visible after the first result",
      ],
    },
  ];
};

const canonicalSources = sourcePaths.map((path) => path.replace(/^\/blog\//, ""));
const aliasSources = [
  ...new Set(
    canonicalSources
      .map(evergreenSlug)
      .filter((slug, index) => slug !== canonicalSources[index] && !canonicalSources.includes(slug))
  ),
];
const previousAliasSources = canonicalSources
  .map(previousEvergreenSlug)
  .filter((slug, index) => slug !== canonicalSources[index] && !canonicalSources.includes(slug));
const allSlugs = [...new Set([...canonicalSources, ...aliasSources, ...previousAliasSources])];

const migratedBlogArticles: BlogArticle[] = allSlugs.map((slug) => {
  const sourceSlug = canonicalSources.includes(slug)
    ? slug
    : canonicalSources.find((item) => evergreenSlug(item) === slug || previousEvergreenSlug(item) === slug) ?? slug;
  const canonicalSlug = evergreenSlug(sourceSlug);
  const title = cleanTitle(sourceSlug);
  const category = categoryFor(sourceSlug);
  const audience = audienceFor(sourceSlug);
  return {
    slug,
    sourceSlug,
    canonicalSlug,
    title,
    description: conciseDescription(
      `A current, practical guide for ${audience}: ${title}. Choose useful tools, deliver proof, and package valuable recurring work.`
    ),
    category,
    audience,
    updatedAt,
    legacy: slug !== canonicalSlug,
    featured: false,
    image: imageFor(category),
    imageAlt: `${title} illustrated with the Retainr client workflow`,
    sections: buildSections(sourceSlug, title, category, audience),
    sources: sourcesFor(sourceSlug, category),
  };
});

export const blogArticles: BlogArticle[] = [
  ...flagshipBlogArticles,
  ...migratedBlogArticles,
];

export const primaryBlogArticles = blogArticles.filter((article) => article.slug === article.canonicalSlug);

export const blogCategories = [...new Set(primaryBlogArticles.map((article) => article.category))];
