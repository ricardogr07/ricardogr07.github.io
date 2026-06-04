import type { PresetQuery } from '@/content/query-lab-data'

interface PresetQueriesProps {
  presets: PresetQuery[]
  onSelect: (sql: string) => void
}

export default function PresetQueries({ presets, onSelect }: PresetQueriesProps) {
  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-500">
        Preset queries
      </p>
      <div className="flex flex-wrap gap-2">
        {presets.map((preset) => (
          <button
            key={preset.label}
            onClick={() => onSelect(preset.sql)}
            className="rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-400 transition-all hover:border-cyan-400/60 hover:text-cyan-400"
          >
            {preset.label}
          </button>
        ))}
      </div>
    </div>
  )
}
