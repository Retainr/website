export type FlagshipBlogArticle = {
  slug: string;
  sourceSlug: string;
  canonicalSlug: string;
  title: string;
  description: string;
  category: string;
  audience: string;
  updatedAt: string;
  legacy: false;
  featured: true;
  image: string;
  imageAlt: string;
  sections: { title: string; body: string; points: string[] }[];
  sources: { label: string; url: string }[];
};

const updatedAt = "2026-07-29";
const smallBusinessResearchSource = {
  label: "U.S. Small Business Administration market research guidance",
  url: "https://www.sba.gov/business-guide/plan-your-business/market-research-competitive-analysis",
};

type ExtensionPlan = {
  starterOffer: string;
  evidence: string;
  metric: string;
  continuation: string;
  inputs: string[];
  risks: string[];
};

const extensionPlans: Record<string, ExtensionPlan> = {
  "how-to-rank-in-ai-search-without-chasing-algorithm-hacks": {
    starterOffer: "AI search eligibility and citation audit",
    evidence: "an indexed-page map that connects buyer questions, first-hand evidence, cited sources, internal links, and the relevant offer",
    metric: "qualified search journeys and assisted conversions from pages that earn useful visibility",
    continuation: "monthly AI search evidence, citation, and content-maintenance review",
    inputs: ["crawl and indexing status", "Search Console query data", "real buyer questions", "first-hand examples", "entity details and sources", "the commercial next step"],
    risks: ["publishing near-duplicate AI bait", "treating llms.txt as an indexing shortcut", "citing secondary summaries for changing claims", "measuring occasional citations without business outcomes"],
  },
  "how-to-get-freelance-clients-without-cold-calling": {
    starterOffer: "warm pipeline and referral opportunity review",
    evidence: "a prioritized account list that records shared context, a relevant problem, the proof to send, and one respectful next action",
    metric: "qualified conversations that progress to a defined commercial decision",
    continuation: "monthly reactivation, proof, and referral-partner operating rhythm",
    inputs: ["past clients and enquiries", "completed project results", "current offers", "warm professional relationships", "complementary specialists", "open next actions"],
    risks: ["sending generic availability announcements", "asking for referrals without useful context", "following up repeatedly without new value", "tracking contacts without recording the next decision"],
  },
  "how-to-build-recurring-revenue-without-a-large-audience": {
    starterOffer: "existing-client continuation opportunity map",
    evidence: "a revenue-capacity model showing the client need, service cadence, delivery load, margin, and reason the work should continue",
    metric: "relevant continuation-offer acceptance and retained revenue after the first 90 days",
    continuation: "a defined monthly support, production, care, or optimization plan",
    inputs: ["current and past clients", "repeated follow-on needs", "revenue target", "delivery capacity", "service economics", "proof from completed work"],
    risks: ["building a vague membership", "setting a revenue target without capacity math", "discounting to manufacture recurrence", "launching to strangers before reviewing trusted relationships"],
  },
  "how-to-use-ai-for-client-work-without-losing-your-voice": {
    starterOffer: "AI-assisted delivery workflow and voice audit",
    evidence: "a before-and-after sample with the source material, AI role, human decisions, corrections, approval owner, and final client-ready output",
    metric: "verified production time saved after review, correction, and exception handling",
    continuation: "monitored AI-assisted content or delivery operations with scheduled quality review",
    inputs: ["approved source material", "voice and terminology examples", "client confidentiality rules", "factual review owner", "acceptable AI tasks", "final approval criteria"],
    risks: ["placing confidential client data in an unapproved tool", "publishing invented facts or citations", "letting generated phrasing erase expert judgment", "automating final approval without ownership"],
  },
  "how-to-write-client-proposals-without-starting-from-scratch": {
    starterOffer: "proposal system and qualification sprint",
    evidence: "a modular proposal assembled from a qualified brief, named assumptions, relevant proof, scope boundaries, and an explicit decision path",
    metric: "time from qualified enquiry to decision, supported by revision count and close quality",
    continuation: "monthly sales-material and qualification review based on real objections",
    inputs: ["buyer problem and desired outcome", "decision process", "scope and dependencies", "relevant case evidence", "price and payment terms", "change and approval rules"],
    risks: ["templating before qualification", "hiding assumptions in polished language", "sending irrelevant case studies", "treating every revision as free discovery"],
  },
  "how-to-sell-seo-retainers-without-guaranteeing-rankings": {
    starterOffer: "search opportunity, risk, and baseline audit",
    evidence: "a baseline that records search demand, technical constraints, content gaps, conversion paths, dependencies, and the decisions the specialist controls",
    metric: "qualified organic demand and commercial contribution alongside agreed leading search indicators",
    continuation: "monthly search growth, content maintenance, and technical prioritization programme",
    inputs: ["Search Console and analytics access", "commercial priorities", "site and content history", "technical ownership", "conversion definitions", "compliance constraints"],
    risks: ["guaranteeing positions outside the consultant's control", "reporting traffic without lead quality", "ignoring implementation dependencies", "publishing content without original evidence or conversion intent"],
  },
  "in-demand-freelance-services-to-productize-without-being-a-generalist": {
    starterOffer: "productization opportunity and paid-pilot review",
    evidence: "a scored shortlist comparing repeated pain, buyer access, proof, delivery fit, margin, urgency, and potential for continued work",
    metric: "paid-pilot conversion, delivery margin, and repeat demand for the chosen buyer-problem pair",
    continuation: "monthly optimization or support around the outcome proven by the first package",
    inputs: ["best past projects", "repeated client questions", "delivery time and margin", "available proof", "buyer access", "follow-on needs"],
    risks: ["choosing from trend lists alone", "bundling unrelated skills", "naming a niche without a repeated problem", "scaling promotion before one paid pilot works"],
  },
  "how-to-follow-up-with-leads-without-being-pushy": {
    starterOffer: "open-pipeline and follow-up reset",
    evidence: "a decision ledger showing the shared context, buyer question, promised next step, useful new information, timing, and close-the-loop rule",
    metric: "qualified opportunities that progress to a clear yes, no, or later decision",
    continuation: "weekly pipeline review with one recorded next action per active opportunity",
    inputs: ["original enquiry context", "buyer objective", "last agreed action", "decision timing", "relevant proof or clarification", "permission to continue"],
    risks: ["sending empty check-ins", "manufacturing false urgency", "using the same cadence for every buyer", "keeping silent leads open indefinitely"],
  },
  "how-to-build-a-client-portal-without-stitching-together-five-tools": {
    starterOffer: "client journey and tool-fragmentation audit",
    evidence: "a current-state map showing every client action, system handoff, duplicated record, permission boundary, delay, and proposed source of truth",
    metric: "time to the client's next action, avoidable support volume, and time spent reconstructing context",
    continuation: "monthly client-operations maintenance and workflow improvement",
    inputs: ["offer and payment path", "intake forms", "project and file systems", "support channels", "approval steps", "client access requirements"],
    risks: ["adding a portal without removing duplicate paths", "migrating records without ownership", "weak permissions for sensitive files", "forcing clients to learn an internal tool structure"],
  },
  "how-to-turn-one-off-clients-into-retainers-without-discounting": {
    starterOffer: "post-project opportunity and continuity review",
    evidence: "a completion review that shows the delivered result, remaining risk, next valuable outcome, appropriate cadence, and cost of leaving the need unmanaged",
    metric: "relevant continuation-offer acceptance and retention without reducing the established rate",
    continuation: "a monthly protection, support, production, care, or optimization plan",
    inputs: ["delivered result", "unresolved risks", "new baseline", "client priorities", "required cadence", "capacity and response boundaries"],
    risks: ["selling access instead of an outcome", "introducing the retainer only after the project closes", "discounting unchanged work", "proposing recurrence where the need is genuinely complete"],
  },
  "how-to-productize-a-service-without-building-a-course": {
    starterOffer: "service package design and delivery rehearsal",
    evidence: "a live offer showing the buyer, outcome, scope, timeline, price, intake, first milestone, exclusions, and the next service when successful",
    metric: "qualified package conversion, delivery margin, and time to first client value",
    continuation: "a recurring done-for-you, done-with-you, review, or support service",
    inputs: ["repeated client problem", "expert decisions required", "deliverables and exclusions", "delivery capacity", "proof", "follow-on need"],
    risks: ["turning expertise into lessons when clients need implementation", "standardizing the wrong work", "hiding scope to appear flexible", "building automation before rehearsing delivery"],
  },
  "how-to-onboard-clients-without-back-and-forth-email": {
    starterOffer: "client onboarding friction and readiness audit",
    evidence: "an offer-specific onboarding path that records what is collected, why it matters, who reviews it, the first milestone, and what happens when an input is missing",
    metric: "time from payment to a complete first milestone, supported by intake completion and clarification volume",
    continuation: "monthly client-operations and onboarding optimization",
    inputs: ["purchased offer", "required decisions", "minimum starting assets", "client and internal owners", "first milestone", "exception and escalation path"],
    risks: ["using one generic questionnaire", "asking for information before explaining why", "collecting sensitive data without controls", "starting delivery with unresolved dependencies"],
  },
};

