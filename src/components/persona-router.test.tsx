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
  it('renders 6 persona cards with labels and subtitles', () => {
    render(<PersonaRouter />)
    expect(screen.getByText('Shipped projects')).toBeInTheDocument()
    expect(screen.getByText('Case studies & live demos')).toBeInTheDocument()
    expect(screen.getByText('Full CV')).toBeInTheDocument()
    expect(screen.getByText('Experience, skills & education')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Freelance & consulting')).toBeInTheDocument()
    expect(screen.getByText('Teaching')).toBeInTheDocument()
    expect(screen.getByText('Courses & curricula')).toBeInTheDocument()
    expect(screen.getByText('Research')).toBeInTheDocument()
    expect(screen.getByText('Publications & Thesis')).toBeInTheDocument()
    expect(screen.getByText('About Me')).toBeInTheDocument()
    expect(screen.getByText('Background, writing & more')).toBeInTheDocument()
  })

  it('Projects card links to /projects', () => {
    render(<PersonaRouter />)
    const link = screen.getByRole('link', { name: /shipped projects/i })
    expect(link).toHaveAttribute('href', '/projects')
  })

  it('CV card links to /cv', () => {
    render(<PersonaRouter />)
    const link = screen.getByRole('link', { name: /full cv/i })
    expect(link).toHaveAttribute('href', '/cv')
  })

  it('Freelance card links to /freelance', () => {
    render(<PersonaRouter />)
    const link = screen.getByRole('link', { name: /services/i })
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
    const link = screen.getByRole('link', { name: /about me/i })
    expect(link).toHaveAttribute('href', '/about')
  })
})
