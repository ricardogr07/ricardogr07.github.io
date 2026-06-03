import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ServiceCardComponent from './service-card'
import type { ServiceCard } from '@/lib/types'

const mockService: ServiceCard = {
  id: 'automation',
  label: 'Automation Scripts',
  description: 'Python and .NET scripts that eliminate repetitive manual tasks.',
  icon: 'Zap',
}

describe('ServiceCard', () => {
  it('renders the service label', () => {
    render(<ServiceCardComponent service={mockService} />)
    expect(screen.getByText('Automation Scripts')).toBeInTheDocument()
  })

  it('renders the service description', () => {
    render(<ServiceCardComponent service={mockService} />)
    expect(
      screen.getByText(/Python and .NET scripts that eliminate repetitive manual tasks/i)
    ).toBeInTheDocument()
  })

  it('renders as an article element', () => {
    render(<ServiceCardComponent service={mockService} />)
    expect(screen.getByRole('article')).toBeInTheDocument()
  })

  it('falls back gracefully for unknown icon keys', () => {
    const unknownIconService = { ...mockService, icon: 'NonexistentIcon' }
    expect(() => render(<ServiceCardComponent service={unknownIconService} />)).not.toThrow()
  })
})
