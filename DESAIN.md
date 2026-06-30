# Muhammad Abdun Nasir — Design System v2

> Studio-grade visual identity for a Backend & Frontend Architect portfolio.
> Dark glassmorphism · Cyber-neon accents · Physics-driven interaction.

---

## Design Philosophy

This portfolio is a **technical artifact** — not a brochure. Every visual decision serves one goal: communicate that the person behind it builds systems that are both architecturally sound and beautifully surfaced.

The signature element is the **3D ID card with rope physics** — an interactive, real-time physics object that the visitor can grab and drag. It is the single memorable thing. Everything around it — the glass cards, the typography, the aurora glow — exists to frame and support that artifact, not compete with it.

> **Restraint principle**: One bold move (the 3D card). Everything else is disciplined, quiet, and precise. If an element doesn't serve the narrative, cut it.

---

## 1. Brand Narrative

| Layer | Message |
|-------|---------|
| **Hero statement** | Backend & Frontend Architect — full-stack systems thinker |
| **Audience** | Startup CTOs, agency founders, freelance clients |
| **Tone** | Technical, precise, confident — but not cold |
| **Signature** | 3D physics ID card (Lanyard) — interactive, real-time, memorable |
| **Emotion** | "This person builds the real thing — not templates" |

---

## 2. Color System

### 2.1 Semantic Tokens

Use these tokens everywhere. Never use raw hex values in components.

| Token | Value | Role |
|-------|-------|------|
| `--surface-base` | `#09090B` | Deepest background canvas |
| `--surface-elevated` | `#121217` | Card bases, section alternates |
| `--glass-fill` | `rgba(25, 25, 30, 0.4)` | Glass card backgrounds |
| `--glass-fill-hover` | `rgba(255, 255, 255, 0.05)` | Glass card hover state |
| `--glass-border` | `rgba(255, 255, 255, 0.08)` | Glass card borders |
| `--glass-border-hover` | `rgba(6, 182, 212, 0.4)` | Glass card hover border glow |
| `--accent-cyan` | `#06B6D4` | Primary accent, interactive highlights, links |
| `--accent-purple` | `#8B5CF6` | Secondary accent, gradients, ambient glow |
| `--text-primary` | `#FAFAFA` | Main body text, headings |
| `--text-secondary` | `#A1A1AA` | Sub-texts, descriptions, metadata |
| `--text-tertiary` | `#52525B` | Placeholder text, disabled content |
| `--success` | `#10B981` | Online status, success states |
| `--warning` | `#F59E0B` | Idle status, caution |
| `--danger` | `#F43F5E` | DND status, destructive actions |
| `--aurora-cyan` | `rgba(6, 182, 212, 0.10)` | Ambient cyan glow blob |
| `--aurora-purple` | `rgba(139, 92, 246, 0.10)` | Ambient purple glow blob |

### 2.2 Usage Rules

- **Primary accent (cyan)**: Interactive elements, focus rings, links, active nav, progress bars, avatar rings
- **Secondary accent (purple)**: Gradients with cyan, ambient background blobs, decorative glow
- **Glass fills**: Never exceed 0.4 opacity — beyond that reads as solid gray, not glass
- **Elevation via blur**: Higher blur = higher elevation. No drop-shadows. Inner white borders simulate glass thickness
- **Contrast floor**: Text on glass = `#FAFAFA` (ratio exceeds 10:1 on all surfaces). Secondary text `#A1A1AA` on `#09090B` = 5.6:1

---

## 3. Typography

### 3.1 Font Stack

| Role | Font | Weight | Fallback |
|------|------|--------|----------|
| **Display** | Plus Jakarta Sans | 800 (ExtraBold) | Inter, sans-serif |
| **Heading** | Plus Jakarta Sans | 700 (Bold) | Inter, sans-serif |
| **Body** | Plus Jakarta Sans | 400 (Regular) | Inter, sans-serif |
| **Code / Mono** | JetBrains Mono | 400, 500 | Fira Code, monospace |
| **UI Labels** | Plus Jakarta Sans | 500 (Medium) | Inter, sans-serif |

