import type { MonthlyReturn } from '@/content/dashboard-data'

interface MonthlyReturnsChartProps {
  returns: MonthlyReturn[]
}

const W = 800
const H = 240
const PADDING = { top: 20, bottom: 36, left: 44, right: 16 }
const INNER_W = W - PADDING.left - PADDING.right
const INNER_H = H - PADDING.top - PADDING.bottom

export default function MonthlyReturnsChart({ returns }: MonthlyReturnsChartProps) {
  const allValues = returns.flatMap((r) => [r.returnPct, r.benchmarkPct])
  const minVal = Math.min(...allValues, 0)
  const maxVal = Math.max(...allValues, 0)
  const range = maxVal - minVal || 1

  const toY = (v: number) => PADDING.top + ((maxVal - v) / range) * INNER_H
  const zeroY = toY(0)

  const barGroupW = INNER_W / returns.length
  const barW = Math.max(4, barGroupW * 0.32)
  const gap = barW * 0.3

  const xLabels = returns.filter((_, i) => i % 3 === 0)

  return (
    <div>
      <h2 className="mb-1 text-lg font-semibold text-white">Monthly Returns</h2>
      <div className="mb-3 flex items-center gap-4 text-xs text-neutral-500">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-cyan-400/70" /> Portfolio
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-neutral-500/60" /> S&amp;P MX Blend (benchmark)
        </span>
      </div>

      <div className="overflow-x-auto">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full"
          style={{ minWidth: '480px' }}
          role="img"
          aria-label="Monthly returns bar chart comparing portfolio to benchmark"
        >
          {/* Zero baseline */}
          <line
            x1={PADDING.left}
            y1={zeroY}
            x2={W - PADDING.right}
            y2={zeroY}
            stroke="#404040"
            strokeWidth={1}
          />

          {/* Y-axis tick labels */}
          {[minVal, 0, maxVal].map((v) => (
            <text
              key={v}
              x={PADDING.left - 6}
              y={toY(v) + 4}
              textAnchor="end"
              fontSize={10}
              fill="#737373"
            >
              {v >= 0 ? '+' : ''}{v.toFixed(1)}%
            </text>
          ))}

          {/* Bars */}
          {returns.map((r, i) => {
            const cx = PADDING.left + i * barGroupW + barGroupW / 2
            const x1 = cx - gap / 2 - barW
            const x2 = cx + gap / 2

            const portH = Math.abs(toY(r.returnPct) - zeroY)
            const portY = r.returnPct >= 0 ? toY(r.returnPct) : zeroY
            const portColor = r.returnPct >= 0 ? 'rgba(34,211,238,0.7)' : 'rgba(248,113,113,0.7)'

            const benchH = Math.abs(toY(r.benchmarkPct) - zeroY)
            const benchY = r.benchmarkPct >= 0 ? toY(r.benchmarkPct) : zeroY

            return (
              <g key={r.month}>
                <rect x={x1} y={portY} width={barW} height={Math.max(portH, 1)} fill={portColor} rx={1} />
                <rect x={x2} y={benchY} width={barW} height={Math.max(benchH, 1)} fill="rgba(115,115,115,0.5)" rx={1} />
              </g>
            )
          })}

          {/* X-axis labels (every 3rd month) */}
          {xLabels.map((r) => {
            const i = returns.indexOf(r)
            const cx = PADDING.left + i * barGroupW + barGroupW / 2
            return (
              <text
                key={r.month}
                x={cx}
                y={H - 4}
                textAnchor="middle"
                fontSize={9}
                fill="#737373"
              >
                {r.month}
              </text>
            )
          })}
        </svg>
      </div>
    </div>
  )
}
