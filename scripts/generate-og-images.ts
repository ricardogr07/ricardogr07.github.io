import satori from 'satori'
import { Resvg } from '@resvg/resvg-js'
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { projects } from '../src/content/projects'

const ROOT = resolve(process.cwd())

// ── Fonts ──────────────────────────────────────────────────────────────────

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

// ── Page list ──────────────────────────────────────────────────────────────

interface OgPage {
  slug: string
  subtitle: string
}

const staticPages: OgPage[] = [
  { slug: 'home', subtitle: 'ML/AI · Data Engineering · Scientific Computing' },
  { slug: 'about', subtitle: 'About' },
  { slug: 'projects', subtitle: 'Projects' },
  { slug: 'cv', subtitle: 'CV / Résumé' },
  { slug: 'freelance', subtitle: 'Freelance' },
]

const projectPages: OgPage[] = projects.map((p) => ({
  slug: `project-${p.slug}`,
  subtitle: p.title,
}))

const allPages: OgPage[] = [...staticPages, ...projectPages]

// ── Element builder ────────────────────────────────────────────────────────

type SatoriNode = Parameters<typeof satori>[0]

function buildElement(subtitle: string): SatoriNode {
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
        // Subtle grid overlay
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
        // Content layer
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              height: '100%',
              padding: '60px 80px',
              position: 'relative',
            },
            children: [
              // Top: URL badge
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '8px 20px',
                    borderRadius: '9999px',
                    border: '1px solid rgba(34,211,238,0.3)',
                    backgroundColor: 'rgba(34,211,238,0.05)',
                  },
                  children: [
                    {
                      type: 'div',
                      props: {
                        style: {
                          width: '8px',
                          height: '8px',
                          borderRadius: '9999px',
                          backgroundColor: '#22d3ee',
                        },
                        children: null,
                      },
                    },
                    {
                      type: 'span',
                      props: {
                        style: {
                          fontSize: '18px',
                          fontWeight: 400,
                          color: '#22d3ee',
                          letterSpacing: '0.05em',
                        },
                        children: 'ricardogr07.github.io',
                      },
                    },
                  ],
                },
              },
              // Center: name + subtitle
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '24px',
                    textAlign: 'center',
                  },
                  children: [
                    {
                      type: 'div',
                      props: {
                        style: {
                          fontSize: '80px',
                          fontWeight: 700,
                          color: '#ffffff',
                          letterSpacing: '-0.02em',
                          lineHeight: 1.1,
                        },
                        children: 'Ricardo García',
                      },
                    },
                    {
                      type: 'div',
                      props: {
                        style: {
                          fontSize: '32px',
                          fontWeight: 400,
                          color: '#a3a3a3',
                          maxWidth: '900px',
                          textAlign: 'center',
                          lineHeight: 1.3,
                        },
                        children: subtitle,
                      },
                    },
                  ],
                },
              },
              // Bottom: tagline
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                  },
                  children: {
                    type: 'span',
                    props: {
                      style: {
                        fontSize: '18px',
                        fontWeight: 400,
                        color: '#22d3ee',
                        letterSpacing: '0.08em',
                      },
                      children: 'ML/AI · Data Engineering · Scientific Computing',
                    },
                  },
                },
              },
            ],
          },
        },
      ],
    },
  }
}

// ── Generation ─────────────────────────────────────────────────────────────

const OUT_DIR = resolve(ROOT, 'public/og')
mkdirSync(OUT_DIR, { recursive: true })

async function generateOne(page: OgPage): Promise<void> {
  const svg = await satori(buildElement(page.subtitle), {
    width: 1200,
    height: 630,
    fonts,
  })

  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } })
  const pngBuffer = resvg.render().asPng()
  const outPath = resolve(OUT_DIR, `${page.slug}.png`)
  writeFileSync(outPath, pngBuffer)
  console.log(`  wrote ${outPath.replace(ROOT, '.')}`)
}

async function main() {
  console.log(`Generating ${allPages.length} OG images…`)
  for (const page of allPages) {
    await generateOne(page)
  }
  console.log('Done.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
