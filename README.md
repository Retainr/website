# Retainr Website

Static Astro rebuild of my Webflow's `www.retainr.io` for GitHub Pages.

Production publishing and the reversible Webflow cutover are documented in [DEPLOYMENT.md](./DEPLOYMENT.md).

## Commands

```bash
npm install
npm run dev
npm run build
```

## Pricing

Update the free-forever offer in `src/config/pricing.json`. The pricing page reads the price, included features, upcoming product note, and FAQs from that file.

## Changelog

Public release notes live in `src/data/changelog.ts` and render at `/changelog/`. The GitHub Agentic Workflow in `.github/workflows/update-changelog.md` reviews meaningful commits, changes only that data file, and opens a guarded pull request. A second workflow verifies the complete production build before merging it.

After editing the agent workflow, refresh its generated lock file with:

```bash
gh aw compile update-changelog --validate --actionlint --zizmor
```

## Routes

The original Retainr routes are generated from `src/data/pages.ts`. Niche onboarding pages are generated from `src/data/niches.ts` under `/niches/<slug>/` and point to `https://app.retainr.io/signup?niche=<slug>`.
