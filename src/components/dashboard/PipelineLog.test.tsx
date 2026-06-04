import { render, screen, fireEvent, act } from '@testing-library/react'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import PipelineLog from './PipelineLog'
import { dashboardData } from '@/content/dashboard-data'

describe('PipelineLog', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the Rebuild button', () => {
    render(<PipelineLog logLines={dashboardData.pipelineLog} />)
    expect(screen.getByRole('button', { name: /rebuild/i })).toBeInTheDocument()
  })

  it('starts with no log lines visible', () => {
    render(<PipelineLog logLines={dashboardData.pipelineLog} />)
    expect(screen.queryByText('Pipeline triggered')).not.toBeInTheDocument()
  })

  it('reveals lines progressively as time advances', async () => {
    render(<PipelineLog logLines={dashboardData.pipelineLog} />)
    await act(async () => {
      vi.advanceTimersByTime(300)
    })
    expect(screen.getByText(/Pipeline triggered/)).toBeInTheDocument()
    await act(async () => {
      vi.advanceTimersByTime(300)
    })
    expect(screen.getByText(/Connecting to statement store/)).toBeInTheDocument()
  })

  it('clicking Rebuild resets the log', async () => {
    render(<PipelineLog logLines={dashboardData.pipelineLog} />)
    await act(async () => {
      vi.advanceTimersByTime(900)
    })
    expect(screen.getByText(/Pipeline triggered/)).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: /rebuild/i }))
    expect(screen.queryByText(/Pipeline triggered/)).not.toBeInTheDocument()
  })
})
