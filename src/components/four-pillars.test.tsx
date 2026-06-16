import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import FourPillars from './four-pillars'

vi.mock('next/link', () => ({
  default: ({
    href,
    children,
    ...props
  }: {
    href: string
    children: React.ReactNode
    [key: string]: unknown
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}))

describe('FourPillars', () => {
  it('renders all 4 pillar headings', () => {
    render(<FourPillars />)
    expect(screen.getByText('AI/ML')).toBeInTheDocument()
    expect(screen.getByText('Data Science')).toBeInTheDocument()
    expect(screen.getByText('Cloud')).toBeInTheDocument()
    expect(screen.getByText('Full-Stack')).toBeInTheDocument()
  })

  it('renders the section heading', () => {
    render(<FourPillars />)
    expect(screen.getByRole('heading', { name: /what i work on/i })).toBeInTheDocument()
  })

  it('proof links point to project pages', () => {
    render(<FourPillars />)
    const ragLink = screen.getByRole('link', { name: /rusty-rag-chunker/i })
    expect(ragLink).toHaveAttribute('href', '/projects/rusty-rag-chunker')
    const clipsmithLink = screen.getByRole('link', { name: /clipsmith/i })
    expect(clipsmithLink).toHaveAttribute('href', '/projects/clipsmith')
  })
})
