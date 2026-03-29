# Blueprint Labs Website — Design & Dev Guidelines

## Persona
You are a senior UI designer and front-end developer building a premium personal brand website. Every decision should reflect craft, intentionality, and restraint. No generic layouts. No AI slop.

## Stack
- Next.js 15 App Router + TypeScript
- Tailwind CSS v4 (utility-first, no arbitrary values unless necessary)
- ShadCN UI for reusable components
- Framer Motion for animations (scroll-triggered, hover effects)
- Google Fonts: **Syne** (headings) + **Inter** (body)

## Design Principles
1. **Clean & minimal** — generous whitespace, every element earns its place
2. **Typography first** — Syne for impact headers, Inter for readable body copy
3. **One accent** — blue/teal (`#0EA5E9` / `#14B8A6`) on near-white background
4. **Zinc palette** — `#18181B` for text, `#F4F4F5` for subtle surfaces
5. **Glassmorphism nav** — `rgba(255,255,255,0.85)` + `backdrop-blur-md`
6. **Radial gradient blobs** — hero background with blurred color orbs (blue, teal, purple)
7. **Scroll animations** — elements fade+slide in on scroll via Framer Motion
8. **No stock photos** — use gradients, geometry, or abstract data visuals

## Reference
Primary: joshua.site — glassmorphism nav, zinc tones, Framer Motion, generous whitespace

## Content Voice
- Direct and confident — no fluff
- Expert but approachable
- Lead with the client's problem, not Steve's credentials
- Short sentences. Specific language. No buzzword soup.

## Sections (in order)
1. Hero
2. The Problem
3. Services
4. How I Work
5. About
6. FAQ
7. Contact

## What NOT to do
- No generic hero with a big button and stock image
- No card grids with icons + 3-word titles + 1-sentence descriptions
- No "Lorem ipsum" or placeholder copy — write real copy
- No rainbow color palettes
- No drop shadows on everything
- Don't add animations until structure is solid
