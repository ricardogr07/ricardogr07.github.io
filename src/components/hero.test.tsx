import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Hero from './hero'

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

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('renders the four-pillar badge', () => {
    render(<Hero />)
    expect(screen.getByText(/AI\/ML · Data Engineering · Cloud · Full-Stack/i)).toBeInTheDocument()
  })

  it('renders the credential-anchored sub-copy', () => {
    render(<Hero />)
    expect(screen.getByText(/M\.Sc\. Data Science/i)).toBeInTheDocument()
  })

  it('renders the sub-copy with open roles positioning', () => {
    render(<Hero />)
    expect(screen.getByText(/Open to senior roles and select freelance work/i)).toBeInTheDocument()
  })

  it('renders the View projects CTA linking to /projects', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: /view projects/i })
    expect(cta).toBeInTheDocument()
    expect(cta).toHaveAttribute('href', '/projects')
  })

  it('renders the Download CV CTA linking to /cv', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: /download cv/i })
    expect(cta).toBeInTheDocument()
    expect(cta).toHaveAttribute('href', '/cv')
  })

  it('renders the Hire me CTA linking to /freelance', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: /hire me/i })
    expect(cta).toBeInTheDocument()
    expect(cta).toHaveAttribute('href', '/freelance')
  })

  it('does not contain old freelance messaging', () => {
    render(<Hero />)
    expect(screen.queryByText(/Now taking freelance projects/i)).not.toBeInTheDocument()
  })
})
