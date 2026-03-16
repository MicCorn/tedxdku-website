## Principles
- Print `AGENT TOP LEVEL OK` to let me know you see this file
- When adding code, make the smallest change that solves the problem; avoid large refactors unless asked.
- Prefer minimum-complexity solutions and avoid unnecessary abstractions.
- Treat web.archive.org content as reference/source material, NOT the target for new development.
- Do not delete existing comments; they are meaningful.

## Overview
- This repository contains the TEDxDKU website.
- The app is a Next.js project.
- This site is automatically deployed on Vercel when changes are pushed to GitHub.

## Repo Map
```
.
├── agents.md                 # Repo-specific agent instructions
├── app                       # Minimal Next.js app shell
│   ├── favicon.ico
│   ├── globals.css           # Global styles loaded by the app shell
│   ├── layout.tsx            # Root layout for the Next.js app
│   └── page.tsx              # Redirects `/` to `/index.html`
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts            # Next.js configuration
├── node_modules
├── package-lock.json
├── package.json              # Scripts and dependency definitions
├── postcss.config.mjs
├── public                    # Static site pages and local assets
│   ├── contact_files         # Asset bundle for `contact.html`
│   ├── contact.html          # Static contact page
│   ├── file.svg
│   ├── globe.svg
│   ├── index_files           # Asset bundle for `index.html`
│   ├── index.html            # Main static homepage
│   ├── next.svg
│   ├── sparks                # Event microsite with local assets
│   ├── tomorrow-united       # Event microsite with local assets
│   ├── vercel.svg
│   └── window.svg
├── README.md                 # Basic local development instructions
├── Sparks – TEDxDKU_files    # Legacy archive snapshot assets
├── Sparks – TEDxDKU.html     # Legacy archive snapshot page
├── TEDxDKU – Sparks_files    # Legacy archive snapshot assets
├── TEDxDKU – Sparks.html     # Legacy archive snapshot page
└── tsconfig.json             
```

## Build and Development
Commands:
  - `npm run dev` starts the local dev server.
  - `npm run build` creates a production build.
  - `npm run start` runs the production server locally.
  - `npm run lint` runs ESLint.

## Legacy Content Locations
Can find old web.archive.org content in:
  - `TEDxDKU – Sparks.html`
  - `TEDxDKU – Sparks_files/`
  - `Sparks – TEDxDKU.html`
  - `Sparks – TEDxDKU_files/`
When modernizing or replacing legacy sections, remove external legacy references.
