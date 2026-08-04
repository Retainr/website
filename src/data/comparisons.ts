export type ComparisonTone = "active" | "different" | "transition";

export type ComparisonSource = {
  label: string;
  url: string;
};

export type ComparisonRow = {
  topic: string;
  retainr: string;
  competitor: string;
};

export type Comparison = {
  slug: string;
  competitor: string;
  category: string;
  competitorUrl: string;
  metaTitle: string;
  title: string;
  description: string;
  eyebrow: string;
  summary: string;
  status: {
    label: string;
    tone: ComparisonTone;
    detail: string;
  };
  retainrBestFor: string;
  competitorBestFor: string;
  verdict: string;
  rows: ComparisonRow[];
  chooseRetainr: string[];
  chooseCompetitor: string[];
  questions: Array<{
    question: string;
    answer: string;
  }>;
  sources: ComparisonSource[];
};

export const comparisonsReviewedAt = "2026-08-04";
export const comparisonsReviewedLabel = "4 August 2026";

export const comparisons: Comparison[] = [
  {
    slug: "retainr-vs-manyrequests",
    competitor: "ManyRequests",
    category: "Client portal for agencies",
    competitorUrl: "https://manyrequests.com/",
    metaTitle: "Retainr vs ManyRequests: Client Portal Comparison",
    title: "Retainr vs ManyRequests: which client portal fits your service business?",
    description:
      "Compare Retainr and ManyRequests for productized services, white-label client portals, recurring billing, request delivery, and niche freelancer growth.",
    eyebrow: "Retainr vs ManyRequests",
    summary:
      "Both platforms help service businesses sell work and give clients a branded place to collaborate. The deciding question is whether you want an agency request-management system or a creator-focused method for packaging expertise, guiding delivery, and developing recurring client revenue.",
    status: {
      label: "Active platform",
      tone: "active",
      detail:
        "ManyRequests currently positions itself as a client portal for agencies and productized service businesses. Its published feature set includes requests, billing, CRM, reporting, time tracking, and white-label controls.",
    },
    retainrBestFor:
      "Independent experts and small specialist teams that want the offer, paid signup path, onboarding, branded delivery, support, and renewal conversation to feel like one guided method.",
    competitorBestFor:
      "Design, marketing, and productized-service agencies that organize delivery around client requests, service queues, time tracking, and multiple production seats.",
    verdict:
      "Choose Retainr when your expertise and repeatable client outcome are the product. Choose ManyRequests when request intake and an agency production queue are the center of the operation.",
    rows: [
      {
        topic: "Primary operating model",
        retainr:
          "Packages specialist expertise into paid offers, then connects purchase, intake, delivery, support, and the next recurring plan.",
        competitor:
          "Organizes productized agency work around a service catalog, client requests, project delivery, and team capacity.",
      },
      {
        topic: "Client buying journey",
        retainr:
          "Uses offer-specific signup links so a prospect can enter the right package and onboarding flow without starting from a generic portal.",
        competitor:
          "Provides a service catalog and checkout inside a white-label portal designed for clients placing and following requests.",
      },
      {
        topic: "Delivery workflow",
        retainr:
          "Keeps projects, tasks, files, communication, support tickets, and recurring service context connected to the paid relationship.",
        competitor:
          "Emphasizes request management, statuses, messaging, file sharing, time tracking, permissions, and agency reporting.",
      },
      {
        topic: "Brand experience",
        retainr:
          "Treats the branded portal as the visible home of a specialist method, from first purchase through renewal.",
        competitor:
          "Offers white-label branding, custom domains, portal customization, and client-facing permissions for agencies.",
      },
      {
        topic: "Commercial fit",
        retainr:
          "Best when a solo expert or lean team wants to increase revenue per trusted client through clear packages and retainers.",
        competitor:
          "Best when an agency needs a request-based production system with seats, capacity, and operational reporting.",
      },
    ],
    chooseRetainr: [
      "Your business is built around a named expertise, transformation, or repeatable specialist outcome.",
      "You want niche-specific signup links and a guided path from one-off work to a recurring plan.",
      "You need the client experience to reinforce your method, not only expose a request queue.",
    ],
    chooseCompetitor: [
      "Clients submit a continuous stream of design, content, marketing, or production requests.",
      "Time tracking, production seats, and queue visibility are central buying criteria.",
      "You want an agency-oriented service catalog and request-management workflow.",
    ],
    questions: [
      {
        question: "Is ManyRequests only for large agencies?",
        answer:
          "No. ManyRequests markets plans for smaller productized-service businesses as well as enterprise teams. Its workflow is still agency-shaped: services, requests, production seats, and portal-based delivery.",
      },
      {
        question: "Do Retainr and ManyRequests both support white-label client experiences?",
        answer:
          "Both publish branded client experience capabilities. Compare the exact domain, email, branding, and plan limits you need on each current pricing page before migrating.",
      },
      {
        question: "Which is better for turning existing clients into retainers?",
        answer:
          "Retainr is deliberately positioned around packaging the next recurring outcome after a client has seen value. ManyRequests can bill subscriptions, but its operating model is more strongly centered on ongoing service requests.",
      },
    ],
    sources: [
      { label: "ManyRequests product overview", url: "https://manyrequests.com/" },
      {
        label: "ManyRequests white-label client portal",
        url: "https://manyrequests.com/white-label-client-portal",
      },
    ],
  },
  {
    slug: "retainr-vs-productive",
    competitor: "Productive",
    category: "Agency operations management",
    competitorUrl: "https://productive.io/",
    metaTitle: "Retainr vs Productive: Agency Software Comparison",
    title: "Retainr vs Productive: creator revenue method or agency operations suite?",
    description:
      "Compare Retainr and Productive for specialist service sales, client delivery, resource planning, agency financials, and recurring revenue workflows.",
    eyebrow: "Retainr vs Productive",
    summary:
      "Retainr and Productive overlap around client work, but they begin from different management problems. Retainr starts with making expertise easy to buy and retain. Productive starts with running an agency across budgets, utilization, resources, projects, and financial reporting.",
    status: {
      label: "Active platform",
      tone: "active",
      detail:
        "Productive currently presents a broad agency management suite covering project delivery, time, resource planning, budgeting, reporting, CRM, and increasingly advanced financial controls.",
    },
    retainrBestFor:
      "Niche freelancers, digital creators, consultants, and lean expert teams that need a polished path from packaged offer to paid onboarding, client delivery, support, and recurring work.",
    competitorBestFor:
      "Established agencies that need resource allocation, utilization, budgets, revenue forecasting, time tracking, and management reporting across a larger team.",
    verdict:
      "Choose Retainr to commercialize and retain specialist client relationships. Choose Productive when capacity planning and agency financial control are more important than a creator-led storefront and buying journey.",
    rows: [
      {
        topic: "Primary operating model",
        retainr:
          "A client revenue method that packages expertise and moves each buyer through purchase, intake, delivery, support, and renewal.",
        competitor:
          "An agency management system connecting services, budgets, projects, resource bookings, time, reporting, and financial performance.",
      },
      {
        topic: "Selling services",
        retainr:
          "Puts named offers and direct signup paths at the front of the workflow so specialists can reduce proposal friction.",
        competitor:
          "Supports CRM and service budgeting, but its strongest published differentiation sits in delivery economics and operational oversight.",
      },
      {
        topic: "Resource management",
        retainr:
          "Designed for a solo operator or compact delivery team that needs responsibilities and progress visible without enterprise planning overhead.",
        competitor:
          "Provides resource bookings, capacity views, time off, workload planning, scenario modeling, and forecast-oriented controls.",
      },
      {
        topic: "Financial visibility",
        retainr:
          "Connects orders, recurring plans, upsells, and delivery context so the expert can see the revenue relationship behind the work.",
        competitor:
          "Connects time, services, budgets, expenses, invoicing, revenue recognition, profitability, and forecasting across agency operations.",
      },
      {
        topic: "Implementation weight",
        retainr:
          "Favors a focused client journey that a small expert business can configure around a few clear offers.",
        competitor:
          "Rewards deeper setup when the business has departments, utilization targets, complex budgets, or multi-entity reporting needs.",
      },
    ],
    chooseRetainr: [
      "You sell expertise through a small number of repeatable packages or retainers.",
      "A fast, branded buyer and client experience matters more than detailed utilization planning.",
      "Your priority is growing revenue from trusted clients without building a heavy agency management layer.",
    ],
    chooseCompetitor: [
      "You manage resource allocation across a substantial team or multiple departments.",
      "Utilization, budget burn, revenue recognition, and forecasting are daily management concerns.",
      "You need agency-wide operational reporting more than a niche service storefront.",
    ],
    questions: [
      {
        question: "Is Productive a direct Retainr replacement?",
        answer:
          "Only for some workflows. Productive is broader and deeper in agency operations; Retainr is more focused on the commercial and client journey of an expert-led service business.",
      },
      {
        question: "Which platform is simpler for a solo consultant?",
        answer:
          "Retainr is the more focused fit when the consultant wants to package, sell, onboard, deliver, and retain clients. Productive may be more system than a solo operator needs unless detailed budgets and resource planning are essential.",
      },
      {
        question: "Which is better for agency profitability reporting?",
        answer:
          "Productive publishes substantially deeper agency financial and resource reporting. Retainr focuses on revenue continuity and the client operating experience rather than replacing a full professional-services finance stack.",
      },
    ],
    sources: [
      { label: "Productive pricing and plan features", url: "https://productive.io/pricing/" },
      {
        label: "Productive resource planner guide",
        url: "https://help.productive.io/en/articles/2179625-what-is-the-resource-planner",
      },
      {
        label: "Productive services model",
        url: "https://help.productive.io/en/articles/12048956-what-are-services",
      },
    ],
  },
  {
    slug: "retainr-vs-agencyhandy",
    competitor: "Agency Handy",
    category: "Agency client management",
    competitorUrl: "https://www.agencyhandy.com/",
    metaTitle: "Retainr vs Agency Handy: Client Software Comparison",
    title: "Retainr vs Agency Handy: the right client system for a niche service business",
    description:
      "Compare Retainr and Agency Handy for service catalogs, client portals, onboarding, project delivery, recurring billing, and white-label agency operations.",
    eyebrow: "Retainr vs Agency Handy",
    summary:
      "Both products aim to replace a patchwork of tools for client work. Retainr frames that system as a method for monetizing specialist expertise and increasing client lifetime value. Agency Handy frames it as an agency workspace spanning services, orders, projects, clients, forms, proposals, invoices, and team delivery.",
    status: {
      label: "Active platform",
      tone: "active",
      detail:
        "Agency Handy currently publishes freelancer, team, and business plans with different workspace, user, storage, branding, automation, API, and customization limits.",
    },
    retainrBestFor:
      "Independent experts and compact creator-led teams that want niche offer pages, direct paid onboarding, a branded client method, and deliberate recurring-revenue paths.",
    competitorBestFor:
      "Small agencies that want a broad operational workspace with service listings, order intake, project management, forms, proposals, billing, file feedback, time tracking, and team controls.",
    verdict:
      "Choose Retainr when the product is your specialist method and the goal is to deepen each client relationship. Choose Agency Handy when you want a conventional agency operations bundle with tiered usage limits.",
    rows: [
      {
        topic: "Commercial starting point",
        retainr:
          "Starts with a clearly packaged outcome and routes a niche prospect into the matching signup and onboarding context.",
        competitor:
          "Starts with an agency service catalog, order form, proposal, or CRM lead that becomes a client project.",
      },
      {
        topic: "Client operations",
        retainr:
          "Connects onboarding, tasks, communication, files, support, payment context, and renewal around the relationship.",
        competitor:
          "Combines clients, orders, tasks, forms, invoices, subscriptions, proposals, file feedback, and project reporting.",
      },
      {
        topic: "White labeling",
        retainr:
          "Uses the client portal and signup journey to make a specialist service feel like a coherent branded programme.",
        competitor:
          "Publishes custom domain, email, embeds, sidebar customization, scripts, and related controls on higher plans.",
      },
      {
        topic: "Growth model",
        retainr:
          "Encourages experts to convert successful first engagements into named recurring services and ongoing client value.",
        competitor:
          "Helps agencies process more leads, orders, projects, and team work inside plan-specific usage limits.",
      },
      {
        topic: "Best organizational fit",
        retainr:
          "A focused specialist brand, creator business, consultant, or lean team with a small offer portfolio.",
        competitor:
          "A small agency that wants a broad feature checklist and operational workspace at a competitive entry point.",
      },
    ],
    chooseRetainr: [
      "Your positioning depends on a specific niche, method, or transformation.",
      "You want the signup URL and onboarding experience to preserve offer and audience context.",
      "Recurring client value is a core part of the product strategy, not only a billing option.",
    ],
    chooseCompetitor: [
      "You want a wide agency feature set spanning leads, proposals, projects, billing, and file feedback.",
      "You prefer choosing a tier by workspaces, users, storage, and client-management limits.",
      "Your delivery process looks more like a general agency than a creator-led specialist method.",
    ],
    questions: [
      {
        question: "Does Agency Handy support productized services?",
        answer:
          "Yes. Its current pricing and product material include service catalogs, order forms, and productized or custom services. Review the current limits and branding controls for the plan you are considering.",
      },
      {
        question: "Which tool is more focused on niche freelancers?",
        answer:
          "Retainr is explicitly organized around niche-specific offer and signup journeys. Agency Handy serves freelancers too, but its published product structure is broader and agency-oriented.",
      },
      {
        question: "Should price decide between Retainr and Agency Handy?",
        answer:
          "Price matters, but operating fit matters more. Compare the live plans, then test the actual buyer journey, client portal, delivery workflow, branding limits, and renewal process with one representative service.",
      },
    ],
    sources: [
      { label: "Agency Handy pricing and plan comparison", url: "https://www.agencyhandy.com/pricing-plan/" },
    ],
  },
  {
    slug: "retainr-vs-plutio",
    competitor: "Plutio",
    category: "All-in-one business management",
    competitorUrl: "https://www.plutio.com/",
    metaTitle: "Retainr vs Plutio: Freelancer Software Comparison",
    title: "Retainr vs Plutio: specialist client revenue or flexible business management?",
    description:
      "Compare Retainr and Plutio for proposals, contracts, invoicing, client portals, projects, productized services, and recurring client growth.",
    eyebrow: "Retainr vs Plutio",
    summary:
      "Plutio is a flexible all-in-one business management product with a long feature directory. Retainr is a more opinionated system: turn expertise into a clear paid offer, guide the client through delivery, and make the next recurring engagement easy to understand.",
    status: {
      label: "Active platform",
      tone: "active",
      detail:
        "Plutio currently publishes a broad feature directory covering proposals, contracts, invoicing, time tracking, projects, tasks, forms, scheduling, automations, and client portals.",
    },
    retainrBestFor:
      "Digital creators and niche experts who want an outcome-led offer system and a focused method for turning successful client work into recurring revenue.",
    competitorBestFor:
      "Freelancers and small businesses that want a configurable general-purpose workspace with proposals, contracts, time tracking, invoicing, scheduling, and project administration.",
    verdict:
      "Choose Retainr for a stronger specialist selling and retention method. Choose Plutio for a broad, configurable back office when proposals, contracts, calendars, and time administration are the priority.",
    rows: [
      {
        topic: "Product philosophy",
        retainr:
          "Opinionated around the client revenue journey: package, sell, onboard, deliver, support, and retain.",
        competitor:
          "Flexible around a wide range of business workflows, templates, documents, projects, time, and client administration.",
      },
      {
        topic: "Pre-sale workflow",
        retainr:
          "Uses clear offers and paid signup paths to reduce the amount of bespoke proposal work needed for repeatable services.",
        competitor:
          "Publishes proposal, contract, form, scheduling, and CRM capabilities for businesses that prefer a document-led sales process.",
      },
      {
        topic: "Client portal",
        retainr:
          "Makes the portal the home of the specialist relationship, including delivery, support, and the route to the next service.",
        competitor:
          "Provides branded portal access to projects, tasks, files, invoices, payments, conversations, and client-specific visibility.",
      },
      {
        topic: "Administration depth",
        retainr:
          "Keeps the system focused on paid client work and revenue continuity for a lean expert business.",
        competitor:
          "Covers a wider set of administrative surfaces, including time tracking, scheduling, proposals, contracts, and customizable records.",
      },
      {
        topic: "Recurring revenue",
        retainr:
          "Treats recurring value as a deliberate next step after proof, with packages and client context kept together.",
        competitor:
          "Supports recurring invoices and ongoing client management inside a broader business toolkit.",
      },
    ],
    chooseRetainr: [
      "You want to sell a repeatable outcome without recreating a proposal for every similar client.",
      "Your client portal should present a guided specialist method rather than a flexible collection of business modules.",
      "Increasing revenue per existing client is the main reason for changing systems.",
    ],
    chooseCompetitor: [
      "You need proposals, contracts, scheduling, time tracking, and invoicing in one configurable workspace.",
      "Your engagements are highly bespoke and remain document-led before work begins.",
      "You value a broad feature directory more than an opinionated productization method.",
    ],
    questions: [
      {
        question: "Is Plutio cheaper than Retainr?",
        answer:
          "Plutio publishes entry pricing and add-ons on its live pricing page, while Retainr maintains its plans in a public pricing page. Compare the total configuration you need, especially seats, white labeling, custom domains, and payment requirements.",
      },
      {
        question: "Does Plutio have a client portal?",
        answer:
          "Yes. Plutio documents a branded client portal with configurable visibility for projects, tasks, files, invoices, payments, and conversations.",
      },
      {
        question: "Which is better for productizing a service?",
        answer:
          "Retainr is more explicitly built around turning a specialist outcome into a paid, repeatable offer and then a recurring relationship. Plutio can support productized workflows, but it remains a broader business management toolkit.",
      },
    ],
    sources: [
      { label: "Plutio feature directory", url: "https://www.plutio.com/features/directory" },
      { label: "Plutio pricing", url: "https://www.plutio.com/pricing" },
      { label: "Plutio client portal", url: "https://www.plutio.com/features/client-portal" },
    ],
  },
  {
    slug: "retainr-vs-stan-store",
    competitor: "Stan Store",
    category: "Creator storefront",
    competitorUrl: "https://stan.store/",
    metaTitle: "Retainr vs Stan Store: Creator Platform Comparison",
    title: "Retainr vs Stan Store: client services or a link-in-bio creator store?",
    description:
      "Compare Retainr and Stan Store for digital products, coaching, service packages, client onboarding, delivery, portals, and recurring creator revenue.",
    eyebrow: "Retainr vs Stan Store",
    summary:
      "Stan Store is designed to monetize an audience through a mobile-friendly creator storefront. Retainr is designed to turn expertise into an ongoing client operating relationship. The distinction is storefront-led digital commerce versus service-led client delivery.",
    status: {
      label: "Active platform",
      tone: "different",
      detail:
        "Stan currently promotes digital downloads, courses, coaching calls, webinars, memberships, subscriptions, email marketing, analytics, AutoDM, and a link-in-bio storefront across Creator and Creator Pro plans.",
    },
    retainrBestFor:
      "Experts who sell hands-on services, audits, implementation, advisory, production, support, or retainers that require intake, communication, files, tasks, and ongoing client context.",
    competitorBestFor:
      "Audience-first creators who mainly sell downloads, courses, memberships, webinars, coaching bookings, and lead magnets from a social link-in-bio store.",
    verdict:
      "Choose Retainr when the buyer becomes a client who needs structured delivery. Choose Stan when the buyer mainly needs storefront checkout and access to creator products, content, or bookings.",
    rows: [
      {
        topic: "Primary buyer journey",
        retainr:
          "A prospect chooses a specialist service and becomes a client with an intake, delivery workspace, support path, and next offer.",
        competitor:
          "A follower opens a link-in-bio store and buys a download, course, webinar, coaching call, membership, or subscription.",
      },
      {
        topic: "What happens after payment",
        retainr:
          "The paid order moves into structured onboarding, project work, communication, files, support, and relationship management.",
        competitor:
          "The buyer receives product access, course or community access, a booked call, or another creator-commerce fulfillment path.",
      },
      {
        topic: "Marketing tools",
        retainr:
          "Focuses on offer-specific signup links, client revenue workflows, automation, and the upcoming Magic Prospections capability.",
        competitor:
          "Publishes email marketing, lead magnets, Instagram AutoDM, funnels, pixels, affiliates, upsells, and order bumps depending on plan.",
      },
      {
        topic: "Client collaboration",
        retainr:
          "Built around client communication, tasks, files, support requests, delivery visibility, and recurring service context.",
        competitor:
          "Built around creator-store purchases and audience monetization rather than a full project and support workspace for service clients.",
      },
      {
        topic: "Revenue model",
        retainr:
          "Optimizes for high-trust service packages and deeper recurring revenue from clients who need ongoing outcomes.",
        competitor:
          "Optimizes for selling creator products, content, access, and calls to an audience at storefront scale.",
      },
    ],
    chooseRetainr: [
      "Clients need to provide context, review work, share files, request support, or follow delivery progress.",
      "Your highest-value offer is implementation, consulting, production, or an ongoing service retainer.",
      "You want one branded client workspace to continue long after checkout.",
    ],
    chooseCompetitor: [
      "Most revenue comes from courses, downloads, memberships, webinars, or coaching bookings.",
      "Your social profile and link-in-bio storefront are the center of customer acquisition.",
      "Email marketing, AutoDM, funnels, affiliates, and creator-commerce tools matter more than project delivery.",
    ],
    questions: [
      {
        question: "Can Stan Store sell coaching?",
        answer:
          "Yes. Stan publishes booking and coaching-call features alongside courses, digital products, webinars, memberships, subscriptions, and community features.",
      },
      {
        question: "Can Retainr sell digital creator expertise?",
        answer:
          "Yes. Retainr is strongest when that expertise includes a service, implementation, accountability, support, or another client outcome that benefits from guided onboarding and ongoing delivery.",
      },
      {
        question: "Could a creator use both?",
        answer:
          "Potentially. A creator could use a storefront for lower-touch audience products and Retainr for higher-touch services and retainers. The extra tool is worthwhile only if the two buyer journeys are genuinely different.",
      },
    ],
    sources: [
      { label: "Stan creator store overview", url: "https://stan.store/" },
      { label: "Stan Creator and Creator Pro plan guide", url: "https://help.stan.store/article/31-creator-vs-creator-pro" },
    ],
  },
  {
    slug: "retainr-vs-bloom",
    competitor: "Bloom",
    category: "CRM for creative professionals",
    competitorUrl: "https://bloom.io/",
    metaTitle: "Retainr vs Bloom: Creative CRM Comparison",
    title: "Retainr vs Bloom: which client platform fits an independent creative?",
    description:
      "Compare Retainr and Bloom for CRM, lead capture, booking, contracts, invoicing, galleries, client portals, workflows, and recurring services.",
    eyebrow: "Retainr vs Bloom",
    summary:
      "Bloom is a broad CRM and studio workspace for creative professionals, with strong booking, contracts, invoicing, galleries, websites, and lead-management coverage. Retainr is more focused on packaging specialist services and systematically expanding successful client work into recurring revenue.",
    status: {
      label: "Active platform",
      tone: "active",
      detail:
        "Bloom currently publishes plans for side jobs, solo businesses, and small teams, with projects, invoicing, workflows, portals, scheduling, contracts, websites, chat, leads, packages, galleries, and automations.",
    },
    retainrBestFor:
      "Niche freelancers and digital experts whose value is a repeatable service method, especially when post-sale delivery, support, and recurring packages matter more than portfolio galleries or a website builder.",
    competitorBestFor:
      "Photographers, videographers, studios, and other creative professionals who need lead capture, booking, contracts, invoices, visual galleries, portfolio websites, and mobile communication in one CRM.",
    verdict:
      "Choose Retainr for service productization and recurring client operations. Choose Bloom when a creative CRM, booking flow, contracts, portfolio site, and visual asset delivery are the defining needs.",
    rows: [
      {
        topic: "Primary workflow",
        retainr:
          "Packages a specialist outcome, collects payment and context, guides delivery, handles support, and introduces the next recurring service.",
        competitor:
          "Captures a lead, manages the relationship, books work, signs a contract, invoices, schedules, delivers assets, and follows up.",
      },
      {
        topic: "Creative asset delivery",
        retainr:
          "Supports files and project delivery as part of a broader service relationship and client portal.",
        competitor:
          "Publishes dedicated galleries, albums, video embeds, favorites, download permissions, activity, storage, and portal integration.",
      },
      {
        topic: "Web presence",
        retainr:
          "Centers the service offer and branded client experience rather than replacing a full public portfolio website builder.",
        competitor:
          "Includes professional website and portfolio capabilities, custom domains, templates, SEO controls, and optional additional sites.",
      },
      {
        topic: "Communication and mobile",
        retainr:
          "Keeps client messages, requests, files, tasks, and support tied to the active service relationship.",
        competitor:
          "Publishes a live messenger widget, email sync, attachments, branding controls, and mobile-app support.",
      },
      {
        topic: "Growth model",
        retainr:
          "Builds a deliberate ladder from entry service to core engagement to recurring client plan.",
        competitor:
          "Builds an end-to-end creative CRM path from lead capture and booking through delivery, invoicing, automation, and referrals.",
      },
    ],
    chooseRetainr: [
      "Your offer is an audit, advisory engagement, implementation sprint, managed service, or retainer.",
      "You want niche-specific signup context and a visible method for moving clients toward recurring value.",
      "Visual galleries and a portfolio website builder are not central requirements.",
    ],
    chooseCompetitor: [
      "You deliver photography, video, or other visual assets through client galleries.",
      "Booking, contracts, scheduling, lead management, and a portfolio website need to live together.",
      "A mobile communication workflow is a major selection criterion.",
    ],
    questions: [
      {
        question: "Does Bloom have native mobile support?",
        answer:
          "Bloom's current pricing comparison lists mobile-app support for its messenger workflow. Confirm current app availability and platform support directly before choosing it for a mobile-critical process.",
      },
      {
        question: "Which is better for photographers?",
        answer:
          "Bloom has the stronger published photography and visual-studio fit because it includes galleries, asset delivery, booking, contracts, websites, and creative CRM workflows. Retainr fits better when the photography business is selling structured ongoing services beyond asset delivery.",
      },
      {
        question: "Which is better for recurring consulting services?",
        answer:
          "Retainr is more intentionally organized around packaging expertise and developing a recurring client plan. Bloom can manage recurring invoices and relationships, but its broader differentiation is creative-business CRM.",
      },
    ],
    sources: [
      { label: "Bloom pricing and feature comparison", url: "https://bloom.io/pricing" },
      { label: "Bloom CRM", url: "https://bloom.io/features/crm" },
      { label: "Bloom invoicing and payments", url: "https://bloom.io/features/invoicing-and-payments" },
    ],
  },
  {
    slug: "retainr-vs-spiffy",
    competitor: "Spiffy",
    category: "Checkout and revenue platform",
    competitorUrl: "https://spiffy.co/",
    metaTitle: "Retainr vs Spiffy: Checkout or Client Delivery?",
    title: "Retainr vs Spiffy: client delivery system or conversion-focused checkout?",
    description:
      "Compare Retainr and Spiffy for service packages, checkout conversion, subscriptions, payment plans, upsells, affiliates, client portals, and delivery.",
    eyebrow: "Retainr vs Spiffy",
    summary:
      "Spiffy concentrates on the revenue moment: checkouts, subscriptions, payment plans, upsells, billing recovery, affiliates, automation, and analytics. Retainr connects the sale to what happens next: intake, client delivery, communication, support, and the long-term service relationship.",
    status: {
      label: "Active platform",
      tone: "different",
      detail:
        "Spiffy currently positions itself as a revenue platform for creator brands, agencies, education companies, SaaS teams, service businesses, and digital-product sellers.",
    },
    retainrBestFor:
      "Specialists whose buyers become active clients and need a structured workspace for onboarding, delivery, collaboration, support, and ongoing service value.",
    competitorBestFor:
      "Online sellers that need sophisticated checkout pages, payment plans, subscriptions, order bumps, upsell flows, affiliates, billing recovery, integrations, and revenue analytics.",
    verdict:
      "Choose Retainr when delivery and retention are as important as checkout. Choose Spiffy when conversion architecture and billing operations are the main problem and fulfillment already lives elsewhere.",
    rows: [
      {
        topic: "Center of gravity",
        retainr:
          "The complete paid client relationship, from packaged offer through delivery, support, and renewal.",
        competitor:
          "Checkout conversion and revenue operations, from purchase options through subscriptions, upsells, affiliates, recovery, and analytics.",
      },
      {
        topic: "Checkout flexibility",
        retainr:
          "Connects paid signup links and service packages directly to the relevant onboarding and delivery workflow.",
        competitor:
          "Publishes extensive checkout controls, custom fields, embeds, domains, options, order bumps, one-click offers, and branching upsell flows.",
      },
      {
        topic: "Recurring billing",
        retainr:
          "Uses recurring packages as part of an ongoing client outcome and visible delivery relationship.",
        competitor:
          "Provides deep subscription and payment-plan controls, customer billing self-service, failed-payment automation, and revenue reporting.",
      },
      {
        topic: "Fulfillment",
        retainr:
          "Includes the client-facing work layer: intake, projects, tasks, communication, files, support requests, and progress.",
        competitor:
          "Connects purchases to CRMs, course platforms, automations, webhooks, and external fulfillment systems rather than replacing all delivery tools.",
      },
      {
        topic: "Analytics",
        retainr:
          "Emphasizes order, client, upsell, renewal, and relationship signals around the service lifecycle.",
        competitor:
          "Publishes checkout conversion, subscription health, payment-plan, failed-payment, affiliate, revenue, forecast, and export reporting.",
      },
    ],
    chooseRetainr: [
      "The purchase begins a hands-on client workflow with milestones, files, communication, or support.",
      "You want the same branded system to handle both delivery and the path to renewal.",
      "Your offers are specialist services rather than high-volume digital-product funnels.",
    ],
    chooseCompetitor: [
      "You need advanced checkout options, upsells, payment plans, subscription controls, or affiliate programs.",
      "Your existing CRM, course, community, or fulfillment system already handles delivery well.",
      "Checkout conversion and billing recovery are more urgent than consolidating client work.",
    ],
    questions: [
      {
        question: "Does Spiffy charge an extra transaction fee?",
        answer:
          "Spiffy's current pricing page states 0% Spiffy transaction fees on its listed plans, excluding the normal fees charged by connected processors, gateways, card networks, or merchant accounts.",
      },
      {
        question: "Does Spiffy include a customer portal?",
        answer:
          "Yes, but it is primarily a billing self-service portal for receipts, card updates, subscription actions, and eligible cancellations. That is different from a project and support workspace for service delivery.",
      },
      {
        question: "Could Retainr and Spiffy be used together?",
        answer:
          "Potentially, if a business needs Spiffy's advanced checkout and Retainr's client delivery layer. First test whether the handoff preserves offer, payment, and customer context without creating duplicate records or a confusing client experience.",
      },
    ],
    sources: [
      { label: "Spiffy product demo and feature overview", url: "https://spiffy.co/demo/" },
      { label: "Spiffy pricing and plan comparison", url: "https://spiffy.co/pricing" },
    ],
  },
  {
    slug: "retainr-vs-midday",
    competitor: "Midday",
    category: "Open-source financial operating system",
    competitorUrl: "https://midday.ai/",
    metaTitle: "Retainr vs Midday After Its Ramp Acquisition",
    title: "Retainr vs Midday after the Ramp acquisition: what should freelancers choose?",
    description:
      "Understand the May 2026 Midday wind-down, compare its financial operating system with Retainr, and choose a durable client workflow for freelance services.",
    eyebrow: "Retainr vs Midday",
    summary:
      "Midday built an admired open-source financial operating system for transactions, invoices, time, receipts, files, and business insights. This is no longer a normal product comparison: Midday announced on 7 May 2026 that its team is joining Ramp and that the Midday product will wind down.",
    status: {
      label: "Wind-down announced",
      tone: "transition",
      detail:
        "Midday and Ramp announced on 7 May 2026 that Midday is joining Ramp. Midday said the product would wind down over the following three months and existing customers would have a 90-day period for access and data export.",
    },
    retainrBestFor:
      "Freelancers and expert-led teams that need an active, client-facing system for packaging services, paid onboarding, delivery, support, and recurring relationships.",
    competitorBestFor:
      "Midday is not a sensible new hosted-product choice during its announced wind-down. Its open-source code and product ideas may still matter to developers willing to evaluate repository status and self-hosting responsibility.",
    verdict:
      "Do not begin a new hosted Midday workflow without checking its current transition status. Choose Retainr for an active service-client operating workflow; choose a maintained finance or accounting product separately if bank feeds, reconciliation, and bookkeeping preparation are required.",
    rows: [
      {
        topic: "Current availability",
        retainr:
          "An active platform for creating offers, onboarding clients, managing delivery, handling support, and building recurring service revenue.",
        competitor:
          "The hosted product entered a wind-down after the May 2026 Ramp announcement, with customer migration and export guidance communicated directly.",
      },
      {
        topic: "Primary purpose",
        retainr:
          "Runs the commercial and delivery relationship between a specialist and a paying client.",
        competitor:
          "Connected banking, transactions, invoicing, reconciliation, time tracking, receipts, documents, metrics, and accounting exports.",
      },
      {
        topic: "Client experience",
        retainr:
          "Provides offers, niche-aware signup, onboarding, a branded portal, projects, communication, files, and support.",
        competitor:
          "Focused on business finance and admin; clients primarily interacted through invoices and payments rather than a full service-delivery portal.",
      },
      {
        topic: "Open source",
        retainr:
          "A managed commercial platform focused on the client revenue workflow.",
        competitor:
          "Built openly with a substantial developer community; future repository maintenance and self-hosting suitability must be checked directly.",
      },
      {
        topic: "Migration priority",
        retainr:
          "Rebuild the client-facing offer, intake, delivery, support, and renewal workflow.",
        competitor:
          "Export financial records first, then choose maintained tools for banking, reconciliation, accounting preparation, invoicing, and time as needed.",
      },
    ],
    chooseRetainr: [
      "You need an active hosted system for selling and delivering expert services.",
      "Clients require a branded portal, intake, project context, communication, files, or support.",
      "You want to turn completed work into an ongoing retainer or recurring service plan.",
    ],
    chooseCompetitor: [
      "Do not choose the hosted Midday product as a new long-term system without first verifying its post-wind-down availability.",
      "Evaluate its open-source repository only if you accept deployment, maintenance, security, compliance, and data-operations responsibility.",
      "Use Midday's published export path if you are an existing customer who still needs to retrieve data.",
    ],
    questions: [
      {
        question: "Is Midday still an active standalone SaaS product?",
        answer:
          "Midday announced on 7 May 2026 that its team was joining Ramp and that the product would wind down over the next three months. Check Midday and Ramp's current notices before relying on any remaining hosted access.",
      },
      {
        question: "Is Retainr a replacement for Midday's accounting features?",
        answer:
          "No. Retainr is a client revenue and service-delivery platform. It should not be represented as a replacement for bank feeds, transaction reconciliation, receipt matching, bookkeeping preparation, or accounting exports.",
      },
      {
        question: "What should an existing Midday user migrate first?",
        answer:
          "Follow Midday's official export guidance and preserve financial records first. Then separate the needs: choose maintained finance and accounting tools for the books, and use Retainr if you also need a stronger client offer, onboarding, delivery, support, and renewal system.",
      },
    ],
    sources: [
      { label: "Midday wind-down announcement", url: "https://midday.ai/updates/joining-ramp/" },
      { label: "Ramp acquisition announcement dated 7 May 2026", url: "https://ramp.com/blog/midday-joining-ramp" },
      { label: "Midday product documentation", url: "https://midday.ai/docs/introduction/" },
    ],
  },
  {
    slug: "retainr-vs-freelance-cake",
    competitor: "Freelance Cake",
    category: "Freelance coaching and education",
    competitorUrl: "https://www.freelancecake.com/",
    metaTitle: "Retainr vs Freelance Cake: Software or Coaching?",
    title: "Retainr vs Freelance Cake: software system or freelance business coaching?",
    description:
      "Compare Retainr and Freelance Cake for freelance positioning, packaging, pricing, pipeline, process, coaching, client delivery, and recurring revenue.",
    eyebrow: "Retainr vs Freelance Cake",
    summary:
      "Freelance Cake is not a client-management SaaS competitor in the usual sense. It teaches freelance business skills through content, community, products, and coaching. Retainr provides software for putting a packaged client method into operation. The more useful question is whether you need judgment, implementation infrastructure, or both.",
    status: {
      label: "Different category",
      tone: "different",
      detail:
        "Freelance Cake currently presents coaching, a community, a newsletter, a shop, books, and educational frameworks for ambitious freelance creatives and consultants.",
    },
    retainrBestFor:
      "Freelancers who already know the offer they want to sell and need the operational system for signup, onboarding, delivery, support, and recurring client revenue.",
    competitorBestFor:
      "Freelancers who need strategic help with positioning, packaging, pricing, pipeline, psychology, process, confidence, or business decision-making.",
    verdict:
      "Choose Retainr when the gap is execution infrastructure. Choose Freelance Cake when the gap is strategy, judgment, or accountability. They can be complementary because coaching can define the method that Retainr then operationalizes.",
    rows: [
      {
        topic: "What you are buying",
        retainr:
          "A software platform and operating method for presenting, selling, onboarding, delivering, supporting, and renewing client services.",
        competitor:
          "Education, frameworks, community, content, products, and coaching intended to improve the freelancer's business decisions and behavior.",
      },
      {
        topic: "Packaging and pricing",
        retainr:
          "Turns an already-defined service into a visible package, signup path, client workflow, and recurring plan.",
        competitor:
          "Helps freelancers think through positioning, packaging, pricing, pipeline, psychology, and process through the published 6 P's framework.",
      },
      {
        topic: "Client operations",
        retainr:
          "Manages payment context, onboarding, projects, communication, files, support requests, and renewal opportunities.",
        competitor:
          "Does not present itself as the software workspace where clients buy, submit intake, review delivery, or request support.",
      },
      {
        topic: "Accountability",
        retainr:
          "Creates structural accountability through repeatable workflows, visible client state, and a consistent operating system.",
        competitor:
          "Provides human or community accountability through coaching, peer context, educational material, and strategic guidance.",
      },
      {
        topic: "Best sequence",
        retainr:
          "Implement once the offer and service promise are clear enough to make repeatable.",
        competitor:
          "Use earlier when the business still needs clarity on whom to serve, what to sell, what to charge, or how to build a pipeline.",
      },
    ],
    chooseRetainr: [
      "You can already explain your offer, target client, deliverables, boundaries, and recurring next step.",
      "Your pain is scattered signup, onboarding, communication, delivery, support, or renewal operations.",
      "You need clients to experience a consistent branded method, not another educational resource.",
    ],
    chooseCompetitor: [
      "You are still uncertain about positioning, packaging, pricing, or how to build a dependable pipeline.",
      "You need experienced feedback, business coaching, or peer accountability more than software.",
      "You want to strengthen freelance decision-making before systemizing a process.",
    ],
    questions: [
      {
        question: "Is Freelance Cake client management software?",
        answer:
          "No. Its current site presents coaching, community, newsletter content, products, books, and freelance business education rather than a SaaS client portal or delivery platform.",
      },
      {
        question: "Can Freelance Cake and Retainr be used together?",
        answer:
          "Yes. Coaching or education can help define a stronger positioning, package, and pricing model; Retainr can then turn that strategy into a repeatable client buying and delivery workflow.",
      },
      {
        question: "Which one will help me earn more?",
        answer:
          "That depends on the constraint. If the offer and pipeline are unclear, strategic guidance may be the higher-leverage investment. If demand exists but delivery and renewals are scattered, operationalizing the service in Retainr may create more immediate value.",
      },
    ],
    sources: [
      { label: "Freelance Cake overview and 6 P's framework", url: "https://www.freelancecake.com/" },
      { label: "Freelance Cake coaching", url: "https://www.freelancecake.com/coaching" },
    ],
  },
  {
    slug: "retainr-vs-clientmanager",
    competitor: "ClientManager",
    category: "Client management software",
    competitorUrl: "https://www.clientmanager.io/",
    metaTitle: "Retainr vs ClientManager: Freelancer Software",
    title: "Retainr vs ClientManager: which system should a freelancer use?",
    description:
      "Compare Retainr and ClientManager for CRM, client portals, leads, proposals, contracts, projects, invoicing, onboarding, and recurring service growth.",
    eyebrow: "Retainr vs ClientManager",
    summary:
      "ClientManager provides a conventional all-in-one client administration workflow from lead and proposal through contract, project, time, invoice, and portal. Retainr is more opinionated about the offer itself: make specialist expertise easy to buy, guide delivery through your brand, and create a natural route to recurring value.",
    status: {
      label: "Active platform",
      tone: "active",
      detail:
        "ClientManager currently publishes solo, team, and enterprise options with limits for users, collaborators, clients, portals, and storage, plus a broad client-management feature set.",
    },
    retainrBestFor:
      "Niche freelancers, consultants, digital creators, and specialist teams that want productized signup flows and a deliberate recurring-revenue method around each client relationship.",
    competitorBestFor:
      "Freelancers and agencies that want a familiar CRM-to-project workflow with leads, deals, proposals, contracts, questionnaires, calendars, time tracking, invoices, and client portals.",
    verdict:
      "Choose Retainr when you want to productize a specialist method and grow existing-client revenue. Choose ClientManager when you want broad client administration with proposals, contracts, time, and CRM as the dominant workflow.",
    rows: [
      {
        topic: "Sales workflow",
        retainr:
          "Reduces repeat proposal work by directing suitable prospects into clear paid service packages and matching intake flows.",
        competitor:
          "Tracks leads and deals, then uses products, proposals, contracts, questionnaires, and invoices to move a prospect into delivery.",
      },
      {
        topic: "Client portal",
        retainr:
          "Presents the ongoing specialist method, delivery state, communication, files, support, and path to the next service.",
        competitor:
          "Provides a secure client space for meetings, collaboration, documents, project status, communication, and portal dashboards.",
      },
      {
        topic: "Project administration",
        retainr:
          "Keeps project and support execution tied to the purchased offer and recurring client relationship.",
        competitor:
          "Publishes projects, tasks, team assignment, Kanban collaboration, calendars, time tracking, and profitability-oriented hour visibility.",
      },
      {
        topic: "Documents and billing",
        retainr:
          "Centers package purchase and recurring service revenue as part of the same branded client journey.",
        competitor:
          "Publishes reusable proposals, legally binding contracts, e-signatures, recurring invoices, online payments, and revenue per client.",
      },
      {
        topic: "Growth method",
        retainr:
          "Encourages an entry offer, core engagement, and recurring plan that expands a proven relationship.",
        competitor:
          "Improves operational control across the standard lead-to-client and project-management lifecycle.",
      },
    ],
    chooseRetainr: [
      "You want prospects to buy a repeatable service without a proposal-heavy process every time.",
      "Your brand, niche method, and next recurring offer should remain visible throughout delivery.",
      "The primary goal is increasing client lifetime value through clearer service packaging.",
    ],
    chooseCompetitor: [
      "You need built-in proposals, contracts, e-signatures, deal management, calendars, and time tracking.",
      "Your work remains bespoke and benefits from a traditional CRM-to-proposal-to-project sequence.",
      "You prefer plans defined by clients, portals, collaborators, users, and storage limits.",
    ],
    questions: [
      {
        question: "Does ClientManager include proposals and contracts?",
        answer:
          "Yes. Its current feature pages publish proposal templates and status management, contract templates, version controls, legally binding signatures, and notifications.",
      },
      {
        question: "Which is better for a solo freelancer?",
        answer:
          "Both target solo operators. Retainr is the stronger fit for productized specialist offers and recurring client value; ClientManager is the stronger fit when leads, proposals, contracts, time, calendars, and invoices must be managed in one conventional workflow.",
      },
      {
        question: "What should I test before migrating?",
        answer:
          "Run one representative client from first enquiry through payment, onboarding, delivery, revision, support, invoice or renewal, and offboarding. The best platform is the one that reduces client confusion and operator effort across that entire journey.",
      },
    ],
    sources: [
      { label: "ClientManager features", url: "https://www.clientmanager.io/features" },
      { label: "ClientManager pricing and plan limits", url: "https://www.clientmanager.io/pricing" },
    ],
  },
];

export const comparisonLinks = comparisons.map((comparison) => ({
  href: `/compare/${comparison.slug}/`,
  label: `Retainr vs ${comparison.competitor}`,
}));

export const getComparison = (slug: string | undefined) =>
  comparisons.find((comparison) => comparison.slug === slug);
