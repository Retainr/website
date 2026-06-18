# Retainr Website

Static Astro rebuild of my Webflow's `www.retainr.io` for GitHub Pages.

## Commands

```bash
npm install
npm run dev
npm run build
```

## Pricing

Update pricing in `src/config/pricing.json`. The pricing page reads plans, billing prices, included features, trial copy, and FAQs from that file.

## Routes

The original Retainr routes are generated from `src/data/pages.ts`. Niche onboarding pages are generated from `src/data/niches.ts` under `/niches/<slug>/` and point to `https://app.retainr.io/signup?niche=<slug>&source=retainr-v2`.
