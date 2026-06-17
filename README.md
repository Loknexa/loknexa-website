# Loknexa Website

People-First Technology. Built for Real Life.

## Stack

Vite + React 18 + React Router v6. No UI framework — plain CSS (CSS Modules
per component) driven entirely by `src/config.js`.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Editing content

**`src/config.js` is the single source of truth.** Brand copy, colors,
typography, nav links, section content, and project/product data all live
there — you should not need to touch component files to change copy, swap
colors, add a product, or edit the roadmap.

## Project structure

```
src/
├── config.js              ← edit this for content/design changes
├── App.jsx                ← router + injects config.colors as CSS vars
├── index.jsx               ← entry point
├── components/
│   ├── layout/             ← Navbar, Footer
│   ├── sections/            ← homepage scroll sections
│   └── ui/                  ← reusable atoms (Icon, StatusBadge, AnimatedCard, SectionHeading, ProjectCard, ParticleCanvas)
├── pages/                  ← Home, Projects, Contact
├── hooks/                   ← useScrollReveal, useTypewriter
└── styles/global.css        ← base styles, design tokens, a11y defaults
```

## Open items

These were intentionally left as placeholders — fill in before launch:

| Item | Where |
|---|---|
| FoodShare client testimonial | `config.clientWork.items[0].testimonial` |
| GitHub / LinkedIn handles | `config.brand.social` |
| Contact email | `config.brand.email` / `config.brand.social.email` |
| EchoTrace description refinement | `config.projects.items[0].description` |
| Footer copyright year | `config.footer.copyright` (currently "© 2025") |
| Domain / hosting | not in scope — Vercel/Netlify recommended |
| Contact form backend | `src/pages/Contact.jsx` currently simulates submission with a timeout; wire up a real endpoint when one exists |

## Notes on deviations from the original spec

- `index.html` lives at the project root, not in `public/`. Vite requires
  this — `public/` is for static assets copied as-is, not the HTML entry
  point that gets transformed.
- Icons use inline hand-rolled SVGs (`src/components/ui/Icon.jsx`) instead
  of emoji characters, per standard accessibility/professionalism guidance
  (emojis render inconsistently across platforms and aren't decorative-safe
  for screen readers).
