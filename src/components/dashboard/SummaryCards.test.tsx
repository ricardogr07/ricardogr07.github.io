import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import SummaryCards from './SummaryCards'

describe('SummaryCards', () => {
  it('renders the MXN-formatted portfolio value', () => {
    render(
      <SummaryCards totalValueMXN={919823} monthlyReturnPct={0.8} ytdReturnPct={9.8} holdingsCount={8} />
    )
    expect(screen.getByText(/919/)).toBeInTheDocument()
  })

  it('prefixes positive monthly return with +', () => {
    render(
      <SummaryCards totalValueMXN={900000} monthlyReturnPct={1.5} ytdReturnPct={5.0} holdingsCount={8} />
    )
    expect(screen.getByText('+1.5%')).toBeInTheDocument()
  })

  it('shows negative monthly return without + prefix', () => {
    render(
      <SummaryCards totalValueMXN={900000} monthlyReturnPct={-2.3} ytdReturnPct={1.0} holdingsCount={8} />
    )
    expect(screen.getByText('-2.3%')).toBeInTheDocument()
  })

  it('renders holdings count', () => {
    render(
      <SummaryCards totalValueMXN={900000} monthlyReturnPct={1.0} ytdReturnPct={5.0} holdingsCount={8} />
    )
    expect(screen.getByText('8')).toBeInTheDocument()
  })
})
