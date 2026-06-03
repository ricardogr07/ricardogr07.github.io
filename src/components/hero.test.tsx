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

  it('renders the Full Stack · Data Science · Cloud badge', () => {
    render(<Hero />)
    expect(screen.getByText(/Full Stack · Data Science · Cloud/i)).toBeInTheDocument()
  })

  it('renders the credential-anchored sub-copy', () => {
    render(<Hero />)
    expect(screen.getByText(/M\.Sc\. Data Science/i)).toBeInTheDocument()
  })

  it('renders the View Projects CTA linking to /projects', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: /view projects/i })
    expect(cta).toBeInTheDocument()
    expect(cta).toHaveAttribute('href', '/projects')
  })

  it('renders the About Me CTA linking to /about', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: /about me/i })
    expect(cta).toBeInTheDocument()
    expect(cta).toHaveAttribute('href', '/about')
  })

  it('does not have a GitHub CTA in the hero', () => {
    render(<Hero />)
    expect(screen.queryByRole('link', { name: /github/i })).not.toBeInTheDocument()
  })
})
