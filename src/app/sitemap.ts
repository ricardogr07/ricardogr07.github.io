import type { MetadataRoute } from 'next'
import { visibleProjects } from '@/content/projects'

const BASE_URL = 'https://ricardogr07.github.io'

// Required for `output: 'export'` — emits a static sitemap.xml at build time.
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/projects',
    '/about',
    '/cv',
    '/freelance',
    '/teaching',
    '/research',
    '/demo/query-lab',
    '/demo/financial-dashboard',
  ]

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${BASE_URL}${path}`,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.7,
  }))

  const projectEntries: MetadataRoute.Sitemap = visibleProjects.map((p) => ({
    url: `${BASE_URL}/projects/${p.slug}`,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticEntries, ...projectEntries]
}
