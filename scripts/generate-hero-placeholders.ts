/**
 * Generates 1200×630 placeholder hero PNGs for each project.
 * These are labeled slots awaiting Ricardo's AI art (see phase-4-media.md).
 * Replace public/images/projects/<slug>/hero.png with the final AI-generated image.
 *
 * Run with: pnpm tsx scripts/generate-hero-placeholders.ts
 */

import satori from 'satori'
import { Resvg } from '@resvg/resvg-js'
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs'
import { resolve, join } from 'node:path'
import { projects } from '../src/content/projects'

const ROOT = resolve(process.cwd())
const OUT_BASE = resolve(ROOT, 'public/images/projects')

// ── Fonts ────────────────────────────────────────────────────────────────────

function loadFont(weight: 400 | 700): ArrayBuffer {
  const name = weight === 400 ? 'Regular' : 'Bold'
  const path = resolve(ROOT, `node_modules/geist/dist/fonts/geist-sans/Geist-${name}.ttf`)
  const buf = readFileSync(path)
  return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength) as ArrayBuffer
}

const fonts: Parameters<typeof satori>[1]['fonts'] = [
  { name: 'Geist', data: loadFont(400), weight: 400, style: 'normal' },
  { name: 'Geist', data: loadFont(700), weight: 700, style: 'normal' },
]

// ── Prompt lookup ────────────────────────────────────────────────────────────

const heroPrompts: Record<string, string> = {
  'rusty-rag-chunker':
    'abstract Rust+Python pipeline, glowing token blocks flowing into a vector grid, dark, cyan→indigo',
  'mx-jobs-insights':
    'data pipeline turning scattered records into a clean dataset cube, dark, cyan→indigo',
  'linkedin-webscraper':
    'structured rows extracted from a noisy web, funnel into a tidy database, dark, cyan→indigo',
  reposage:
    'a codebase X-rayed into a structured report card, dark, cyan→indigo',
  clipsmith:
    'long video timeline distilled into vertical highlight clips, dark, cyan→indigo',
  'purkinje-uv':
    'fractal Purkinje network over a translucent heart mesh, scientific, dark, cyan→indigo',
  'market-lab':
    'reproducible experiment folds and diagnostic charts, lab-notebook feel, dark, cyan→indigo',
  'myocardial-mesh':
    'myocardial surface mesh wireframe, scientific, dark, cyan→indigo',
  'jax-bo':
    'Gaussian-process posterior with acquisition curve, optimization converging, dark, cyan→indigo',
  'wc26-dashboard':
    'World Cup pool standings probabilities from Monte Carlo simulation, dark, cyan→indigo',
}

// ── Element builder ──────────────────────────────────────────────────────────

type SatoriNode = Parameters<typeof satori>[0]

function buildPlaceholder(title: string, slug: string): SatoriNode {
  const prompt = heroPrompts[slug] ?? 'dark, cyan→indigo, abstract technical'

  return {
    type: 'div',
    props: {
      style: {
        display: 'flex',
        flexDirection: 'column',
        width: '1200px',
        height: '630px',
        backgroundColor: '#0a0a0a',
        fontFamily: 'Geist',
        position: 'relative',
        overflow: 'hidden',
      },
      children: [
        // Grid overlay
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            },
            children: null,
          },
        },
        // Dashed border overlay
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute',
              top: '24px',
              left: '24px',
              right: '24px',
              bottom: '24px',
              border: '2px dashed rgba(34,211,238,0.25)',
              borderRadius: '12px',
            },
            children: null,
          },
        },
        // Content
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
              gap: '28px',
              padding: '60px 80px',
              position: 'relative',
            },
            children: [
              // Badge
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '6px 18px',
                    borderRadius: '9999px',
                    border: '1px solid rgba(34,211,238,0.4)',
                    backgroundColor: 'rgba(34,211,238,0.07)',
                  },
                  children: {
                    type: 'span',
                    props: {
                      style: {
                        fontSize: '15px',
                        fontWeight: 400,
                        color: '#22d3ee',
                        letterSpacing: '0.08em',
                      },
                      children: 'HERO IMAGE PENDING',
                    },
                  },
                },
              },
              // Title
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: '52px',
                    fontWeight: 700,
                    color: '#ffffff',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.15,
                    textAlign: 'center',
                    maxWidth: '900px',
                  },
                  children: title,
                },
              },
              // Prompt hint
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: '18px',
                    fontWeight: 400,
                    color: '#6b7280',
                    textAlign: 'center',
                    maxWidth: '800px',
                    lineHeight: 1.5,
                  },
                  children: `Prompt: "${prompt}"`,
                },
              },
            ],
          },
        },
      ],
    },
  }
}

// ── Generation ───────────────────────────────────────────────────────────────

const publicSlugs = projects
  .filter((p) => p.visibility === 'public')
  .map((p) => ({ slug: p.slug, title: p.title }))

async function generateOne(slug: string, title: string): Promise<void> {
  const dir = join(OUT_BASE, slug)
  mkdirSync(dir, { recursive: true })

  const svg = await satori(buildPlaceholder(title, slug), {
    width: 1200,
    height: 630,
    fonts,
  })

  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } })
  const pngBuffer = resvg.render().asPng()
  const outPath = join(dir, 'hero.png')
  writeFileSync(outPath, pngBuffer)
  console.log(`  wrote public/images/projects/${slug}/hero.png`)
}

async function main() {
  console.log(`Generating ${publicSlugs.length} hero placeholders…`)
  for (const { slug, title } of publicSlugs) {
    await generateOne(slug, title)
  }
  console.log('Done. Replace each hero.png with Ricardo\'s AI art when ready.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
