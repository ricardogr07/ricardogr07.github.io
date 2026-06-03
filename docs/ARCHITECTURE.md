# Architecture

## Site structure

Single-page portfolio with anchor-linked sections. No routing beyond the root `/`.

```
/ (Home)
├── Hero               — headline, badge, 3 CTAs
├── Services           — 8 service cards
├── Featured Work      — 6 primary + 3 secondary project cards
├── How I Work         — 5-step delivery process
├── Contact / Hire Me  — CTA with LinkedIn + email links
└── Footer             — GitHub + LinkedIn links
```

## Data flow

Content is defined in static TypeScript files and rendered at build time. No runtime data fetching.

```
src/content/projects.ts   →  src/app/page.tsx  →  <ProjectCard />
src/content/services.ts   →  src/app/page.tsx  →  <ServiceCardComponent />
```

## Component tree

```
app/layout.tsx
└── app/page.tsx
    ├── components/hero.tsx
    ├── [Services section]
    │   └── components/service-card.tsx  (×8)
    ├── [Featured Work section]
    │   └── components/project-card.tsx  (×9)
    ├── components/how-i-work.tsx
    ├── components/contact-cta.tsx
    └── components/footer.tsx
```

## Static export

`next.config.ts` sets `output: 'export'`. The `pnpm build` command writes static HTML/CSS/JS to `out/`. GitHub Actions uploads `out/` to GitHub Pages.

## Privacy

Projects with `visibility: "private-excluded"` are filtered out before rendering. The `publicProjects`, `featuredProjects`, and `secondaryProjects` exports in `src/content/projects.ts` handle this.
