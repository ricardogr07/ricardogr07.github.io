interface ResultsTableProps {
  columns: string[]
  rows: (string | number | null)[][]
  error?: string | null
}

function formatCell(value: string | number | null): string {
  if (value === null) return 'NULL'
  if (typeof value === 'number') {
    return Number.isInteger(value) ? value.toLocaleString() : value.toFixed(2)
  }
  return String(value)
}

export default function ResultsTable({ columns, rows, error }: ResultsTableProps) {
  if (error) {
    return (
      <div
        role="alert"
        className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 font-mono text-sm text-red-400"
      >
        {error}
      </div>
    )
  }

  if (columns.length === 0) {
    return (
      <p className="py-8 text-center text-sm text-neutral-600">Query executed; no rows returned.</p>
    )
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-neutral-800">
      <table className="w-full text-left text-sm">
        <thead className="border-b border-neutral-800 bg-neutral-900">
          <tr>
            {columns.map((col) => (
              <th
                key={col}
                scope="col"
                className="px-4 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-neutral-500"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-800/60 bg-neutral-950">
          {rows.map((row, ri) => (
            <tr key={ri} className="hover:bg-neutral-900/50">
              {row.map((cell, ci) => (
                <td key={ci} className="px-4 py-2 font-mono text-xs text-neutral-300">
                  {formatCell(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
