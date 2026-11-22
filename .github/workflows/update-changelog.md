---
name: Retainr changelog bot

on:
  push:
    branches: [main]
    paths-ignore:
      - src/data/changelog.ts
      - .github/workflows/**
  schedule: weekly on monday
  workflow_dispatch:

permissions:
  contents: read
  pull-requests: read
  copilot-requests: write

network: defaults

checkout:
  fetch-depth: 0

tools:
  github:
    toolsets: [repos, pull_requests]

safe-outputs:
  create-pull-request:
    title-prefix: "[changelog] "
    draft: false
    max: 1
    base-branch: main
    preserve-branch-name: true
    recreate-ref: true
    allowed-branches:
      - automation/changelog
    allowed-files:
      - src/data/changelog.ts
    fallback-as-issue: true
    exclude-lock-yml: true

timeout-minutes: 20
max-ai-credits: 25
---

# Keep the Retainr changelog current

Review new commits in this repository and update `src/data/changelog.ts` when the shipped work is useful to Retainr users.

## Find the review range

1. Read `changelogReviewedThrough` in `src/data/changelog.ts`.
2. Find the newest commit that changes something outside `src/data/changelog.ts` and `.github/workflows/**`.
3. Review every relevant commit after `changelogReviewedThrough` through that newest commit. Read the diffs; do not infer a release note from a commit subject alone.
4. If there are no relevant commits after the marker, call the `noop` tool and explain that the changelog is already current.

## Decide what belongs

Add an entry only for completed, user-visible work that changes what someone can use, understand, or rely on. Good candidates are a new capability, a meaningful workflow improvement, an accessibility improvement, or a reliability fix with a clear user effect.

Do not publish internal refactors, dependency bumps, formatting, tests on their own, deployment chores, changelog machinery, speculative work, secrets, security-sensitive implementation detail, customer data, or claims that the diff does not support. Never edit any bio or account profile description.

Group related commits into one concise entry. Use direct British English. Avoid hype, filler, invented metrics, em dashes, and generic AI language. Keep the newest entry first. Use one of the existing kinds: `new`, `improved`, or `fixed`.

For every website entry, record the full commit SHAs under `source.repository: "website"`. Do not change existing release notes unless a factual correction is required.

## Complete the review

Always advance `changelogReviewedThrough` to the newest relevant commit after reviewing the full range, even when none of those commits deserves a public release note.

Run `npm test` and `npm run build` from the repository root after editing. Fix failures before continuing.

Create one non-draft pull request with:

- branch: `automation/changelog`
- title: a short description starting with `Update Retainr changelog`
- body: the reviewed commit range, entries added or the reason none were added, and the verification results

Only `src/data/changelog.ts` may change. If the marker already points to the newest relevant commit, do not create a pull request. Call the `noop` tool with a brief explanation instead.