### 3.2 Type Scale

| Role | Size | Line Height | Letter Spacing | Weight | Usage |
|------|------|-------------|----------------|--------|-------|
| **Display** | 64px / 4rem | 1.05 | -0.04em | 800 | Hero H1, large headlines |
| **H1** | 48px / 3rem | 1.1 | -0.02em | 800 | Section primary headings |
| **H2** | 32px / 2rem | 1.2 | -0.01em | 700 | Section secondary headings |
| **H3** | 24px / 1.5rem | 1.3 | -0.005em | 700 | Card titles, component headings |
| **Body Lg** | 20px / 1.25rem | 1.5 | 0 | 400 | Hero paragraph, featured text |
| **Body** | 16px / 1rem | 1.6 | 0 | 400 | Primary reading text |
| **Body Sm** | 14px / 0.875rem | 1.5 | 0.01em | 400 | Captions, descriptions |
| **Label** | 12px / 0.75rem | 1.4 | 0.02em | 500 | Badges, eyebrow, metadata |
| **Mono** | 11-13px | 1.4 | 0.05em | 400 | Code, tech tags, stats |
| **Overline** | 10px / 0.625rem | 1.2 | 0.15em | 600 | Status labels, section markers |

### 3.3 Typography Rules

- **Display text**: Always use negative tracking. ExtraBold only. Never use for body copy.
- **Body text**: 16px minimum on mobile (prevents iOS auto-zoom). Line-height 1.6 for readability.
- **Mono elements**: Tech badges, progress percentages, code snippets, barcode labels.
- **Gradient text**: Apply only to hero headline's "Frontend Architect" word. Use `bg-clip-text` with cyan→purple gradient. Single-use only.
- **Links**: Always cyan `#06B6D4` with underline-on-hover via gradient border-bottom animation.

---

## 4. Spacing & Layout

### 4.1 Spacing Scale (Base: 8px)

| Token | Value | Name |
|-------|-------|------|
| `--space-3xs` | 4px | Quarter unit |
| `--space-2xs` | 8px | Half unit |
| `--space-xs` | 16px | 1 unit |
| `--space-sm` | 24px | 1.5 units |
| `--space-md` | 32px | 2 units |
| `--space-lg` | 48px | 3 units |
| `--space-xl` | 64px | 4 units |
| `--space-2xl` | 96px | 6 units |
| `--space-3xl` | 128px | 8 units |

### 4.2 Layout Grid

```
Page width:     min(1280px, 100vw - 2 * 2rem)
Column count:   12-column implicit grid
Gap:            1.5rem (sm) / 2rem (md+)
Section gap:    5rem (80px) mobile / 7.5rem (120px) desktop
Content padding: 1rem (mobile) / 2rem (tablet) / 2rem (desktop)
```

### 4.3 Breakpoints

| Breakpoint | Width | Layout Shift |
|------------|-------|--------------|
| **Mobile** | < 640px | Single column, stacked sections |
| **Tablet** | 640-1023px | 2-column grids, condensed spacing |
| **Desktop** | 1024-1279px | Full 12-col, standard spacing |
| **Wide** | 1280px+ | Max-width container, centered |

### 4.4 Responsive Behavior

- **Navbar**: Fixed top. Mobile shows hamburger drawer. Desktop shows full links + CTA.
- **Hero**: Stack vertically on mobile (text then 3D card). Side-by-side on lg+.
- **Skills**: Single column → 3-column bento grid. Marquee always full-width.
- **Works**: Single column → 3-column project grid.
- **Contact**: Single column card → 2-column (form left, info right).
- **No horizontal scroll** at any breakpoint. Never disable zoom.

---

## 5. Component Specifications

### 5.1 Navigation Bar (Glass Header)

