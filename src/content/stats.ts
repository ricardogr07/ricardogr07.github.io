// Homepage proof-strip stats.
//
// The `repos` value is refreshed from the GitHub API by `pnpm stats`
// (scripts/generate-stats.ts); do not hand-edit it. The other three have no
// clean public count API, so they are curated constants: bump them by hand and
// keep the `verify:` note honest.

export type StatIcon = 'repos' | 'pypi' | 'publications' | 'medium'

export interface Stat {
  icon: StatIcon
  label: string
  value: string
  href: string
  external: boolean
}

// Last time `pnpm stats` refreshed the auto field. YYYY-MM-DD.
export const statsGeneratedAt = '2026-07-13'

export const stats: Stat[] = [
  // auto (pnpm stats): live GitHub public_repos
  {
    icon: 'repos',
    label: 'GitHub repos',
    value: '35',
    href: 'https://github.com/ricardogr07',
    external: true,
  },
  // verify: PyPI has no user package-count API; count projects at pypi.org/user/ricardogr07
  {
    icon: 'pypi',
    label: 'PyPI packages',
    value: '7',
    href: 'https://pypi.org/user/ricardogr07',
    external: true,
  },
  // verify: 1 book (BioMEMS) + 4 journal articles on /research
  {
    icon: 'publications',
    label: 'Publications',
    value: '5',
    href: '/about#publications',
    external: false,
  },
  // verify: Medium exposes no total-count API; read it off medium.com/@ricardogr07
  {
    icon: 'medium',
    label: 'Medium articles',
    value: '138',
    href: 'https://medium.com/@ricardogr07',
    external: true,
  },
]
