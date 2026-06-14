export type Niche = {
  slug: string;
  name: string;
  hero: string;
  description: string;
  offers: string[];
  onboarding: string[];
};

export const niches: Niche[] = [
  {
    slug: "nutritionists",
    name: "Nutritionists",
    hero: "Sell nutrition programs with a client portal that feels personal",
    description:
      "Package meal plans, coaching calls, check-ins, and progress reviews into clear offers clients can buy and follow.",
    offers: ["Meal plan subscriptions", "Body recomposition coaching", "Wellness audits"],
    onboarding: ["Health goals", "Diet preferences", "Progress photos", "Weekly check-in cadence"],
  },
  {
    slug: "seo-experts",
    name: "SEO Experts",
    hero: "Turn SEO retainers into productized growth packages",
    description:
      "Sell audits, technical fixes, content plans, and monthly SEO retainers with crisp onboarding and reporting workflows.",
    offers: ["SEO audit", "Content sprint", "Monthly growth retainer"],
    onboarding: ["Website URL", "CMS access", "Target keywords", "Competitors"],
  },
  {
    slug: "dog-walkers",
    name: "Dog Walkers",
    hero: "Sell recurring pet care services without messy scheduling admin",
    description:
      "Package walks, check-ins, updates, and recurring care plans with client records and payment collection in one place.",
    offers: ["Weekly walk plan", "Puppy visit package", "Vacation care bundle"],
    onboarding: ["Pet profile", "Care instructions", "Pickup details", "Emergency contact"],
  },
  {
    slug: "ebook-novelists",
    name: "Ebook Novelists",
    hero: "Productize writing, editing, and reader community offers",
    description:
      "Sell manuscript reviews, serialized releases, editing packages, and launch services through a professional client flow.",
    offers: ["Manuscript critique", "Launch copy package", "Serialized reader club"],
    onboarding: ["Genre", "Manuscript stage", "Word count", "Publishing timeline"],
  },
  {
    slug: "cartoonists",
    name: "Cartoonists",
    hero: "Sell custom illustration packages with clear creative approvals",
    description:
      "Package character art, comics, mascots, and content illustrations with briefs, drafts, feedback, and delivery tracking.",
    offers: ["Character design", "Comic strip pack", "Brand mascot bundle"],
    onboarding: ["Style reference", "Use case", "Character notes", "Revision needs"],
  },
  {
    slug: "info-products",
    name: "Info Product Creators",
    hero: "Sell digital products, coaching, and service upgrades in one branded flow",
    description:
      "Turn courses, templates, workshops, audits, and implementation offers into a storefront that can scale.",
    offers: ["Template vault", "Implementation sprint", "Private workshop"],
    onboarding: ["Audience", "Current stack", "Goal", "Support level"],
  },
  {
    slug: "designers",
    name: "Designers",
    hero: "Sell design retainers, brand kits, and fixed-scope creative packages",
    description:
      "Create polished packages for logos, landing pages, social assets, UI audits, and monthly design support.",
    offers: ["Brand sprint", "Landing page design", "Monthly design desk"],
    onboarding: ["Brand assets", "Creative brief", "Target audience", "Deadline"],
  },
  {
    slug: "ai-experts",
    name: "AI Experts",
    hero: "Productize AI audits, automations, and implementation sprints",
    description:
      "Sell AI workflow reviews, custom automations, prompt systems, and internal enablement without rebuilding delivery every time.",
    offers: ["AI workflow audit", "Automation sprint", "Team enablement package"],
    onboarding: ["Business process", "Tool stack", "Data sources", "Success metric"],
  },
  {
    slug: "crypto-experts",
    name: "Crypto Experts",
    hero: "Sell crypto education, research, and advisory packages professionally",
    description:
      "Package research briefings, education sessions, community support, and implementation guidance with clear client boundaries.",
    offers: ["Research briefing", "Wallet safety session", "Community advisory retainer"],
    onboarding: ["Experience level", "Research interests", "Risk profile", "Session goals"],
  },
];