```
States:    Default (transparent) → Scrolled (glass)
Background: rgba(9, 9, 11, 0.5) + backdrop-blur-[12px]
Border:     bottom only, 1px rgba(255, 255, 255, 0.08)
Padding:    20px top/bottom (default) → 16px (scrolled)
Height:     ~72px default / ~64px scrolled
Logo:       32px rounded-lg gradient box + "Nasir" text
Links:      14px, #A1A1AA → #FAFAFA on hover
            2px gradient underline on hover (left-to-right reveal)
CTA:        "Hire Me" pill button, white/5 bg, cyan arrow icon

Mobile:
  - Hamburger icon (md:hidden)
  - Full-screen drawer with backdrop blur
  - Links stacked vertically, 16px font, bottom border separator
  - CTA becomes full-width gradient button at bottom
  - Close on link click
```

### 5.2 Hero Section

```
Layout:     7-col text + 5-col 3D card (lg+)
            Stacked vertically (mobile)
Heading:    Display 64px → 48px (tablet) → 36px (mobile)
            "Backend &" → SplitText (word stagger 60ms)
            "Frontend Architect" → BlurText + gradient bg-clip
Subtext:    20px body, max-w-xl, #A1A1AA, 1.5 leading
CTA Primary: #FAFAFA bg, #09090B text, 16px semibold
             px-6 py-3.5, 12px radius
             Hover: box-shadow white glow + translateY(-2px)
CTA Secondary: glass border, cyan icon, hover border glow

Badge:      "Tersedia untuk Proyek Freelance"
            Pill shape, glass fill, cyan text, Sparkles icon
            Scale-fade entrance animation

3D Card:    Lanyard component with Rapier physics
            Interactive: drag with mouse/finger
            Canvas-rendered ID card with Discord presence
            Fallback: loading spinner + "Memuat simulasi 3D..."
```

### 5.3 Glass Card (Reusable)

```
Background: rgba(25, 25, 30, 0.4) + backdrop-blur-[16px]
Border:     1px solid rgba(255, 255, 255, 0.08)
Radius:     24px (glass-xl)
Padding:    32px (default) / 24px (mobile)

Hover:
  - Background: rgba(255, 255, 255, 0.03)
  - Border: rgba(6, 182, 212, 0.4)
  - Transition: all 300ms ease-out
  - No drop-shadow — inner border glow only

States:
  - Default: Glass fill, subtle border
  - Hover: Cyan border glow, slightly lighter fill
  - Active (click): scale(0.98) for 150ms
  - Disabled: opacity 0.5, no hover effects
```

### 5.4 Skill Card (Bento)

```
Layout:     1fr (mobile) → 2fr 1fr (desktop, backend wider)
Padding:    32px
Contents:
  - Icon box (48px, rounded-xl, border)
  - Category name (20px bold, #FAFAFA)
  - Description (14px, #A1A1AA)
  - Skill rows (name + percentage + gradient progress bar)
Progress bar:
  - Height: 6px
  - Background: white/5 rounded-full
  - Fill: gradient cyan→purple, glow shadow
  - Animation: width grows from 0 → target over 1s on scroll
```

### 5.5 Project Card

```
Layout:     Group hover card, flex column
Image:
  - 16:10 aspect ratio, rounded-xl
  - Dark gradient overlay (bottom → transparent)
  - Scale 1.0 → 1.04 on hover (500ms)
Header:     Title (20px bold) + GitHub + External link icons
Body:       14px description, #A1A1AA
Tags:       Mono 11px pills, white/2 bg, #A1A1AA
            Wrapping flex row at bottom
```

### 5.6 Primary Button

```
Background: #FAFAFA
Text:       #09090B, 16px, font-semibold
Radius:     12px
Padding:    12px 24px (default) / 14px 28px (lg)
Icon:       Lucide, 16px, arrow/chevron

States:
  - Default: White surface, dark text
  - Hover: box-shadow 0 0 25px rgba(255,255,255,0.45)
           + translateY(-2px), 300ms
  - Active: scale(0.97), 150ms
  - Loading: Spinner replaces icon, disabled
  - Disabled: opacity 0.4, no pointer events
```

