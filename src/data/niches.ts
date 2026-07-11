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
    icon: "AI",
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
    icon: "SEO",
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
      "White-label portal makes your specialist brand look enterprise-level",
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
    icon: "DSN",
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
    icon: "CO",
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
    icon: "IP",
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
    icon: "ART",
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
  },

  {
    slug: "nutritionists",
    name: "Nutritionists & Wellness Creators",
    hero: "Sell nutrition programs with structure, accountability, and recurring care",
    subhero: "Package meal plans, check-ins, coaching calls, and progress reviews into a professional client experience.",
    description: "Turn nutrition expertise into clear programmes, subscriptions, and ongoing support plans clients can follow.",
    tagline: "From one-off advice to structured wellness programmes",
    icon: "NUT",
    offers: [
      "Personalized Meal Plan Package",
      "4-Week Nutrition Reset Programme",
      "Monthly Accountability & Review Retainer"
    ],
    onboarding: [
      "Health goals and dietary preferences",
      "Current habits and constraints",
      "Check-in cadence and progress tracking needs"
    ],
    painPoints: [
      "Clients forget recommendations after the first call",
      "Meal plans, notes, and progress updates get scattered",
      "Hard to turn one-time plans into ongoing accountability"
    ],
    benefits: [
      "Clients get a clear programme path from day one",
      "Progress updates and files stay attached to the client record",
      "Recurring check-ins become easy to package and sell",
      "Your expertise feels more premium and structured"
    ],
    recurringExample: "After a meal plan package, offer a monthly accountability retainer with weekly check-ins and plan adjustments."
  },

  {
    slug: "registered-dietitians",
    name: "Registered Dietitians",
    hero: "Turn clinical nutrition services into clear client programmes",
    subhero: "Sell structured care plans, reviews, education sessions, and recurring follow-up support with professional onboarding.",
    description: "Help clients move from one appointment to a guided nutrition plan with organized intake, documents, and follow-up.",
    tagline: "From single appointments to structured client care plans",
    icon: "RD",
    offers: [
      "Initial Nutrition Assessment",
      "Condition-Specific Nutrition Programme",
      "Monthly Follow-Up Care Plan"
    ],
    onboarding: [
      "Client goals and relevant context",
      "Current eating patterns and constraints",
      "Documents or information required before the first session"
    ],
    painPoints: [
      "Clients need structured follow-up but do not know what to buy next",
      "Sensitive notes and documents are hard to manage across tools",
      "Recurring care is valuable but often under-packaged"
    ],
    benefits: [
      "Client intake feels professional and consistent",
      "Follow-up plans are easier to sell and manage",
      "Resources and files stay organized in one workspace",
      "Clients understand the process beyond the first appointment"
    ],
    recurringExample: "After the first assessment, offer a monthly review plan with progress tracking and education resources."
  },

  {
    slug: "dog-walkers",
    name: "Dog Walkers & Pet Care Providers",
    hero: "Turn pet care into recurring service packages clients trust",
    subhero: "Sell walk plans, puppy visits, vacation care, and recurring pet support with organized client and pet profiles.",
    description: "Package local pet services into recurring plans with clear intake, care notes, and communication workflows.",
    tagline: "From ad hoc walks to predictable recurring pet care",
    icon: "PET",
    offers: [
      "Weekly Dog Walking Plan",
      "Puppy Visit Package",
      "Vacation Pet Care Bundle"
    ],
    onboarding: [
      "Pet profile and behaviour notes",
      "Pickup details and access instructions",
      "Emergency contact and care preferences"
    ],
    painPoints: [
      "Care instructions get lost in text messages",
      "Recurring bookings are managed manually",
      "Clients want reassurance and updates after each visit"
    ],
    benefits: [
      "Pet profiles and instructions stay in one client record",
      "Recurring care packages are easier to sell",
      "Clients know where to send updates or requests",
      "Your service feels more reliable and professional"
    ],
    recurringExample: "Convert occasional walk clients into weekly walk plans with fixed billing and simple support requests."
  },

  {
    slug: "ebook-novelists",
    name: "Ebook Novelists & Author Creators",
    hero: "Sell writing, editing, and launch services around your author expertise",
    subhero: "Package manuscript reviews, editing support, reader communities, and launch planning into structured offers.",
    description: "Turn author expertise into service packages and recurring reader or writer support programmes.",
    tagline: "From writing expertise to paid author support offers",
    icon: "BK",
    offers: [
      "Manuscript Review Package",
      "Ebook Launch Planning Sprint",
      "Monthly Author Support Circle"
    ],
    onboarding: [
      "Genre and manuscript stage",
      "Word count and publishing timeline",
      "Support goals and launch constraints"
    ],
    painPoints: [
      "Authors ask for help but need clear service boundaries",
      "Drafts, notes, and feedback versions become messy",
      "Launch support is valuable but often sold too informally"
    ],
    benefits: [
      "Manuscripts and feedback stay organized",
      "Launch support becomes easier to package",
      "Clients understand scope and revision rules",
      "Recurring support can continue after the book launches"
    ],
    recurringExample: "After a manuscript review, offer monthly author coaching or launch accountability."
  },

  {
    slug: "digital-coaches",
    name: "Digital Coaches & Online Mentors",
    hero: "Sell online coaching programmes with a clear client journey",
    subhero: "Package transformation programmes, intensives, and accountability retainers with onboarding and progress tracking.",
    description: "Turn coaching expertise into structured digital programmes that feel premium and easy to follow.",
    tagline: "From loose coaching calls to guided online programmes",
    icon: "DC",
    offers: [
      "Strategy Intensive",
      "6-Week Digital Coaching Programme",
      "Monthly Accountability Retainer"
    ],
    onboarding: [
      "Current situation and desired transformation",
      "Main blockers and previous attempts",
      "Preferred session cadence and support style"
    ],
    painPoints: [
      "Clients lose momentum between calls",
      "Homework and notes are hard to centralize",
      "High-value coaching is often delivered with low-end tooling"
    ],
    benefits: [
      "Clients see the programme structure clearly",
      "Action items and resources stay organized",
      "Recurring support becomes a natural continuation",
      "Your coaching brand feels more premium"
    ],
    recurringExample: "After a 6-week programme, offer a monthly implementation retainer with check-ins and direct support."
  },

  {
    slug: "course-creators",
    name: "Course Creators",
    hero: "Turn course buyers into implementation clients",
    subhero: "Sell templates, courses, workshops, and high-touch implementation support from one branded client portal.",
    description: "Bridge the gap between digital product sales and paid implementation services.",
    tagline: "From passive buyers to supported implementation clients",
    icon: "CRS",
    offers: [
      "Course + Implementation Kit",
      "Private Workshop Package",
      "Monthly Student Support Retainer"
    ],
    onboarding: [
      "Course goal and current progress",
      "Audience or business stage",
      "Support needs and implementation blockers"
    ],
    painPoints: [
      "Students buy but do not implement",
      "Support requests arrive across too many channels",
      "Hard to upsell from course to coaching without a system"
    ],
    benefits: [
      "Buyers get a clear next step after purchase",
      "Support is attached to the product and client record",
      "Implementation retainers are easier to position",
      "You increase lifetime value without more content production"
    ],
    recurringExample: "Offer course graduates a monthly implementation office hours retainer."
  },

  {
    slug: "copywriters",
    name: "Copywriters & Conversion Writers",
    hero: "Turn copy projects into recurring conversion retainers",
    subhero: "Sell audits, launch copy, email sequences, and monthly optimization retainers with clean briefing and approvals.",
    description: "Package writing expertise into clear deliverables and ongoing conversion support.",
    tagline: "From one-off copy jobs to monthly growth retainers",
    icon: "CPY",
    offers: [
      "Landing Page Copy Audit",
      "Launch Copy Sprint",
      "Monthly Conversion Copy Retainer"
    ],
    onboarding: [
      "Offer details and audience",
      "Voice of customer research",
      "Approval stakeholders and launch date"
    ],
    painPoints: [
      "Briefs are incomplete and delay projects",
      "Revisions happen in too many places",
      "Copy improvements are needed monthly but sold as one-off work"
    ],
    benefits: [
      "Briefs and assets are centralized",
      "Approvals stay tied to each deliverable",
      "Monthly testing and optimization is easy to package",
      "Clients see copy as a growth system"
    ],
    recurringExample: "After a launch sprint, sell a monthly optimization retainer for emails, landing pages, and offers."
  },

  {
    slug: "video-editors",
    name: "Video Editors & Content Repurposers",
    hero: "Sell recurring video production workflows without chaos",
    subhero: "Package editing batches, shorts repurposing, thumbnails, and content calendars with organized files and approvals.",
    description: "Turn video editing into predictable monthly production retainers.",
    tagline: "From scattered edits to monthly content systems",
    icon: "VID",
    offers: [
      "Short-Form Editing Batch",
      "YouTube Repurposing Sprint",
      "Monthly Content Production Retainer"
    ],
    onboarding: [
      "Raw footage source and brand assets",
      "Editing style references",
      "Publishing cadence and approval workflow"
    ],
    painPoints: [
      "Files are too large and scattered",
      "Feedback arrives without timestamps or context",
      "Creators need recurring edits but buy inconsistently"
    ],
    benefits: [
      "Files, briefs, and approvals stay organized",
      "Monthly packages create predictable production rhythm",
      "Clients know where to request revisions",
      "Your workflow scales without more admin"
    ],
    recurringExample: "Convert a batch edit client into a monthly content production retainer."
  },

  {
    slug: "web-designers",
    name: "Web Designers & Care Plan Providers",
    hero: "Turn web design projects into monthly care plans",
    subhero: "Sell landing pages, redesigns, maintenance plans, and conversion support with a branded client portal.",
    description: "Package website expertise into clear projects and ongoing client care retainers.",
    tagline: "From one-off websites to recurring care plans",
    icon: "WEB",
    offers: [
      "Landing Page Sprint",
      "Website Redesign Package",
      "Monthly Website Care Plan"
    ],
    onboarding: [
      "Website goals and current URL",
      "Brand assets and content readiness",
      "Maintenance and support needs"
    ],
    painPoints: [
      "Clients disappear after launch until something breaks",
      "Requests arrive through random channels",
      "Maintenance value is not packaged clearly"
    ],
    benefits: [
      "Launch projects flow naturally into care plans",
      "Support tickets keep maintenance organized",
      "Clients see ongoing value after the site goes live",
      "Recurring billing stabilizes revenue"
    ],
    recurringExample: "After launch, offer a monthly care plan for updates, monitoring, and conversion improvements."
  },

  {
    slug: "crypto-experts",
    name: "Crypto Experts & Web3 Educators",
    hero: "Sell crypto education and advisory support with clear boundaries",
    subhero: "Package education, portfolio reviews, community sessions, and Web3 advisory support into structured offers with professional onboarding.",
    description: "Turn crypto knowledge into responsible education products, advisory retainers, and community support without scattered DMs.",
    tagline: "From informal crypto advice to structured education retainers",
    icon: "WEB3",
    offers: [
      "Crypto Education Starter Session",
      "Web3 Project Review Sprint",
      "Monthly Research & Education Retainer"
    ],
    onboarding: [
      "Knowledge level and learning goals",
      "Risk tolerance and topics of interest",
      "Disclaimer acknowledgement and support boundaries"
    ],
    painPoints: [
      "Audience questions arrive across DMs, Discord, and email",
      "Education needs strong boundaries and disclaimers",
      "Market changes make recurring updates more valuable than one-off calls"
    ],
    benefits: [
      "Education services are scoped clearly before payment",
      "Client expectations and disclaimers are captured upfront",
      "Recurring research updates become easier to package",
      "Support stays professional instead of living in private messages"
    ],
    recurringExample: "After a starter session, offer a monthly education retainer with research summaries, office hours, and structured Q&A."
  },

  {
    slug: "fitness-coaches",
    name: "Fitness Coaches & Movement Specialists",
    hero: "Turn fitness expertise into recurring client programmes",
    subhero: "Sell training plans, form reviews, habit coaching, and monthly accountability through a structured client portal.",
    description: "Package training expertise into repeatable programmes that clients can follow and renew.",
    tagline: "From workout plans to recurring accountability",
    icon: "FIT",
    offers: [
      "Training Plan Setup",
      "4-Week Strength Programme",
      "Monthly Accountability Coaching"
    ],
    onboarding: [
      "Fitness level and constraints",
      "Equipment access and schedule",
      "Progress tracking preferences"
    ],
    painPoints: [
      "Clients need ongoing accountability after receiving a plan",
      "Progress updates are hard to manage through DMs",
      "Plans often become one-time transactions instead of programmes"
    ],
    benefits: [
      "Client goals and updates stay organized",
      "Recurring accountability is easy to sell",
      "Support requests do not disappear in social messages",
      "Your coaching experience feels premium and structured"
    ],
    recurringExample: "After a setup plan, offer monthly check-ins, plan adjustments, and form review support."
  },

  {
    slug: "community-managers",
    name: "Community Managers & Membership Operators",
    hero: "Sell community operations as a recurring service",
    subhero: "Package moderation, onboarding, content calendars, and member engagement systems into monthly retainers.",
    description: "Turn community expertise into structured recurring support for creators, founders, and education brands.",
    tagline: "From reactive moderation to managed community growth",
    icon: "COM",
    offers: [
      "Community Health Audit",
      "Member Onboarding Setup",
      "Monthly Community Operations Retainer"
    ],
    onboarding: [
      "Community platform and member count",
      "Engagement goals and moderation rules",
      "Content cadence and escalation process"
    ],
    painPoints: [
      "Community work is ongoing but often sold as scattered admin",
      "Moderation rules and escalation paths are unclear",
      "Creators need engagement support but do not know what to delegate"
    ],
    benefits: [
      "Monthly community operations become easier to scope",
      "Member feedback and support requests stay organized",
      "Rules, reports, and engagement plans stay attached to the client",
      "Retainers feel natural because community work repeats every week"
    ],
    recurringExample: "After a community audit, offer a monthly operations retainer covering moderation, onboarding, and engagement reporting."
  },

  {
    slug: "virtual-assistants",
    name: "Virtual Assistants & Online Operators",
    hero: "Turn admin support into clear monthly operations retainers",
    subhero: "Sell inbox management, scheduling, CRM cleanup, and recurring operations support with structured onboarding.",
    description: "Package virtual assistant services into recurring operations plans with clean scopes and professional client visibility.",
    tagline: "From hourly tasks to recurring operations retainers",
    icon: "OPS",
    offers: [
      "Operations Cleanup Sprint",
      "Inbox & Calendar Management Plan",
      "Monthly Founder Support Retainer"
    ],
    onboarding: [
      "Tools and access required",
      "Priority workflows and communication rules",
      "Approval limits and escalation process"
    ],
    painPoints: [
      "Small tasks multiply without clear scope",
      "Clients send requests through too many channels",
      "Hourly work is harder to stabilize than monthly retainers"
    ],
    benefits: [
      "Requests and tasks stay in one workflow",
      "Retainer scope is visible to both sides",
      "Client access and rules are collected upfront",
      "You can manage multiple clients with less context switching"
    ],
    recurringExample: "After a cleanup sprint, sell a monthly operations retainer for inbox, scheduling, and workflow support."
  },

  {
    slug: "notion-consultants",
    name: "Notion Consultants & Systems Builders",
    hero: "Sell workspace builds and recurring systems support",
    subhero: "Package audits, dashboard builds, documentation systems, and monthly optimization retainers.",
    description: "Turn systems expertise into productized builds and ongoing support plans for teams and creators.",
    tagline: "From one-off workspaces to managed operating systems",
    icon: "SYS",
    offers: [
      "Workspace Audit",
      "Creator OS Build Sprint",
      "Monthly Systems Optimization Retainer"
    ],
    onboarding: [
      "Current workspace structure",
      "Team workflows and permissions",
      "Priority dashboards and automations"
    ],
    painPoints: [
      "Clients buy a workspace but need support as work changes",
      "Requirements are hard to gather without a structured intake",
      "One-off builds rarely capture long-term optimization value"
    ],
    benefits: [
      "Build requirements are clear before work starts",
      "Documentation and support live with the client record",
      "Optimization retainers are easier to explain",
      "Clients understand the system as a process, not a template"
    ],
    recurringExample: "After a workspace build, offer monthly optimization, documentation updates, and team support."
  },

  {
    slug: "podcast-producers",
    name: "Podcast Producers & Audio Editors",
    hero: "Turn podcast production into predictable monthly retainers",
    subhero: "Sell editing batches, show notes, publishing workflows, and monthly production support with organized files and approvals.",
    description: "Package podcast production into repeatable client workflows that renew every month.",
    tagline: "From episode-by-episode editing to monthly production systems",
    icon: "POD",
    offers: [
      "Podcast Launch Setup",
      "Monthly Episode Production Plan",
      "Repurposing & Show Notes Retainer"
    ],
    onboarding: [
      "Show format and publishing cadence",
      "Audio files, assets, and access",
      "Approval workflow and turnaround expectations"
    ],
    painPoints: [
      "Audio files and feedback get scattered",
      "Episode work repeats but is sold inconsistently",
      "Clients need publishing support beyond editing"
    ],
    benefits: [
      "Production cadence is clear for every client",
      "Files, notes, and approvals stay organized",
      "Monthly plans fit naturally with weekly or biweekly shows",
      "You can upsell repurposing and publishing support"
    ],
    recurringExample: "After a launch setup, offer a monthly production retainer for editing, show notes, publishing, and repurposing."
  },

  {
    slug: "ugc-creators",
    name: "UGC Creators & Brand Content Specialists",
    hero: "Sell brand content packages with cleaner briefs and approvals",
    subhero: "Package UGC videos, creative testing, product demos, and monthly content retainers with professional client onboarding.",
    description: "Turn brand content work into repeatable packages with clear usage, briefs, approvals, and recurring production.",
    tagline: "From one-off UGC deals to monthly brand content retainers",
    icon: "UGC",
    offers: [
      "UGC Video Batch",
      "Creative Testing Sprint",
      "Monthly Brand Content Retainer"
    ],
    onboarding: [
      "Product details and campaign goal",
      "Usage rights and platform requirements",
      "Creative references and approval rules"
    ],
    painPoints: [
      "Briefs are incomplete or arrive too late",
      "Usage rights and revisions need clearer boundaries",
      "Brands need constant new content but buy one batch at a time"
    ],
    benefits: [
      "Briefs and assets are captured before production",
      "Approvals and revisions stay tied to each deliverable",
      "Recurring content retainers are easier to position",
      "Client relationships feel more professional"
    ],
    recurringExample: "After a video batch, offer a monthly content testing retainer with new hooks, demos, and creative iterations."
  },

  {
    slug: "marketing-consultants",
    name: "Marketing Consultants & Funnel Strategists",
    hero: "Turn strategy calls into implementation retainers",
    subhero: "Sell audits, funnel maps, launch planning, and monthly growth support with structured client workflows.",
    description: "Package marketing expertise into strategy products and recurring implementation support.",
    tagline: "From strategy decks to monthly implementation support",
    icon: "MKT",
    offers: [
      "Funnel Audit",
      "Launch Strategy Sprint",
      "Monthly Growth Advisory Retainer"
    ],
    onboarding: [
      "Current funnel and offer",
      "Traffic sources and conversion metrics",
      "Launch timeline and implementation capacity"
    ],
    painPoints: [
      "Strategy work dies when implementation is unclear",
      "Clients need ongoing guidance after the first plan",
      "Reports and next actions are scattered across tools"
    ],
    benefits: [
      "Strategy and implementation stay connected",
      "Monthly advisory is easier to sell after an audit",
      "Client actions, files, and reports remain in one portal",
      "Revenue impact is easier to show over time"
    ],
    recurringExample: "After a funnel audit, offer monthly growth advisory with reporting, planning, and implementation support."
  }
];

export const nicheSlugs = niches.map((n) => n.slug);

export const featuredNicheSlugs = [
  "ai-experts",
  "seo-experts",
  "nutritionists",
  "designers",
  "digital-coaches",
  "course-creators",
];

export const featuredNiches = featuredNicheSlugs
  .map((slug) => niches.find((niche) => niche.slug === slug))
  .filter((niche): niche is Niche => Boolean(niche));
