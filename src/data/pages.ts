export type MarketingPage = {
  slug: string;
  title: string;
  description: string;
  eyebrow?: string;
  hero: string;
  subhero: string;
  image?: string;
  sections: { title: string; body: string; points?: string[] }[];
  faqs?: { question: string; answer: string }[];
};

export const pages: MarketingPage[] = [
  {
    slug: "productize",
    title: "Productize Freelance Services in Minutes",
    description:
      "Sell productized services in minutes with all-in-one client management software built for freelancers and agencies.",
    eyebrow: "Productize Web Services",
    hero: "Turn Your Skills Into Income",
    subhero:
      "Build a scalable business by packaging your services, publishing your offers, taking payment, and delivering work from one branded client portal.",
    image: "/assets/packages.png",
    sections: [
      {
        title: "Client management that turns services into products",
        body:
          "Retainr turns a messy service workflow into a clear product experience. Clients can choose a package, pay, upload details, and track progress without email chaos.",
        points: ["Productized offers", "Custom packages", "Branded checkout", "Client-ready delivery"],
      },
      {
        title: "Take your brand to the next level",
        body:
          "Replace generic invoices and scattered folders with an experience that looks like your agency owns every step.",
        points: ["White-label portal", "Custom domain", "Unbranded emails", "Professional client dashboard"],
      },
      {
        title: "Invoices & payments made easy",
        body:
          "Collect payment before work starts, connect orders to projects, and keep clients aligned on what they bought.",
      },
    ],
  },
  {
    slug: "automation-for-agencies-freelancers",
    title: "Automation for Agencies & Freelancers",
    description:
      "Automate your freelance business with client workflows, webhooks, integrations, and AI-ready agency operations.",
    eyebrow: "Agency Automation",
    hero: "Automate Your Freelance Business",
    subhero:
      "Scale without effort by connecting client onboarding, order intake, delivery tasks, support, analytics, and external tools.",
    image: "/assets/revenue-graph.png",
    sections: [
      {
        title: "Boost your work efficiency",
        body:
          "Turn repeated admin into repeatable workflows. Retainr helps every lead, order, and support request move to the right place automatically.",
        points: ["Zapier workflows", "Webhooks", "API-ready operations", "Order-to-project automation"],
      },
      {
        title: "Connect your agency with web and AI integrations",
        body:
          "Use Retainr as the client layer for your stack, then connect forms, analytics, automations, AI agents, and fulfillment tools around it.",
      },
      {
        title: "Deliver a professional experience",
        body:
          "Automation works best when clients feel guided. Retainr keeps communication, files, requests, and delivery visible from one branded space.",
      },
    ],
  },
  {
    slug: "alternatives-compare-agency-client-management-software",
    title: "Freelance Software Comparison",
    description:
      "Compare agency and freelance client management software options including Plutio, ManyRequests, AgencyHandy, Productive, and Retainr.",
    eyebrow: "Compare",
    hero: "What client management software should a small agency choose?",
    subhero:
      "The best agency platform is the one that lets you sell services, manage clients, deliver work, and keep your brand visible without stitching together too many tools.",
    image: "/assets/dashboard-hero.png",
    sections: [
      {
        title: "What to look for in agency management software",
        body:
          "Most tools solve one slice of agency operations. Retainr is built around the complete client lifecycle: selling, onboarding, payment, project delivery, support, and repeat revenue.",
        points: ["Accessibility", "Integration", "Communication", "Customization", "Scalability"],
      },
      {
        title: "Plutio, ManyRequests, AgencyHandy, and Productive",
        body:
          "Each competitor has strengths, but many require tradeoffs across white-label selling, client portals, support, team work, and productized services.",
      },
      {
        title: "Why Retainr stands apart",
        body:
          "Retainr focuses on turning your expertise into a branded storefront and operating system, so small teams can look bigger and deliver with less manual coordination.",
      },
    ],
  },
  {
    slug: "blog",
    title: "Retainr Blog - Learn How to Launch Your Agency",
    description:
      "Insights, tips, and trends for freelancers, digital creators, and agencies building productized service businesses.",
    eyebrow: "Blog",
    hero: "Insights, Tips, and Trends for Freelancers and Agencies",
    subhero:
      "Explore practical ways to niche down, package services, improve client experience, and turn creative expertise into recurring income.",
    sections: [
      {
        title: "Popular reads",
        body:
          "Retainr's blog index keeps the original editorial themes while making the content easier to scan.",
        points: [
          "10 Reasons How Niche Targeting Can Benefit Your Small Agency",
          "15 Examples of Small Agencies Excelling in Niche Targeting",
          "Top 5 Industry-Specific Services Every Freelancer Needs",
          "6 Key Steps to Penetrate Niche Markets Successfully",
          "7 Inspiring Examples of Freelancers with Exceptional Industry-Focused Brands",
          "How to Develop a Unique Selling Proposition for Your Small Agency",
          "9 Steps to Choose the Right Industry Specialization as a Freelancer",
          "How Industry-Specific Services Impact Freelancers' Success",
        ],
      },
    ],
  },
  {
    slug: "brand-assets",
    title: "Brand Assets",
    description:
      "Retainr brand assets, logo guidance, color palette, and typography.",
    eyebrow: "Styleguide",
    hero: "Retainr Styleguide",
    subhero:
      "A cleaner expression of the current Retainr brand: bright orange, signal yellow, white space, midnight text, ice blue panels, and growth green accents.",
    image: "/assets/retainr-logo.svg",
    sections: [
      {
        title: "Color palette",
        body:
          "Retainr uses a specific brand colors to be followed when citing the brand. The color palette reflects the company's core DNA and applies them with readability in mind.",
        points: ["#FF4D18", "#FFD540", "#FFFFFF", "#1d2130", "#EDF8FD", "#B7CD4B"],
      },
      {
        title: "Logos & icons",
        body:
          "Use the Retainr logo on white or ice blue backgrounds. Keep generous clear space and avoid placing it on low-contrast color blocks.",
      },
      {
        title: "Typography",
        body:
          "Inter is used for a crisp SaaS interface feel with strong headings, compact labels, and readable body copy.",
      },
    ],
  },
  {
    slug: "about-retainr",
    title: "About Retainr",
    description:
      "Learn why Retainr was built as the simplest way to turn freelance services into profitable products.",
    eyebrow: "About",
    hero: "About Retainr",
    subhero:
      "Retainr exists to help freelancers, creators, and small agencies replace messy client operations with a branded system that sells and delivers services.",
    image: "/assets/team-collab.png",
    sections: [
      {
        title: "Our story",
        body:
          "Freelancers are expected to sell, onboard, invoice, communicate, deliver, support, and retain clients while switching between too many disconnected tools. Retainr brings that work into one place.",
      },
      {
        title: "Our mission",
        body:
          "Make it simple for independent experts to turn what they know into packaged services, recurring revenue, and professional client experiences.",
      },
      {
        title: "Our values",
        body:
          "Brand ownership, practical automation, client clarity, fast delivery, and creator independence guide the product.",
        points: ["Own your brand", "Sell with clarity", "Deliver faster", "Automate repeat work"],
      },
    ],
  },
  {
    slug: "manifesto-retainr",
    title: "Manifesto Retainr",
    description:
      "Why Retainr was built as a better freelance platform for productized services and branded client delivery.",
    eyebrow: "Manifesto",
    hero: "Turn Your Freelance Services Into Profit",
    subhero:
      "The future belongs to experts who package their knowledge, sell clearly, and deliver through systems that protect their time.",
    sections: [
      {
        title: "The big idea",
        body:
          "Freelancers should not need an enterprise stack to look professional. They need one practical system that helps them sell and deliver with confidence.",
      },
      {
        title: "The promise",
        body:
          "Retainr helps creators and agencies productize expertise, keep their brand front and center, and create a client experience that can scale.",
      },
      {
        title: "Why ditch the status quo",
        body:
          "Spreadsheets, email threads, payment links, file folders, chat tools, and task boards all have a place, but they fail clients when they are disconnected.",
      },
    ],
  },
  {
    slug: "privacy-policy",
    title: "Retainr - Privacy Policy",
    description:
      "Privacy policy for Retainr, covering personal information, client data, security, and contact options.",
    eyebrow: "Privacy",
    hero: "Privacy Policy",
    subhero:
      "Retainr is designed for client work, so privacy, ownership, and data protection must be clear from the start.",
    sections: [
      {
        title: "Information we collect",
        body:
          "Retainr may collect account details, contact information, billing information, usage data, and service data needed to provide the platform.",
      },
      {
        title: "How we use information",
        body:
          "Information is used to provide the service, process payments, support users, improve product performance, prevent abuse, and meet legal obligations.",
      },
      {
        title: "Data security",
        body:
          "Retainr applies access controls, encryption practices, operational monitoring, and reasonable safeguards to protect customer and client information.",
      },
      {
        title: "Your choices",
        body:
          "You can request access, updates, deletion, or export of personal information subject to account, security, and legal requirements.",
      },
    ],
  },
  {
    slug: "client-onboarding",
    title: "Client Onboarding & Client Management Software for Agencies",
    description:
      "Client onboarding and client management software for freelancers and agency owners.",
    eyebrow: "Client Onboarding",
    hero: "Transform your client relationships from day one",
    subhero:
      "Create a professional first impression with signup flows, intake, payment, files, tasks, and project visibility in one branded place.",
    image: "/assets/onboarding.png",
    sections: [
      {
        title: "Onboard clients efficiently",
        body:
          "Stop rebuilding intake flows manually. Retainr lets each service start with the right context, request, payment, and next step.",
        points: ["Magic signup links", "Service-specific intake", "Branded welcome", "Project kickoff"],
      },
      {
        title: "Make the first day feel organized",
        body:
          "Clients see where to go, what to upload, what they bought, and how progress will be managed.",
      },
    ],
  },
  {
    slug: "support-ticketing-solution-for-freelancers-and-web-agencies",
    title: "Support Ticketing Solution for Freelancers and Web Agencies",
    description:
      "A support ticketing solution that keeps freelancer and agency communication in one place.",
    eyebrow: "Support Ticketing",
    hero: "Keep all your communication in one place",
    subhero:
      "Replace scattered support emails with branded tickets tied to clients, orders, tasks, and delivery history.",
    image: "/assets/support-mockup.svg",
    sections: [
      {
        title: "Support without confusion",
        body:
          "Clients can raise requests from the portal, and your team can prioritize, respond, and keep the conversation attached to the right account.",
        points: ["Client tickets", "Team ownership", "File context", "Progress visibility"],
      },
      {
        title: "Better retention through clarity",
        body:
          "When every request has a place, clients feel heard and teams waste less time searching for the latest update.",
      },
    ],
  },
  {
    slug: "whilte-label-agency-management-software",
    title: "White Label Agency Management Software",
    description:
      "White-label agency management software for freelancers and agencies with branded portals, custom domains, and client delivery.",
    eyebrow: "White Label",
    hero: "Your Brand. Your Products.",
    subhero:
      "Sell everything under your own logo, email, domain, client portal, service links, and branded app experience.",
    image: "/assets/client-portal.svg",
    sections: [
      {
        title: "Sell under your own brand",
        body:
          "Retainr keeps your agency at the center. Clients buy from you, enter your portal, and experience delivery through your identity.",
        points: ["Custom domain", "Logo and colors", "Unbranded emails", "No Powered By badge"],
      },
      {
        title: "Professional from the first click",
        body:
          "White-label software helps small teams present a mature operating system without building one from scratch.",
      },
    ],
  },
  {
    slug: "client-portal-client-management-software",
    title: "Client Portal & Client Management Software",
    description:
      "A branded client portal and client management software for selling, onboarding, and delivering freelance services.",
    eyebrow: "Client Portal",
    hero: "Make Your Client Experience Professional",
    subhero:
      "Give clients one place to buy, pay, upload details, track work, request support, and stay aligned with your team.",
    image: "/assets/client-portal.svg",
    sections: [
      {
        title: "A single home for every client",
        body:
          "Retainr centralizes client data, service purchases, tickets, tasks, approvals, and files into a portal your clients can understand.",
        points: ["Client dashboard", "Order history", "Tickets", "Files", "Tasks"],
      },
      {
        title: "Reduce status update noise",
        body:
          "Clients can see what is happening without asking, and your team can keep work moving with shared context.",
      },
    ],
  },
  {
    slug: "freelancing-dashboard-workflow",
    title: "Product Dashboards: Manage Your Freelance Workflow Software",
    description:
      "Manage freelance workflow with clean dashboards for clients, projects, packages, orders, and delivery.",
    eyebrow: "Workflow Dashboard",
    hero: "Your Agency's Digital Workflow Solution",
    subhero:
      "Manage freelance operations from a clean dashboard that connects sales, onboarding, projects, support, and revenue.",
    image: "/assets/dashboard-hero.png",
    sections: [
      {
        title: "The easiest way to manage your freelance workflow",
        body:
          "A great workflow starts with visibility. Retainr gives your business a clear view of clients, orders, projects, tasks, tickets, and payments.",
        points: ["Orders", "Projects", "Tasks", "Tickets", "Files", "Revenue"],
      },
      {
        title: "Start today, not tomorrow",
        body:
          "Use predefined flows and branded pages to move from idea to sellable service quickly.",
      },
    ],
  },
  {
    slug: "team-collaboration",
    title: "Team Collaboration - Client Management Software",
    description:
      "Team collaboration and communication software for agencies that need aligned client delivery.",
    eyebrow: "Team Collaboration",
    hero: "Team Communication, Simplified",
    subhero:
      "Bring team members, clients, tasks, files, and updates into one system built around delivery.",
    image: "/assets/team-collab.png",
    sections: [
      {
        title: "Collaboration built around clients",
        body:
          "Retainr helps teams coordinate work without losing client context. Everyone can see the order, the project, the request, and the next action.",
        points: ["Shared tasks", "Client context", "Project updates", "Team roles"],
      },
      {
        title: "Prevent miscommunication",
        body:
          "When discussions, files, and tasks live together, fewer details slip through the cracks and clients get faster answers.",
      },
    ],
  },
  {
    slug: "saas-for-freelancers-to-sell-online-services",
    title: "SaaS for Freelancers to Sell Online Services",
    description:
      "SaaS designed for freelancers to sell online services with branded packages, payments, and client management.",
    eyebrow: "SaaS for Freelancers",
    hero: "SaaS designed for freelancers to sell services",
    subhero:
      "Retainr gives digital creators the storefront, client portal, and service workflow needed to sell online services without assembling a stack.",
    image: "/assets/packages.png",
    sections: [
      {
        title: "Make your experience as a freelancer exceptional",
        body:
          "Sell like a software company while delivering the personal expertise clients are buying from you.",
        points: ["Service storefront", "Online payments", "Client dashboard", "Branded delivery"],
      },
      {
        title: "Built for every digital service",
        body:
          "Coaching, consulting, design, writing, SEO, AI implementation, creative packages, and agency retainers can all be packaged and sold in Retainr.",
      },
    ],
  },
  {
    slug: "income",
    title: "Turn Freelance Skills Into Recurring Revenue",
    description:
      "Transform your knowledge, skills, and freelance services into profitable products and recurring revenue.",
    eyebrow: "Income",
    hero: "Turn Your Skills Into Income",
    subhero:
      "Your expertise can become offers, retainers, subscriptions, and repeatable packages that grow beyond one-off projects.",
    image: "/assets/revenue-graph.png",
    sections: [
      {
        title: "The simplest way to turn skills into income",
        body:
          "Package what you already know into offers clients can understand and buy. Retainr handles the operational layer after the sale.",
        points: ["Productized offers", "Recurring retainers", "One-off services", "Subscriptions"],
      },
      {
        title: "Built for freelancers who want freedom",
        body:
          "Less admin means more time for selling, delivery, learning, and building the service business you actually want.",
      },
    ],
  },
  {
    slug: "sales-funnels-freelancers",
    title: "Build Sales Funnels and Lead Magnets for Freelancers",
    description:
      "Build sales funnels and lead magnets as a freelancer to attract better clients and automate the sales process.",
    eyebrow: "Sales Funnels",
    hero: "Build Efficient Micro Sales Funnels",
    subhero:
      "Turn attention into orders with simple funnels that send leads to the right package, signup flow, payment step, and client portal.",
    image: "/assets/onboarding.png",
    sections: [
      {
        title: "Lead magnets that become paid services",
        body:
          "Offer templates, audits, consults, guides, or entry services, then route qualified leads into productized packages.",
        points: ["Lead capture", "Offer pages", "Magic signup links", "Paid packages"],
      },
      {
        title: "Automate your sales process",
        body:
          "Retainr helps you connect funnel traffic to a professional buying and onboarding experience.",
      },
    ],
  },
  {
    slug: "freelance",
    title: "Scale Freelance Business",
    description:
      "Scale a freelance business with productized services, recurring retainers, and a branded client workflow.",
    eyebrow: "Freelance Growth",
    hero: "Scale your freelance business without more admin",
    subhero:
      "Retainr helps niche freelancers turn expertise into clear offers, onboard clients faster, and convert existing clients into recurring revenue.",
    image: "/assets/dashboard-hero.png",
    sections: [
      {
        title: "From custom work to repeatable revenue",
        body:
          "Freelancers grow faster when they stop reselling every project from scratch. Retainr helps you package the work clients already ask for into offers that can be bought again and again.",
        points: ["Productized services", "Recurring retainers", "Client portal", "Order tracking"],
      },
      {
        title: "Built for niche experts",
        body:
          "Retainr is designed for digital creators who want to build predictable monthly revenue. The platform works especially well for these focused niches:",
        points: [
          "AI Consultants & Automation Specialists",
          "SEO Experts & Growth Marketers",
          "Brand & Web Designers",
          "Digital Life & Business Coaches",
          "Info Product & Online Course Creators",
          "Illustrators, Cartoonists & Visual Creators",
        ],
      },
    ],
  },
  {
    slug: "accelerator",
    title: "Scale Agency Growth",
    description:
      "Retainr Accelerator helps creators and small agencies package offers, sell online, and build recurring client systems.",
    eyebrow: "Accelerator",
    hero: "Scale agency growth with sharper offers and cleaner delivery",
    subhero:
      "Use Retainr as the operating system for your next stage: storefront, client portal, onboarding, payments, delivery, and support.",
    image: "/assets/revenue-graph.png",
    sections: [
      {
        title: "Make your agency easier to buy from",
        body:
          "The fastest growth usually comes from clearer packaging. Retainr gives agencies a way to present services as products with pricing, scope, and onboarding in one place.",
        points: ["Offer design", "Sales links", "Payment collection", "Delivery workflow"],
      },
      {
        title: "Grow from existing clients",
        body:
          "Use Retainr to identify repeat work, publish retainers, and invite clients into recurring plans without rebuilding the sales process.",
      },
    ],
  },
  {
    slug: "billing-and-invoicing-for-web-agencies",
    title: "Billing & Invoicing for Web Agencies",
    description:
      "Billing and invoicing workflows for web agencies, freelancers, and digital creators selling productized services.",
    eyebrow: "Billing",
    hero: "Billing and invoicing connected to client delivery",
    subhero:
      "Collect payment, start onboarding, and keep orders tied to projects so revenue and delivery stay aligned.",
    image: "/assets/packages.png",
    sections: [
      {
        title: "Stop separating payment from project work",
        body:
          "Payment links alone do not create a client experience. Retainr connects the offer, checkout, client record, project, support tickets, and files.",
        points: ["Package pricing", "Recurring plans", "Payment integration", "Order history"],
      },
      {
        title: "Make renewals easier",
        body:
          "When billing is connected to service delivery, it becomes easier to sell monthly support, optimization, reporting, or content retainers.",
      },
    ],
  },
  {
    slug: "help",
    title: "Retainr Knowledge Base",
    description:
      "Knowledge base for setting up Retainr, publishing offers, onboarding clients, and building recurring revenue.",
    eyebrow: "Help",
    hero: "Knowledge base for selling services with Retainr",
    subhero:
      "Quick guidance for creators and agencies setting up branded offers, signup flows, payments, support, and client portals.",
    sections: [
      {
        title: "Start with your first offer",
        body:
          "Choose one repeatable service, write the outcome, set the scope, add pricing, and publish a signup link.",
        points: ["Create package", "Connect payment", "Share signup link", "Start delivery"],
      },
      {
        title: "Build client workflows",
        body:
          "Use Retainr to keep intake, tasks, files, support, and approvals organized after purchase.",
      },
    ],
  },
  {
    slug: "pitch-deck",
    title: "Why Retainr?",
    description:
      "Why Retainr is the platform for digital creators and niche freelancers turning expertise into recurring revenue.",
    eyebrow: "Why Retainr",
    hero: "The platform for digital creators who sell expertise",
    subhero:
      "Retainr combines a service storefront, client portal, onboarding, billing, workflow, and support desk so creators can sell and retain clients.",
    image: "/assets/dashboard-hero.png",
    sections: [
      {
        title: "The problem",
        body:
          "Digital creators often use one tool for content, another for payment, another for files, another for tasks, and another for support. Clients feel the fragmentation.",
      },
      {
        title: "The Retainr answer",
        body:
          "Give creators a branded system that turns existing expertise into clear offers and existing clients into recurring revenue.",
        points: ["Sell", "Onboard", "Deliver", "Support", "Retain"],
      },
    ],
  },
  {
    slug: "terms-conditions",
    title: "Retainr Terms & Conditions",
    description:
      "Retainr terms and conditions for use of the website, platform, account, and related services.",
    eyebrow: "Terms",
    hero: "Terms & Conditions",
    subhero:
      "These terms summarize the rules for using Retainr's website and services. They should be reviewed with legal counsel before production use.",
    sections: [
      {
        title: "Use of service",
        body:
          "Users are responsible for account activity, lawful use, accurate information, and maintaining security of login credentials.",
      },
      {
        title: "Subscriptions and payments",
        body:
          "Paid plans, trials, renewals, cancellations, taxes, and billing responsibilities are governed by the active plan and checkout terms.",
      },
      {
        title: "Content and data",
        body:
          "Customers retain ownership of their business content and client data, subject to platform operation, security, and legal requirements.",
      },
    ],
  },
  {
    slug: "feedback",
    title: "Retainr Feedback",
    description:
      "Send feedback and feature requests for Retainr's creator-focused client management platform.",
    eyebrow: "Feedback",
    hero: "Help shape Retainr for digital creators",
    subhero:
      "Tell us what would make Retainr better for selling, onboarding, delivering, and retaining clients.",
    sections: [
      {
        title: "What feedback helps most",
        body:
          "Share the creator niche, the service you sell, the workflow problem, and the outcome you want clients to experience.",
        points: ["Niche", "Offer", "Workflow issue", "Expected result"],
      },
      {
        title: "Feature requests",
        body:
          "For public requests, mention @Retainr_io on X or use the support links in the footer.",
      },
    ],
  },
  {
    slug: "guides/agency-freelancing-skills-you-need-to-know",
    title: "High In-Demand Freelance Skills",
    description:
      "Evergreen guide to high-demand freelance skills for digital creators and niche experts building recurring revenue.",
    eyebrow: "Guide",
    hero: "High-demand freelance skills for recurring creator revenue",
    subhero:
      "The best skills are the ones you can package, sell repeatedly, and connect to measurable client outcomes.",
    image: "/assets/packages.png",
    sections: [
      {
        title: "Skills that package well",
        body:
          "SEO, nutrition coaching, design, AI automation, writing, conversion copy, analytics, community education, and crypto education all become stronger when sold as clear packages.",
        points: ["Audit", "Plan", "Implementation", "Reporting", "Retainer"],
      },
      {
        title: "How to choose your skill stack",
        body:
          "Pick a niche, define a repeated client problem, build a fixed-scope starter offer, then sell a recurring plan for support and improvement.",
      },
    ],
  },
  {
    slug: "cafe-productivity",
    title: "Cafe Productivity for Indie Freelancers | Retainr",
    description: "Stay in deep work flow at cafes without client requests, admin, or scattered tools killing your focus. Retainr handles the backend so you can enjoy productive cafe sessions.",
    eyebrow: "Deep Work Mode",
    hero: "Stay in Flow at the Cafe. Let Retainr Handle the Rest.",
    subhero: "Indie freelancers love working from cafes. But client chaos usually kills the vibe. Retainr gives you a system so you can protect your deep work time while everything else runs smoothly in the background.",
    image: "/assets/dashboard-hero.png",
    sections: [
      {
        title: "The Cafe Productivity Problem",
        body: "You finally found a good table, put on your headphones, and got into flow. Then a client emails. Another one needs onboarding. Someone wants to know where their file is. Suddenly your productive cafe session turns into scattered admin work.",
        points: [
          "Client messages break your concentration",
          "Onboarding new clients feels impossible from a cafe",
          "Payments and invoices pull you out of deep work",
          "You end up managing your business instead of doing the work you enjoy"
        ]
      },
      {
        title: "The Retainr Method for Cafe Freelancers",
        body: "Retainr is designed to protect your deep work time. While you're at the cafe focused on high-value work, Retainr quietly handles client operations in the background.",
        points: [
          "Package your services clearly so clients know exactly what they're buying",
          "Use magic signup links so new clients onboard themselves",
          "Collect payments upfront before the work starts",
          "Deliver through a professional branded portal (clients feel taken care of)",
          "Turn one-time projects into recurring retainers automatically",
          "Get notified only when something actually needs your attention"
        ]
      },
      {
        title: "What Becomes Possible From a Cafe",
        body: "With Retainr running in the background, your cafe sessions become truly productive instead of reactive.",
        points: [
          "Run your entire client operation from your laptop at a cafe",
          "Onboard new clients without meetings or back-and-forth emails",
          "Deliver work professionally without constant status updates",
          "Get paid faster with upfront payments and automatic renewals",
          "Protect long blocks of deep work time",
          "Feel in control even when you're not at your desk"
        ]
      },
      {
        title: "Who This Is Perfect For",
        body: "This approach works especially well for freelancers who value focused work and often work from cafes, co-working spaces, or while traveling.",
        points: [
          "Designers & Brand Creatives who need long focus blocks",
          "Writers, Copywriters & Content Creators",
          "Developers & Technical Consultants",
          "Coaches & Consultants who do deep thinking work",
          "Any indie freelancer tired of admin killing their flow"
        ]
      },
      {
        title: "Turn Cafe Days Into Your Most Productive Days",
        body: "The goal isn't to work more. It's to protect the time when you're at your best. Retainr removes the friction so your cafe sessions actually move your business forward instead of just keeping it running.",
      }
    ]
  },
  {
    slug: "method",
    title: "The Retainr Method | Turn Expertise Into Recurring Revenue",
    description:
      "A guided method for digital creators and niche freelancers to package expertise, sell clearly, onboard clients, deliver professionally, and retain revenue.",
    eyebrow: "The Retainr Method",
    hero: "A structured method for turning expertise into recurring revenue",
    subhero:
      "Retainr is not just a client portal. It is a repeatable operating method for creators who want clearer offers, better client journeys, and more predictable monthly revenue.",
    image: "/assets/dashboard-hero.png",
    sections: [
      {
        title: "Step 1: Choose one repeatable client outcome",
        body:
          "The method starts by narrowing your expertise into one outcome a client can understand and buy. Nutritionists might sell a 30-day meal planning sprint. SEO experts might sell a technical audit and monthly growth plan. Designers might sell a landing page sprint that converts into a care plan.",
        points: ["Define the client outcome", "Name the niche", "Make the promise measurable", "Remove vague service language"],
      },
      {
        title: "Step 2: Package the offer like a product",
        body:
          "A strong creator business does not ask every prospect to interpret a custom proposal. It gives buyers a clear package with scope, price, timeline, deliverables, and next steps. Retainr helps you publish that offer and connect it to payment, onboarding, and delivery.",
        points: ["Starter offer", "Recurring plan", "Clear deliverables", "Payment before delivery"],
      },
      {
        title: "Step 3: Onboard with the right questions",
        body:
          "Every niche needs different intake. A dietitian needs health goals and preferences. A crypto educator needs risk profile and knowledge level. A web designer needs brand assets and technical access. The Retainr Method routes each buyer into the right onboarding flow.",
        points: ["Niche-specific forms", "Magic signup links", "Client files", "Project context"],
      },
      {
        title: "Step 4: Deliver inside a branded portal",
        body:
          "Clients should never wonder where to upload files, ask questions, approve work, or see progress. Retainr keeps messages, files, tasks, tickets, orders, and invoices inside one branded client experience.",
        points: ["White-label portal", "Project status", "Support tickets", "Approvals and files"],
      },
      {
        title: "Step 5: Convert delivery into retention",
        body:
          "Recurring revenue becomes natural when the first delivery reveals the next ongoing need. Reports become monthly optimization. Coaching becomes implementation support. Design becomes care plans. Retainr helps creators attach those next steps to the client relationship.",
        points: ["Renewals", "Monthly retainers", "Upsells", "Client lifetime value"],
      },
    ],
    faqs: [
      {
        question: "Is Retainr only software?",
        answer:
          "No. The product supports the method: package, sell, onboard, deliver, support, and retain. The positioning is intentionally process-led so creators know how to use the platform to create revenue.",
      },
      {
        question: "Does the method work for different niches?",
        answer:
          "Yes. The steps stay consistent, while offers and onboarding questions change by niche. That is why the site includes dedicated niche pages instead of speaking only to broad freelancers.",
      },
    ],
  },
  {
    slug: "features",
    title: "Retainr Features | Client Portal, Billing, Onboarding, Ticketing",
    description:
      "Explore Retainr features for digital creators and niche freelancers: productized offers, onboarding, client portal, billing, ticketing, automation, and retention.",
    eyebrow: "Features",
    hero: "Everything a creator needs to sell, deliver, and retain clients",
    subhero:
      "Retainr brings the client journey into one branded system so your expertise feels easier to buy and easier to continue.",
    image: "/assets/packages.png",
    sections: [
      {
        title: "Productized service storefront",
        body:
          "Publish clear packages for audits, sprints, care plans, coaching programmes, content batches, advisory retainers, and implementation support. Each offer can lead to the right signup flow and payment path.",
        points: ["Service packages", "Recurring plans", "Custom offers", "Niche signup links"],
      },
      {
        title: "Client onboarding and magic signup links",
        body:
          "Send prospects to the exact flow for their offer or niche. Replace long email threads with structured intake, required files, clear expectations, and a professional first impression.",
        points: ["Custom onboarding", "Brief collection", "Client records", "Offer-specific questions"],
      },
      {
        title: "White-label client portal",
        body:
          "Let clients interact with your brand, not a generic tool. Retainr gives freelancers and small teams a polished portal for projects, communication, files, orders, and support.",
        points: ["Custom branding", "Custom domain", "Unbranded emails", "Client dashboard"],
      },
      {
        title: "Projects, tasks, approvals, and support",
        body:
          "Delivery needs structure after the sale. Retainr connects orders to projects, lets teams manage tasks, keeps support tickets organized, and gives clients one clear place to ask for help.",
        points: ["Project workflow", "Team collaboration", "Ticketing", "Approvals"],
      },
      {
        title: "Billing, renewals, and revenue visibility",
        body:
          "Creators need more than a payment link. Retainr connects revenue to delivery so you can see what sold, what needs attention, and which clients are ready for ongoing support.",
        points: ["Payments", "Recurring revenue", "Upsells", "Client lifetime value"],
      },
    ],
  },
  {
    slug: "case-studies",
    title: "Retainr Case Studies & Results",
    description:
      "See how niche freelancers and digital creators can use the Retainr Method to package expertise, improve delivery, and create recurring revenue.",
    eyebrow: "Results",
    hero: "From scattered services to structured client revenue",
    subhero:
      "These scenario-based case studies show the transformation Retainr is built for: clearer offers, cleaner onboarding, stronger delivery, and recurring revenue paths.",
    image: "/assets/revenue-graph.png",
    sections: [
      {
        title: "SEO consultant: audit to monthly growth retainer",
        body:
          "A solo SEO expert replaces custom proposals with a fixed technical audit, onboarding questions for analytics access, and a monthly growth retainer that covers content briefs, reporting, and implementation support.",
        points: ["Clear audit package", "Structured access collection", "Monthly reporting", "Recurring optimization"],
      },
      {
        title: "Dietitian: one-time plan to ongoing accountability",
        body:
          "An independent nutritionist sells a meal plan sprint, collects preferences and constraints before the first session, then converts successful clients into a recurring accountability and progress review plan.",
        points: ["Intake questions", "Progress check-ins", "Plan updates", "Subscription support"],
      },
      {
        title: "Designer: launch project to care plan",
        body:
          "A web designer sells a landing page sprint, manages assets and feedback in one portal, then offers a care plan for updates, testing, performance checks, and conversion improvements.",
        points: ["Brand asset collection", "Feedback loop", "Launch handoff", "Monthly care plan"],
      },
      {
        title: "AI consultant: workshop to implementation support",
        body:
          "An AI expert sells a workflow audit and implementation sprint, documents opportunities, ships automations, then keeps clients on a monthly optimization plan as tools and workflows change.",
        points: ["Workflow audit", "Automation implementation", "Governance notes", "Optimization retainer"],
      },
      {
        title: "Why the results compound",
        body:
          "Retainr improves more than one page or checkout. It improves the full client journey. Each client interaction becomes easier to repeat, every successful delivery creates a natural next offer, and the creator becomes less dependent on constant one-off selling.",
        points: ["More repeatable delivery", "More confident buyers", "More recurring offers", "Less scattered admin"],
      },
    ],
  },
  {
    slug: "contact",
    title: "Contact Retainr",
    description:
      "Contact Retainr for product questions, support, partnerships, affiliate inquiries, and creator workflow feedback.",
    eyebrow: "Contact",
    hero: "Talk to Retainr about building your creator revenue system",
    subhero:
      "Have a product question, partnership idea, support need, or niche workflow you want Retainr to support? Start here.",
    image: "/assets/dashboard-hero.png",
    sections: [
      {
        title: "Product and pricing questions",
        body:
          "If you are choosing a plan, compare pricing first and then start with the offer you want to launch. The best Retainr setup begins with one package, one onboarding flow, and one recurring upgrade.",
        points: ["Pricing", "Plans", "Setup questions", "Creator use cases"],
      },
      {
        title: "Support and account help",
        body:
          "For product support, use the in-site chat or support links so the Retainr team can route your request. Include your account email, the client workflow affected, and any screenshots or reproduction steps.",
        points: ["Crisp support chat", "Account context", "Workflow details", "Expected outcome"],
      },
      {
        title: "Partnerships and affiliates",
        body:
          "Retainr works well for educators, creators, agencies, and consultants who teach others how to package expertise. Partnership conversations should focus on audience, offer, and the creator result you want to help people achieve.",
        points: ["Affiliate programme", "Education partners", "Creator communities", "Niche workflows"],
      },
    ],
  },
  {
    slug: "about",
    title: "About Retainr | The Client Revenue Method for Creators",
    description:
      "Learn why Retainr is being rebuilt as a structured method for digital creators and niche freelancers who want recurring revenue.",
    eyebrow: "About Retainr",
    hero: "Retainr helps creators turn expertise into a system",
    subhero:
      "The mission is simple: help digital creators stop selling scattered services and start operating a clear client revenue engine.",
    image: "/assets/dashboard-hero.png",
    sections: [
      {
        title: "Why Retainr exists",
        body:
          "Many creators are excellent at their craft but weak at packaging, onboarding, delivery structure, and retention. Retainr exists to make the business side feel as intentional as the expertise being sold.",
        points: ["Clear offers", "Professional onboarding", "Branded delivery", "Recurring revenue"],
      },
      {
        title: "Who Retainr is for",
        body:
          "Retainr is built for digital creators and niche freelancers: SEO experts, nutritionists, designers, coaches, AI consultants, copywriters, authors, content specialists, crypto educators, and other experts who sell knowledge or creative output.",
        points: ["Niche experts", "Solo operators", "Small teams", "Creator-led service businesses"],
      },
      {
        title: "How Retainr is different",
        body:
          "The goal is not to look like another generic SaaS dashboard. Retainr is being shaped around a method: package the outcome, sell clearly, onboard cleanly, deliver in one place, and use that successful delivery to build retention.",
      },
    ],
  },
];