### 5.7 Secondary / Ghost Button

```
Background: rgba(255, 255, 255, 0.05)
Border:     1px solid rgba(255, 255, 255, 0.1)
Text:       #A1A1AA → #FAFAFA, 14px semibold
Radius:     12px
Padding:    12px 24px

States:
  - Default: Glass fill, muted text
  - Hover: Border → cyan/40, bg → white/10, text → white
  - Active: scale(0.97)
```

### 5.8 Form Input

```
Background: Transparent (inside glass card)
Border:     Bottom only, 1px solid glass-border
Text:       14px, #FAFAFA
Label:      10px uppercase, cyan, mono, tracking-widest
Placeholder: #A1A1AA/35
Padding:    12px 0
Radius:     0 (bottom border style)

States:
  - Default: glass-border bottom line
  - Focus: border → cyan, 300ms transition
  - Error: border → #F43F5E, error message below
  - Filled: normal state, no change
  - Disabled: opacity 0.4
```

### 5.9 Tech Badge / Tag

```
Background: rgba(255, 255, 255, 0.02)
Border:     1px solid rgba(255, 255, 255, 0.05)
Text:       11px mono, #A1A1AA
Radius:     999px
Padding:    4px 10px
```

---

## 6. Motion & Animation

### 6.1 Timing Map

| Interaction | Duration | Easing | Notes |
|-------------|----------|--------|-------|
| Hover (scale, glow) | 300ms | ease-out | Smooth entrance |
| Active press | 150ms | ease-in | Quick snap |
| Page reveal (scroll) | 600ms | `[0.16, 1, 0.3, 1]` | Expo ease-out |
| Stagger delay | 150ms | — | Between children |
| Modal enter | 300ms | ease-out | scale + fade |
| Modal exit | 200ms | ease-in | Faster than enter |
| Marquee scroll | 25s | linear | Infinite, pause on hover |
| Aurora float | 12-15s | ease-in-out | Per-blob variant |

### 6.2 Motion Principles

- **Transform-only**: Animate `opacity` and `transform` only. Never animate `width`, `height`, `top`, `left`, `margin`, or `padding` — these cause layout reflow.
- **Reduced motion**: Respect `prefers-reduced-motion`. Disable all decorative animations (aurora, marquee, stagger reveals). Keep functional transitions (hover, focus) but remove duration — instant state changes only.
- **Exit faster than enter**: Exit animations run at 60-70% of enter duration. Makes UI feel responsive.
- **Stagger sequencing**: List/grid items enter staggered by 150ms ± 30ms per item. Not all-at-once, not too slow.
- **One core animation per view**: The hero's SplitText/BlurText is the single orchestrated entrance. Other sections reveal on scroll with `whileInView`.
- **Spring physics preferred**: Use `type: "spring"` with `stiffness: 100-200` and `damping: 20-30` for natural-feeling motion. Reserve cubic-bezier for entrance sequences.

### 6.3 Scroll-Triggered Reveals

Every section uses the same pattern:

```
whileInView={{ once: true }}
viewport={{ margin: "-50px" }}
staggerChildren: 0.15
cardVariants:
  hidden: { opacity: 0, y: 30 }
  visible: { opacity: 1, y: 0, duration: 0.6, ease: [0.16, 1, 0.3, 1] }
```

### 6.4 Micro-interactions

| Element | Trigger | Response |
|---------|---------|----------|
| Nav link | Hover | Underline slides left→right (300ms) |
| Glass card | Hover | Border glow cyan, bg slightly lighter |
| Project card | Hover | Image scale 1.04, title turns cyan |
| Button | Hover | White glow shadow + lift 2px |
| Button | Active | Scale 0.97 |
| Input | Focus | Bottom border turns cyan (300ms) |
| Social icon | Hover | Icon turns cyan, border cyan/50 |
| Logo | Hover | Gradient box rotates 12deg |
| Tech badge | Hover | Text turns cyan (300ms) |

