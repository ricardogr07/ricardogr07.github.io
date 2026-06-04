import type { GoalMilestone } from '@/content/dashboard-data'

const fmtMXN = (n: number) =>
  new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 }).format(n)

const STATUS_STYLES: Record<GoalMilestone['status'], { badge: string; bar: string }> = {
  achieved: { badge: 'border-violet-400/40 bg-violet-400/10 text-violet-300', bar: 'bg-violet-400' },
  'on-track': { badge: 'border-cyan-400/40 bg-cyan-400/10 text-cyan-300', bar: 'bg-cyan-400' },
  'at-risk': { badge: 'border-amber-400/40 bg-amber-400/10 text-amber-300', bar: 'bg-amber-400' },
}

const STATUS_LABEL: Record<GoalMilestone['status'], string> = {
  achieved: 'Achieved',
  'on-track': 'On track',
  'at-risk': 'At risk',
}

interface GoalsSectionProps {
  goals: GoalMilestone[]
}

export default function GoalsSection({ goals }: GoalsSectionProps) {
  return (
    <div>
      <h2 className="mb-4 text-lg font-semibold text-white">Goals</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {goals.map((g) => {
          const pct = Math.min(100, Math.round((g.currentMXN / g.targetMXN) * 100))
          const styles = STATUS_STYLES[g.status]
          return (
            <div key={g.id} className="rounded-xl border border-neutral-800 bg-neutral-900 p-5">
              <div className="mb-3 flex items-start justify-between gap-2">
                <p className="font-semibold text-white">{g.label}</p>
                <span className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium ${styles.badge}`}>
                  {STATUS_LABEL[g.status]}
                </span>
              </div>

              <div className="mb-2 h-2 w-full overflow-hidden rounded-full bg-neutral-800">
                <div
                  className={`h-full rounded-full transition-all ${styles.bar}`}
                  style={{ width: `${pct}%` }}
                  role="progressbar"
                  aria-valuenow={pct}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${g.label}: ${pct}% complete`}
                />
              </div>

              <div className="flex justify-between text-xs text-neutral-500">
                <span>{fmtMXN(g.currentMXN)}</span>
                <span>{fmtMXN(g.targetMXN)} by {g.targetDate}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
