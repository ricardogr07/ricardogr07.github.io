import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Nav from './nav'

vi.mock('next/navigation', () => ({
  usePathname: () => '/',
}))

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

describe('Nav', () => {
  it('renders the brand name as a home link', () => {
    render(<Nav />)
    const brand = screen.getByRole('link', { name: /ricardo garcía/i })
    expect(brand).toHaveAttribute('href', '/')
  })

  it('renders the 5 nav links', () => {
    render(<Nav />)
    expect(screen.getAllByRole('link', { name: /^projects$/i }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: /^about$/i }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: /^teaching$/i }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: /^research$/i }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: /^cv$/i }).length).toBeGreaterThan(0)
  })

  it('renders the Hire me pill linking to /freelance', () => {
    render(<Nav />)
    const hirePills = screen.getAllByRole('link', { name: /hire me/i })
    expect(hirePills.length).toBeGreaterThan(0)
    expect(hirePills[0]).toHaveAttribute('href', '/freelance')
  })

  it('Teaching link points to /about#teaching', () => {
    render(<Nav />)
    const teaching = screen.getAllByRole('link', { name: /^teaching$/i })
    expect(teaching[0]).toHaveAttribute('href', '/about#teaching')
  })

  it('Research link points to /about#research', () => {
    render(<Nav />)
    const research = screen.getAllByRole('link', { name: /^research$/i })
    expect(research[0]).toHaveAttribute('href', '/about#research')
  })

  it('has the correct testid', () => {
    render(<Nav />)
    expect(screen.getByTestId('nav')).toBeInTheDocument()
  })
})
