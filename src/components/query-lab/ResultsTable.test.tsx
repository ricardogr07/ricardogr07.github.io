import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ResultsTable from './ResultsTable'

const COLUMNS = ['ticker', 'name', 'market_value_mxn']
const ROWS: (string | number | null)[][] = [
  ['DEMO-GBL', 'Global Equity Growth Fund A', 261351],
  ['DEMO-TMK', 'Telmex Industrial Holdings', 195840],
]

describe('ResultsTable', () => {
  it('renders column headers', () => {
    render(<ResultsTable columns={COLUMNS} rows={ROWS} />)
    expect(screen.getByText('ticker')).toBeInTheDocument()
    expect(screen.getByText('name')).toBeInTheDocument()
    expect(screen.getByText('market_value_mxn')).toBeInTheDocument()
  })

  it('renders data rows with correct ticker values', () => {
    render(<ResultsTable columns={COLUMNS} rows={ROWS} />)
    expect(screen.getByText('DEMO-GBL')).toBeInTheDocument()
    expect(screen.getByText('DEMO-TMK')).toBeInTheDocument()
  })

  it('shows "no rows returned" when columns are empty', () => {
    render(<ResultsTable columns={[]} rows={[]} />)
    expect(screen.getByText(/no rows returned/i)).toBeInTheDocument()
  })

  it('renders an error alert when error prop is set', () => {
    render(<ResultsTable columns={[]} rows={[]} error="no such table: foo" />)
    const alert = screen.getByRole('alert')
    expect(alert).toHaveTextContent('no such table: foo')
  })
})