---

## 7. Ambient Background System

The aurora layer is a **fixed-position** background behind all content:

```
Layer stack:
  z-0:  Aurora blobs (2-3 large blurred circles)
  z-10: Content sections

Blobs:
  - Cyan: top-left, 50vw, blur-150, #06B6D4/10
  - Purple: mid-right, 50vw, blur-150, #8B5CF6/10
  - Cyan: bottom-left, 40vw, blur-150, #06B6D4/8

Animation: slow float on different timings (12s, 15s)
  - Each blob translates 20-40px in random directions
  - Scales 0.95→1.1 over the cycle
  - Easing: ease-in-out, infinite
```

The aurora gives the glass its color — without these blobs, transparent glass on black looks like flat gray.

---

## 8. Accessibility Standards

### 8.1 Color & Contrast

- **Body text**: `#FAFAFA` on `#09090B` = 18.5:1 (exceeds WCAG AAA 7:1)
- **Secondary text**: `#A1A1AA` on `#09090B` = 5.6:1 (exceeds WCAG AA 4.5:1)
- **Cyan accent**: `#06B6D4` on `#09090B` = 7.2:1 (AA for all text sizes)
- **Never rely on color alone** to convey information. Add icons, text, or patterns alongside color.

### 8.2 Focus & Keyboard

- **Visible focus rings**: 2px solid cyan `#06B6D4` with 2px offset on all interactive elements
- **Tab order**: Must match visual order. All interactive elements keyboard-reachable.
- **Skip link**: Hidden skip-to-content link for keyboard users (revealed on first tab).
- **Focus never removed**: `outline: none` only with custom focus style.

### 8.3 Screen Readers

- All icon-only buttons have `aria-label`
- Images have descriptive `alt` text
- Form fields have visible `<label>` with `htmlFor` attribute
- Status announcements use `aria-live="polite"`
- Navigation uses `<nav>` with `aria-label="Main navigation"`
- Section landmarks use `<section>` with `aria-label` or `id`

### 8.4 Touch Targets

- Minimum 44×44px for all interactive elements
- 8px minimum gap between adjacent touch targets
- Hover effects are supplemented with active/focus states for touch devices

### 8.5 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  .animate-aurora-1,
  .animate-aurora-2,
  .animate-marquee,
  .motion-safe-only {
    animation: none !important;
    transition: none !important;
  }
}
```

All `framer-motion` animations use `transition: { ease: ... }` with no spring when reduced motion is detected via `useReducedMotion()` hook.

---

## 9. Elevation & Surface System

This system replaces traditional `box-shadow` z-index with a **blur + border** approach:

| Level | Blur | Border | Typical Use |
|-------|------|--------|-------------|
| Ground | None | None | Page background `#09090B` |
| Surface | 12px blur | 1px rgba(W,0.08) | Glass cards, skill panels |
| Raised | 16px blur | 1px rgba(W,0.10) | Contact card, hover states |
| Modal | 24px blur | 1px rgba(W,0.12) | Future: mobile drawer, overlays |
| Navbar | 12px blur | Bottom border only | Fixed header |

No element uses `box-shadow`. Depth comes from:
1. How much of the aurora the blur lets through
2. The brightness of the inner white border
3. Overlapping light cones from aurora blobs

---

## 10. Icons & Visual Language

- **Icon set**: Lucide React (consistent stroke width 1.5-2px, rounded caps)
- **Icon sizes**: 14px (inline), 16px (button), 20px (section), 24px (feature)
- **Icon usage**: Never use emoji as UI icons. SVG or Lucide only.
- **Icon color**: Inherits text color by default. Cyan for accent highlights.
- **Decorative graphics**: Only the 3D Lanyard card. No clipart, no stock illustrations.

---

## 11. Writing & Microcopy

