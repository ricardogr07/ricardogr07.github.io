import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ProjectCard from './project-card'
import type { PortfolioProject } from '@/lib/types'

const mockProject: PortfolioProject = {
  slug: 'test-project',
  title: 'Test Automation Pipeline',
  repo: 'https://github.com/ricardogr07/test-project',
  visibility: 'public',
  featured: false,
  categories: ['automation'],
  summary: 'A test project for validating the portfolio card component.',
  problem: 'The portfolio needed a test project.',
  solution: 'Created a mock project for testing.',
  deliverables: ['CLI tool', 'Documentation'],
  techStack: ['Python', 'SQLite', 'GitHub Actions'],
  servicesSupported: ['Python Automation'],
  businessValue: ['Automates repetitive manual work'],
}

describe('ProjectCard', () => {
  it('renders the project title', () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.getByText('Test Automation Pipeline')).toBeInTheDocument()
  })

  it('renders the project summary', () => {
    render(<ProjectCard project={mockProject} />)
    expect(
      screen.getByText(/A test project for validating the portfolio card component/i)
    ).toBeInTheDocument()
  })

  it('renders tech stack badges', () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.getByText('Python')).toBeInTheDocument()
    expect(screen.getByText('SQLite')).toBeInTheDocument()
  })

  it('renders the GitHub link with correct href', () => {
    render(<ProjectCard project={mockProject} />)
    const link = screen.getByRole('link', { name: /github/i })
    expect(link).toHaveAttribute('href', 'https://github.com/ricardogr07/test-project')
  })

  it('does not show Featured badge when featured is false', () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.queryByText('Featured')).not.toBeInTheDocument()
  })

  it('shows Featured badge when featured prop is true', () => {
    render(<ProjectCard project={mockProject} featured />)
    expect(screen.getByText('Featured')).toBeInTheDocument()
  })

  it('truncates tech badges beyond 5 and shows overflow count', () => {
    const manyTechProject = {
      ...mockProject,
      techStack: ['Python', 'SQLite', 'GitHub Actions', 'Docker', 'FastAPI', 'Rust', 'PyO3'],
    }
    render(<ProjectCard project={manyTechProject} />)
    expect(screen.getByText('+2')).toBeInTheDocument()
  })

  it('does not render a headline metric line when headlineMetric is absent', () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.queryByText('5× faster chunking')).not.toBeInTheDocument()
  })

  it('renders the headline metric line when headlineMetric is set', () => {
    render(<ProjectCard project={{ ...mockProject, headlineMetric: '5× faster chunking' }} />)
    expect(screen.getByText('5× faster chunking')).toBeInTheDocument()
  })

  it('does not render a thumbnail when heroImage is absent', () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })

  it('renders a thumbnail when heroImage is set', () => {
    render(
      <ProjectCard
        project={{ ...mockProject, heroImage: '/images/projects/test-project/hero.png' }}
      />
    )
    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('alt', 'Test Automation Pipeline thumbnail')
  })
})
