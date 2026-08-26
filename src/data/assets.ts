const dimensions = {
  "/assets/dashboard-hero.png": { width: 1600, height: 682 },
  "/assets/onboarding.png": { width: 1080, height: 674 },
  "/assets/packages.png": { width: 1080, height: 1061 },
  "/assets/revenue-graph.png": { width: 1080, height: 564 },
  "/assets/team-collab.png": { width: 1080, height: 493 },
  "/assets/client-portal.webp": { width: 898, height: 372 },
  "/assets/support-mockup.svg": { width: 332, height: 216 },
  "/assets/freelance-skills-guide-cover.webp": { width: 810, height: 810 },
} as const;

export const assetDimensions = (path: string) =>
  dimensions[path as keyof typeof dimensions] ?? dimensions["/assets/dashboard-hero.png"];
