import type { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, FlaskConical } from 'lucide-react'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Teaching',
  description:
    'Ricardo García Ramírez — Adjunct Assistant Professor of Biomedical Engineering at Tec de Monterrey, teaching bioinstrumentation lecture and laboratory courses across the Tec20 and TEC21 curricula.',
  openGraph: {
    images: [
      {
        url: 'https://ricardogr07.github.io/og/teaching.png',
        width: 1200,
        height: 630,
        alt: 'Teaching — Ricardo García Ramírez',
      },
    ],
  },
  twitter: {
    images: ['https://ricardogr07.github.io/og/teaching.png'],
  },
}

// Courses taught for the Biomedical Engineering major (Tec20 / TEC21 curricula).
const courses = [
  {
    code: 'BI2001B',
    title: 'Design of Analog Bioinstrumentation Systems',
    blurb:
      'Analog front-ends for biomedical signals: amplification, filtering, and conditioning from sensor to readable signal.',
  },
  {
    code: 'BI2005B',
    title: 'Application of Bioinstrumentation and Biomedical Technologies',
    blurb:
      'Applying instrumentation concepts to real biomedical measurement problems and device contexts.',
  },
  {
    code: 'BI3010',
    title: 'Bioinstrumentation',
    blurb:
      'Core theory of measuring physiological signals — transducers, electrodes, noise, and safe acquisition.',
  },
  {
    code: 'BI3011',
    title: 'Bioinstrumentation Laboratory',
    blurb:
      'Hands-on lab building and validating measurement circuits, turning the theory into working benchtop instruments.',
  },
  {
    code: 'BI3014',
    title: 'Biomedical Technology Laboratory',
    blurb:
      'Lab work across biomedical technologies, emphasizing measurement, documentation, and reproducible results.',
  },
]

export default function TeachingPage() {
  return (
    <main>
      <section className="bg-neutral-950 px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-10">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10">
              <BookOpen className="h-5 w-5 text-cyan-400" aria-hidden="true" />
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Teaching
            </h1>
            {/* Draft intro — flagged for Ricardo's review. */}
            <div className="max-w-2xl space-y-4 text-base leading-relaxed text-neutral-400">
              <p>
                I taught bioinstrumentation — the engineering of measuring the human body — to
                biomedical engineering students at Tec de Monterrey. My emphasis was always the same
                one I bring to production software: a measurement you can&apos;t trust isn&apos;t a
                measurement, so the lab work centered on building circuits students actually
                validated rather than ones that merely looked right on paper.
              </p>
              <p>
                Across lecture and laboratory courses in both the Tec20 and TEC21 curricula, the goal
                was to take students from the physics of a transducer all the way to a working,
                documented instrument — the same path from first principles to a reproducible result
                that runs through everything I build.
              </p>
            </div>
          </div>

          {/* Role card */}
          <div className="mb-12 rounded-xl border border-neutral-800 bg-neutral-900 p-6 transition-all hover:border-neutral-700 hover:bg-neutral-800/60">
            <div className="mb-2 flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
              <h2 className="text-lg font-semibold text-white">
                Adjunct Assistant Professor — Biomedical Engineering Department
              </h2>
              <span className="shrink-0 text-sm text-neutral-600">Aug 2022 – Dec 2023</span>
            </div>
            <p className="mb-3 text-sm text-neutral-500">
              Tecnológico de Monterrey (ITESM), Mexico
            </p>
            <p className="text-sm leading-relaxed text-neutral-400">
              Taught lecture and laboratory components for the Biomedical Engineering major with an
              emphasis on bioinstrumentation, across the Tec20 and TEC21 curriculum models.
            </p>
          </div>

          {/* Courses */}
          <section aria-labelledby="courses-heading">
            <h2
              id="courses-heading"
              className="mb-6 text-xs font-semibold uppercase tracking-widest text-neutral-500"
            >
              Courses taught
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {courses.map((course) => (
                <div
                  key={course.code}
                  className="rounded-xl border border-neutral-800 bg-neutral-900 p-5 transition-all hover:border-neutral-700 hover:bg-neutral-800/60"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <span className="rounded-md border border-cyan-400/30 bg-cyan-400/10 px-2 py-0.5 text-xs font-semibold text-cyan-400">
                      {course.code}
                    </span>
                  </div>
                  <h3 className="mb-2 font-semibold text-white">{course.title}</h3>
                  <p className="text-sm leading-relaxed text-neutral-400">{course.blurb}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Cross-link to research */}
          <div className="mt-12 flex flex-wrap gap-4 border-t border-neutral-800 pt-8">
            <Link
              href="/research"
              className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-400 transition-colors hover:text-cyan-400"
            >
              <FlaskConical className="h-4 w-4" aria-hidden="true" />
              See research &amp; publications →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
