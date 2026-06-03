import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Nav from './nav'

// Mock Next.js navigation hooks
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

  it('renders all nav links', () => {
    render(<Nav />)
    expect(screen.getAllByRole('link', { name: /projects/i }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: /about/i }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: /cv/i }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: /freelance/i }).length).toBeGreaterThan(0)
  })

  it('has the correct testid', () => {
    render(<Nav />)
    expect(screen.getByTestId('nav')).toBeInTheDocument()
  })
})
