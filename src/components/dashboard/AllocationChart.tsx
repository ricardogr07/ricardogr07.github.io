import type { SyntheticHolding } from '@/content/dashboard-data'

const CLASS_COLORS: Record<SyntheticHolding['assetClass'], string> = {
  equity: '#22d3ee',
  'fixed-income': '#a78bfa',
  cash: '#737373',
  alternative: '#fbbf24',
}

const CLASS_LABELS: Record<SyntheticHolding['assetClass'], string> = {
  equity: 'Equity',
  'fixed-income': 'Fixed Income',
  cash: 'Cash',
  alternative: 'Alternative',
}

const ORDER: SyntheticHolding['assetClass'][] = ['equity', 'fixed-income', 'alternative', 'cash']

interface AllocationChartProps {
  holdings: SyntheticHolding[]
}

export default function AllocationChart({ holdings }: AllocationChartProps) {
  const byClass: Partial<Record<SyntheticHolding['assetClass'], number>> = {}
  for (const h of holdings) {
    byClass[h.assetClass] = (byClass[h.assetClass] ?? 0) + h.allocationPct
  }

  const segments = ORDER.filter((c) => (byClass[c] ?? 0) > 0).map((c) => ({
    assetClass: c,
    pct: byClass[c]!,
    color: CLASS_COLORS[c],
    label: CLASS_LABELS[c],
  }))

  return (
    <div>
      <h2 className="mb-4 text-lg font-semibold text-white">Allocation</h2>

      {/* Stacked bar */}
      <div className="mb-4 flex h-8 w-full overflow-hidden rounded-lg" role="img" aria-label="Asset allocation bar chart">
        {segments.map((s) => (
          <div
            key={s.assetClass}
            style={{ width: `${s.pct}%`, backgroundColor: s.color, opacity: 0.85 }}
            title={`${s.label}: ${s.pct.toFixed(1)}%`}
          />
        ))}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        {segments.map((s) => (
          <div key={s.assetClass} className="flex items-center gap-2">
            <span
              className="inline-block h-2.5 w-2.5 rounded-sm"
              style={{ backgroundColor: s.color }}
              aria-hidden="true"
            />
            <span className="text-sm text-neutral-400">
              {s.label}{' '}
              <span className="font-medium text-neutral-200">{s.pct.toFixed(1)}%</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
