import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import AllocationChart from './AllocationChart'
import { dashboardData } from '@/content/dashboard-data'

describe('AllocationChart', () => {
  it('renders an allocation bar', () => {
    render(<AllocationChart holdings={dashboardData.holdings} />)
    expect(screen.getByRole('img', { name: /allocation/i })).toBeInTheDocument()
  })

  it('renders a legend entry for Equity', () => {
    render(<AllocationChart holdings={dashboardData.holdings} />)
    expect(screen.getByText(/Equity/)).toBeInTheDocument()
  })

  it('renders a legend entry for Fixed Income', () => {
    render(<AllocationChart holdings={dashboardData.holdings} />)
    expect(screen.getByText(/Fixed Income/)).toBeInTheDocument()
  })

  it('all allocation percentages in the data sum close to 100', () => {
    const total = dashboardData.holdings.reduce((sum, h) => sum + h.allocationPct, 0)
    expect(total).toBeGreaterThan(99)
    expect(total).toBeLessThan(101)
  })
})
