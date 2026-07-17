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
    title: "Productize Niche Creator Services in Minutes",
    description:
      "Sell productized niche services in minutes with Retainr's branded offer portal, client onboarding, payments, and delivery workflow.",
    eyebrow: "Productize Niche Expertise",
    hero: "Turn Your Expertise Into Buyable Offers",
    subhero:
      "Build a scalable business by packaging your services, publishing your offers, taking payment, and delivering work from one branded client portal.",
    image: "/assets/packages.png",
    sections: [
      {
        title: "Client management that turns services into products",
        body:
          "Retainr turns messy specialist work into a clear product experience. Clients can choose a package, pay, upload details, and track progress without email chaos.",
        points: ["Productized offers", "Custom packages", "Branded checkout", "Client-ready delivery"],
      },
      {
        title: "Take your brand to the next level",
        body:
          "Replace generic invoices and scattered folders with an experience that keeps your creator brand visible at every step.",
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
    title: "Automation for Niche Creators and Service Teams",
    description:
      "Automate client workflows, onboarding, support, and delivery for productized niche service businesses.",
    eyebrow: "Creator Automation",
    hero: "Automate the Work Around Every Paid Offer",
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
        title: "Connect your creator business with web and AI integrations",
        body:
          "Use Retainr as the client layer for your niche service stack, then connect forms, analytics, automations, AI agents, and fulfillment tools around it.",
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
    title: "Client Management Software for Niche Creators",
    description:
      "Compare client management software options for niche experts and creator-led service teams that sell productized services, branded portals, and recurring client work.",
    eyebrow: "Compare",
    hero: "What client management software should a niche service business choose?",
    subhero:
      "The best platform is the one that lets a niche expert sell services, manage clients, deliver work, and keep their brand visible without stitching together too many tools.",
    image: "/assets/dashboard-hero.png",
    sections: [
      {
        title: "What to look for in creator client management software",
        body:
          "Most tools solve one slice of service operations. Retainr is built around the complete client lifecycle: selling, onboarding, payment, project delivery, support, and repeat revenue.",
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
    title: "Retainr Blog - Build a Niche Creator Revenue System",
    description:
      "Insights, tips, and trends for niche experts, digital creators, and creator-led service teams building productized service businesses.",
    eyebrow: "Blog",
    hero: "Insights for Creators Who Turn Expertise Into Recurring Revenue",
    subhero:
      "Explore practical ways to niche down, package services, improve client experience, and turn creative expertise into recurring income.",
    sections: [
      {
        title: "Popular reads",
        body:
          "Use these guides to sharpen niche positioning, package paid outcomes, improve client delivery, and build recurring revenue around work clients already value.",
        points: [
          "How niche targeting helps creator-led service businesses",
          "Examples of experts turning niche positioning into premium retainers",
          "Industry-specific services every digital creator can productize",
          "Key steps to enter a niche market with a clear paid offer",
          "Examples of solo experts with memorable specialist brands",
          "How to develop a unique selling proposition for a creator business",
          "How to choose the right specialist positioning as an independent expert",
          "How industry-specific services improve creator revenue",
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
          "Retainr uses a specific color system when citing the brand. The palette reflects the company's core DNA and applies it with readability in mind.",
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
          "Inter is used for a crisp product-interface feel with strong headings, compact labels, and readable body copy.",
      },
    ],
  },
  {
    slug: "about-retainr",
    title: "About Retainr for Niche Creators",
    description:
      "Learn why Retainr was built as the simplest way to turn niche expertise into profitable products and recurring client systems.",
    eyebrow: "About",
    hero: "About Retainr",
    subhero:
      "Retainr exists to help creators, independent experts, and small expert-led teams replace messy client operations with a branded system that sells and delivers services.",
    image: "/assets/team-collab.png",
    sections: [
      {
        title: "Our story",
        body:
          "Independent experts are expected to sell, onboard, invoice, communicate, deliver, support, and retain clients while switching between too many disconnected tools. Retainr brings that work into one place.",
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
    title: "Retainr Manifesto for Creator-Led Services",
    description:
      "Why Retainr was built as a better platform for creator-led productized services and branded client delivery.",
    eyebrow: "Manifesto",
    hero: "Turn Trusted Expertise Into Profit",
    subhero:
      "The future belongs to experts who package their knowledge, sell clearly, and deliver through systems that protect their time.",
    sections: [
      {
        title: "The big idea",
        body:
          "Independent experts should not need an enterprise stack to look professional. They need one practical system that helps them sell and deliver with confidence.",
      },
      {
        title: "The promise",
        body:
          "Retainr helps creators and expert-led teams productize expertise, keep their brand front and center, and create a client experience that can scale.",
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
    title: "Client Onboarding for Niche Creators and Service Experts",
    description:
      "Client onboarding and client management software for niche creators, expert-led services, and branded client delivery.",
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
    title: "Support Ticketing for Niche Creators and Service Teams",
    description:
      "A support ticketing solution that keeps creator-client communication, delivery requests, files, and context in one branded place.",
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
    title: "White Label Client Portal for Creator-Led Services",
    description:
      "White-label client management software for niche creators, consultants, and service teams with branded portals, custom domains, and client delivery.",
    eyebrow: "White Label",
    hero: "Your Brand. Your Products.",
    subhero:
      "Sell everything under your own logo, email, domain, client portal, service links, and branded app experience.",
    image: "/assets/client-portal.webp",
    sections: [
      {
        title: "Sell under your own brand",
        body:
          "Retainr keeps your expertise and brand at the center. Clients buy from you, enter your portal, and experience delivery through your identity.",
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
      "A branded client portal and client management software for selling, onboarding, and delivering niche creator services.",
    eyebrow: "Client Portal",
    hero: "Make Your Client Experience Professional",
    subhero:
      "Give clients one place to buy, pay, upload details, track work, request support, and stay aligned with your team.",
    image: "/assets/client-portal.webp",
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
    title: "Product Dashboards for Creator Service Workflows",
    description:
      "Manage creator service workflows with clean dashboards for clients, projects, packages, orders, support, and delivery.",
    eyebrow: "Workflow Dashboard",
    hero: "Your Creator Service Workflow in One Dashboard",
    subhero:
      "Manage niche service operations from a clean dashboard that connects sales, onboarding, projects, support, and revenue.",
    image: "/assets/dashboard-hero.png",
    sections: [
      {
        title: "The easiest way to manage a productized service workflow",
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
      "Team collaboration and communication software for creator-led service teams that need aligned client delivery.",
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
    title: "Sell Online Services as Productized Creator Offers",
    description:
      "Software for niche creators and service experts to sell online services with branded packages, payments, and client management.",
    eyebrow: "Sell Online Services",
    hero: "Turn Online Services Into Buyable Creator Offers",
    subhero:
      "Retainr gives digital creators the storefront, client portal, and service workflow needed to sell online services without assembling a stack.",
    image: "/assets/packages.png",
    sections: [
      {
        title: "Make your niche service experience exceptional",
        body:
          "Sell like a software company while delivering the personal expertise clients are buying from you.",
        points: ["Service storefront", "Online payments", "Client dashboard", "Branded delivery"],
      },
      {
        title: "Built for every digital service",
        body:
          "Coaching, consulting, design, writing, SEO, AI implementation, creative packages, and creator-led retainers can all be packaged and sold in Retainr.",
      },
    ],
  },
  {
    slug: "income",
    title: "Turn Creator Expertise Into Recurring Revenue",
    description:
      "Transform your knowledge, niche expertise, and service delivery into profitable products and recurring revenue.",
    eyebrow: "Income",
    hero: "Turn Your Skills Into Income",
    subhero:
      "Your expertise can become offers, retainers, subscriptions, and repeatable packages that grow beyond one-off projects.",
    image: "/assets/revenue-graph.png",
    sections: [
      {
        title: "The simplest way to turn expertise into income",
        body:
          "Package what you already know into offers clients can understand and buy. Retainr handles the operational layer after the sale.",
        points: ["Productized offers", "Recurring retainers", "One-off services", "Subscriptions"],
      },
      {
        title: "Built for creators who want freedom",
        body:
          "Less admin means more time for selling, delivery, learning, and building the service business you actually want.",
      },
    ],
  },
  {
    slug: "sales-funnels-freelancers",
    title: "Build Sales Funnels and Lead Magnets for Niche Creators",
    description:
      "Build sales funnels and lead magnets as a niche creator to attract better clients and automate the sales process.",
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
    title: "Scale a Niche Creator Service Business",
    description:
      "Scale a niche creator service business with productized services, recurring retainers, and a branded client workflow.",
    eyebrow: "Creator Service Growth",
    hero: "Scale your creator service business without more admin",
    subhero:
      "Retainr helps niche experts turn expertise into clear offers, onboard clients faster, and convert existing clients into recurring revenue.",
    image: "/assets/dashboard-hero.png",
    sections: [
      {
        title: "From custom work to repeatable revenue",
        body:
          "Niche experts grow faster when they stop reselling every project from scratch. Retainr helps you package the work clients already ask for into offers that can be bought again and again.",
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
    title: "Retainr Accelerator for Creator Revenue Systems",
    description:
      "Retainr Accelerator helps creators and expert-led service teams package offers, sell online, and build recurring client systems.",
    eyebrow: "Accelerator",
    hero: "Scale recurring revenue with sharper offers and cleaner delivery",
    subhero:
      "Use Retainr as the operating system for your next stage: storefront, client portal, onboarding, payments, delivery, and support.",
    image: "/assets/revenue-graph.png",
    sections: [
      {
        title: "Make your expertise easier to buy from",
        body:
          "The fastest growth usually comes from clearer packaging. Retainr gives creators and service teams a way to present services as products with pricing, scope, and onboarding in one place.",
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
    title: "Billing & Invoicing for Creator-Led Services",
    description:
      "Billing and invoicing workflows for niche experts, digital creators, and service teams selling productized services.",
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
      "Quick guidance for niche creators and service teams setting up branded offers, signup flows, payments, support, and client portals.",
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
      "Why Retainr is the platform for digital creators and niche experts turning expertise into recurring revenue.",
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
    title: "High-Demand Creator Skills for Recurring Revenue",
    description:
      "Evergreen guide to high-demand creator skills for digital creators and niche experts building recurring revenue.",
    eyebrow: "Guide",
    hero: "High-demand creator skills for recurring revenue",
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
    title: "Cafe Productivity for Indie Creators | Retainr",
    description: "Stay in deep work flow at cafes without client requests, admin, or scattered tools killing your focus. Retainr handles the backend so you can enjoy productive cafe sessions.",
    eyebrow: "Deep Work Mode",
    hero: "Stay in Flow at the Cafe. Let Retainr Handle the Rest.",
    subhero: "Indie creators love working from cafes. But client chaos usually kills the flow. Retainr gives you a system so you can protect deep work time while everything else runs smoothly in the background.",
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
        title: "The Retainr Method for Cafe Creators",
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
        body: "This approach works especially well for independent creators who value focused work and often work from cafes, co-working spaces, or while traveling.",
        points: [
          "Designers & Brand Creatives who need long focus blocks",
          "Writers, Copywriters & Content Creators",
          "Developers & Technical Consultants",
          "Coaches & Consultants who do deep thinking work",
          "Any indie creator tired of admin killing their flow"
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
      "A guided method for digital creators and niche experts to package expertise, sell clearly, onboard clients, deliver professionally, and retain revenue.",
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
      {
        title: "Step 6: Measure the client journey",
        body:
          "A method only improves when the creator can see where clients slow down. Retainr helps connect the offer, payment, onboarding, project, support requests, and renewal moment so creators can improve the complete journey instead of guessing from scattered tools.",
        points: ["Signup conversion", "Onboarding friction", "Delivery status", "Renewal signals"],
      },
      {
        title: "Step 7: Refine the offer into a programme",
        body:
          "The strongest creator businesses stop selling loose tasks and start selling a named process. After a few clients, the Retainr Method turns repeated questions, repeated deliverables, and repeated wins into a guided programme that feels easier to buy, easier to deliver, and easier to renew.",
        points: ["Named method", "Repeatable scope", "Client milestones", "Programme positioning"],
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
          "Yes. The steps stay consistent, while offers and onboarding questions change by niche. That is why the site includes dedicated niche pages instead of speaking only to a broad service-provider category.",
      },
    ],
  },
  {
    slug: "features",
    title: "Retainr Features | Client Portal, Billing, Onboarding, Ticketing",
    description:
      "Explore Retainr features for digital creators and niche service experts: productized offers, onboarding, client portal, billing, ticketing, automation, and retention.",
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
          "Let clients interact with your brand, not a generic tool. Retainr gives niche experts and small service teams a polished portal for projects, communication, files, orders, and support.",
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
      {
        title: "Prospection and lead generation path",
        body:
          "Magic Prospections extends the Retainr revenue method upstream for technical creators and freelance developers. Instead of waiting for referrals, experts can target prospects by expertise, prepare cold outreach angles, and move warm replies into the same Retainr signup and delivery system.",
        points: ["Targeted prospect lists", "Cold email angles", "Reply tracking", "Lead-to-client handoff"],
      },
      {
        title: "Programme-style client experience",
        body:
          "Retainr is designed to make expertise feel guided. The same platform can present the offer, collect payment, gather intake, structure delivery, handle support, and introduce the next recurring plan without forcing the client through disconnected tools.",
        points: ["Clear journey", "Guided milestones", "Centralized support", "Professional trust"],
      },
    ],
  },
  {
    slug: "case-studies",
    title: "Retainr Creator Use Cases",
    description:
      "See how niche experts and digital creators can use the Retainr Method to package expertise, improve delivery, and create recurring revenue.",
    eyebrow: "Creator Use Cases",
    hero: "From scattered services to structured client revenue",
    subhero:
      "These scenario-based playbooks show the transformation Retainr is built for: clearer offers, cleaner onboarding, stronger delivery, and recurring revenue paths.",
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
        title: "Course creator: product buyer to implementation client",
        body:
          "A course creator stops treating buyers as anonymous transactions. The first offer remains a digital product, but Retainr adds a structured implementation path: onboarding questions, support tickets, office hours, and a recurring plan for students who want help applying the material.",
        points: ["Digital product upsell", "Student onboarding", "Implementation support", "Recurring office hours"],
      },
      {
        title: "Podcast producer: episode work to monthly production system",
        body:
          "A podcast producer replaces episode-by-episode coordination with a monthly production retainer. Retainr keeps files, show notes, approvals, publishing cadence, and revision requests in one branded workflow so clients experience the service as a production system.",
        points: ["Monthly production plan", "File collection", "Approval workflow", "Repurposing upsell"],
      },
      {
        title: "What good results look like",
        body:
          "The result is not only a nicer dashboard. The result is a creator who can explain their offer clearly, collect the right information before work starts, reduce avoidable support friction, and ask for renewal from a position of demonstrated value.",
        points: ["Faster first purchase", "Cleaner client intake", "Fewer scattered messages", "More natural renewal conversations"],
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
          "Retainr works well for educators, creators, niche communities, and consultants who teach others how to package expertise. Partnership conversations should focus on audience, offer, and the creator result you want to help people achieve.",
        points: ["Affiliate programme", "Education partners", "Creator communities", "Niche workflows"],
      },
    ],
  },
  {
    slug: "about",
    title: "About Retainr | The Client Revenue Method for Creators",
    description:
      "Learn why Retainr is being rebuilt as a structured method for digital creators and niche experts who want recurring revenue.",
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
          "Retainr is built for digital creators and niche experts: SEO experts, nutritionists, designers, coaches, AI consultants, copywriters, authors, content specialists, crypto educators, and other experts who sell knowledge or creative output.",
        points: ["Niche experts", "Solo operators", "Small teams", "Creator-led service businesses"],
      },
      {
        title: "How Retainr is different",
        body:
          "The goal is not to look like another generic software dashboard. Retainr is being shaped around a method: package the outcome, sell clearly, onboard cleanly, deliver in one place, and use that successful delivery to build retention.",
      },
    ],
  },
];
