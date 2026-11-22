export type ChangelogKind = "new" | "improved" | "fixed";

export type ChangelogEntry = {
  date: string;
  kind: ChangelogKind;
  title: string;
  summary: string;
  details: string[];
  source?: {
    repository: "website";
    commits: string[];
  };
};

export const changelogReviewedThrough = "b985f9529442c1864f7d0137683cf4e4404118cf";

export const changelogEntries: ChangelogEntry[] = [
  {
    date: "2026-09-04",
    kind: "improved",
    title: "A calmer, more accessible homepage",
    summary:
      "The rotating homepage message now gives every visitor control over the movement without losing the product context.",
    details: [
      "Pause or resume the message rotation at any time.",
      "Reduced-motion preferences keep the message static.",
      "Screen readers receive one stable description instead of repeated announcements.",
    ],
    source: {
      repository: "website",
      commits: ["b985f9529442c1864f7d0137683cf4e4404118cf"],
    },
  },
  {
    date: "2026-09-03",
    kind: "improved",
    title: "A clearer first look at what Retainr does",
    summary:
      "The homepage now moves through the core Retainr outcomes, from packaging expertise to keeping successful client work recurring.",
    details: [
      "The opening message explains the full client revenue journey more quickly.",
      "The layout keeps its shape while each outcome changes, so the page stays easy to read.",
    ],
    source: {
      repository: "website",
      commits: ["5a6c07a59253c0470e443be727e6acda8bd30ed5"],
    },
  },
  {
    date: "2026-08-30",
    kind: "new",
    title: "Free tools for practical client work",
    summary:
      "A new free tools area gives independent experts useful resources without requiring an account, email address, or paid export.",
    details: [
      "Build a reusable client onboarding checklist in the browser.",
      "Edit and export images locally without uploading them to Retainr.",
      "Use the freelance skills workbook to shape and validate a clearer offer.",
    ],
    source: {
      repository: "website",
      commits: [
        "44865466e5cb87bf2486605773010525b60bef23",
        "8515bdabdb7d478447c925abe18cc8b70a868128",
        "50bdf0080a91ea3fd29fdf673d8dcf6747c12738",
      ],
    },
  },
  {
    date: "2026-08-29",
    kind: "fixed",
    title: "More reliable mobile orders and sessions",
    summary:
      "The Retainr mobile app now handles returning sessions and client order actions more reliably.",
    details: [
      "Order details and action links behave consistently across supported devices.",
      "Stored sessions recover more safely when authentication data changes.",
      "Additional release checks cover links, storage, workspace access, and ordering.",
    ],
  },
  {
    date: "2026-08-14",
    kind: "improved",
    title: "Stronger mobile delivery and support",
    summary:
      "Mobile order, dashboard, and support flows now stay useful through more real-world connection and upload problems.",
    details: [
      "The mobile dashboard keeps available information visible during partial API failures.",
      "Support messages recover more cleanly when an attachment upload fails.",
      "Native order screens now match current service options and field values more closely.",
    ],
  },
  {
    date: "2026-08-08",
    kind: "improved",
    title: "Sharing real Retainr milestones is simpler",
    summary:
      "Workspace milestones now have clearer, more resilient sharing paths for people who choose to share a genuine result.",
    details: [
      "LinkedIn sharing stays available when clipboard access is blocked.",
      "Milestone captions carry useful context instead of generic promotional copy.",
      "The ambassador path focuses on optional, earned sharing rather than paid-outcome claims.",
    ],
  },
  {
    date: "2026-08-04",
    kind: "new",
    title: "Every Retainr feature is free forever",
    summary:
      "Retainr no longer has platform subscriptions, seat fees, feature tiers, or a Retainr transaction fee.",
    details: [
      "Existing workspaces keep access without choosing a paid plan.",
      "Team members, clients, packages, and core product capabilities are not limited by a Retainr tier.",
      "Connected payment providers may still charge their own processing fees.",
    ],
  },
];
