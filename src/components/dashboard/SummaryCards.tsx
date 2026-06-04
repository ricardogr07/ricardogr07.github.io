const fmt = (n: number) =>
  new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 }).format(n)

interface StatTileProps {
  label: string
  value: string
  sub?: string
  positive?: boolean | null
}

function StatTile({ label, value, sub, positive }: StatTileProps) {
  const valueColor =
    positive === true ? 'text-cyan-400' : positive === false ? 'text-red-400' : 'text-white'
  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-5">
      <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-neutral-500">{label}</p>
      <p className={`text-2xl font-bold ${valueColor}`}>{value}</p>
      {sub && <p className="mt-1 text-sm text-neutral-500">{sub}</p>}
    </div>
  )
}

interface SummaryCardsProps {
  totalValueMXN: number
  monthlyReturnPct: number
  ytdReturnPct: number
  holdingsCount: number
}

export default function SummaryCards({
  totalValueMXN,
  monthlyReturnPct,
  ytdReturnPct,
  holdingsCount,
}: SummaryCardsProps) {
  const sign = (n: number) => (n >= 0 ? '+' : '')
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      <StatTile label="Portfolio Value" value={fmt(totalValueMXN)} sub="As of Jun 2024" />
      <StatTile
        label="Monthly Return"
        value={`${sign(monthlyReturnPct)}${monthlyReturnPct.toFixed(1)}%`}
        sub="Jun 2024"
        positive={monthlyReturnPct >= 0}
      />
      <StatTile
        label="YTD Return"
        value={`${sign(ytdReturnPct)}${ytdReturnPct.toFixed(1)}%`}
        sub="Jan–Jun 2024"
        positive={ytdReturnPct >= 0}
      />
      <StatTile label="Positions" value={String(holdingsCount)} sub="Active holdings" positive={null} />
    </div>
  )
}
