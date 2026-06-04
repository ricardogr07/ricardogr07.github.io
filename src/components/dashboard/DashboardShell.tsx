import type { DashboardSnapshot } from '@/content/dashboard-data'
import SummaryCards from './SummaryCards'
import AllocationChart from './AllocationChart'
import HoldingsTable from './HoldingsTable'
import MonthlyReturnsChart from './MonthlyReturnsChart'
import GoalsSection from './GoalsSection'
import PipelineLog from './PipelineLog'

interface DashboardShellProps {
  data: DashboardSnapshot
}

export default function DashboardShell({ data }: DashboardShellProps) {
  return (
    <section className="bg-neutral-950 px-6 py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl space-y-10">
        {/* Page header */}
        <div>
          <h1 className="mb-1 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Financial Data Dashboard
          </h1>
          <p className="text-neutral-500">
            Synthetic portfolio · {data.reportingCurrency} · Data as of Jun 2024
          </p>
        </div>

        {/* Summary stats */}
        <SummaryCards
          totalValueMXN={data.totalValueMXN}
          monthlyReturnPct={data.monthlyReturnPct}
          ytdReturnPct={data.ytdReturnPct}
          holdingsCount={data.holdings.length}
        />

        {/* Allocation + Goals side by side on large screens */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
            <AllocationChart holdings={data.holdings} />
          </div>
          <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
            <GoalsSection goals={data.goals} />
          </div>
        </div>

        {/* Monthly returns chart */}
        <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
          <MonthlyReturnsChart returns={data.monthlyReturns} />
        </div>

        {/* Holdings table */}
        <HoldingsTable holdings={data.holdings} />

        {/* Pipeline log */}
        <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
          <PipelineLog logLines={data.pipelineLog} />
        </div>
      </div>
    </section>
  )
}
