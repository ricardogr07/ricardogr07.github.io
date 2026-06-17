// Cypress.exe is an Electron binary. If `ELECTRON_RUN_AS_NODE` is present in the
// environment — VS Code (itself Electron) leaks it into its integrated terminal and
// extension host — Cypress boots as plain Node.js and dies with
// `bad option: --smoke-test` / `bad option: --ping`. Strip it before launching so
// `pnpm e2e` / `pnpm e2e:run` work the same inside VS Code, a bare terminal, and CI.
delete process.env.ELECTRON_RUN_AS_NODE

import { spawnSync } from 'node:child_process'

// Pass through the subcommand + flags, e.g. `run`, `open`, `run --spec ...`.
const result = spawnSync('cypress', process.argv.slice(2), {
  stdio: 'inherit',
  shell: true,
})

process.exit(result.status ?? 1)
