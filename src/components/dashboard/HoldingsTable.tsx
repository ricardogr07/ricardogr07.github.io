import type { SyntheticHolding } from '@/content/dashboard-data'

const fmtMXN = (n: number) =>
  new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 }).format(n)

interface HoldingsTableProps {
  holdings: SyntheticHolding[]
}

export default function HoldingsTable({ holdings }: HoldingsTableProps) {
  return (
    <div>
      <h2 className="mb-4 text-lg font-semibold text-white">Holdings</h2>
      <div className="overflow-x-auto rounded-xl border border-neutral-800">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neutral-800 bg-neutral-900">
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Ticker
              </th>
              <th className="hidden px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-neutral-500 sm:table-cell">
                Name
              </th>
              <th className="hidden px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-neutral-500 md:table-cell">
                Class
              </th>
              <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Value
              </th>
              <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Alloc
              </th>
              <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Gain / Loss
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-800 bg-neutral-950">
            {holdings.map((h) => (
              <tr key={h.ticker} className="transition-colors hover:bg-neutral-900/60">
                <td className="px-4 py-3 font-mono text-xs font-semibold text-cyan-400">{h.ticker}</td>
                <td className="hidden px-4 py-3 text-neutral-300 sm:table-cell">{h.name}</td>
                <td className="hidden px-4 py-3 capitalize text-neutral-500 md:table-cell">
                  {h.assetClass}
                </td>
                <td className="px-4 py-3 text-right text-neutral-200">{fmtMXN(h.marketValueMXN)}</td>
                <td className="px-4 py-3 text-right text-neutral-400">{h.allocationPct.toFixed(1)}%</td>
                <td
                  className={`px-4 py-3 text-right font-medium ${
                    h.gainLossPct >= 0 ? 'text-cyan-400' : 'text-red-400'
                  }`}
                >
                  {h.gainLossPct >= 0 ? '+' : ''}
                  {h.gainLossPct.toFixed(1)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
