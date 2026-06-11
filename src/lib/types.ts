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
  problem: string
  solution: string
  deliverables: string[]
  techStack: string[]
  servicesSupported: string[]
  businessValue: string[]
  featured: boolean
  /** Path to the rendered SVG flow diagram (e.g. /images/projects/slug/diagram.svg) */
  diagram?: string
  /** Path to the project hero image (1200×630). Slot awaits Ricardo's AI art if absent. */
  heroImage?: string
}

export interface ServiceCard {
  id: string
  label: string
  description: string
  icon: string
}
