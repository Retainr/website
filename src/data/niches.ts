export type Niche = {
  slug: string;
  name: string;
  hero: string;
  subhero: string;
  description: string;
  tagline: string;
  icon: string;
  offers: string[];
  onboarding: string[];
  benefits?: string[];
  painPoints?: string[];
  recurringExample?: string;
};

export const niches: Niche[] = [
  {
    slug: "ai-experts",
    name: "AI Consultants & Automation Specialists",
    hero: "Turn AI expertise into predictable monthly retainers",
    subhero: "Sell audits, implementation sprints, and ongoing optimization retainers with a professional client portal that makes you look enterprise-ready.",
    description: "Package AI audits, automations, and implementation work into clear, recurring offers that clients understand and pay for monthly.",
    tagline: "From one-off AI projects to predictable monthly revenue",
    icon: "🤖",
    offers: [
      "AI Readiness Audit + Opportunity Map",
      "Custom Automation Implementation Sprint",
      "Monthly AI Optimization & Support Retainer"
    ],
    onboarding: [
      "Current tools and workflows",
      "Biggest manual or repetitive processes",
      "Success metrics they care about"
    ],
    painPoints: [
      "Clients love the idea of AI but struggle to implement and maintain it",
      "Every project feels completely custom and time-consuming to scope",
      "Support requests come through random channels after delivery"
    ],
    benefits: [
      "Complex projects stay organized with clear phases and visibility",
      "Clients securely share access and files in one place",
      "Post-implementation support retainers bill automatically",
      "You look professional and premium from day one"
    ],
    recurringExample: "After delivering an automation sprint, offer a 'Monthly AI Performance Retainer' that includes monitoring, prompt tuning, and priority support."
  },

  {
    slug: "seo-experts",
    name: "SEO Experts & Growth Marketers",
    hero: "Turn SEO work into scalable monthly growth retainers",
    subhero: "Sell audits, content roadmaps, and ongoing growth retainers with professional reporting and clean client communication.",
    description: "Package SEO audits, keyword strategy, and monthly growth work into clear recurring packages clients can understand and commit to.",
    tagline: "From one-off audits to ongoing monthly growth partnerships",
    icon: "📈",
    offers: [
      "Comprehensive SEO Audit + 90-Day Roadmap",
      "Monthly SEO Growth Retainer",
      "Content Cluster Implementation Sprint"
    ],
    onboarding: [
      "Website URL and CMS access",
      "Target keywords and current rankings",
      "Business goals and KPIs"
    ],
    painPoints: [
      "Clients expect constant updates but never log into scattered tools",
      "Reporting lives in PDFs and email threads that get lost",
      "Hard to upsell from a one-off audit into a long-term relationship"
    ],
    benefits: [
      "Clients can see exactly which tasks are in progress at any time",
      "Reports and keyword research stay attached to the client record",
      "White-label portal makes your agency look enterprise-level",
      "Easier to sell ongoing work instead of chasing new projects"
    ],
    recurringExample: "Convert every audit client into a 'Monthly SEO Growth Partner' retainer with priority support and monthly reporting."
  },

  {
    slug: "designers",
    name: "Brand & Web Designers",
    hero: "Sell design retainers without the chaos of scattered feedback",
    subhero: "Turn brand sprints, landing pages, and monthly creative support into clear offers with organized feedback and approvals.",
    description: "Package brand sprints, landing pages, and ongoing creative work into recurring offers that feel professional and easy to manage.",
    tagline: "From project chaos to clean monthly creative retainers",
    icon: "🎨",
    offers: [
      "Brand Sprint + Guidelines",
      "High-Converting Landing Page Package",
      "Monthly Creative Desk Retainer"
    ],
    onboarding: [
      "Brand assets and existing guidelines",
      "Project goals and target audience",
      "Key stakeholders for approvals"
    ],
    painPoints: [
      "Feedback is scattered across Figma, email, Slack, and WhatsApp",
      "Scope creep happens because boundaries were never clearly defined",
      "Great one-off projects rarely turn into predictable monthly income"
    ],
    benefits: [
      "Creative briefs and references live inside the project record",
      "Clients can upload assets and approve drafts in one clean interface",
      "Monthly retainers feel natural because the system already exists",
      "You protect your time with clear scope and approval workflows"
    ],
    recurringExample: "After a successful brand sprint, offer a 'Monthly Brand Guardian' retainer for social assets and priority design support."
  },

  {
    slug: "life-coaches",
    name: "Digital Life & Business Coaches",
    hero: "Turn coaching into structured programs and recurring retainers",
    subhero: "Sell discovery calls, transformation programs, and ongoing accountability retainers with professional onboarding and progress tracking.",
    description: "Package coaching programs and accountability work into clear recurring offers that improve client results and your revenue consistency.",
    tagline: "From occasional sessions to predictable monthly coaching retainers",
    icon: "🧠",
    offers: [
      "Clarity Intensive Session",
      "8-Week Transformation Program",
      "Monthly Accountability & Momentum Retainer"
    ],
    onboarding: [
      "Current situation and biggest challenge",
      "Specific 3–12 month goals",
      "Preferred session format and communication style"
    ],
    painPoints: [
      "Clients love the sessions but struggle with accountability between calls",
      "Notes and action items live in random notebooks and email threads",
      "One-off packages rarely convert into long-term monthly clients"
    ],
    benefits: [
      "Clients enter with clear expectations and the right context",
      "Homework, reflections, and progress stay organized between sessions",
      "Recurring retainers feel like a natural continuation of the work",
      "You can scale without burning out on constant new client acquisition"
    ],
    recurringExample: "After a successful program, invite graduates into a 'Monthly Momentum Mastermind' or 1:1 accountability retainer."
  },

  {
    slug: "info-products",
    name: "Info Product & Online Course Creators",
    hero: "Turn digital products into implementation support and recurring revenue",
    subhero: "Sell courses, templates, and workshops with clear upsell paths into ongoing coaching and support retainers.",
    description: "Package your digital products and implementation support into a seamless client journey that increases both sales and retention.",
    tagline: "From course buyers to ongoing implementation coaching clients",
    icon: "📚",
    offers: [
      "Template Vault + Implementation Guide",
      "Private Workshop + Support Package",
      "Monthly Implementation Coaching Retainer"
    ],
    onboarding: [
      "Audience size and niche",
      "Current tools and tech stack",
      "Biggest goal or current bottleneck"
    ],
    painPoints: [
      "Digital products sell but many buyers ghost or never implement",
      "Support requests arrive in email and DMs and get lost",
      "Hard to convert course buyers into higher-ticket ongoing coaching"
    ],
    benefits: [
      "Buyers get immediate value and clear next steps after purchase",
      "Easy upsell path from digital product to high-ticket coaching",
      "Support tickets stay tied to the buyer’s record and purchase history",
      "You create multiple revenue streams from the same audience"
    ],
    recurringExample: "Offer every course buyer a 'Monthly Momentum Retainer' with live calls and direct feedback."
  },

  {
    slug: "cartoonists",
    name: "Illustrators, Cartoonists & Visual Creators",
    hero: "Turn illustration work into clear packages and recurring creative retainers",
    subhero: "Package character design, comics, and ongoing visual content support with organized briefs and approval workflows.",
    description: "Turn one-off illustration projects into recurring monthly creative retainers with clear scope and professional delivery.",
    tagline: "From scattered illustration gigs to predictable monthly creative work",
    icon: "🖼️",
    offers: [
      "Character Design & Style Guide Package",
      "Monthly Illustration Retainer",
      "Comic Strip or Storyboard Sprint"
    ],
    onboarding: [
      "Style references and mood boards",
      "Intended use and licensing needs",
      "Revision policy and approval process"
    ],
    painPoints: [
      "Endless revision requests because scope was never clearly defined",
      "Files and feedback scattered across Dropbox, email, and DMs",
      "Great one-off projects that never repeat or turn into ongoing work"
    ],
    benefits: [
      "All reference images, briefs, and feedback live in one project record",
      "Clients can approve stages without losing context or history",
      "Monthly retainers become the obvious next step after a successful project",
      "You protect your creative time with clear boundaries"
    ],
    recurringExample: "After delivering a character or mascot, offer a 'Monthly Visual Content Retainer' for new illustrations and priority creative support."
  }
];

export const nicheSlugs = niches.map((n) => n.slug);