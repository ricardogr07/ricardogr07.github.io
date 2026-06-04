import type { SchemaTable } from '@/content/query-lab-data'

interface SchemaPanelProps {
  tables: SchemaTable[]
}

export default function SchemaPanel({ tables }: SchemaPanelProps) {
  return (
    <aside className="rounded-xl border border-neutral-800 bg-neutral-900 p-4">
      <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-500">
        Schema
      </h2>
      <div className="space-y-5">
        {tables.map((table) => (
          <div key={table.name}>
            <p className="mb-1.5 font-mono text-sm font-semibold text-cyan-400">{table.name}</p>
            <ul className="space-y-0.5">
              {table.columns.map((col) => (
                <li key={col.name} className="flex items-baseline gap-2 font-mono text-xs">
                  <span className="text-neutral-300">{col.name}</span>
                  <span className="text-neutral-600">{col.type}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  )
}
