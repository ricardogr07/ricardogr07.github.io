/**
 * Refresh the auto stat (GitHub public repo count) + generatedAt in
 * src/content/stats.ts. PyPI / publications / Medium are curated constants and
 * are left untouched. Run with: pnpm stats
 *
 * Kept out of the build so `pnpm build` stays offline/hermetic; run it on demand.
 * Uses node:https (not fetch/undici) to avoid a Windows-only exit crash.
 */

import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { get } from 'node:https'

const FILE = resolve(process.cwd(), 'src/content/stats.ts')

function fetchPublicRepos(): Promise<number> {
  return new Promise((resolvePromise, reject) => {
    get(
      'https://api.github.com/users/ricardogr07',
      {
        headers: {
          'User-Agent': 'ricardogr07-portfolio-stats',
          Accept: 'application/vnd.github+json',
        },
      },
      (res) => {
        if (res.statusCode !== 200) {
          res.resume()
          reject(new Error(`GitHub API ${res.statusCode}`))
          return
        }
        let body = ''
        res.on('data', (c) => (body += c))
        res.on('end', () => {
          try {
            const n = JSON.parse(body).public_repos
            if (typeof n !== 'number') throw new Error('public_repos missing')
            resolvePromise(n)
          } catch (e) {
            reject(e as Error)
          }
        })
      }
    ).on('error', reject)
  })
}

async function main() {
  const repos = await fetchPublicRepos()
  const today = new Date().toISOString().slice(0, 10)

  const before = readFileSync(FILE, 'utf8')
  const atRe = /(statsGeneratedAt = ')[^']*(')/
  // The repos stat object spans multiple lines after prettier, so match across newlines.
  const repoRe = /(icon: 'repos',[\s\S]*?value: ')[^']*(')/
  if (!atRe.test(before) || !repoRe.test(before)) {
    throw new Error('could not find the fields to update; did stats.ts change shape?')
  }

  const src = before.replace(atRe, `$1${today}$2`).replace(repoRe, `$1${repos}$2`)
  writeFileSync(FILE, src)
  console.log(`stats: repos=${repos}, generatedAt=${today}`)
}

main().catch((err) => {
  console.error(err)
  process.exitCode = 1
})
