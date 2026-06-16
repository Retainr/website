export type Niche = {
  slug: string;
  name: string;
  hero: string;
  subhero: string;
  description: string;
  image?: string;
  offers: string[];
  onboarding: string[];
  benefits?: string[];
  painPoints?: string[];
  recurringExample?: string;
  targetPain?: string;
};

export const niches: Niche[] = [
  {
    slug: "nutritionists",
    name: "Nutritionists & Wellness Coaches",
    hero: "Turn your nutrition expertise into predictable monthly revenue",
    subhero: "Package meal plans, coaching programs, and progress reviews into clear offers. Use Retainr to sell, onboard, deliver, and retain clients through a beautiful branded portal — without chasing payments or drowning in admin.",
    description: "Package meal plans, coaching calls, check-ins, and progress reviews into clear offers clients can buy and follow.",
    image: "/assets/niche-nutritionists.png",
    offers: ["4-Week Meal Strategy Package", "Ongoing Accountability Coaching Retainer", "Body Recomposition Program + Monthly Check-ins", "Wellness Audit + Personalized Plan"],
    onboarding: ["Primary health & wellness goals", "Current diet, allergies & preferences", "Lifestyle & activity level", "Preferred check-in frequency & communication style"],
    benefits: [
      "Clients see exactly what they bought and what happens next",
      "Intake forms tailored to nutrition data (goals, photos, habits)",
      "Automatic payment collection before the first session",
      "Portal keeps food logs, progress photos, and notes in one place",
      "Easily upsell from one-time plan to monthly support retainer"
    ],
    painPoints: [
      "Clients ghost after the first plan or expect constant free advice",
      "Scattered WhatsApp threads, Google Forms, and PayPal links",
      "No clear way to productize ongoing support without overworking",
      "Manual invoicing and chasing renewals every month"
    ],
    recurringExample: "After delivering a 4-week plan, invite clients into a 'Monthly Wellness Tune-Up' retainer ($197–297/mo) that includes one review call, updated plan tweaks, and priority messaging.",
    targetPain: "Feast-or-famine income and beautiful plans that never turn into long-term client relationships."
  },
  {
    slug: "seo-experts",
    name: "SEO Experts & Growth Marketers",
    hero: "Productize your SEO expertise into scalable monthly retainers",
    subhero: "Sell audits, technical fixes, content roadmaps, and ongoing growth retainers with professional onboarding and reporting. Retainr gives your clients a branded home for every recommendation, task, and result — so you can focus on strategy instead of chasing updates.",
    description: "Sell audits, technical fixes, content plans, and monthly SEO retainers with crisp onboarding and reporting workflows.",
    image: "/assets/niche-seo-experts.png",
    offers: ["Comprehensive SEO Audit + 90-Day Roadmap", "Monthly Growth Retainer (keywords, content, technical)", "Content Cluster Implementation Sprint", "Local SEO Domination Package"],
    onboarding: ["Website URL & current CMS/access details", "Primary target keywords & locations", "Main competitors", "Current analytics & goals (traffic, leads, revenue)"],
    benefits: [
      "Clients log in to see exactly which tasks are in progress and what's next",
      "Attach reports, keyword research docs, and content briefs directly to the client record",
      "Magic signup links from proposals or calls land clients in the right package instantly",
      "Recurring retainers bill automatically and show clear value every month",
      "White-label portal makes your agency look enterprise-level from day one"
    ],
    painPoints: [
      "Clients expect constant updates but never log into scattered tools",
      "Reporting lives in PDFs and email threads that get lost",
      "Hard to upsell from one-off audit to ongoing partnership",
      "Admin time kills profitability on smaller monthly retainers"
    ],
    recurringExample: "Convert every audit client into a 'Monthly SEO Growth Partner' retainer that includes priority support, monthly reporting call, and ongoing optimization — all managed inside Retainr.",
    targetPain: "High-value strategy work buried under low-value admin, reporting, and client management chaos."
  },
  {
    slug: "designers",
    name: "Brand & Web Designers",
    hero: "Sell design retainers and creative packages without the chaos",
    subhero: "Turn brand sprints, landing pages, social asset packs, and monthly design support into clear, buyable offers. Clients get a professional portal for briefs, feedback, approvals, and files — so revisions stay organized and you get paid for ongoing creative partnership.",
    description: "Create polished packages for logos, landing pages, social assets, UI audits, and monthly design support.",
    image: "/assets/niche-designers.png",
    offers: ["Brand Sprint (logo, colors, typography, guidelines)", "High-Converting Landing Page Package", "Monthly Creative Desk Retainer", "Social Content System (templates + monthly assets)"],
    onboarding: ["Brand assets & existing guidelines", "Project goals, target audience & key messages", "Must-have deliverables & nice-to-haves", "Approval stakeholders & revision policy"],
    benefits: [
      "Creative briefs live inside the project record — no more lost emails",
      "Clients upload references and approve drafts in one clean interface",
      "Monthly retainers feel natural because the portal already exists",
      "You keep 100% of revenue (no platform transaction fees)",
      "White-label experience reinforces your premium brand"
    ],
    painPoints: [
      "Feedback scattered across Figma comments, email, Slack, and WhatsApp",
      "Scope creep because clients don't see clear boundaries",
      "One-off projects never turn into predictable monthly income",
      "You spend more time project-managing than designing"
    ],
    recurringExample: "After a successful brand sprint, offer a 'Monthly Brand Guardian' retainer for social assets, campaign graphics, and priority design support — delivered through the same portal.",
    targetPain: "Beautiful work undermined by messy client communication and unpredictable cash flow."
  },
  {
    slug: "ai-experts",
    name: "AI Consultants & Automation Specialists",
    hero: "Productize AI audits and implementation into high-value retainers",
    subhero: "Sell workflow audits, custom automation builds, prompt libraries, and ongoing optimization retainers. Retainr lets you deliver complex AI projects through a clean client portal with tasks, files, and progress tracking — then convert happy clients into monthly 'AI Co-Pilot' support.",
    description: "Sell AI workflow reviews, custom automations, prompt systems, and internal enablement without rebuilding delivery every time.",
    image: "/assets/niche-ai-experts.png",
    offers: ["AI Readiness Audit + Opportunity Map", "Custom Automation Implementation Sprint", "Team AI Enablement Workshop + Playbook", "Monthly AI Optimization & Support Retainer"],
    onboarding: ["Current tools & workflows (Zapier, Make, n8n, custom)", "Biggest time sinks or manual processes", "Data sources & team size", "Success metrics they care about most"],
    benefits: [
      "Complex projects stay organized with clear phases and deliverables",
      "Clients can securely share access credentials and files in one place",
      "Post-implementation support retainers bill automatically",
      "You demonstrate professionalism that justifies premium pricing",
      "Niche-specific intake questions qualify leads before the first call"
    ],
    painPoints: [
      "Clients love the idea but struggle to implement and maintain AI systems",
      "Every project feels custom-built from scratch",
      "Support requests arrive via random channels after delivery",
      "Hard to package 'ongoing AI advisory' into a sellable retainer"
    ],
    recurringExample: "After an automation sprint, offer a 'Monthly AI Performance Retainer' that includes monitoring, prompt tuning, new workflow ideas, and priority support — turning one project into predictable MRR.",
    targetPain: "High-ticket AI projects that end after delivery instead of becoming long-term partnerships."
  },
  {
    slug: "ebook-novelists",
    name: "Ebook Authors & Publishing Coaches",
    hero: "Productize your writing expertise into launch and support retainers",
    subhero: "Sell manuscript critiques, editing packages, launch strategy, and ongoing author support. Retainr gives authors a professional space to share drafts, receive feedback, track progress, and continue with monthly accountability or marketing retainers long after the first book.",
    description: "Sell manuscript reviews, serialized releases, editing packages, and launch services through a professional client flow.",
    image: "/assets/niche-ebook-novelists.png",
    offers: ["Manuscript Critique + Action Plan", "Full Editing & Polish Package", "Book Launch Strategy & Execution Sprint", "Monthly Author Accountability & Marketing Retainer"],
    onboarding: ["Genre, word count & current manuscript stage", "Publishing goals (Amazon, wide, direct sales)", "Target reader & key themes", "Timeline & any existing assets (cover, blurb, etc.)"],
    benefits: [
      "Authors upload full manuscripts or chapters securely",
      "Feedback and revision tracking stay attached to the project",
      "Launch packages include clear checklists and timelines clients can follow",
      "Easy to upsell from editing to launch support to ongoing marketing help",
      "Your personal brand stays front-and-center in every client interaction"
    ],
    painPoints: [
      "Authors disappear after the critique or expect unlimited free advice",
      "Drafts, feedback, and deadlines live in messy email threads",
      "Launch support is high-touch but hard to productize and price",
      "One book project rarely turns into recurring revenue"
    ],
    recurringExample: "After a successful launch, offer a 'Monthly Author Growth Retainer' for newsletter support, content repurposing, Amazon optimization, and accountability calls.",
    targetPain: "Passionate authors who need structure and ongoing support but you can't scale 1:1 help without burning out."
  },
  {
    slug: "cartoonists",
    name: "Illustrators, Cartoonists & Visual Creators",
    hero: "Sell illustration packages and creative retainers with clear creative process",
    subhero: "Package character design, comic strips, brand mascots, social assets, and monthly illustration support. Retainr handles briefs, style references, revision rounds, approvals, and final files in one branded space — so clients feel guided and you get paid for ongoing creative partnership.",
    description: "Package character art, comics, mascots, and content illustrations with briefs, drafts, feedback, and delivery tracking.",
    image: "/assets/niche-cartoonists.png",
    offers: ["Character Design & Style Guide Package", "Monthly Illustration Retainer (social/content assets)", "Comic Strip or Storyboard Sprint", "Brand Mascot & Visual Identity Bundle"],
    onboarding: ["Style references & mood boards", "Intended use (social, web, print, merch, etc.)", "Character personality & story context", "Number of revisions included & approval process"],
    benefits: [
      "All reference images, briefs, and feedback live in one project record",
      "Clients can approve stages without losing context or files",
      "Monthly retainers become the obvious next step after a successful first project",
      "You protect your time with clear scope and professional process",
      "White-label portal makes even solo illustrators look like a studio"
    ],
    painPoints: [
      "Endless revision requests because scope was never clear",
      "Files and feedback scattered across Dropbox, email, and DMs",
      "Great one-off projects that never repeat",
      "Clients treat your creative work like an unlimited resource"
    ],
    recurringExample: "After delivering a character or mascot, offer a 'Monthly Visual Content Retainer' for new illustrations, social assets, and priority creative support — delivered on a predictable schedule.",
    targetPain: "Creative work that feels undervalued because the client experience and business model are disorganized."
  },
  {
    slug: "info-products",
    name: "Info Product & Online Course Creators",
    hero: "Sell your digital products and implementation support in one flow",
    subhero: "Turn courses, templates, workshops, audits, and done-with-you implementation into a seamless client journey. Retainr lets buyers purchase, get instant access or onboarding, track progress through your program, ask questions, and upgrade to coaching or done-for-you services — all under your brand.",
    description: "Turn courses, templates, workshops, audits, and implementation offers into a storefront that can scale.",
    image: "/assets/niche-info-products.png",
    offers: ["Template Vault + Implementation Guide", "Private Workshop + Follow-up Support", "Done-With-You Sprint (audit + build)", "Monthly Implementation Coaching Retainer"],
    onboarding: ["Current audience size & niche", "Existing tools/stack", "Biggest goal or bottleneck right now", "Preferred support level (self-serve vs hands-on)"],
    benefits: [
      "Buyers get immediate value and clear next steps after purchase",
      "Program progress, worksheets, and community access can live inside the portal",
      "Easy upsell path from digital product → workshop → 1:1 or group coaching",
      "Support tickets stay tied to the buyer's record and purchase history",
      "You finally have a professional system that matches the quality of your content"
    ],
    painPoints: [
      "Digital products sell but buyers ghost or never implement",
      "Support requests arrive in email/DM and get lost",
      "Hard to convert course buyers into higher-ticket coaching clients",
      "You outgrow Gumroad + Google Drive + email sequences quickly"
    ],
    recurringExample: "Offer every course buyer a 'Monthly Momentum Retainer' or group implementation cohort with live calls, accountability, and direct feedback — turning passive product sales into active high-margin recurring revenue.",
    targetPain: "Great digital products that create customers but not loyal, paying, long-term clients."
  },
  {
    slug: "life-coaches",
    name: "Digital Life & Business Coaches",
    hero: "Productize your coaching into structured programs and retainers",
    subhero: "Sell discovery calls, 6/8/12-week programs, and ongoing accountability retainers with professional onboarding and client portals. Retainr keeps goals, session notes, homework, progress tracking, and support in one branded space — so clients stay engaged and you can scale without losing the personal touch.",
    description: "Help coaches package their expertise into clear programs and recurring support offers that clients can buy and follow with confidence.",
    image: "/assets/niche-life-coaches.png",
    offers: ["Clarity & Goal-Setting Intensive (single or 4-week)", "Signature 8-Week Transformation Program", "Monthly Accountability & Momentum Retainer", "VIP Day + 90-Day Follow-up Support"],
    onboarding: ["Current life/business situation & biggest challenge", "Specific goals for the next 3–12 months", "Previous attempts & what worked/didn't", "Preferred session format & communication rhythm"],
    benefits: [
      "Clients enter with clear expectations and the right context already captured",
      "Homework, reflections, and progress stay organized between sessions",
      "You can see at a glance who needs attention or is at risk of churn",
      "Recurring retainers feel like a natural continuation, not an awkward upsell",
      "Your methodology and personal brand are reinforced at every touchpoint"
    ],
    painPoints: [
      "Clients love the sessions but struggle with accountability between calls",
      "Notes and action items live in random notebooks and email threads",
      "One-off packages rarely convert into long-term monthly clients",
      "You spend too much time on admin instead of high-value coaching"
    ],
    recurringExample: "After a successful program, invite graduates into a 'Monthly Momentum Mastermind' or 1:1 retainer for continued accountability, hot-seat coaching, and implementation support.",
    targetPain: "Coaching that changes lives in the room but doesn't create predictable recurring revenue or long-term client success."
  }
];

export const nicheSlugs = niches.map((n) => n.slug);