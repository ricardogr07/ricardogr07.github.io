import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import PresetQueries from './PresetQueries'
import { presetQueries } from '@/content/query-lab-data'

describe('PresetQueries', () => {
  it('renders all preset query buttons', () => {
    render(<PresetQueries presets={presetQueries} onSelect={() => {}} />)
    for (const preset of presetQueries) {
      expect(screen.getByRole('button', { name: preset.label })).toBeInTheDocument()
    }
  })

  it('calls onSelect with the correct SQL when a preset is clicked', () => {
    const onSelect = vi.fn()
    render(<PresetQueries presets={presetQueries} onSelect={onSelect} />)
    fireEvent.click(screen.getByRole('button', { name: 'Holdings by value' }))
    expect(onSelect).toHaveBeenCalledOnce()
    expect(onSelect.mock.calls[0][0]).toContain('SELECT')
    expect(onSelect.mock.calls[0][0]).toContain('holdings')
  })

  it('calls onSelect with the benchmark alpha SQL for "vs Benchmark"', () => {
    const onSelect = vi.fn()
    render(<PresetQueries presets={presetQueries} onSelect={onSelect} />)
    fireEvent.click(screen.getByRole('button', { name: 'vs Benchmark' }))
    expect(onSelect.mock.calls[0][0]).toContain('alpha')
  })

  it('renders a custom single preset correctly', () => {
    const custom = [{ label: 'Custom', sql: 'SELECT 1' }]
    const onSelect = vi.fn()
    render(<PresetQueries presets={custom} onSelect={onSelect} />)
    const btn = screen.getByRole('button', { name: 'Custom' })
    fireEvent.click(btn)
    expect(onSelect).toHaveBeenCalledWith('SELECT 1')
  })
})
