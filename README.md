# Everayy Commissions

Commissions site for Everayy, a writer offering commissioned fiction written to order.

**Live:** https://everayy.com

## Features

- **Home:** writer intro, navigation, social links, and a link to the live commission queue (a Trello board).
- **Samples & Pricing:** writing samples, word-count pricing tiers, and add-ons.
- **Terms of Service:** scope, payment, revisions, refunds and cancellation, and rights and credit.
- **Contact:** links to Twitter, Tumblr, AO3, Ko-fi, Straw.page, and email.
- Custom 404 page.
- Neobrutalist, poster-style design in plain CSS (no UI framework), with view transitions between pages via Astro's `ClientRouter`.
- **Performance and SEO:** stylesheets inlined to avoid render-blocking CSS, preloaded LCP portrait, Open Graph image, canonical URLs, JSON-LD Person schema, and a generated sitemap.
- Vercel Web Analytics.

## Tech stack

- [Astro 6](https://astro.build) (static site)
- `@astrojs/sitemap`
- `@vercel/analytics`
- Bun for package management; Node >= 22.12 (`.nvmrc` pins 22.14.0)
- GitHub Actions CI

## Project structure

```text
src/
├── pages/           # index, samples-pricing, terms-of-service, contact, 404
├── layouts/         # Shared layout: head/SEO tags, global styles, analytics
├── content/site.ts  # Writer info, nav, socials, and queue URL in one place
└── assets/          # Portrait image
public/              # Favicon, OG image, robots.txt
```

Most shared copy and links are edited in `src/content/site.ts`.

## Local development

```bash
bun install          # install dependencies
bun run dev          # start the dev server (http://localhost:4321)
bun run build        # production build to ./dist/
bun run preview      # preview the production build
bunx astro check     # typecheck
```

## CI and deployment

GitHub Actions (`.github/workflows/ci.yml`) runs `astro check` and a production build on every push and pull request to `main`/`master`. The site is hosted on Vercel at [everayy.com](https://everayy.com).
