import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import PersonaRouter from './persona-router'

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

describe('PersonaRouter', () => {
  it('renders 6 persona cards', () => {
    render(<PersonaRouter />)
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('CV / hire')).toBeInTheDocument()
    expect(screen.getByText('Freelance')).toBeInTheDocument()
    expect(screen.getByText('Teaching')).toBeInTheDocument()
    expect(screen.getByText('Research')).toBeInTheDocument()
    expect(screen.getByText('About / writing')).toBeInTheDocument()
  })

  it('Projects card links to /projects', () => {
    render(<PersonaRouter />)
    const link = screen.getByRole('link', { name: /projects/i })
    expect(link).toHaveAttribute('href', '/projects')
  })

  it('CV card links to /cv', () => {
    render(<PersonaRouter />)
    const link = screen.getByRole('link', { name: /cv \/ hire/i })
    expect(link).toHaveAttribute('href', '/cv')
  })

  it('Freelance card links to /freelance', () => {
    render(<PersonaRouter />)
    const link = screen.getByRole('link', { name: /freelance/i })
    expect(link).toHaveAttribute('href', '/freelance')
  })

  it('Teaching card links to /teaching', () => {
    render(<PersonaRouter />)
    const link = screen.getByRole('link', { name: /teaching/i })
    expect(link).toHaveAttribute('href', '/teaching')
  })

  it('Research card links to /research', () => {
    render(<PersonaRouter />)
    const link = screen.getByRole('link', { name: /research/i })
    expect(link).toHaveAttribute('href', '/research')
  })

  it('About card links to /about', () => {
    render(<PersonaRouter />)
    const link = screen.getByRole('link', { name: /about \/ writing/i })
    expect(link).toHaveAttribute('href', '/about')
  })
})
