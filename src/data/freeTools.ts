export type FreeToolKind = "workbook" | "image-editor" | "checklist";

export type FreeTool = {
  kind: FreeToolKind;
  path: string;
  name: string;
  shortName: string;
  description: string;
  audience: string;
  whenToUse: string;
  action: string;
  highlights: string[];
  format: string;
};

export const freeToolsUpdatedAt = "2026-08-30";

export const freeTools: FreeTool[] = [
  {
    kind: "checklist",
    path: "/tools/freelance-client-onboarding-checklist/",
    name: "Free Freelance Client Onboarding Checklist Generator",
    shortName: "Client Onboarding Checklist",
    description:
      "Build a practical client onboarding checklist for consulting, design, SEO, coaching, or creative work, then copy, download, or print it without creating an account.",
    audience: "Freelancers, consultants, coaches, studios, and independent specialists onboarding a new client.",
    whenToUse: "After a client agrees to work with you and before delivery begins.",
    action: "Build your checklist",
    highlights: ["Five service types", "One-off or recurring work", "Copy, TXT, and print"],
    format: "Interactive browser tool",
  },
  {
    kind: "image-editor",
    path: "/tools/image-editor/",
    name: "Free Private Image Editor for Freelancers",
    shortName: "Private Image Editor",
    description:
      "Resize for safe browser processing, adjust brightness, contrast, and saturation, rotate, flip, and export PNG or JPEG client images locally in your browser.",
    audience: "Freelancers and digital creators who need a fast image adjustment without uploading client files.",
    whenToUse: "When a client image needs a quick visual correction or format change before delivery or publishing.",
    action: "Edit an image",
    highlights: ["Local browser processing", "PNG, JPEG, and WebP input", "PNG or JPEG export"],
    format: "Interactive browser tool",
  },
  {
    kind: "workbook",
    path: "/guides/agency-freelancing-skills-you-need-to-know/",
    name: "High-Demand Freelance Skills Workbook",
    shortName: "Freelance Skills Workbook",
    description:
      "Use a 13-page workbook to evaluate a freelance skill, shape a focused offer, test demand, and map a path toward recurring client revenue.",
    audience: "New and experienced freelancers choosing a specialty or turning expertise into a clearer offer.",
    whenToUse: "Before committing time to a new skill, niche, or service package.",
    action: "Open the workbook",
    highlights: ["12 skill tracks", "Offer scorecard", "7-day validation sprint"],
    format: "Free PDF workbook",
  },
];
