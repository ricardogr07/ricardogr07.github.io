import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'

const mockExec = vi.fn()
const mockRun = vi.fn()

vi.mock('sql.js', () => ({
  default: vi.fn().mockResolvedValue({
    Database: class MockDatabase {
      run(sql: string) {
        mockRun(sql)
      }
      exec(sql: string) {
        mockExec(sql)
        if (sql.includes('FROM holdings')) {
          return [
            {
              columns: ['ticker', 'market_value_mxn'],
              values: [['DEMO-GBL', 261351]],
            },
          ]
        }
        return []
      }
    },
  }),
}))

import QueryLabShell from './QueryLabShell'

describe('QueryLabShell', () => {
  beforeEach(() => {
    mockExec.mockClear()
    mockRun.mockClear()
  })

  it('shows loading state before sql.js initializes', () => {
    render(<QueryLabShell />)
    expect(screen.getByText(/Loading SQLite engine/i)).toBeInTheDocument()
  })

  it('shows the SQL editor after initialization', async () => {
    render(<QueryLabShell />)
    await waitFor(() =>
      expect(screen.getByRole('textbox', { name: /SQL query/i })).toBeInTheDocument()
    )
  })

  it('shows query results after initialization', async () => {
    render(<QueryLabShell />)
    await waitFor(() => expect(screen.getByText('DEMO-GBL')).toBeInTheDocument())
  })

  it('Run Query button executes the current SQL', async () => {
    render(<QueryLabShell />)
    await waitFor(() => screen.getByRole('button', { name: /run query/i }))
    fireEvent.click(screen.getByRole('button', { name: /run query/i }))
    expect(mockExec).toHaveBeenCalled()
  })
})
