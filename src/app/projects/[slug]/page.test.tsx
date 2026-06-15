import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import type { PortfolioProject } from '@/lib/types'

// Full-STARL fixture + a neighbour for prev/next, defined via vi.hoisted so they exist
// before the (hoisted) vi.mock factory runs. src/content/projects.ts (phase-3 owned)
// stays unchanged.
const { starlProject, neighbour } = vi.hoisted(() => {
  const starl: PortfolioProject = {
    slug: 'starl-full',
    title: 'STARL Full Fixture',
    repo: 'https://github.com/ricardogr07/starl-full',
    pypiUrl: 'https://pypi.org/project/starl-full/',
    visibility: 'public',
    featured: true,
    categories: ['developer-tooling'],
    summary: 'A fixture exercising every STARL field.',
    problem: 'legacy problem',
    solution: 'legacy solution',
    deliverables: ['CLI', 'Docs'],
    techStack: ['Python', 'Rust'],
    servicesSupported: ['Tooling'],
    businessValue: ['Saves time'],
    situation: 'The situation beat.',
    task: 'The task beat.',
    action: 'The action beat.',
    result: 'Cut runtime by 5×.',
    learning: 'The learning beat.',
    tldr: 'One-sentence summary.',
    headlineMetric: '5× faster chunking',
    caveat: 'Benchmarks are synthetic.',
    role: 'solo',
    status: 'pypi',
    metrics: [{ label: 'Throughput', value: '5×' }],
  }
  return {
    starlProject: starl,
    neighbour: { ...starl, slug: 'neighbour', title: 'Neighbour Project', featured: false },
  }
})

vi.mock('@/content/projects', () => ({
  visibleProjects: [starlProject, neighbour],
}))

import CaseStudyPage from './page'

async function renderPage(slug: string) {
  const ui = await CaseStudyPage({ params: Promise.resolve({ slug }) })
  render(ui)
}

describe('CaseStudyPage — full STARL fixture', () => {
  it('renders all STARL beat headings', async () => {
    await renderPage('starl-full')
    for (const heading of ['Situation', 'Task', 'Action', 'Result', 'Learning']) {
      expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument()
    }
  })

  it('renders the TL;DR block with headline metric and caveat', async () => {
    await renderPage('starl-full')
    expect(screen.getByText('5× faster chunking')).toBeInTheDocument()
    expect(screen.getByText('One-sentence summary.')).toBeInTheDocument()
    expect(screen.getByText('Benchmarks are synthetic.')).toBeInTheDocument()
  })

  it('renders sidebar role, status, and metrics', async () => {
    await renderPage('starl-full')
    expect(screen.getByText('Solo build')).toBeInTheDocument()
    expect(screen.getByText('On PyPI')).toBeInTheDocument()
    expect(screen.getByText('Throughput')).toBeInTheDocument()
  })

  it('renders prev/next navigation to the neighbour project', async () => {
    await renderPage('starl-full')
    const nav = screen.getByRole('navigation', { name: /project navigation/i })
    expect(nav).toBeInTheDocument()
    expect(screen.getByText('Neighbour Project')).toBeInTheDocument()
  })
})
