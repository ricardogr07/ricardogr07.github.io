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
  featured: boolean
}

export interface ServiceCard {
  id: string
  label: string
  description: string
  icon: string
}