const deepeningSections = (
  article: Pick<FlagshipBlogArticle, "slug" | "audience">
) => {
  const plan = extensionPlans[article.slug];

  if (!plan) return [];
  const starterArticle = /^[aeiou]/i.test(plan.starterOffer) ? "an" : "a";

  return [
    {
      title: "Choose one operational definition of success",
      body: `Before changing the workflow described in this guide, write down the decision or behaviour that should improve and the evidence that would justify that conclusion. The primary measure is ${plan.metric}. Record the definition, baseline, measurement window, and owner before changing the process. Add a small number of diagnostic signals only when they explain the commercial result. This prevents ${article.audience} from replacing vague activity with a more elaborate dashboard that still cannot guide the next decision.`,
      points: [
        `Primary measure: ${plan.metric}`,
        "Record the baseline before changing the process",
        "Use the same definition before and after",
        "Name who reviews the evidence and decides what happens next",
      ],
    },
    {
      title: "Turn the advice into a fixed starting engagement",
      body: `A reader should be able to use this guide independently, but some buyers will need expert diagnosis and implementation. A credible first paid step is ${starterArticle} ${plan.starterOffer}. Publish who it is for, the question it resolves, the evidence reviewed, the deliverable, timeline, price, and exclusions. Keep it small enough to create a real decision before a larger commitment. This gives the client a useful result and lets the specialist qualify fit without writing unpaid custom strategy for every enquiry.`,
      points: [
        `Starter offer: ${plan.starterOffer}`,
        "Promise one decision, plan, or visible result",
        "State price, timeline, dependencies, and exclusions",
        "Connect the package directly to its own onboarding path",
      ],
    },
    {
      title: "Collect the minimum evidence required to begin",
      body: `Work backward from the first useful decision and request only information that changes how work starts. Explain why each sensitive input is required, who can access it, and how missing context affects the timeline. Review the intake within one business day and ask focused follow-up questions inside the client record. Long generic questionnaires create abandonment while still missing the evidence the expert needs. For this workflow, the starting brief should cover the following inputs.`,
      points: plan.inputs,
    },
    {
      title: "Run a pre-mortem before automating or scaling",
      body: `Imagine the work has produced a poor client outcome despite being delivered on time. Identify the assumptions, access gaps, approval failures, and misleading measures most likely to cause it. Turn each risk into a scope boundary, checklist item, review gate, permission rule, or visible exception path. The goal is not bureaucracy. It is to preserve the judgment the client is paying for while making repeated delivery safer and easier to improve.`,
      points: plan.risks.map((risk) => `Prevent ${risk}`),
    },
    {
      title: "Use AI as an assistant with a named human owner",
      body: `AI can accelerate research, classification, transformation, drafting, and repetitive analysis, but it should not obscure responsibility. Decide which inputs are permitted, what claims require verification, where first-hand expertise must replace generated language, and who approves the final output. Keep confidential client material out of unapproved systems. Save the source, prompt context, material edits, and final decision when the work affects a client recommendation. The efficiency is only real after review and correction time are included.`,
      points: [
        "Classify client data before using an AI tool",
        "Verify changing facts against primary sources",
        "Keep diagnosis, exceptions, and sensitive communication human",
        "Measure time saved after review, correction, and failure handling",
      ],
    },
    {
      title: "Create proof a future buyer can inspect",
      body: `A polished final screenshot is not enough. Build ${plan.evidence}. Explain the starting condition, relevant constraint, expert decision, implementation, measurement window, result, and what remains uncertain. Remove confidential details and do not imply causation the evidence cannot support. Strong proof helps a future buyer understand how you think, while a current client can see what changed and why the next recommendation is relevant.`,
      points: [
        "Show the starting condition and commercial context",
        "Name the expert decision and the rejected alternative",
        "Use the agreed success definition",
        "End with who should use the approach and who should not",
      ],
    },
    {
      title: "Design the continuation before the first engagement ends",
      body: `The natural next service is ${plan.continuation}. Introduce it when the first result reveals an ongoing need, not as a surprise after the project closes. Define what is reviewed or delivered each cycle, how priorities are chosen, what capacity and response boundaries apply, and how the client can pause or change scope. A useful recurring offer protects, extends, or repeatedly produces an outcome. Undefined access to the freelancer is not a durable retainer.`,
      points: [
        `Continuation: ${plan.continuation}`,
        `Ongoing measure: ${plan.metric}`,
        "Set a clear cadence, capacity, and response boundary",
        "Review relevance before renewal or material scope change",
      ],
    },
    {
      title: "Use this two-week field plan",
      body: `Days one and two: document the current workflow and baseline. Days three and four: package the ${plan.starterOffer}, including scope, price, exclusions, and evidence required. Day five: build the offer-specific intake and first milestone. During week two, invite a small number of relevant clients, past clients, or warm prospects to review or buy the package. Deliver the first useful decision, record every hesitation, and improve the offer before increasing promotion. This creates a live learning loop instead of another planning document.`,
      points: [
        "Publish one small paid starting offer",
        "Prepare the first milestone before promoting it",
        "Invite only buyers for whom the problem is relevant",
        "Revise the package from real questions and delivery evidence",
      ],
    },
  ];
};

const guide = (
  article: Omit<FlagshipBlogArticle, "sourceSlug" | "canonicalSlug" | "updatedAt" | "legacy" | "featured">
): FlagshipBlogArticle => ({
  ...article,
  sourceSlug: article.slug,
  canonicalSlug: article.slug,
  updatedAt,
  legacy: false,
  featured: true,
  sections: [...article.sections, ...deepeningSections(article)],
  sources: article.sources.length ? article.sources : [smallBusinessResearchSource],
});

