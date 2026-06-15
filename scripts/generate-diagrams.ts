/**
 * Generates .mmd source files and matching SVG flowchart diagrams for each project.
 * Run with: pnpm tsx scripts/generate-diagrams.ts
 *
 * SVGs are theme-neutral (transparent bg, light strokes/text) so they render well
 * on the site's dark background.
 */

import { writeFileSync, mkdirSync } from 'node:fs'
import { resolve, join } from 'node:path'

const ROOT = resolve(process.cwd())
const OUT_BASE = resolve(ROOT, 'public/images/projects')

interface DiagramSpec {
  slug: string
  nodes: string[]
}

const diagrams: DiagramSpec[] = [
  {
    slug: 'rusty-rag-chunker',
    nodes: ['Ingest', 'Chunk (Rust/PyO3)', 'Embed', 'Qdrant', 'Ask'],
  },
  {
    slug: 'mx-jobs-insights',
    nodes: ['Snapshots', 'DuckDB/Parquet', 'Reports', 'MkDocs', 'GH Actions'],
  },
  {
    slug: 'linkedin-webscraper',
    nodes: [
      'Guest Search',
      'Parse Cards',
      'Detail API',
      'Clean + Dedupe',
      'OpenAI (opt)',
      'SQLite',
      'CSV Export',
    ],
  },
  {
    slug: 'reposage',
    nodes: ['Scan', 'Detect', 'Heuristics', 'MD/JSON Report'],
  },
  {
    slug: 'clipsmith',
    nodes: ['VOD', 'Transcribe', 'Score', 'LLM Select', 'FFmpeg 9:16'],
  },
  {
    slug: 'purkinje-uv',
    nodes: ['Mesh', 'Fractal Net', 'UV Map', 'Eikonal', 'Viz'],
  },
  {
    slug: 'market-lab',
    nodes: ['Data', 'Baselines', 'Train', 'Walk-Forward', 'Report'],
  },
  {
    slug: 'myocardial-mesh',
    nodes: ['Mesh Parse', 'Manipulate', 'Simulate'],
  },
  {
    slug: 'jax-bo',
    nodes: ['Objective', 'GP Posterior', 'Acquisition', 'Optimize'],
  },
  {
    slug: 'wc26-dashboard',
    nodes: ['Elo Ratings', 'Monte Carlo ×10k', 'Cosmos Cache', 'Pool Standings'],
  },
]

// ── SVG constants ────────────────────────────────────────────────────────────

const NODE_W = 136
const NODE_H = 38
const NODE_RX = 7
const GAP = 38        // space between nodes (arrow travels here)
const PAD_X = 22
const PAD_Y = 18

const COLOR_NODE_FILL = '#0d1117'
const COLOR_NODE_STROKE = '#22d3ee'
const COLOR_TEXT = '#e2e8f0'
const COLOR_ARROW = '#818cf8'

function buildSVG(nodes: string[]): string {
  const n = nodes.length
  const totalW = 2 * PAD_X + n * NODE_W + (n - 1) * GAP
  const totalH = 2 * PAD_Y + NODE_H + 24  // extra room for arrowhead baseline

  // Arrow marker
  const defs = `
  <defs>
    <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="${COLOR_ARROW}" />
    </marker>
  </defs>`.trim()

  const nodeEls: string[] = []
  const arrowEls: string[] = []

  for (let i = 0; i < n; i++) {
    const x = PAD_X + i * (NODE_W + GAP)
    const y = PAD_Y

    // Node rect
    nodeEls.push(
      `<rect x="${x}" y="${y}" width="${NODE_W}" height="${NODE_H}" rx="${NODE_RX}" ` +
        `fill="${COLOR_NODE_FILL}" stroke="${COLOR_NODE_STROKE}" stroke-width="1.5"/>`,
    )

    // Node text (centered)
    const cx = x + NODE_W / 2
    const cy = y + NODE_H / 2 + 1
    nodeEls.push(
      `<text x="${cx}" y="${cy}" text-anchor="middle" dominant-baseline="middle" ` +
        `fill="${COLOR_TEXT}" font-size="12" font-family="ui-monospace,SFMono-Regular,monospace" ` +
        `font-weight="500">${escapeXml(nodes[i])}</text>`,
    )

    // Arrow to next node
    if (i < n - 1) {
      const ax1 = x + NODE_W + 3
      const ax2 = x + NODE_W + GAP - 5
      const ay = y + NODE_H / 2
      arrowEls.push(
        `<line x1="${ax1}" y1="${ay}" x2="${ax2}" y2="${ay}" ` +
          `stroke="${COLOR_ARROW}" stroke-width="1.5" marker-end="url(#arrowhead)"/>`,
      )
    }
  }

  return (
    `<svg xmlns="http://www.w3.org/2000/svg" width="${totalW}" height="${totalH}" viewBox="0 0 ${totalW} ${totalH}">\n` +
    `  ${defs}\n` +
    `  ${arrowEls.join('\n  ')}\n` +
    `  ${nodeEls.join('\n  ')}\n` +
    `</svg>`
  )
}

function escapeXml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

// ── .mmd builder ─────────────────────────────────────────────────────────────

function buildMmd(nodes: string[]): string {
  const lines = ['flowchart LR']
  for (let i = 0; i < nodes.length; i++) {
    const id = String.fromCharCode(65 + i) // A, B, C, …
    if (i < nodes.length - 1) {
      const nextId = String.fromCharCode(65 + i + 1)
      lines.push(`  ${id}["${nodes[i]}"] --> ${nextId}["${nodes[i + 1]}"]`)
    }
  }
  return lines.join('\n')
}

// ── Main ─────────────────────────────────────────────────────────────────────

function main() {
  console.log('Generating diagram .mmd + .svg files…')

  for (const spec of diagrams) {
    const dir = join(OUT_BASE, spec.slug)
    mkdirSync(dir, { recursive: true })

    const mmdPath = join(dir, 'diagram.mmd')
    const svgPath = join(dir, 'diagram.svg')

    writeFileSync(mmdPath, buildMmd(spec.nodes), 'utf8')
    writeFileSync(svgPath, buildSVG(spec.nodes), 'utf8')

    console.log(`  ${spec.slug}: wrote diagram.mmd + diagram.svg`)
  }

  console.log('Done.')
}

main()
