# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Muhammad Abdun Nasir — Portfolio Website** — A single-page, light-themed Swiss/brutalist portfolio built with React 19 + Vite 8 + Tailwind CSS 3. Features a Spline 3D decorative scene (yellow flowers), text animation components (SplitText, AnimatedScribble), and a Swiss-grid background system.

## Key Commands

```bash
npm run dev      # Vite dev server (HMR at localhost)
npm run build    # Production build to dist/
npm run preview  # Preview production build locally
npm run lint     # Run Oxlint (rules in .oxlintrc.json)
```

## Architecture

### Stack
- **React 19** with StrictMode, JSX (no TypeScript — `.jsx` extension)
- **Vite 8** with `@vitejs/plugin-react` (SWC-based)
- **Tailwind CSS 3** with PostCSS + Autoprefixer
- **Framer Motion** — scroll/viewport animations, staggered reveals, hover/tap effects
- **Spline Viewer** (`@splinetool/react-spline`) — 3D decorative scene (yellow flowers), loaded via web component (`<spline-viewer>`)
- **Lucide React** — icon library (consistent stroke width 1.5-2px, rounded caps)
- **Oxlint** — linter (rules in `.oxlintrc.json`, React + Oxc plugins)
- **Zustand** — available but not currently used

### Design Identity

Swiss / brutalist fusion on a light background (`#F5F5F5`):

| Element | Style |
|---------|-------|
| **Background** | `#F5F5F5` (warm off-white) |
| **Text** | `#0A0A0A` (brutal-black) |
| **Primary accent** | `#FFE600` (brutal-yellow) — badges, bars, highlights, scribbles |
| **Secondary accent** | `#FF3366` (brutal-pink) — focus rings, logo initial |
| **Tertiary accent** | `#0055FF` (brutal-blue) — defined in config, available |
| **Typography** | Bebas Neue/Impact (display headings), Inter (body/system) |
| **Shadows** | Hard-edge `box-shadow: 8px 8px 0px #0A0A0A` (brutalist) |
| **Background textures** | Swiss grid lines (80px vertical, 120px horizontal), dot grid (24px), SVG noise overlay (opacity 0.035) |
| **3D** | Spline decorative scene — yellow flowers, positioned absolute, pointer-events-none |
| **Motion** | Framer Motion with `prefers-reduced-motion` support |

Tailwind extends in `tailwind.config.js`: `brutal-black`, `brutal-white`, `brutal-yellow`, `brutal-pink`, `brutal-blue` colors; `display: ['"Bebas Neue"', 'Impact', 'sans-serif']`; `brutal`/`brutal-lg`/`brutal-sm` shadow tokens.

### Route / Page Structure

Single-page app with anchor-linked sections, all orchestrated in `App.jsx`:

```
Header (fixed top, 72px, white/90 + backdrop-blur)
  └── NavigationRail (fixed left, desktop only, 80px)
       └── Content area (pt-[72px], lg:pl-[80px])
            ├── Hero (#hero) — yellow accent bar, SplitText headline, yellow scribble underline, Spline 3D flowers background, bouncing CTAs
            ├── CapabilityGrid — service cards grid
            ├── Metrics — stat counters
            ├── Projects (#projects) — 3-column project card grid
            ├── Timeline — experience/work history timeline
            ├── Skills — bento grid + tech marquee
            ├── Contact — form + social links
            └── Footer
```

Each section is a white card (`bg-white`) separated by a `1px` gap with `border-b border-black/8`.

### Component Tree (`src/`)