export const flagshipBlogArticles: FlagshipBlogArticle[] = [
  guide({
    slug: "how-to-rank-in-ai-search-without-chasing-algorithm-hacks",
    title: "How to Rank in AI Search Without Chasing Algorithm Hacks",
    description:
      "A practical AI SEO guide for independent experts who want to earn citations in AI Overviews and assistant answers without publishing generic AI bait.",
    category: "AI Search",
    audience: "SEO experts, consultants, and creator-led businesses",
    image: "/assets/dashboard-hero.png",
    imageAlt: "Retainr dashboard supporting a structured AI search content workflow",
    sections: [
      {
        title: "Start with the unglamorous requirement: be indexable",
        body:
          "AI search visibility is not a separate shortcut around search fundamentals. Google states that a page must be indexed and eligible to appear with a snippet before it can be used as a supporting link in AI Overviews or AI Mode. That means the first work is technical and concrete: allow crawling, publish a canonical URL, return a successful status, keep the useful answer in visible text, and make the page discoverable from internal links. An llms.txt file can be a useful directory for some systems, but it does not replace crawling, indexing, or a genuinely useful page.",
        points: [
          "Confirm the canonical page returns a successful status",
          "Allow search crawlers in robots.txt",
          "Link the guide from a relevant hub and at least one commercial page",
          "Keep the core answer in HTML text instead of an image or gated download",
        ],
      },
      {
        title: "Answer one precise question before expanding",
        body:
          "Pages become easier to quote when the reader can identify the answer quickly. Open with a direct explanation in two or three sentences, then expand into decisions, steps, examples, failure modes, and a checklist. Avoid a long scene-setting introduction that repeats the title without resolving it. For a niche expert, specificity is an advantage: a page about onboarding SEO retainer clients can name the access, baseline data, deliverables, and reporting cadence, while a generic onboarding page cannot. Clear passages help humans scan and give retrieval systems coherent sections to reference.",
        points: [
          "Use a descriptive question or outcome as the H1",
          "Give the shortest defensible answer near the top",
          "Use headings that make sense outside the page context",
          "Keep each section focused on one decision or task",
        ],
      },
      {
        title: "Add evidence that cannot be produced by paraphrasing",
        body:
          "The strongest moat is first-hand usefulness. Add a tested workflow, a before-and-after example, an original template, a decision table, screenshots from the real product, or observations from client work. Google’s people-first guidance asks whether content provides original analysis and leaves the reader able to achieve their goal. A page assembled from other ranking pages will struggle to meet that standard, even if it is long. Write down what you actually check, what commonly fails, and how you decide between two plausible options.",
        points: [
          "Include a reusable checklist or template",
          "Explain why a recommendation changes by niche",
          "Show the tradeoff behind each tool or workflow choice",
          "Cite primary sources for claims that can change",
        ],
      },
      {
        title: "Make your entity and expertise unmistakable",
        body:
          "A useful page should make four things obvious: who Retainr is, who the guide is for, what problem is being solved, and where the reader should go next. Use consistent product naming, link to the About and Method pages, identify the intended specialist audience, and connect advice to a concrete workflow. Structured data can reinforce visible information, but it should never invent an author, review process, or claim that the page does not show. The article, metadata, internal links, and schema should all describe the same thing.",
        points: [
          "Name the intended niche in the title, introduction, or examples",
          "Use consistent Retainr product and company details",
          "Add BlogPosting structured data that matches the visible article",
          "Link to the authoring company, method, and relevant niche page",
        ],
      },
      {
        title: "Measure useful outcomes, not mythical AI rankings",
        body:
          "There is no stable universal position to track across every generated answer. Measure the signals you can act on: indexed pages, search impressions, clicks, assisted conversions, branded searches, referral traffic, and whether high-intent readers reach the relevant offer. Google reports AI-feature traffic within the normal Web search type in Search Console. Keep a small monthly query set for manual observation, but do not treat an occasional citation screenshot as the whole strategy. The business goal is qualified discovery that becomes a client relationship.",
        points: [
          "Review Search Console queries and landing pages monthly",
          "Track clicks from articles to niche, method, and pricing pages",
          "Record which questions generate qualified sales conversations",
          "Refresh weak sections when readers still need another search",
        ],
      },
      {
        title: "Use this 30-day AI search workflow",
        body:
          "Week one: fix crawlability, canonicals, sitemap coverage, and internal links. Week two: choose five questions asked by real clients and publish the clearest answer you can defend. Week three: add screenshots, examples, definitions, and primary-source citations. Week four: connect each guide to a relevant productized offer and review Search Console. Do not publish fifty near-identical pages. Publish fewer resources that someone would bookmark, send to a colleague, or use while doing the work.",
        points: [
          "Audit technical eligibility before rewriting content",
          "Publish five buyer questions with distinct answers",
          "Add original evidence and relevant product visuals",
          "Review conversion paths before increasing publishing volume",
        ],
      },
    ],
    sources: [
      {
        label: "Google Search Central: AI features and your website",
        url: "https://developers.google.com/search/docs/appearance/ai-features",
      },
      {
        label: "Google Search Central: creating helpful, reliable, people-first content",
        url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
      },
      { label: "The llms.txt proposal", url: "https://llmstxt.org/" },
    ],
  }),
  guide({
    slug: "how-to-get-freelance-clients-without-cold-calling",
    title: "How to Get Freelance Clients Without Cold Calling",
    description:
      "A repeatable client acquisition system for niche freelancers who prefer proof, warm relationships, and useful content over interruptive calls.",
    category: "Client Growth",
    audience: "niche freelancers and independent consultants",
    image: "/assets/revenue-graph.png",
    imageAlt: "Retainr revenue graph for a warm freelance client acquisition system",
    sections: [
      {
        title: "Begin with people who already know your work",
        body:
          "Cold calling starts with zero context. Past clients, collaborators, newsletter readers, course buyers, and professional peers already have a reason to trust you. Build a warm list of 25 people and add one sentence beside each name: the result you delivered, the problem they mentioned, or the introduction they could credibly make. Contact them with a useful observation or a specific new offer, not a generic announcement that you are available.",
        points: [
          "List former clients with an unfinished or recurring need",
          "Include peers who serve the same buyer without competing directly",
          "Note the concrete result or context for every contact",
          "Prioritize relevance over the size of the list",
        ],
      },
      {
        title: "Create a small offer that is easy to refer",
        body:
          "People struggle to refer a broad freelancer. They can refer a named outcome. Replace ‘I do marketing’ with an offer such as a technical SEO recovery review, a two-week AI workflow audit, or a brand consistency sprint. Give the offer a fixed starting point, timeline, deliverable, and buyer. A warm contact should be able to recognize the right person and describe the offer without forwarding a long proposal.",
        points: [
          "Name one buyer and one expensive problem",
          "Choose a result that can be demonstrated quickly",
          "Publish a clear scope and starting price",
          "Create one Retainr signup link for that exact offer",
        ],
      },
      {
        title: "Use a reactivation message that earns a reply",
        body:
          "A useful reactivation message has four parts: shared context, a specific observation, a relevant offer, and a low-pressure next step. For example: ‘When we completed the redesign, reporting was still manual. I have since packaged a dashboard cleanup sprint that removes that weekly work. Would the one-page outline be useful?’ This is not a disguised cold pitch because it uses real context and gives the recipient an easy no.",
        points: [
          "Mention the real project or conversation",
          "Connect the offer to a known or likely next problem",
          "Ask permission before sending detail",
          "Follow up once with new information, then close the loop",
        ],
      },
      {
        title: "Publish proof that attracts the same problem",
        body:
          "Turn one successful delivery into a compact proof asset: the starting condition, your diagnosis, the key decision, the result, and who should use the same approach. Remove confidential details and avoid inflated numbers. Share the proof where the intended buyer already pays attention. The goal is not daily content; it is a small library that makes your judgment visible before a sales conversation.",
        points: [
          "Write one case note for each productized offer",
          "Show the reasoning, not only the final screenshot",
          "End with the next step for readers with the same problem",
          "Reuse the proof in referral messages and proposal follow-ups",
        ],
      },
      {
        title: "Build a partner loop instead of a networking habit",
        body:
          "Choose three complementary specialists who meet your buyer before or after you do. An SEO expert might partner with web designers, analytics consultants, and conversion copywriters. Agree on what a qualified introduction looks like, how you will protect the relationship, and how quickly you will respond. Send value first: a useful lead, a diagnostic note, or a resource their clients can use.",
        points: [
          "Choose partners with a shared buyer and different deliverable",
          "Define the trigger that makes an introduction useful",
          "Respond to introductions within one business day",
          "Keep the referring partner informed without exposing client details",
        ],
      },
      {
        title: "Run this weekly client pipeline",
        body:
          "Monday: review five warm accounts and identify the next valuable problem. Tuesday: send two reactivation notes. Wednesday: publish or improve one proof asset. Thursday: help one referral partner. Friday: follow up on open conversations and update the next action. Track contacts, offers, replies, and client conversion in one simple pipeline. Consistency matters more than volume because every action is tied to a real relationship or visible proof.",
        points: [
          "Two relevant reactivation messages each week",
          "One proof asset improved or distributed",
          "One partner contribution before asking for a referral",
          "One clear next action recorded for every active lead",
        ],
      },
    ],
    sources: [],
  }),
  guide({
    slug: "how-to-build-recurring-revenue-without-a-large-audience",
    title: "How to Build Recurring Revenue Without a Large Audience",
    description:
      "A small-audience recurring revenue plan built around existing trust, specific client problems, and services that continue after the first result.",
    category: "Recurring Revenue",
    audience: "indie creators and niche experts",
    image: "/assets/revenue-graph.png",
    imageAlt: "Retainr revenue graph showing recurring income from a focused client base",
    sections: [
      {
        title: "Calculate the client base you actually need",
        body:
          "Audience size is a poor substitute for revenue math. Start with the monthly revenue you want, subtract dependable project income, and divide the gap by a realistic recurring package price. A target of $6,000 in monthly recurring revenue might be twelve $500 clients or four $1,500 clients. That is a relationship and offer problem, not a mass-audience problem. Choose a number you can serve well with your current capacity.",
        points: [
          "Set a specific monthly recurring revenue target",
          "Choose a package price tied to continued value",
          "Calculate the number of retained clients required",
          "Check delivery capacity before promoting the plan",
        ],
      },
      {
        title: "Start with the trust already in your business",
        body:
          "Review current clients, past clients, paid community members, collaborators, and warm subscribers. Identify people who achieved a result but still face an ongoing version of the problem. Contact them with a specific continuation plan based on the work you already know, not a broad launch announcement. Ten relevant conversations can outperform thousands of passive followers.",
        points: [
          "List people who already experienced your expertise",
          "Note the next unresolved or recurring need",
          "Invite them into a named continuation plan",
          "Use personal context instead of a mass promotion",
        ],
      },
      {
        title: "Sell continuity, not a membership-shaped void",
        body:
          "Small audiences cannot support vague subscriptions for long. Promise a useful operating outcome: monthly nutrition accountability, weekly creative production, search health monitoring, implementation office hours, or priority system maintenance. Define the cadence, deliverables, response boundary, and progress signal so clients understand why the plan continues.",
        points: [
          "Name what improves or remains protected each month",
          "Set a visible delivery cadence",
          "Define access and support limits",
          "Show progress through a simple monthly record",
        ],
      },
      {
        title: "Use a three-step offer ladder",
        body:
          "Create an entry offer that proves judgment, a core offer that delivers the main result, and a recurring offer that maintains or expands it. A dietitian might move from an assessment to a structured program and then monthly review. An AI consultant might move from workflow audit to implementation and then optimization support. Each step should make the next need visible without forcing it.",
        points: [
          "Entry: diagnose or create a fast first result",
          "Core: deliver the main transformation",
          "Recurring: maintain, optimize, or extend the result",
          "Keep a direct signup path for every step",
        ],
      },
      {
        title: "Protect retention before chasing acquisition",
        body:
          "Track whether clients complete onboarding, see the promised result, understand progress, and know the next priority. A small audience gives you the advantage of noticing friction early. Use monthly reviews and support patterns to improve the package. Fixing one retention problem can create more durable revenue than publishing another month of content.",
        points: [
          "Review time to first value",
          "Make delivery status visible",
          "Ask why clients pause or cancel",
          "Improve the offer before increasing lead volume",
        ],
      },
      {
        title: "Run a 20-person launch",
        body:
          "Choose twenty relevant people, write the recurring offer, and invite them individually over two weeks. Ask what is clear, what feels unnecessary, and what would make the result more valuable. Aim to enroll the first three clients, deliver closely, and refine the operating rhythm. You do not need a viral launch; you need enough evidence to make the offer repeatable.",
        points: [
          "Select twenty warm, relevant contacts",
          "Invite rather than broadcast",
          "Enroll and serve the first three clients closely",
          "Use delivery evidence to improve the next version",
        ],
      },
    ],
    sources: [],
  }),
  guide({
    slug: "how-to-use-ai-for-client-work-without-losing-your-voice",
    title: "How to Use AI for Client Work Without Losing Your Voice",
    description:
      "A responsible AI-assisted workflow for freelancers who want faster research and production without generic output, hidden errors, or damaged trust.",
    category: "AI Workflows",
    audience: "writers, strategists, designers, and consultants",
    image: "/assets/team-collab.png",
    imageAlt: "Retainr team workflow for reviewing AI-assisted client work",
    sections: [
      {
        title: "Separate judgment from production assistance",
        body:
          "Write down which parts of the engagement require your accountable judgment and which parts are support work. AI can help organize notes, compare structures, generate alternatives, summarize permitted source material, or check consistency. It should not quietly make claims, strategic decisions, diagnoses, or promises that you cannot verify. Keep the expert decision before and after the model step.",
        points: [
          "Mark decisions that require accountable human judgment",
          "Use AI for bounded transformation and exploration tasks",
          "Review every claim that affects the client",
          "Never present model confidence as evidence",
        ],
      },
      {
        title: "Build a voice brief from real work",
        body:
          "Create a short voice brief using approved examples: preferred sentence length, vocabulary, level of directness, formatting habits, claims to avoid, and the audience’s knowledge level. Add a list of phrases that sound unlike you. Use the brief to evaluate drafts, not to ask for a magical imitation. Your voice is also your selection, reasoning, and willingness to leave weak ideas out.",
        points: [
          "Use approved examples instead of scraped material",
          "Describe voice with observable writing choices",
          "List banned clichés and unsupported claims",
          "Review whether the reasoning sounds like your actual practice",
        ],
      },
      {
        title: "Protect client data before choosing a prompt",
        body:
          "Decide what information may enter each tool. Remove personal data, credentials, confidential strategy, health details, financial records, and proprietary documents unless the client has authorized the workflow and the tool’s data handling is appropriate. Use placeholders or synthetic examples where possible. Keep a simple record of where client material is processed.",
        points: [
          "Classify sensitive information before using an AI tool",
          "Redact or replace identifying details",
          "Check client agreements and tool data controls",
          "Store the approved final work in the client record",
        ],
      },
      {
        title: "Use a draft-review-evidence loop",
        body:
          "Give the model a bounded task and source set. Review the output for factual accuracy, missing context, weak reasoning, tone, and client-specific constraints. Verify claims against primary sources. Rewrite the important passages yourself and record the final decision. This loop is slower than blind generation and far faster than repairing trust after a confident error.",
        points: [
          "Constrain the task, audience, and permitted sources",
          "Check facts and calculations independently",
          "Rewrite high-stakes conclusions in your own reasoning",
          "Keep the final approved version and evidence trail",
        ],
      },
      {
        title: "Disclose AI where the workflow makes it material",
        body:
          "Clients care about confidentiality, quality, rights, and accountability more than novelty. Explain AI use when it changes data handling, authorship expectations, licensing, or a promised production method. Keep the disclosure plain: what the tool assists with, what information is excluded, and what you personally review. Do not use disclosure as a substitute for quality control.",
        points: [
          "Explain material AI use before processing client data",
          "State what remains human-reviewed",
          "Clarify ownership and permitted source material",
          "Give clients a non-AI path when the agreement requires it",
        ],
      },
      {
        title: "Measure whether AI improved the work",
        body:
          "Track time saved, revision cycles, error rate, client satisfaction, and whether the output achieved the intended outcome. Stop using a tool in a step where review takes longer than the original work or quality becomes less distinctive. The goal is not maximum AI usage. It is a stronger service with less avoidable effort.",
        points: [
          "Compare total production and review time",
          "Count corrections and client revisions",
          "Review whether the output remains differentiated",
          "Keep only workflows that improve quality, speed, or consistency",
        ],
      },
    ],
    sources: [
      {
        label: "Google Search Central: guidance on generative AI content",
        url: "https://developers.google.com/search/docs/fundamentals/using-gen-ai-content",
      },
    ],
  }),
  guide({
    slug: "how-to-write-client-proposals-without-starting-from-scratch",
    title: "How to Write Client Proposals Without Starting From Scratch",
    description:
      "A reusable proposal system for specialist freelancers that keeps diagnosis personal while standardizing scope, proof, pricing, and next steps.",
    category: "Sales Systems",
    audience: "specialist freelancers and consultants",
    image: "/assets/packages.png",
    imageAlt: "Retainr package interface for reusable client proposals",
    sections: [
      {
        title: "Stop treating every proposal as a blank document",
        body:
          "Most proposals share a stable structure: client situation, desired outcome, diagnosis, recommended scope, timeline, responsibilities, price, proof, assumptions, and next step. Create reusable blocks for those sections. Personalize the diagnosis, priorities, risks, and outcome. Standardize the clauses that should remain consistent. This protects your time without sending a generic document.",
        points: [
          "Create a reusable proposal outline",
          "Keep legal and operating terms consistent",
          "Personalize the problem, recommendation, and evidence",
          "Delete irrelevant blocks instead of filling space",
        ],
      },
      {
        title: "Qualify before writing",
        body:
          "Do not write a proposal until you know the buyer, problem, urgency, decision process, constraints, and realistic budget range. If the work cannot be scoped responsibly, sell a paid diagnostic. A proposal should confirm an understood decision, not perform unpaid discovery in document form.",
        points: [
          "Confirm who decides and what success means",
          "Identify constraints and required access",
          "Check budget and timing before detailed scoping",
          "Use a paid audit when uncertainty remains high",
        ],
      },
      {
        title: "Recommend one path and explain the tradeoff",
        body:
          "Clients hire specialists to reduce decision load. Lead with the option you recommend and explain why it fits. Add a smaller or larger alternative only when the tradeoff is meaningful. Avoid three artificially balanced packages where the middle is designed merely to manipulate selection.",
        points: [
          "Lead with the recommended scope",
          "Explain what the client gains and gives up",
          "Use alternatives for real differences in pace or coverage",
          "Keep optional additions separate from the core result",
        ],
      },
      {
        title: "Turn common work into published packages",
        body:
          "When the same proposal appears repeatedly, publish it as a productized package. Define the starting conditions, scope, timeline, and price, then route qualified buyers directly to payment and onboarding. Reserve custom proposals for work that genuinely changes the operating model or risk.",
        points: [
          "Review the last ten proposals for repeated scope",
          "Publish the most common valuable outcome",
          "Use a direct signup link for qualified buyers",
          "Keep custom scoping for exceptional complexity",
        ],
      },
      {
        title: "Use AI for assembly, not invented understanding",
        body:
          "AI can help select approved blocks, summarize your own discovery notes, check consistency, and identify missing fields. It should not fabricate client priorities, proof, or commitments. Feed it structured notes and an approved template, then review every client-specific statement. Keep confidential information within the data handling agreed with the client.",
        points: [
          "Use structured discovery notes as input",
          "Restrict output to approved proposal blocks",
          "Verify all client-specific claims",
          "Review scope, numbers, and obligations manually",
        ],
      },
      {
        title: "End with a frictionless decision",
        body:
          "State the exact next step, expiry or scheduling constraint, payment requirement, and what happens immediately after acceptance. A proposal should not end with ‘let me know your thoughts.’ Connect acceptance to the right package and onboarding path so the client does not enter another chain of administrative messages.",
        points: [
          "Use one clear acceptance action",
          "State payment and scheduling conditions",
          "Trigger the correct onboarding flow",
          "Archive the accepted scope with the client record",
        ],
      },
    ],
    sources: [],
  }),
  guide({
    slug: "how-to-sell-seo-retainers-without-guaranteeing-rankings",
    title: "How to Sell SEO Retainers Without Guaranteeing Rankings",
    description:
      "Package an ethical SEO retainer around controllable work, decision quality, and business outcomes instead of promises no consultant can guarantee.",
    category: "SEO Services",
    audience: "independent SEO consultants and growth specialists",
    image: "/assets/dashboard-hero.png",
    imageAlt: "Retainr dashboard organizing an ethical monthly SEO retainer",
    sections: [
      {
        title: "Replace the ranking promise with an operating promise",
        body:
          "You cannot control competitors, search systems, client implementation, or every market change. You can promise a disciplined operating process: technical monitoring, prioritized recommendations, content opportunity analysis, implementation support, measurement, and clear decisions. Sell the quality and cadence of the work you control, then connect it to agreed business indicators.",
        points: [
          "Define the recurring SEO decisions you own",
          "Separate recommendations from client implementation duties",
          "Use leading and business metrics together",
          "State uncertainty without weakening the value",
        ],
      },
      {
        title: "Start with a paid baseline",
        body:
          "Before recurring work, establish crawl and index status, priority pages, demand themes, technical constraints, analytics quality, conversion paths, and the client’s implementation capacity. The baseline becomes the roadmap and prevents the retainer from turning into an unfocused list of monthly tasks.",
        points: [
          "Audit technical eligibility and measurement",
          "Identify priority commercial pages and search intents",
          "Document implementation owners and constraints",
          "Agree on the first 90-day sequence",
        ],
      },
      {
        title: "Package the monthly cadence",
        body:
          "A useful SEO retainer typically combines monitoring, analysis, prioritized action, implementation support, and reporting. State what happens weekly, monthly, and quarterly. Keep the deliverable list smaller than the decision value. Clients need to know what changes next and why, not receive a large report they cannot act on.",
        points: [
          "Weekly monitoring for material issues",
          "Monthly priority and implementation review",
          "Quarterly opportunity and strategy reset",
          "Clear support boundary for urgent changes",
        ],
      },
      {
        title: "Report decisions and outcomes, not vanity movement",
        body:
          "Show visibility trends, qualified clicks, conversions, affected pages, completed work, unresolved blockers, and the next priority. Explain when a metric moved because of seasonality, brand demand, tracking changes, or implementation delays. Good reporting creates trust by making uncertainty and action visible.",
        points: [
          "Connect search performance to relevant business actions",
          "Separate completed recommendations from pending client work",
          "Annotate major site and market changes",
          "End every report with the next decision",
        ],
      },
      {
        title: "Include AI search without selling a separate fantasy",
        body:
          "Google’s current guidance says the same foundational SEO practices apply to AI Overviews and AI Mode; there is no special AI schema required. Include indexability, useful text, internal linking, quality images, accurate structured data, and genuinely helpful content in the normal program. Track Search Console and conversions rather than promising a stable position in generated answers.",
        points: [
          "Keep AI visibility inside the core search program",
          "Use structured data that matches visible content",
          "Build answerable expert resources with original evidence",
          "Avoid guarantees about inclusion in generated results",
        ],
      },
      {
        title: "Use a scope that protects both sides",
        body:
          "Define included sites, markets, reporting, implementation hours, content support, meetings, response times, and dependencies. Price major migrations, redesigns, or large content programs separately. A transparent scope makes the retainer credible and gives the client a clear reason to renew based on ongoing value rather than fear.",
        points: [
          "Name included properties and markets",
          "Define implementation and content limits",
          "Separate projects from the recurring operating cadence",
          "Review scope when business priorities materially change",
        ],
      },
    ],
    sources: [
      {
        label: "Google Search Central: AI features and your website",
        url: "https://developers.google.com/search/docs/appearance/ai-features",
      },
      {
        label: "Google Search Central: SEO Starter Guide",
        url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
      },
    ],
  }),
  guide({
    slug: "in-demand-freelance-services-to-productize-without-being-a-generalist",
    title: "In-Demand Freelance Services Without Becoming a Generalist",
    description:
      "Use current freelance hiring evidence to choose a specialist service, package it clearly, and combine AI fluency with accountable human expertise.",
    category: "Niche Strategy",
    audience: "freelancers choosing a durable specialist offer",
    image: "/assets/packages.png",
    imageAlt: "Retainr packages for focused in-demand freelance services",
    sections: [
      {
        title: "Read demand as a direction, not a menu",
        body:
          "Upwork’s 2026 marketplace report shows strong demand across full-stack development, web design, SEO, lead generation, data analytics, graphic design, video editing, and virtual assistance, while skills explicitly tied to applying AI grew sharply. Do not respond by listing every service. Use the data to identify where your existing proof intersects with a growing buyer problem. Specialization makes a useful skill easier to trust and buy.",
        points: [
          "Start with skills for which you already have credible evidence",
          "Choose a buyer problem with repeated demand",
          "Use market data to validate direction, not copy a trend list",
          "Avoid adding AI to the offer name without a real workflow change",
        ],
      },
      {
        title: "Productize AI integration around one workflow",
        body:
          "AI integration demand is meaningful when it improves a real business process. Package a workflow audit, one bounded implementation, staff handoff, and a monitoring plan. Examples include support triage, document intake, internal search, reporting preparation, or content operations. Avoid promising a fully autonomous business; define where humans approve, correct, or escalate decisions.",
        points: [
          "Choose one workflow and one measurable bottleneck",
          "Map data, permissions, failure modes, and human review",
          "Sell a bounded implementation before a broad transformation",
          "Offer recurring monitoring and improvement after launch",
        ],
      },
      {
        title: "Combine creative skill with AI direction and review",
        body:
          "AI video and image work is growing, but clients still need brand judgment, narrative, rights awareness, selection, and consistent delivery. A stronger offer is not ‘fast AI images.’ It is a campaign visual system, short-form video package, or monthly creative desk with a defined approval process and accountable art direction.",
        points: [
          "Sell a brand or campaign outcome",
          "Define source, licensing, and approval rules",
          "Use AI to expand options while preserving human selection",
          "Create a recurring production cadence clients can plan around",
        ],
      },
      {
        title: "Modernize durable services instead of abandoning them",
        body:
          "SEO, web design, development, analytics, project management, and virtual assistance remain valuable because organizations still need implementation and judgment. Add AI where it removes repetitive work or improves insight, then keep the offer anchored to a durable outcome: a maintained website, qualified demand, reliable reporting, smooth operations, or faster client response.",
        points: [
          "Keep the outcome independent of a single tool",
          "Use AI for leverage inside the service",
          "Show the human decisions clients still rely on",
          "Package maintenance or optimization as recurring value",
        ],
      },
      {
        title: "Use the narrow-offer test",
        body:
          "A strong niche offer passes five tests: one buyer can recognize it, the trigger is observable, the outcome matters, the first delivery is bounded, and a useful next step exists. ‘AI consulting’ fails. ‘AI support-triage audit for B2B SaaS teams’ is easier to understand, refer, price, and extend into implementation support.",
        points: [
          "One identifiable buyer",
          "One visible trigger or costly problem",
          "One bounded first result",
          "One credible recurring continuation",
        ],
      },
      {
        title: "Validate before rebuilding your identity",
        body:
          "Write a one-page offer, speak with ten relevant buyers, and sell a paid pilot before changing every profile or building a large content library. Record the words buyers use, what they already tried, and what blocks a decision. Refine the package from evidence. Positioning should follow repeated market learning, not a weekend naming exercise.",
        points: [
          "Publish a minimum viable package",
          "Run ten focused buyer conversations",
          "Sell a paid pilot with clear boundaries",
          "Update positioning from objections and delivery evidence",
        ],
      },
    ],
    sources: [
      {
        label: "Upwork: In-Demand Skills 2026",
        url: "https://investors.upwork.com/news-releases/news-release-details/upworks-demand-skills-2026-demand-top-ai-skills-more-doubles-ai",
      },
    ],
  }),
  guide({
    slug: "how-to-follow-up-with-leads-without-being-pushy",
    title: "How to Follow Up With Leads Without Being Pushy",
    description:
      "A respectful follow-up system for niche freelancers that adds useful context, makes decisions easier, and stops at the right time.",
    category: "Sales Systems",
    audience: "freelancers and independent consultants",
    image: "/assets/support-mockup.svg",
    imageAlt: "Retainr support workflow for organized and respectful lead follow-up",
    sections: [
      {
        title: "Follow up on a decision, not on your anxiety",
        body:
          "Before writing, identify the decision the lead is making and what may reasonably block it: missing stakeholder input, unclear scope, timing, risk, budget, or competing priorities. Your message should reduce one uncertainty. ‘Just checking in’ gives the recipient another task without helping them decide.",
        points: [
          "Name the likely decision or blocker",
          "Add one useful piece of information",
          "Keep the message shorter than the original proposal",
          "Give the lead an easy way to close the loop",
        ],
      },
      {
        title: "Agree on the next step before the conversation ends",
        body:
          "The best follow-up is scheduled with consent. At the end of a call, confirm who needs to review, what information is outstanding, and when a decision is realistic. Send a short summary with the agreed date. This changes follow-up from interruption into completion of a shared process.",
        points: [
          "Confirm decision makers and missing information",
          "Agree on a realistic response date",
          "Send a written summary immediately",
          "Record the next action with the lead context",
        ],
      },
      {
        title: "Use a three-message sequence",
        body:
          "First, send the promised recap or answer. Second, follow up around the agreed date with one relevant proof point, clarification, or narrower option. Third, close the loop politely: state that you will release the scheduling hold and invite them to return when timing changes. Do not disguise repeated reminders as new value.",
        points: [
          "Message one: promised information and next step",
          "Message two: relevant clarification or evidence",
          "Message three: respectful close-the-loop note",
          "Stop unless the lead reopens the conversation",
        ],
      },
      {
        title: "Make no a safe answer",
        body:
          "Pressure grows when the recipient feels trapped into explaining. Offer simple responses: proceed, revisit in a named month, not a fit, or needs a different scope. A clear no protects your pipeline and often leaves a better impression than indefinite silence.",
        points: [
          "Use neutral language around timing and fit",
          "Offer a specific later date when appropriate",
          "Do not argue with a clear rejection",
          "Keep the relationship useful outside the sale",
        ],
      },
      {
        title: "Automate reminders, personalize the message",
        body:
          "Use a pipeline to remember dates and context, but review every message before sending. Automated sequences can easily ignore a changed situation or send an irrelevant nudge. Store the offer, last conversation, blocker, and agreed next step so personalization is factual rather than cosmetic.",
        points: [
          "Automate task reminders instead of blind sends",
          "Review current context before every message",
          "Reference the actual offer and blocker",
          "Stop automation as soon as the lead responds",
        ],
      },
      {
        title: "Measure decision quality",
        body:
          "Track response rate, time to decision, reasons for pause, and how often follow-up uncovers a scope problem. Do not optimize only for more replies. A healthy system creates faster clear decisions and preserves reputation with people who are not ready today.",
        points: [
          "Response and clear-decision rate",
          "Average days from proposal to decision",
          "Common objections and missing information",
          "Reactivation from respectfully closed opportunities",
        ],
      },
    ],
    sources: [],
  }),
  guide({
    slug: "how-to-build-a-client-portal-without-stitching-together-five-tools",
    title: "Build a Client Portal Without Stitching Together Five Tools",
    description:
      "Design a branded client workspace for payment, onboarding, delivery, files, support, and renewals without creating a fragile tool chain.",
    category: "Client Operations",
    audience: "niche freelancers and small service teams",
    image: "/assets/client-portal.webp",
    imageAlt: "Retainr white-label client portal interface",
    sections: [
      {
        title: "Map the client journey before choosing software",
        body:
          "Write the states a client moves through: considering an offer, purchasing, providing context, starting work, reviewing progress, approving delivery, requesting support, and continuing. For each state, record the client action, your team action, required information, and success signal. This prevents a portal from becoming a decorative dashboard that still sends clients back to email and spreadsheets.",
        points: [
          "Map the journey from offer to renewal",
          "Name the action and owner at every state",
          "Identify information that must persist",
          "Remove tools that do not serve a client action",
        ],
      },
      {
        title: "Keep the commercial and delivery record connected",
        body:
          "The package, payment, intake answers, project, files, requests, and renewal should refer to the same client relationship. When these records are split, staff re-enter data and clients repeat themselves. Choose a system where purchase creates the next workflow rather than ending at a receipt.",
        points: [
          "Connect the purchased package to onboarding",
          "Keep payment and delivery context together",
          "Attach requests to the correct client and project",
          "Preserve history when the client buys again",
        ],
      },
      {
        title: "Give clients one obvious home",
        body:
          "A portal should answer four questions immediately: what did I buy, what happens next, where is the work, and where do I ask for help? Use your brand, a clear navigation structure, and status language clients understand. Do not expose an internal project-management taxonomy merely because the software supports it.",
        points: [
          "Show the active service and next milestone",
          "Make uploads, approvals, and support easy to find",
          "Use client language instead of internal process labels",
          "Keep the experience usable on mobile",
        ],
      },
      {
        title: "Automate state changes, not trust",
        body:
          "Automate project creation, standard tasks, confirmations, reminders, and internal routing. Keep strategic updates, sensitive feedback, scope discussions, and reassurance personal. The portal should remove avoidable coordination while making the human relationship more visible.",
        points: [
          "Create standard delivery steps from the package",
          "Send precise reminders for missing actions",
          "Route support requests with context",
          "Use personal communication for judgment-heavy moments",
        ],
      },
      {
        title: "Test the portal with real client tasks",
        body:
          "Ask a new user to buy a package, find the intake, upload a file, locate the next milestone, submit a request, and understand renewal without guidance. Observe where they hesitate. Fix labels, sequence, and visibility before adding features. A short successful path matters more than a large feature list.",
        points: [
          "Test purchase-to-intake continuity",
          "Test file upload and approval discovery",
          "Test support submission and response visibility",
          "Test the recurring-plan next step",
        ],
      },
      {
        title: "Use one operating system with deliberate integrations",
        body:
          "Keep Retainr as the client-facing system of record, then integrate only specialist tools that perform a necessary function. An analytics platform, design tool, code repository, or automation service may still belong in delivery. The client should not need accounts in every internal tool. Link or synchronize the result while keeping the relationship, status, support, and commercial history in one place.",
        points: [
          "Choose one client-facing source of truth",
          "Integrate specialist tools for defined jobs",
          "Do not expose internal tool complexity to the client",
          "Review every integration for ownership and failure handling",
        ],
      },
    ],
    sources: [],
  }),
  guide({
    slug: "how-to-turn-one-off-clients-into-retainers-without-discounting",
    title: "How to Turn One-Off Clients Into Retainers Without Discounting",
    description:
      "A practical way to design ongoing value, introduce it at the right moment, and sell retainers without reducing your rate.",
    category: "Recurring Revenue",
    audience: "consultants, designers, coaches, and specialist freelancers",
    image: "/assets/revenue-graph.png",
    imageAlt: "Retainr recurring revenue dashboard for specialist client retainers",
    sections: [
      {
        title: "Find the need that continues after delivery",
        body:
          "A retainer is not a discounted bundle of future hours. It is a response to a problem that continues: rankings change, campaigns need iteration, clients need accountability, systems require monitoring, brands produce new assets, or teams need ongoing decisions. At kickoff, ask what must remain true after the project succeeds. During delivery, record repeated questions, dependencies, and risks. Those signals reveal the ongoing outcome a client may pay to protect.",
        points: [
          "List what can deteriorate after the project ends",
          "Record decisions the client cannot confidently make alone",
          "Identify work that repeats on a useful cadence",
          "Separate genuine continuity from invented busywork",
        ],
      },
      {
        title: "Design the retainer around an operating promise",
        body:
          "Describe what the client can rely on each month. ‘Ten hours of support’ sells capacity; ‘monthly search health and prioritized fixes’ sells an operating result. Define the cadence, included decisions, deliverables, response boundary, and review moment. A clear promise makes the retainer easier to compare with doing nothing and protects both sides from unlimited-request expectations.",
        points: [
          "Name the condition or progress the plan maintains",
          "Define recurring deliverables and decision rights",
          "Set response times and excluded work",
          "Include a review point for changing scope",
        ],
      },
      {
        title: "Introduce continuity before the final handoff",
        body:
          "Do not wait until the goodbye email. During the project, show the client the next operating cycle: what should be checked in 30 days, what decisions will return, and what improvement becomes possible after the first result. Present the ongoing plan when the client has seen evidence and still has context. The conversation should feel like responsible planning, not a surprise upsell.",
        points: [
          "Mention the post-project operating need during kickoff",
          "Show recurring risks or opportunities in progress updates",
          "Present the plan after a visible milestone",
          "Give the client a clear start date and first monthly outcome",
        ],
      },
      {
        title: "Price the value and access instead of cutting the rate",
        body:
          "A recurring commitment already benefits the client through continuity, retained context, and faster decisions. It does not require a lower professional rate. Price the plan according to the ongoing outcome, the level of access, risk carried, and capacity reserved. If the price feels too high, narrow the promise or reduce cadence rather than quietly expanding unpaid work.",
        points: [
          "Offer clear tiers based on outcome and access",
          "Reduce scope before reducing quality",
          "Charge separately for major implementation projects",
          "Review pricing when usage or responsibility changes",
        ],
      },
      {
        title: "Make the first 30 days prove the model",
        body:
          "The first retainer month should create a visible rhythm. Confirm the baseline, deliver one useful improvement, publish a concise status view, and agree on the next priority. Clients retain services they can understand. Avoid flooding them with activity logs. Show what changed, why it mattered, what is being watched, and what decision comes next.",
        points: [
          "Establish a baseline and success signal",
          "Deliver one early improvement",
          "Use a consistent monthly summary",
          "Finish every review with the next agreed priority",
        ],
      },
      {
        title: "Operate the retainer from one client record",
        body:
          "Keep the agreement, recurring payment, tasks, approvals, support requests, and monthly outcomes connected. Fragmented delivery makes value difficult to see and increases the chance of scope disputes. Retainr gives the plan a branded place where the client can see what they bought, provide context, request help, and continue from one month to the next.",
        points: [
          "Attach recurring billing to the named service package",
          "Keep requests and decisions with the client history",
          "Use a visible cadence for tasks and reviews",
          "Review renewal health before the contract date",
        ],
      },
    ],
    sources: [],
  }),
  guide({
    slug: "how-to-productize-a-service-without-building-a-course",
    title: "How to Productize a Service Without Building a Course",
    description:
      "Turn expert work into a repeatable paid offer without spending months recording lessons, building a community, or becoming an influencer.",
    category: "Productized Services",
    audience: "independent experts and digital creators",
    image: "/assets/packages.png",
    imageAlt: "Retainr service packages for a productized specialist offer",
    sections: [
      {
        title: "Choose a repeated client problem, not a content format",
        body:
          "A course is one delivery format. Productization begins earlier: with a problem you solve repeatedly and a result clients recognize. Review the last ten requests you received. Look for the same diagnosis, first milestone, deliverable, or decision. Choose a problem with urgency, a clear buyer, and enough similarity that your process can repeat without pretending every client is identical.",
        points: [
          "Review recent paid requests and sales conversations",
          "Circle repeated problems and repeated first steps",
          "Choose one buyer with a recognizable trigger",
          "Avoid packaging a task that has no meaningful outcome",
        ],
      },
      {
        title: "Standardize the boundaries while preserving judgment",
        body:
          "Clients hire an expert for judgment, not a rigid checklist. Standardize what improves clarity: the promise, required inputs, delivery stages, revision rules, timeline, and price. Keep professional judgment inside the method. A productized SEO audit can follow the same evidence collection and reporting structure while producing different priorities for each site.",
        points: [
          "Fix the start condition and definition of done",
          "Use a consistent intake and milestone structure",
          "State what is excluded and how additions are priced",
          "Keep diagnosis and recommendations tailored",
        ],
      },
      {
        title: "Build three assets instead of fifty lessons",
        body:
          "You need a clear offer page, an intake form, and a delivery template. The offer page explains the buyer, outcome, scope, timeline, and price. The intake collects only what is required to begin. The delivery template creates a reliable client experience. Add supporting explanations only when repeated client questions prove they are needed.",
        points: [
          "One offer page with a direct paid next step",
          "One niche-specific intake flow",
          "One reusable project and delivery template",
          "Optional resources created from real support questions",
        ],
      },
      {
        title: "Price the package around the result and constraints",
        body:
          "Calculate the delivery effort and risk, but communicate price through the result, speed, access, and scope. Fixed pricing works when boundaries are clear. If uncertainty is high, sell a paid diagnosis first. That first package reduces risk for both sides and can lead to implementation or recurring support without a free discovery marathon.",
        points: [
          "Use a paid diagnostic when scope cannot be known upfront",
          "Set a fixed price for a fixed decision or deliverable",
          "Define revision and support limits",
          "Create a clear next package after the first result",
        ],
      },
      {
        title: "Sell it through a direct client journey",
        body:
          "A productized service loses its advantage if every buyer still needs a custom PDF proposal, invoice chase, and manual onboarding thread. Publish the package, connect payment, ask the right intake questions, and give the buyer immediate next steps. Use a consultation only when it adds diagnostic value, not as a mandatory gate for every sale.",
        points: [
          "Send qualified buyers to the exact package",
          "Collect payment or commitment before delivery begins",
          "Trigger onboarding from the purchase",
          "Keep files, tasks, support, and approvals in one portal",
        ],
      },
      {
        title: "Improve the product from delivery evidence",
        body:
          "After every three to five clients, review where scope changed, which questions delayed kickoff, what created the strongest result, and what clients requested next. Tighten the offer and build the repeated follow-up into a recurring plan. Productization is an operating discipline, not a one-time naming exercise.",
        points: [
          "Review onboarding friction and scope changes",
          "Remove deliverables that do not affect the outcome",
          "Add clarity where clients repeatedly hesitate",
          "Turn repeated post-delivery work into a named plan",
        ],
      },
    ],
    sources: [],
  }),
  guide({
    slug: "how-to-onboard-clients-without-back-and-forth-email",
    title: "How to Onboard Clients Without Back-and-Forth Email",
    description:
      "A complete client onboarding workflow that gathers the right context, starts work faster, and gives clients one clear place to go.",
    category: "Client Operations",
    audience: "freelancers and small expert-led teams",
    image: "/assets/onboarding.png",
    imageAlt: "Retainr onboarding workflow with a direct client signup path",
    sections: [
      {
        title: "Define the minimum information required to start",
        body:
          "Most onboarding forms are either too vague or exhausting. Work backward from the first delivery milestone and ask only for information that changes how you begin. An SEO audit needs the domain, analytics access, business priorities, and known constraints. A brand sprint needs existing assets, audience, decision makers, and references. Everything else can be requested when it becomes relevant.",
        points: [
          "Name the first milestone before writing questions",
          "Ask for facts that change the initial plan",
          "Separate required inputs from useful background",
          "Remove questions that you never use during delivery",
        ],
      },
      {
        title: "Put the sequence in one visible place",
        body:
          "The client should know what has happened and what comes next: package selected, payment confirmed, intake submitted, files received, kickoff scheduled, first milestone due. A portal reduces repeated status questions because the sequence is visible. Keep welcome messages short and action-oriented; clients should not need to interpret a long email before they can proceed.",
        points: [
          "Show the purchased package and current status",
          "List the next action with an owner and due date",
          "Keep uploads and project context together",
          "Explain where support requests should go",
        ],
      },
      {
        title: "Use conditional questions instead of one giant form",
        body:
          "Different offers need different intake. Route clients from the exact service link so they see only relevant questions. Ask follow-up questions when an answer creates a genuine branch, such as a CMS choice, campaign status, health constraint, or licensing need. This makes the experience feel tailored without requiring manual setup for every client.",
        points: [
          "Create a separate intake path for each core offer",
          "Use niche and package context in the signup URL",
          "Ask conditional questions only when they change delivery",
          "Save answers with the client and project record",
        ],
      },
      {
        title: "Automate reminders without automating the relationship",
        body:
          "Automate confirmations, missing-input reminders, task creation, and internal notifications. Keep diagnosis, reassurance, and important expectation-setting human. A good rule is to automate predictable state changes and personally handle messages where tone or judgment affects trust.",
        points: [
          "Automate payment and intake confirmations",
          "Remind clients about specific missing items",
          "Create the project and standard tasks automatically",
          "Send personal messages for risk, ambiguity, or sensitive context",
        ],
      },
      {
        title: "Design the first 48 hours",
        body:
          "Speed after purchase shapes confidence. Immediately confirm the order and next action. Within one business day, review the intake and acknowledge anything unusual. Within 48 hours, confirm the first milestone or explain what is blocking it. Even when delivery starts later, the client should feel that the process is active and owned.",
        points: [
          "Immediate confirmation with one next action",
          "Human intake review within one business day",
          "First milestone or blocker confirmed within 48 hours",
          "One named place for future questions",
        ],
      },
      {
        title: "Audit onboarding with five operational metrics",
        body:
          "Track completion rate, time from payment to completed intake, number of reminder messages, time to first milestone, and questions that appear after kickoff. These reveal whether the workflow is actually reducing friction. Improve one repeated problem each month rather than adding more fields or automation without evidence.",
        points: [
          "Intake completion rate",
          "Hours from payment to ready-to-start",
          "Average reminders per new client",
          "Time to first milestone and repeated kickoff questions",
        ],
      },
    ],
    sources: [],
  }),
];
