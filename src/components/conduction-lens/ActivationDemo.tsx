'use client'

import { useEffect, useState } from 'react'
import ActivationMap, { type Geometry, type ResultsArtifact } from './ActivationMap'

// Loads a geometry + activation-results pair (copied from the ecg-purkinje-npe demo)
// from /public at runtime, so the mesh only downloads on this page, then hands them to
// the ported canvas ActivationMap. Reused for the crtdemo rig and the Strocchi heart.
export default function ActivationDemo({
  geometryUrl,
  resultsUrl,
}: {
  geometryUrl: string
  resultsUrl: string
}) {
  const [data, setData] = useState<{ geometry: Geometry; results: ResultsArtifact } | null>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    let alive = true
    Promise.all([
      fetch(geometryUrl).then((r) => {
        if (!r.ok) throw new Error('geometry')
        return r.json()
      }),
      fetch(resultsUrl).then((r) => {
        if (!r.ok) throw new Error('results')
        return r.json()
      }),
    ])
      .then(([geometry, results]) => {
        if (alive) setData({ geometry, results })
      })
      .catch(() => {
        if (alive) setFailed(true)
      })
    return () => {
      alive = false
    }
  }, [geometryUrl, resultsUrl])

  if (failed) {
    return (
      <div className="flex h-64 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900/50 text-sm text-neutral-500">
        Couldn&apos;t load this activation map. See the{' '}
        <a
          href="https://d2b1qd2pllzgje.cloudfront.net"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 underline hover:text-neutral-300"
        >
          live demo
        </a>
        .
      </div>
    )
  }

  if (!data) {
    return (
      <div
        className="flex items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900/50 text-sm text-neutral-500"
        style={{ aspectRatio: '4 / 3' }}
      >
        Loading the heart…
      </div>
    )
  }

  return <ActivationMap geometry={data.geometry} results={data.results} />
}
