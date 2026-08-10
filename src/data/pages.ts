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
      "Reduce repeated admin by connecting client onboarding, order intake, delivery tasks, support, analytics, and external tools.",
    image: "/assets/revenue-graph.png",
    sections: [
      {
        title: "Boost your work efficiency",
        body:
          "Turn repeated admin into repeatable workflows. Retainr helps route leads, orders, and support requests into a clear next step.",
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
    title: "Retainr Alternatives: Client Software for Niche Freelancers",
    description:
      "Compare client management software, creator stores, agency platforms, checkout tools, and freelance systems for productized services and recurring client revenue.",
    eyebrow: "Retainr Alternatives",
    hero: "Choose client software by operating model, not by feature count",
    subhero:
      "The useful question is not which platform has the longest checklist. It is which system best connects how you sell, onboard, deliver, support, renew, and protect the client relationship.",
    image: "/assets/dashboard-hero.png",
    sections: [
      {
        title: "Start with the job the platform must do",
        body:
          "A creator storefront, request portal, agency resource planner, financial operating system, checkout platform, and coaching programme solve different problems. Define the constraint first: finding demand, packaging the offer, converting checkout, onboarding clients, coordinating delivery, managing finances, or earning renewals.",
        points: ["Name the current bottleneck", "Choose one representative service", "Test the full client journey", "Check export and migration paths"],
      },
      {
        title: "Compare agency and client-management systems",
        body:
          "ManyRequests emphasizes agency service requests and production delivery. Productive goes deeper into resources, budgets, utilization, and agency financials. Agency Handy and ClientManager combine broad client administration, projects, billing, and portal workflows. Plutio provides a flexible all-in-one back office. Retainr is more opinionated about packaging expert outcomes and developing recurring value from trusted clients.",
        points: ["Retainr vs ManyRequests", "Retainr vs Productive", "Retainr vs Agency Handy", "Retainr vs Plutio", "Retainr vs ClientManager"],
      },
      {
        title: "Separate creator commerce from client delivery",
        body:
          "Stan Store helps audience-first creators sell downloads, courses, memberships, webinars, and coaching bookings. Spiffy specializes in checkout, subscriptions, payment plans, upsells, affiliates, and revenue operations. Bloom provides CRM, booking, contracts, galleries, and websites for creative professionals. Retainr fits when the purchase begins a hands-on client relationship that needs structured intake, delivery, communication, support, and renewal.",
        points: ["Retainr vs Stan Store", "Retainr vs Spiffy", "Retainr vs Bloom"],
      },
      {
        title: "Check vendor status before comparing features",
        body:
          "A comparison is only useful when product availability is current. Midday announced on 7 May 2026 that its team was joining Ramp and that the hosted product would wind down over the following three months. Existing users should prioritize official export guidance; new buyers should not treat Midday as a normal active SaaS alternative without verifying its current status.",
        points: ["Confirm active product status", "Review current pricing limits", "Read first-party migration guidance", "Avoid relying on stale listicles"],
      },
      {
        title: "Do not confuse software with business strategy",
        body:
          "Freelance Cake is coaching, education, community, and content rather than client-management software. It may be the better investment when positioning, packaging, pricing, pipeline, or confidence is unclear. Retainr becomes more valuable when the method is clear enough to operationalize through a repeatable buying and delivery system.",
        points: ["Use coaching for judgment", "Use software for repeatable execution", "Combine them when the constraint spans both"],
      },
      {
        title: "Why Retainr stands apart",
        body:
          "Retainr connects the moments that determine whether expertise becomes durable revenue: a clear offer, contextual signup, paid onboarding, branded delivery, organized support, and a visible recurring next step. It is designed for niche freelancers and compact expert teams that want every client interaction to reinforce their method rather than disappear into disconnected tools.",
        points: ["Package expertise", "Preserve buyer context", "Deliver through your brand", "Earn the renewal"],
      },
    ],
    faqs: [
      {
        question: "What is the best Retainr alternative?",
        answer:
          "There is no universal best alternative. ManyRequests fits request-driven agencies, Productive fits resource-intensive agencies, Stan Store fits audience commerce, Spiffy fits checkout operations, Bloom fits visual creative businesses, and Freelance Cake fits strategic coaching. Retainr fits expert-led client services that should become recurring relationships.",
      },
      {
        question: "How should a freelancer compare client-management platforms?",
        answer:
          "Use one real service and test discovery, purchase, payment, intake, delivery, revisions, support, renewal, and data export. Score client clarity, operator effort, brand continuity, and total tool cost rather than counting features in isolation.",
      },
      {
        question: "Are these comparisons based on current vendor information?",
        answer:
          "The dedicated Retainr comparison library was reviewed on 8 August 2026 using official product, pricing, documentation, and status pages. Purchase-critical details should still be verified directly because plans and availability can change.",
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
    title: "Brand Assets | Retainr Logo, Colors, and Brand Kit",
    description:
      "Download Retainr logo assets and use the approved color palette, typography, and brand guidance for press, partnerships, and product coverage.",
    eyebrow: "Styleguide",
    hero: "Retainr Styleguide",
    subhero:
      "A cleaner expression of the current Retainr brand: bright orange, signal yellow, white space, midnight text, ice blue panels, and growth green accents.",
    image: "/assets/retainr-logo.svg",
    sections: [
      {
        title: "Color palette",
        body:
          "Retainr uses a specific color system when citing the brand. The palette reflects the product's core DNA and applies it with readability in mind.",
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
    title: "Privacy Policy | Retainr Data and Cookie Practices",
    description:
      "Privacy policy for Retainr, covering personal information, client data, security, and contact options.",
    eyebrow: "Privacy",
    hero: "Privacy Policy",
    subhero:
      "This policy explains how Retainr collects, uses, stores, and protects personal information when people visit the website or use the platform.",
    sections: [
      {
        title: "Scope and lawful basis",
        body:
          "Retainr processes personal information to provide the platform and related services. Depending on the relationship, processing may be based on consent, performance of a contract, legitimate operational needs, or legal obligations. When a Retainr customer collects information from its own clients, that customer determines why the information is collected and should be contacted about its use.",
      },
      {
        title: "Information Retainr may collect",
        body:
          "Information may be collected through the website, application, email, telephone, or live chat. This can include names, email addresses, telephone numbers, organization details, account and connected-payment information, IP addresses, language preferences, support messages, service usage, and files or other content uploaded while using the platform.",
        points: ["Account and contact details", "Connected-payment information", "Technical and usage data", "Client-service content submitted to the platform"],
      },
      {
        title: "How we use information",
        body:
          "Personal information is used to operate and secure the service, create and maintain accounts, support connected payment workflows, provide support, communicate about the service, diagnose performance, prevent misuse, improve product experience, and meet applicable legal requirements. Marketing communications should be sent only where Retainr has an appropriate basis and should provide a way to change communication preferences.",
      },
      {
        title: "Storage and information security",
        body:
          "Retainr uses cloud infrastructure and operational safeguards to protect information against accidental loss, unauthorized access, alteration, or disclosure. Access is limited to people with a genuine business need and confidentiality obligations. No internet service can guarantee absolute security, but suspected breaches are investigated and notifications are made where legally required.",
      },
      {
        title: "Cookies and analytics",
        body:
          "The website and platform may use session or persistent cookies and similar technologies for navigation, authentication, preferences, security, and service analysis. Analytics and support services may receive technical information such as IP address, browser, device, approximate country, language, pages visited, and interaction events. Current website integrations include Crisp chat and may include analytics or advertising tools where configured.",
        points: ["Browser controls can restrict or remove cookies", "Some features may depend on essential cookies", "Third-party tools apply their own privacy terms", "Consent choices apply where required"],
      },
      {
        title: "Customers, processors, and third-party services",
        body:
          "Retainr customers may collect and manage information about their own clients through the platform. Questions about why a customer collected that information should be directed to the customer. Retainr may use service providers to host, support, secure, analyze, or process payments for the platform. Information sent to a third-party website or integration is then also governed by that provider's terms and privacy practices.",
      },
      {
        title: "Retention and account closure",
        body:
          "Retention depends on the type of information, the service being provided, customer instructions, operational needs, and legal requirements. When information is no longer needed, Retainr may delete, anonymize, or securely dispose of it. Account closure can result in deletion of messages, files, content, and account records, so customers should export information they are required to retain before ending service.",
      },
      {
        title: "Sharing and disclosure",
        body:
          "Retainr does not sell customer contact data. Information may be disclosed to authorized service providers, at a customer's direction, with consent, to protect the platform and its users, during a legitimate corporate transaction, or where disclosure is required by law. Service providers should receive only the information reasonably required for their role.",
      },
      {
        title: "Children",
        body:
          "The platform is not directed to children under 16. A child should not use Retainr without verifiable consent from a parent or guardian. If Retainr learns that information was collected from a child without the required consent, reasonable steps will be taken to remove it and prevent continued use.",
      },
      {
        title: "Your privacy choices",
        body:
          "Depending on applicable law, individuals may request access, correction, deletion, restriction, objection, portability, or withdrawal of consent. Requests can require identity verification and may be limited by security, contractual, record-keeping, or legal obligations. Customers seeking to exercise rights over information controlled by a Retainr customer should contact that customer first.",
      },
      {
        title: "Contact and policy changes",
        body:
          "Privacy questions and requests can be sent to contact@retainr.io. Retainr may update this policy as the platform, service providers, or legal requirements change. Material updates will be published on this page, and continued use remains subject to the policy then in effect.",
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
    slug: "white-label-agency-management-software",
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
          "Sell with software-level clarity while delivering the personal expertise clients are buying from you.",
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
    title: "Knowledge Base | Retainr Setup and Client Workflows",
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
    title: "Why Retainr? | Recurring Revenue for Freelancers",
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
      "Effective 5 August 2026. These terms govern access to the Retainr website, platform, and related services.",
    sections: [
      {
        title: "Agreement and service scope",
        body:
          "These terms govern the relationship between visitors or account holders using retainr.io and the Retainr service. By accessing or using the service, a visitor or account holder accepts these terms. Anyone who does not agree should not use the service.",
      },
      {
        title: "Free access and third-party charges",
        body:
          "Retainr is now free forever. There are no more plans, seat fees, or feature limits. Users may connect independent payment providers to charge their own clients; those providers apply their own terms, processing fees, billing requirements, and dispute procedures.",
        points: ["No Retainr subscription charge", "No workspace seat fee", "No feature-tier restriction", "Connected payment providers apply their own fees"],
      },
      {
        title: "Former subscriptions",
        body:
          "A current Retainr subscription will end at the close of its existing billing period. There will be no further Retainr subscription charges, and no refund is being issued for the current period. The workspace, its data, and access to every feature remain available.",
      },
      {
        title: "Accounts and security",
        body:
          "Account holders must provide accurate, complete, and current information and are responsible for activity performed through their account. Passwords and other credentials must be protected and must not be disclosed to unauthorized third parties. Suspected unauthorized use or a security incident should be reported promptly to Retainr.",
      },
      {
        title: "Customer content",
        body:
          "Users remain responsible for the legality, reliability, accuracy, permissions, and appropriateness of content they upload, store, link, or share through the service. Users must own that content or have the authority needed to use it. The service requires a limited license to host, reproduce, display, transmit, and otherwise process customer content as needed to operate and provide Retainr.",
      },
      {
        title: "Intellectual property and infringement",
        body:
          "Retainr's original service, features, functionality, brand, and non-customer content remain the property of Retainr or its licensors and are protected by applicable intellectual-property laws. Users may not use Retainr trademarks or trade dress without prior written consent. Copyright concerns should be sent to contact@retainr.io with enough information to identify the work, location, rights holder, and alleged infringement.",
      },
      {
        title: "Third-party websites and services",
        body:
          "Retainr may link to or integrate with services not owned or controlled by Retainr. Those providers apply their own terms, privacy practices, availability, and security controls. Retainr is not responsible for third-party content or practices, and users should review the applicable terms before connecting an account or sending information.",
      },
      {
        title: "Suspension and termination",
        body:
          "Retainr may suspend or terminate access where a user breaches these terms or where action is reasonably required to protect the service, users, or legal compliance. When service ends, the right to use the platform ceases. Users should export information they are required to retain before closing an account, because stored content and records may be deleted in accordance with platform policy.",
      },
      {
        title: "Service availability and warranties",
        body:
          "The service is provided on an as-is and as-available basis to the extent permitted by law. Retainr does not promise uninterrupted availability, that every defect will be corrected immediately, that the service will be free from every harmful component, or that use will produce a particular commercial result. Users remain responsible for evaluating whether the service fits their requirements.",
      },
      {
        title: "Limitation of liability",
        body:
          "To the extent permitted by applicable law, Retainr and its directors, employees, partners, agents, suppliers, and affiliates exclude liability for indirect, incidental, special, consequential, exemplary, or punitive loss arising from use of or inability to use the service, third-party conduct or content, content obtained through the service, or unauthorized access to or alteration of transmissions or content.",
      },
      {
        title: "Governing terms and severability",
        body:
          "The currently published Retainr terms state that they are governed by the laws of the United States of America without regard to conflict-of-law rules. If a provision is found invalid or unenforceable, the remaining provisions continue in effect. A failure to enforce a provision is not a waiver, and these terms replace prior agreements concerning the same subject matter.",
      },
      {
        title: "Changes and contact",
        body:
          "Retainr may revise these terms. Continued use after revised terms take effect means the user accepts the revised terms; users who do not agree should stop using the service. Questions can be sent to contact@retainr.io.",
      },
    ],
  },
  {
    slug: "feedback",
    title: "Feedback | Share Product Ideas with Retainr",
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
    description: "Protect deep work at cafes without client requests, admin, or scattered tools interrupting your focus. Retainr keeps the client workflow organized.",
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
          "Present a relevant recurring plan after a successful project",
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
      "A guided method for niche freelancers to package expertise, sell clearly, onboard clients, and build recurring revenue.",
    eyebrow: "The Retainr Method",
    hero: "A structured method for turning expertise into recurring revenue",
    subhero:
      "Retainr is not just a client portal. It is a repeatable operating method for independent experts who want clearer offers, calmer client delivery, and more predictable monthly revenue.",
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
      "Explore Retainr features for productized offers, client onboarding, white-label portals, billing, ticketing, automation, and retention.",
    eyebrow: "Features",
    hero: "Everything an independent expert needs to sell, deliver, and retain clients",
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
        title: "Prospecting and lead generation path",
        body:
          "The upcoming Magic Prospections workflow extends the Retainr method upstream for technical freelancers and developers. It is designed to help experts target prospects by expertise, prepare outreach angles, and move warm replies into the same Retainr signup and delivery system.",
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
    title: "Retainr Freelancer Use Cases and Client Workflows",
    description:
      "See how niche experts and digital creators can use the Retainr Method to package expertise, improve delivery, and create recurring revenue.",
    eyebrow: "Scenario-Based Freelancer Use Cases",
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
    title: "Contact Retainr | Product, Support, and Accounts",
    description:
      "Contact Retainr for product questions, support, partnerships, affiliate inquiries, and creator workflow feedback.",
    eyebrow: "Contact",
    hero: "Talk to Retainr about building your creator revenue system",
    subhero:
      "Have a product question, partnership idea, support need, or niche workflow you want Retainr to support? Start here.",
    image: "/assets/dashboard-hero.png",
    sections: [
      {
        title: "Product and free-access questions",
        body:
          "Retainr is free forever, so the best setup begins with the offer you want to launch rather than a plan choice. Start with one package, one onboarding flow, and one useful recurring continuation.",
        points: ["Free access", "Setup questions", "Creator use cases", "Feature availability"],
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
];