| Context | Tone | Example |
|---------|------|---------|
| Hero tagline | Technical, aspirational | "Backend & Frontend Architect" |
| CTA primary | Direct, action-oriented | "Lihat Karya Saya" |
| CTA secondary | Warm invitation | "Hubungi Saya" |
| Skill section | Confident, specific | "Membangun arsitektur server-side yang cepat, aman" |
| Project description | Outcome-focused, specific | "Aplikasi manajemen keuangan SaaS untuk..." |
| Form labels | Clear, minimal | "Nama Lengkap", "Alamat Email" |
| Form placeholder | Helpful example | "nama@email.com" |
| Error messages | Specific, actionable | Never vague — state what's wrong and how to fix |
| Empty states | Invitation to act | Not shown (portfolio has no empty states) |

- **Active voice always**: "Lihat Karya Saya" not "Karya Saya Dilihat"
- **Sentence case**: Only proper nouns and first word capitalized
- **No filler**: Every word earns its place

---

## 12. Performance Budget

| Metric | Target |
|--------|--------|
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Time to Interactive | < 2.5s |
| Cumulative Layout Shift | < 0.05 |
| Lighthouse Performance | > 90 |
| Bundle size (JS initial) | < 150 KB gzip |

### Key tactics:
- Lazy load Three.js bundle (code-split Lanyard component via `React.lazy` + `Suspense`)
- Use `loading="lazy"` on project images
- Statically import hero image; defer 3D assets
- Preload Plus Jakarta Sans font (swap display)
- Hero section above-the-fold CSS inlined where practical

---

## 13. Agent Prompt Guide

Use these prompts sequentially with an AI code generator (Cursor, Claude, v0) to build or rebuild the portfolio. Provide this DESAIN.md as reference before each prompt.

### Prompt 1: Project Scaffold + Global Styles

