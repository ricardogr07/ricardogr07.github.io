# Content Guide

## Adding a new project

Edit `src/content/projects.ts` and add a new object to the `projects` array.

### Required fields

```ts
{
  slug: 'my-project',             // URL-safe unique identifier
  title: 'My Project Title',      // Display title shown on the card
  visibility: 'public',           // 'public' | 'demo-only' | 'private-excluded'
  featured: false,                // true = appears in primary grid, false = secondary grid
  categories: ['automation'],     // One or more ProjectCategory values
  summary: '...',                 // 2-3 sentence summary shown on the card
  problem: '...',                 // What problem this project solves
  solution: '...',                // What was built
  deliverables: ['...'],          // List of specific outputs
  techStack: ['Python', '...'],   // Tech shown as badges (first 5 are visible, rest collapsed)
  servicesSupported: ['...'],     // LinkedIn service categories this maps to
}
```

### Optional fields

```ts
  repo: 'https://github.com/...',  // GitHub link shown on the card
  liveUrl: 'https://...',          // Live demo link
  docsUrl: 'https://...',          // Documentation link
```

### Privacy rules

- `visibility: "private-excluded"` — never rendered anywhere on the site
- `visibility: "demo-only"` — rendered only if a demo URL is provided
- `visibility: "public"` — rendered with repo link when available

### Category values

```
'automation' | 'web-scraping' | 'data-engineering' | 'dashboard'
| 'backend-api' | 'rag-llm' | 'developer-tooling' | 'ml'
| 'scientific-python' | 'media-automation'
```

---

## Adding a new service

Edit `src/content/services.ts` and add a new object to the `services` array.

```ts
{
  id: 'my-service',
  label: 'Service Name',
  description: 'What this service involves in 1-2 sentences.',
  icon: 'Zap',   // Must be a key in the iconMap in service-card.tsx
}
```

### Available icons

`Zap`, `Globe`, `Database`, `BarChart3`, `Code2`, `Brain`, `Film`, `FlaskConical`

To add a new icon: import it in `src/components/service-card.tsx` and add it to the `iconMap` object.
