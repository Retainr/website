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
          "Retainr's v2 blog index keeps the original editorial themes while making the content easier to scan.",
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
      "Retainr brand assets, logo guidance, color palette, and typography for the v2 static website.",
    eyebrow: "Styleguide",
    hero: "Retainr Styleguide",
    subhero:
      "A cleaner expression of the current Retainr brand: bright orange, signal yellow, white space, midnight text, ice blue panels, and growth green accents.",
    image: "/assets/retainr-logo.svg",
    sections: [
      {
        title: "Color palette",
        body:
          "The v2 site uses the same brand colors requested for this rebuild and applies them with more restraint for better readability.",
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
];
