# ricardogr07.github.io

Personal freelance portfolio — a public proof surface for automation, data engineering, RAG/LLM tooling, media automation, and scientific Python work.

Live at: **[ricardogr07.github.io](https://ricardogr07.github.io)**

---

## Stack

| Layer                | Choice                                 |
| -------------------- | -------------------------------------- |
| Framework            | Next.js 15 (App Router, static export) |
| Language             | TypeScript (strict)                    |
| Styling              | Tailwind CSS v4                        |
| Package manager      | pnpm                                   |
| Unit/component tests | Vitest + React Testing Library         |
| E2E tests            | Cypress                                |
| Hosting              | GitHub Pages                           |
| CI/Deploy            | GitHub Actions                         |

---

## Local development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Visit http://localhost:3000
```

---

## Commands

| Command              | What it does                  |
| -------------------- | ----------------------------- |
| `pnpm dev`           | Start dev server              |
| `pnpm build`         | Build static export to `out/` |
| `pnpm typecheck`     | TypeScript check              |
| `pnpm lint`          | ESLint                        |
| `pnpm format`        | Prettier write                |
| `pnpm format:check`  | Prettier check                |
| `pnpm test`          | Vitest unit/component tests   |
| `pnpm test:watch`    | Vitest in watch mode          |
| `pnpm test:coverage` | Vitest with coverage          |
| `pnpm e2e`           | Open Cypress interactive      |
| `pnpm e2e:run`       | Run Cypress headless          |

---

## Project structure

```
src/
├── app/            # Next.js App Router pages and layout
├── components/     # React components (each paired with a .test.tsx)
├── content/        # Typed TypeScript data files (projects, services)
└── lib/            # Shared types and test utilities

cypress/
└── e2e/            # Cypress E2E smoke tests

docs/
├── ARCHITECTURE.md   # Site structure and data flow
├── CONTENT_GUIDE.md  # How to add/edit projects and services
└── DEPLOYMENT.md     # GitHub Pages deployment guide

.github/
└── workflows/
    ├── ci.yml              # Lint, typecheck, test, build on PR
    └── deploy-pages.yml    # Deploy to GitHub Pages on main merge
```

---

## Adding content

See [docs/CONTENT_GUIDE.md](docs/CONTENT_GUIDE.md) for instructions on adding projects or services.

---

## Deployment

See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for GitHub Pages setup instructions.