> Build a React + Vite + Tailwind v3 project with the following setup:
> - Install: react, react-dom, framer-motion, lucide-react, zustand, three, @react-three/fiber, @react-three/drei, @react-three/rapier, meshline, @dimforge/rapier3d-compat
> - Tailwind config extends: colors (bg-base #09090B, accent-cyan #06B6D4, accent-purple #8B5CF6, text-primary #FAFAFA, text-secondary #A1A1AA, glass-fill rgba(25,25,30,0.4), glass-border rgba(255,255,255,0.08), glass-hover rgba(255,255,255,0.15), success-emerald #10B981), borderRadius (glass-md 12px, glass-xl 24px, glass-2xl 32px), fontFamily (Plus Jakarta Sans + Inter)
> - index.css: Import Tailwind directives, define CSS custom properties (:root with all tokens above), set body bg #09090B text #FAFAFA, Plus Jakarta Sans font, antialiased, custom scrollbar (8px, dark track, glass thumb), @keyframes aurora-float-1/2 + .animate-aurora-1/2 classes, @keyframes marquee + .animate-marquee class (pauses on hover), @media prefers-reduced-motion
> - index.html: Google Fonts preconnect for Plus Jakarta Sans + Inter, meta viewport, dark body classes
> - Vite: configure assetsInclude for '**/*.glb'

### Prompt 2: Ambient Aurora + Navbar

> Create App.jsx as the main layout:
> 1. Fixed ambient layer: 3 divs positioned absolutely (top-left cyan 50vw blur-150, mid-right purple 50vw blur-150, bottom-left cyan 40vw blur-100) with animate-aurora-1/2 classes. pointer-events-none, z-0.
> 2. Relative content layer z-10: Navbar + all sections.
> 3. Navbar: Fixed top, z-50, transition bg from transparent → glass on scroll (threshold 20px). Border-bottom only. Logo: 32px gradient box (cyan→purple) with Terminal icon + "Nasir" text. Desktop: 4 nav links (Beranda/Keahlian/Proyek/Kontak) with gradient underline hover effect + "Hire Me" pill CTA. Mobile: hamburger → full backdrop-blur drawer with stacked links + full-width gradient CTA. Use lucide-react icons (Menu, X, Terminal, ArrowUpRight).

### Prompt 3: Hero Section with 3D Lanyard

> Build the Hero section (#home):
> - lg:grid-cols-12 layout: 7 col text left, 5 col 3D card right
> - Top badge: pill glassmorphism with Sparkles icon + "Tersedia untuk Proyek Freelance"
> - Heading: SplitText "Backend &" (word stagger 60ms, y-axis flip from 115% to 0) + BlurText "Frontend Architect" (character blur-in from 8px to 0) with gradient bg-clip cyan→purple
> - Subtext: 20px, #A1A1AA, "Membangun web responsif yang modern..."
> - CTA pair: white primary button with arrow icon + glass secondary button with Code2 icon
> - 3D Lanyard: interactive Three.js card with Rapier rope physics. Canvas-rendered texture showing Discord presence (avatar, status, activity/Spotify, name, title). Fallback: loading spinner with glass card. Card GLB model and lanyard PNG texture pre-imported.
> - Animations: staggered fade-in with 0.5-1.0s delays

### Prompt 4: Skills Bento + Marquee

> Build Keahlian section (#skills):
> - Section header: glass badge "Keahlian & Teknologi" + "My Expertise" H2 + description paragraph
> - Bento grid: 1fr mobile → 2fr+1fr desktop. Backend card (Laravel, PHP, MySQL) wider. Frontend card (React, Tailwind, Next.js) narrower. Each has icon 48px box, category name, description, skill rows with animated gradient progress bars (cyan→purple, 6px height, glow shadow, width animates from 0 on scroll via framer-motion)
> - Stagger entrance: cards animate in at 150ms intervals
> - Marquee: border-top + border-bottom container, edge fade gradients (w-24 left+right). Duplicate tech names array, animate-marquee class (25s linear infinite, pause on hover). Mono font, #A1A1AA/45

### Prompt 5: Projects Grid + Contact Form

> Build Works (#works) and Contact (#contact) sections:
> - Works: 3-column grid of glass project cards. Each: 16:10 image container with gradient overlay + hover scale(1.04), title + GitHub/External links, description, tech tag badges (999px mono pills)
> - Background glow: radial purple + cyan behind section
> - Contact: centered large glass card (32px radius, inner ambient glow). 2-col: form (7) + info (5). Form: transparent inputs with bottom border only, cyan focus, uppercase cyan mono labels, white submit button with Send icon. Info: MapPin + Mail contact details, 3 social icons (GitHub, LinkedIn, WhatsApp) with hover→cyan effect

---

## 14. Pre-Delivery Checklist

### Visual
- [ ] No emoji used as structural icons (all Lucide SVG)
- [ ] All icons consistent stroke width
- [ ] Hover states: border glow + subtle bg, no layout shift
- [ ] Typography scale matches spec exactly (no arbitrary sizes)
- [ ] Gradient text used only on the one hero word

### Interaction
- [ ] Touch targets ≥ 44×44px
- [ ] All micro-interactions 150-300ms
- [ ] Disabled states visually distinct
- [ ] Loading state for 3D card (spinner + text)
- [ ] Form submit shows feedback (currently mock alert)

### Accessibility
- [ ] Color contrast ≥ 4.5:1 for all text
- [ ] Visible focus rings on all interactive elements
- [ ] Tab order matches visual layout
- [ ] All images have alt text
- [ ] Form labels use `<label htmlFor="...">`
- [ ] `prefers-reduced-motion` respected

### Responsive
- [ ] Tested at 375px (small phone)
- [ ] Tested at 768px (tablet)
- [ ] Tested at 1280px+ (desktop)
- [ ] No horizontal scroll at any width
- [ ] Mobile nav drawer works correctly
- [ ] 3D card collapses gracefully on mobile (lower DPR)

### Performance
- [ ] Images use loading="lazy"
- [ ] Font display: swap
- [ ] No layout shift from image loading
- [ ] Three.js bundle lazy-loadable

---

> *"One bold move. Everything else, quiet and precise."*
