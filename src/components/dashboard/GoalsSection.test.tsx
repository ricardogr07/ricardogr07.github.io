import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import GoalsSection from './GoalsSection'
import { dashboardData } from '@/content/dashboard-data'

describe('GoalsSection', () => {
  it('renders all four goal labels', () => {
    render(<GoalsSection goals={dashboardData.goals} />)
    expect(screen.getByText('Emergency Fund')).toBeInTheDocument()
    expect(screen.getByText('Vacation Fund')).toBeInTheDocument()
    expect(screen.getByText('Home Down Payment')).toBeInTheDocument()
    expect(screen.getByText('Education Fund')).toBeInTheDocument()
  })

  it('shows Achieved badge for Emergency Fund', () => {
    render(<GoalsSection goals={dashboardData.goals} />)
    expect(screen.getByText('Achieved')).toBeInTheDocument()
  })

  it('shows At risk badge for Education Fund', () => {
    render(<GoalsSection goals={dashboardData.goals} />)
    expect(screen.getByText('At risk')).toBeInTheDocument()
  })

  it('renders progress bars with correct aria values', () => {
    render(<GoalsSection goals={dashboardData.goals} />)
    const bars = screen.getAllByRole('progressbar')
    expect(bars.length).toBe(4)
    const emergencyBar = bars.find((b) => b.getAttribute('aria-label')?.includes('Emergency'))
    expect(emergencyBar).toBeDefined()
    const pct = Number(emergencyBar!.getAttribute('aria-valuenow'))
    expect(pct).toBeGreaterThan(90)
  })
})