```
main.jsx → App.jsx
  ├── components/
  │   ├── Header.jsx          — Fixed glass header, logo + "Resume" link
  │   ├── NavigationRail.jsx  — Fixed vertical nav rail (desktop) with section dots
  │   ├── Hero.jsx            — Headline, Spline 3D background, CTAs
  │   ├── CapabilityGrid.jsx  — Service capabilities grid
  │   ├── Metrics.jsx         — Animated stat counters
  │   ├── Projects.jsx        — 3-column project cards with hover scale & gradient overlay
  │   ├── Timeline.jsx        — Work experience timeline
  │   ├── Skills.jsx          — Bento grid skill cards + animated progress bars + marquee
  │   ├── Contact.jsx         — Glass contact card, form + social links
  │   └── Footer.jsx          — Copyright + credits
  ├── components/ui/
  │   ├── SplitText.jsx       — Word-by-word staggered reveal (y-axis flip)
  │   ├── BlurText.jsx        — Character-by-character blur-in animation
  │   ├── AnimatedScribble.jsx — SVG scribble underline (multiple variants)
  │   ├── BrutalistButton.jsx — Styled button component
  │   ├── FloatingGeometry.jsx — Decorative floating shapes
  │   ├── ParticleField.jsx   — Canvas particle background
  │   ├── Marquee.jsx         — Infinite scrolling tech names
  │   ├── Lanyard.jsx         — (Legacy) 3D ID card wrapper
  │   └── Lanyard3D.jsx       — (Legacy) Three.js/Rapier physics card
  ├── hooks/
  │   ├── useScrollSpy.js     — Tracks scroll position to highlight nav section
  │   ├── useLanyard.js       — (Legacy) Lanyard API polling
  │   └── usePresenceCanvas.js — (Legacy) Canvas texture rendering
  ├── data/
  │   ├── projects.js         — Project list (title, description, tags, image imports, URLs)
  │   └── skills.js           — Skill categories + levels + tech marquee list
  ├── assets/                 — Static images (PNG), card.glb, lanyard.png
  ├── App.jsx                 — Main layout: background layers (grid/dot/noise/scribbles/vignette) + all sections
  ├── main.jsx                — Entry point (ReactDOM.createRoot with StrictMode)
  └── index.css               — Tailwind directives + custom utilities (.bg-swiss-grid, .bg-noise, .bg-dot-grid) + marquee keyframes + scrollbar
```

### Background Layer System

App.jsx layers these behind `z-0` (all `pointer-events-none`):
1. **Swiss grid** (`bg-swiss-grid`) — vertical + horizontal repeating lines at `rgba(0,0,0,0.04/0.03)`
2. **Dot grid** — `radial-gradient` circles at 24px spacing, `rgba(0,0,0,0.07)`
3. **Noise texture** (`bg-noise`) — SVG `feTurbulence` noise, `opacity: 0.035`, `mix-blend-mode: multiply`
4. **Scribbles** (`BackgroundScribbles`) — decorative SVG path scribbles
5. **Vignette** — gradient from `#F5F5F5` at edges to transparent in center

### Key Patterns

- **Animations**: Every section uses `framer-motion` `motion.div` with `initial`/`animate`/`whileInView` + `viewport={{ once: true }}`. Hover states use `whileHover={{ scale: 1.02 }}`.
- **Text animations**: `SplitText` wraps words as individual `<span>` elements staggered at 40-60ms. `BlurText` animates characters from `blur(8px)` to clear.
- **3D Spline**: Loaded via `<spline-viewer>` web component (not React Fiber). Background decorative only, not interactive. `saturate(1.5) brightness(1.1)` filter applied.
- **Navigation**: Two nav systems — `Header` (fixed top, horizontal) + `NavigationRail` (fixed left, vertical section dots with `useScrollSpy`).
- **Marquee**: CSS `@keyframes marquee` animation (20s linear infinite, pauses on hover). Tech names array duplicated for seamless loop.
- **Accessibility**: Skip link (`#projects`), `focus-visible` outline (brutal-pink), `aria-label` on interactive sections, `prefers-reduced-motion` kills all animations.
- **Linting**: Oxlint with React rules (`rules-of-hooks`, `only-export-components`). No ESLint/Prettier.

### Deprecated / Legacy Files

The following files from the previous dark-glassmorphism design still exist but are **not imported** in the current `App.jsx`:
- `components/Navbar.jsx` — replaced by Header
- `components/Keahlian.jsx` — replaced by Skills
- `components/Works.jsx` — replaced by Projects
- `components/Manifesto.jsx` — not used
- `components/ui/Lanyard.jsx`, `Lanyard3D.jsx`, `Lanyard3D.css`, `card.glb`, `lanyard.png`
- `hooks/useLanyard.js`, `hooks/usePresenceCanvas.js`
