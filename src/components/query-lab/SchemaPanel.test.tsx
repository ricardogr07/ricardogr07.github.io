import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import SchemaPanel from './SchemaPanel'
import { schemaInfo } from '@/content/query-lab-data'

describe('SchemaPanel', () => {
  it('renders all three table names', () => {
    render(<SchemaPanel tables={schemaInfo} />)
    expect(screen.getByText('holdings')).toBeInTheDocument()
    expect(screen.getByText('monthly_returns')).toBeInTheDocument()
    expect(screen.getByText('goals')).toBeInTheDocument()
  })

  it('renders column names for the holdings table', () => {
    render(<SchemaPanel tables={schemaInfo} />)
    expect(screen.getByText('ticker')).toBeInTheDocument()
    expect(screen.getByText('market_value_mxn')).toBeInTheDocument()
    expect(screen.getByText('gain_loss_pct')).toBeInTheDocument()
  })

  it('renders column types alongside names', () => {
    render(<SchemaPanel tables={schemaInfo} />)
    const textTypes = screen.getAllByText('TEXT')
    const realTypes = screen.getAllByText('REAL')
    expect(textTypes.length).toBeGreaterThan(0)
    expect(realTypes.length).toBeGreaterThan(0)
  })

  it('renders a custom single-table schema correctly', () => {
    render(
      <SchemaPanel tables={[{ name: 'test_table', columns: [{ name: 'id', type: 'INTEGER' }] }]} />
    )
    expect(screen.getByText('test_table')).toBeInTheDocument()
    expect(screen.getByText('id')).toBeInTheDocument()
    expect(screen.getByText('INTEGER')).toBeInTheDocument()
  })
})
