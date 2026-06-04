'use client'

import { useState, useEffect, useCallback } from 'react'
import type { Database } from 'sql.js'
import { initSql, schemaInfo, presetQueries } from '@/content/query-lab-data'
import DemoBanner from '@/components/dashboard/DemoBanner'
import SchemaPanel from './SchemaPanel'
import PresetQueries from './PresetQueries'
import ResultsTable from './ResultsTable'

type LoadStatus = 'loading' | 'ready' | 'init-error'

interface QueryResult {
  columns: string[]
  rows: (string | number | null)[][]
}

const DEFAULT_QUERY = presetQueries[0].sql

export default function QueryLabShell() {
  const [loadStatus, setLoadStatus] = useState<LoadStatus>('loading')
  const [db, setDb] = useState<Database | null>(null)
  const [query, setQuery] = useState(DEFAULT_QUERY)
  const [result, setResult] = useState<QueryResult | null>(null)
  const [queryError, setQueryError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const sqlJsModule = await import('sql.js')
        const initSqlJs = sqlJsModule.default
        const SQL = await initSqlJs({ locateFile: () => '/sql-wasm.wasm' })
        if (cancelled) return
        const database = new SQL.Database()
        database.run(initSql)
        // Run the default query immediately so results are ready when the UI appears
        const res = database.exec(DEFAULT_QUERY)
        if (!cancelled) {
          setDb(database)
          setLoadStatus('ready')
          if (res.length > 0) {
            setResult({
              columns: res[0].columns,
              rows: res[0].values as (string | number | null)[][],
            })
          }
        }
      } catch {
        if (!cancelled) setLoadStatus('init-error')
      }
    })()
    return () => {
      cancelled = true
    }
  }, [])

  const runQuery = useCallback(
    (sql?: string) => {
      if (!db) return
      const sqlToRun = sql ?? query
      setQueryError(null)
      setResult(null)
      try {
        const res = db.exec(sqlToRun)
        if (res.length === 0) {
          setResult({ columns: [], rows: [] })
        } else {
          setResult({
            columns: res[0].columns,
            rows: res[0].values as (string | number | null)[][],
          })
        }
      } catch (e) {
        setQueryError((e as Error).message)
      }
    },
    [db, query]
  )

  const handlePresetSelect = (sql: string) => {
    setQuery(sql)
    setResult(null)
    setQueryError(null)
    if (db) {
      try {
        const res = db.exec(sql)
        if (res.length === 0) {
          setResult({ columns: [], rows: [] })
        } else {
          setResult({
            columns: res[0].columns,
            rows: res[0].values as (string | number | null)[][],
          })
        }
      } catch (e) {
        setQueryError((e as Error).message)
      }
    }
  }

  if (loadStatus === 'loading') {
    return (
      <>
        <DemoBanner />
        <div className="flex min-h-[40vh] items-center justify-center bg-neutral-950">
          <p className="text-sm text-neutral-500">Loading SQLite engine…</p>
        </div>
      </>
    )
  }

  if (loadStatus === 'init-error') {
    return (
      <>
        <DemoBanner />
        <div className="flex min-h-[40vh] items-center justify-center bg-neutral-950">
          <p className="text-sm text-red-400">
            Failed to initialize SQLite. Try reloading the page.
          </p>
        </div>
      </>
    )
  }

  return (
    <>
      <DemoBanner />
      <section className="bg-neutral-950 px-6 py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Portfolio Query Lab
            </h1>
            <p className="mt-1 text-neutral-500">
              SQLite (sql.js / WebAssembly) · Synthetic data · Runs entirely in your browser
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[260px_1fr]">
            <SchemaPanel tables={schemaInfo} />

            <div className="space-y-4">
              <PresetQueries presets={presetQueries} onSelect={handlePresetSelect} />

              <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-4">
                <textarea
                  aria-label="SQL query"
                  className="w-full resize-none bg-transparent font-mono text-sm leading-relaxed text-cyan-300 focus:outline-none"
                  rows={6}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  spellCheck={false}
                />
                <div className="mt-3 flex items-center gap-4">
                  <button
                    onClick={() => runQuery()}
                    className="rounded-lg bg-cyan-500 px-5 py-1.5 text-sm font-semibold text-neutral-950 transition-colors hover:bg-cyan-400"
                  >
                    Run Query
                  </button>
                  {result && (
                    <span className="text-xs text-neutral-600">
                      {result.rows.length} row{result.rows.length !== 1 ? 's' : ''}
                    </span>
                  )}
                </div>
              </div>

              {(result || queryError) && (
                <ResultsTable
                  columns={result?.columns ?? []}
                  rows={result?.rows ?? []}
                  error={queryError}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
