'use client'

import { useState, useEffect, useRef } from 'react'
import type { PipelineLogLine } from '@/content/dashboard-data'

const LEVEL_COLOR: Record<PipelineLogLine['level'], string> = {
  INFO: 'text-neutral-400',
  WARN: 'text-amber-400',
  SUCCESS: 'text-cyan-400',
}

interface PipelineLogProps {
  logLines: PipelineLogLine[]
}

export default function PipelineLog({ logLines }: PipelineLogProps) {
  const [revealed, setRevealed] = useState(0)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (revealed >= logLines.length) return
    const id = setTimeout(() => setRevealed((n) => n + 1), 300)
    return () => clearTimeout(id)
  }, [revealed, logLines.length])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [revealed])

  const rebuild = () => setRevealed(0)

  const running = revealed < logLines.length

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">Pipeline Log</h2>
        <button
          onClick={rebuild}
          className="rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-1.5 text-xs font-medium text-neutral-300 transition-all hover:border-neutral-500 hover:text-white"
        >
          ↺ Rebuild
        </button>
      </div>

      <div className="h-64 overflow-y-auto rounded-xl border border-neutral-800 bg-neutral-950 p-4 font-mono text-xs">
        {logLines.slice(0, revealed).map((line, i) => (
          <div key={i} className="flex gap-3">
            <span className="shrink-0 text-neutral-600">{line.ts}</span>
            <span className={`shrink-0 font-semibold ${LEVEL_COLOR[line.level]}`}>{line.level}</span>
            <span className="text-neutral-400">{line.message}</span>
          </div>
        ))}
        {running && <span className="animate-pulse text-neutral-600">▋</span>}
        <div ref={bottomRef} />
      </div>
    </div>
  )
}
