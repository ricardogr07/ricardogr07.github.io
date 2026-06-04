import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ProofStrip from './proof-strip'

describe('ProofStrip', () => {
  it('renders the publications count', () => {
    render(<ProofStrip />)
    expect(screen.getByText('Publications')).toBeInTheDocument()
    expect(screen.getByText('5')).toBeInTheDocument()
  })

  it('renders all four stat labels', () => {
    render(<ProofStrip />)
    expect(screen.getByText('GitHub repos')).toBeInTheDocument()
    expect(screen.getByText('PyPI packages')).toBeInTheDocument()
    expect(screen.getByText('Publications')).toBeInTheDocument()
    expect(screen.getByText('Medium writing')).toBeInTheDocument()
  })

  it('GitHub link points to profile', () => {
    render(<ProofStrip />)
    const githubLink = screen.getByRole('link', { name: /github repos/i })
    expect(githubLink).toHaveAttribute('href', 'https://github.com/ricardogr07')
  })

  it('publications link points to about#publications', () => {
    render(<ProofStrip />)
    const pubLink = screen.getByRole('link', { name: /publications/i })
    expect(pubLink).toHaveAttribute('href', '/about#publications')
  })
})
