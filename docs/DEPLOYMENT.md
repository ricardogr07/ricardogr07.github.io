# Deployment

## GitHub Pages setup (one-time)

1. Go to the repository **Settings → Pages**
2. Under **Source**, select **GitHub Actions**
3. Save

The `deploy-pages.yml` workflow will handle all deployments automatically from that point.

## How deployments work

| Event          | Workflow                      | Result                                   |
| -------------- | ----------------------------- | ---------------------------------------- |
| Push to `main` | `ci.yml` + `deploy-pages.yml` | Lint, test, build, then deploy           |
| Pull request   | `ci.yml`                      | Lint, typecheck, test, build (no deploy) |
| Manual trigger | `deploy-pages.yml`            | Build and deploy on demand               |

## Build output

`pnpm build` generates a static site in `out/`. The CI workflow uploads this directory as a Pages artifact and then deploys it.

## Local build verification

```bash
pnpm build
# Open out/index.html in a browser to verify the static export looks correct
```

## Environment

No environment variables are required for the static site. The site contains no secrets, API keys, or server-side logic.

## Rollback

To roll back to a previous deployment, re-run the `deploy-pages.yml` workflow for the desired commit using **Actions → Deploy to GitHub Pages → Run workflow**.
