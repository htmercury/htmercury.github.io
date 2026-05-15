# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio site for Ka Wong (htmercury), built with Gatsby v2 and deployed to GitHub Pages via `gh-pages`. The site is hosted at htmercury.me (CNAME managed by `gatsby-plugin-cname`).

## Commands

- **Dev server:** `npm run develop` (or `gatsby develop`) — runs at localhost:8000
- **Build:** `npm run build` (or `gatsby build`)
- **Deploy:** `npm run deploy` — builds and pushes `public/` to the `master` branch via gh-pages
- **Format:** `npm run format` — runs Prettier on `src/**/*.{js,jsx}`
- **No test suite** — the test script is a placeholder
- **Requires Node 16** — use `nvm use` (reads `.nvmrc`)

## Branch Model

- `develop` — working branch for development
- `master` — production branch (contains only the built `public/` output, pushed by `gh-pages`)

Do not commit source code to `master`. All source changes go on `develop`.

## Architecture

**Gatsby v2 + React 16 class components + SCSS Modules**

Layout wrapping uses `gatsby-plugin-layout`, which auto-wraps all pages with `src/layouts/index.js`. This is the persistent shell (navbar, header sidebar, footer, particle background). Page transitions are handled by `react-transition-group` in `src/components/transition.js`.

### Key directories

- `src/pages/` — route pages (index, technologies, experience, portfolio, contact). Notes page exists but is removed from nav.
- `src/layouts/` — persistent layout shell: `index.js` (root layout), `header.js` (sidebar with nav), `navbar.js` (mobile top bar), `menu.js` (mobile menu overlay), `footer.js`, `bubbles.js` (particle background)
- `src/components/` — reusable components (SEO, image helpers, transition wrapper)
- `src/styles/` — SCSS modules per component/page, plus `global.scss` and `colors.scss` (shared color variables and `color()` shade function)
- `src/assets/` — SVG icons (imported as data URIs via webpack url-loader; `gatsby-plugin-svgr` is disabled)
- `src/images/` — raster images processed by `gatsby-plugin-sharp`

### Styling

- Component styles use CSS Modules (`*.module.scss`) with `classnames` for conditional classes
- Global color palette defined in `src/styles/colors.scss` with a `color($color, $shade)` function for darkening/lightening (shade 0-800, 400 = base)
- Typography uses `typography-theme-github` configured in `src/utils/typography.js`

### Particle Background

`src/layouts/bubbles.js` renders `react-particles-js` as a full-page background layer. Particles are disabled on mobile. The particle limit is 400. The canvas uses `margin-right: -150px` in `layout.module.scss`; `body` has `overflow-x: hidden` to prevent horizontal scrolling.

### Known Constraints

- **Node 16 required** — Gatsby v2 + sharp don't work on Node 18+. Apple Silicon needs the `sharp` override in package.json (`"overrides": {"sharp": "0.30.7"}`).
- **`node-sass` replaced with `sass`** (Dart Sass) — install with `--legacy-peer-deps` since `gatsby-plugin-sass@2` still lists `node-sass` as a peer dep.
- **`gatsby-plugin-svgr` disabled** — the svgr + url-loader chain produces corrupt data URIs (JS code base64-encoded as SVG). All SVG imports use default exports as data URI strings for `<img src>`.
- **`DEV_SSR: false`** in gatsby-config — Gatsby 2.32 auto-enables DEV_SSR which causes SSR errors with the particle canvas.

## Code Style

- ESLint: 2-space indent, double quotes, semicolons required, unix line endings
- Prettier: no semicolons (note: conflicts with ESLint config), double quotes, trailing commas (es5), tab width 2
- Components are React class components (not hooks)
