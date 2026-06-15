export type ProjectCategory =
  | 'automation'
  | 'web-scraping'
  | 'data-engineering'
  | 'dashboard'
  | 'backend-api'
  | 'rag-llm'
  | 'developer-tooling'
  | 'ml'
  | 'scientific-python'
  | 'media-automation'

export type ProjectVisibility = 'public' | 'demo-only' | 'private-excluded'

export interface PortfolioProject {
  slug: string
  title: string
  repo?: string
  liveUrl?: string
  docsUrl?: string
  visibility: ProjectVisibility
  categories: ProjectCategory[]
  summary: string
  /** @deprecated Legacy pre-STARL field. Invisible fallback for `situation` (see case-study page). Demo-only entries still use it. */
  problem?: string
  /** @deprecated Legacy pre-STARL field. Invisible fallback for `action` (see case-study page). Demo-only entries still use it. */
  solution?: string
  deliverables: string[]
  techStack: string[]
  servicesSupported: string[]
  businessValue: string[]
  featured: boolean
  /** Path to the rendered SVG flow diagram (e.g. /images/projects/slug/diagram.svg) */
  diagram?: string
  /** Path to the project hero image (1200×630). Slot awaits Ricardo's AI art if absent. */
  heroImage?: string

  // STARL case-study fields (all optional — partial migration stays type-safe)
  situation?: string
  task?: string
  action?: string
  /** Contains a number when shipped; else omit */
  result?: string
  learning?: string
  /** 1 sentence, above the fold */
  tldr?: string
  /** e.g. "5× faster chunking" — large type in TL;DR + cards */
  headlineMetric?: string
  /** Honest framing */
  caveat?: string
  role?: 'solo' | 'oss-contrib' | 'team' | 'maintainer'
  /** Lifecycle; distinct from visibility */
  status?: 'live' | 'pypi' | 'active' | 'archived'
  pypiUrl?: string
  gallery?: { src: string; alt: string; caption?: string }[]
  /** Optional caption under the existing diagram */
  diagramCaption?: string
  /** Finance/medical projects only */
  limitations?: string
  metrics?: { label: string; value: string }[]
  cliSnippet?: string
  /** e.g. thesis provenance */
  artifactNote?: string
}

export interface ServiceCard {
  id: string
  label: string
  description: string
  icon: string
}
