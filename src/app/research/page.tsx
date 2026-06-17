import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FlaskConical, BookMarked } from 'lucide-react'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Research',
  description:
    'Research by Ricardo Garcia-Ramirez — M.Sc. Data Science (PUC Chile, Distinction), peer-reviewed publications in biosensing and BioMEMS, a Springer book chapter, and research positions across KAUST, UVic, and Tec de Monterrey.',
  openGraph: {
    images: [
      {
        url: 'https://ricardogr07.github.io/og/research.png',
        width: 1200,
        height: 630,
        alt: 'Research — Ricardo García Ramírez',
      },
    ],
  },
  twitter: {
    images: ['https://ricardogr07.github.io/og/research.png'],
  },
}

// Journal articles + book chapter. Academic name form: Garcia-Ramirez.
const articles = [
  {
    authors: 'Beduk, T., Gomes, M., et al., Garcia-Ramirez, R., et al.',
    year: '2022',
    title:
      'A Portable Molecularly Imprinted Sensor for On-Site and Wireless Environmental Bisphenol A Monitoring',
    venue: 'Frontiers in Chemistry, 10, 833899',
    doi: 'https://doi.org/10.3389/fchem.2022.833899',
  },
  {
    authors: 'Garcia-Ramirez, R., Cerda-Kipper, A. S., Alvarez, D., et al.',
    year: '2021',
    title:
      'Latest Updates on the Advancement of Polymer-Based Biomicroelectromechanical Systems for Animal Cell Studies',
    venue: 'Advances in Polymer Technology, 2021, Article 8816564',
    doi: 'https://doi.org/10.1155/2021/8816564',
  },
  {
    authors: 'González-González, E., Garcia-Ramirez, R., et al.',
    year: '2021',
    title: 'Automated ELISA On-Chip for the Detection of Anti-SARS-CoV-2 Antibodies',
    venue: 'Sensors, 21(20), 6785',
    doi: 'https://doi.org/10.3390/s21206785',
  },
  {
    authors: 'Garcia-Ramirez, R., & Hosseini, S.',
    year: '2021',
    title: 'History of Bio-microelectromechanical Systems (BioMEMS)',
    venue: 'In: BioMEMS. Lecture Notes in Bioengineering. Springer, Singapore',
    doi: 'https://doi.org/10.1007/978-981-15-6382-9_1',
  },
]

const researchPositions = [
  {
    lab: 'Sensors Lab, KAUST',
    role: 'Visiting Student',
    period: 'Jan – Feb 2020',
    blurb:
      'Laser-Scribed Graphene electrodes for biosensing: gold electrodeposition and functionalization for BPA detection in water samples.',
  },
  {
    lab: 'Elvira Lab, University of Victoria (Mitacs)',
    role: 'Research Intern',
    period: 'May – Aug 2019',
    blurb:
      'Designed, simulated (COMSOL), and built a flow-focusing device junction for water-in-oil-in-water droplets.',
  },
  {
    lab: 'Nanosensors & Devices Group, Tec de Monterrey',
    role: 'Research Assistant',
    period: 'May 2018 – Dec 2019',
    blurb:
      'Microfluidic point-of-care device fabrication and droplet generation using flow-focusing and centrifugal devices.',
  },
  {
    lab: 'Biomedical Engineering Lab, Tec de Monterrey',
    role: 'Research Assistant',
    period: 'May 2017 – Dec 2018',
    blurb:
      'Integrated mini bioreactor system and a fluorescence-based point-of-care device for viral genetic-material detection.',
  },
]

const scientificProjects = [
  { slug: 'purkinje-uv', label: 'PurkinjeUV — cardiac Purkinje network generation' },
  { slug: 'myocardial-mesh', label: 'Myocardial Mesh — heart activation & 12-lead ECG synthesis' },
  { slug: 'jax-bo', label: 'JAX-BO — Bayesian optimization library (maintenance)' },
]

export default function ResearchPage() {
  return (
    <main>
      <section className="bg-neutral-950 px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-10">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10">
              <FlaskConical className="h-5 w-5 text-cyan-400" aria-hidden="true" />
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Research
            </h1>
            <div className="space-y-4 text-base leading-relaxed text-neutral-400 text-justify">
              <p>
                I got into a research lab in my first semester of undergrad as a volunteer. Not for
                credit, not because it was required. I just wanted to be there. I came to biomedical
                engineering already knowing I wanted to work on the engineering side of healthcare:
                building better tools for detection and measurement, not treating patients directly.
                The lab was where that started to become real.
              </p>
              <p>
                The through-line from biosensors and BioMEMS to cardiac modeling is less of a pivot
                than it looks. It is all the same question: how do you measure what the body is
                doing, as precisely and non-invasively as possible? Microfluidic point-of-care
                devices, graphene electrodes for environmental biosensing, Bayesian reconstruction
                of cardiac conduction from an ECG: different scales, different tools, the same
                engineering problem.
              </p>
              <p>
                I think of myself as an engineer who does research, not a researcher who uses
                engineering tools. The instinct is always to ask what can be measured, reproduced,
                and verified. That question is what connects the bench work, the publications, and
                the thesis.
              </p>
            </div>
          </div>

          {/* Thesis */}
          <section className="mb-12 rounded-xl border border-cyan-400/20 bg-cyan-400/3 p-6">
            <h2 className="mb-1 text-lg font-semibold text-white">
              M.Sc. in Data Science, Pontificia Universidad Católica de Chile
            </h2>
            <p className="mb-3 text-sm text-cyan-400">Graduated with Distinction</p>
            <p className="text-sm leading-relaxed text-neutral-300">
              Thesis: probabilistic reconstruction of the Purkinje network from electrocardiogram
              signals using computational modeling and Bayesian inference. Inferring the
              heart&apos;s electrical conduction structure from the signals it produces.
            </p>
          </section>

          {/* Publications */}
          <section className="mb-12" aria-labelledby="publications-heading">
            <h2
              id="publications-heading"
              className="mb-6 text-xs font-semibold uppercase tracking-widest text-neutral-500"
            >
              Publications
            </h2>

            {/* Book — distinct card */}
            <a
              href="https://link.springer.com/book/10.1007/978-981-15-6382-9#bibliographic-information"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-6 flex flex-col gap-4 rounded-xl border border-neutral-800 bg-neutral-900 p-6 transition-colors hover:border-neutral-700 hover:bg-neutral-800/50 sm:flex-row sm:items-center"
            >
              <div className="relative h-24 w-16 shrink-0 overflow-hidden rounded-md">
                <Image
                  src="https://media.springernature.com/w306/springer-static/cover/book/978-981-15-6382-9.jpg"
                  alt="BioMEMS: Biosensing Applications book cover"
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  Book · Springer Nature
                </p>
                <h3 className="font-semibold text-white">BioMEMS: Biosensing Applications</h3>
                <p className="mt-1 text-sm text-neutral-400">
                  Hosseini, S., Espinosa-Hernandez, M., Garcia-Ramirez, R., et al. (2020). 1st ed.,
                  178 pp. Springer Nature.
                </p>
              </div>
            </a>

            {/* Articles */}
            <div className="space-y-5">
              {articles.map((pub, i) => (
                <div key={pub.doi} className="flex gap-4">
                  <span className="mt-0.5 shrink-0 text-sm font-bold text-cyan-400">[{i + 1}]</span>
                  <p className="text-sm leading-relaxed text-neutral-300">
                    {pub.authors} ({pub.year}).{' '}
                    <a
                      href={pub.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-white transition-colors hover:text-cyan-400"
                    >
                      {pub.title}
                    </a>
                    . <span className="italic text-neutral-500">{pub.venue}.</span>{' '}
                    <a
                      href={pub.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-neutral-600 transition-colors hover:text-cyan-400"
                    >
                      DOI ↗
                    </a>
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <a
                href="https://scholar.google.com/citations?user=l71XTncAAAAJ&hl=es&oi=ao"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-neutral-400 transition-colors hover:text-cyan-400"
              >
                View all on Google Scholar →
              </a>
            </div>
          </section>

          {/* Research positions */}
          <section className="mb-12" aria-labelledby="positions-heading">
            <h2
              id="positions-heading"
              className="mb-6 text-xs font-semibold uppercase tracking-widest text-neutral-500"
            >
              Research positions
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {researchPositions.map((pos) => (
                <div
                  key={pos.lab}
                  className="rounded-xl border border-neutral-800 bg-neutral-900 p-5 transition-all hover:border-neutral-700 hover:bg-neutral-800/60"
                >
                  <div className="mb-1 flex items-baseline justify-between gap-2">
                    <h3 className="font-semibold text-white">{pos.role}</h3>
                    <span className="shrink-0 text-xs text-neutral-600">{pos.period}</span>
                  </div>
                  <p className="mb-2 text-sm text-neutral-500">{pos.lab}</p>
                  <p className="text-sm leading-relaxed text-neutral-400">{pos.blurb}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Scientific-software cross-links */}
          <section
            aria-labelledby="sci-software-heading"
            className="border-t border-neutral-800 pt-8"
          >
            <h2
              id="sci-software-heading"
              className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-500"
            >
              Scientific software
            </h2>
            <p className="mb-4 text-sm text-neutral-400">
              The research carries into code — these projects come straight out of the cardiac and
              biomedical modeling work:
            </p>
            <div className="space-y-2">
              {scientificProjects.map((proj) => (
                <Link
                  key={proj.slug}
                  href={`/projects/${proj.slug}`}
                  className="flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-white"
                >
                  <span className="text-neutral-700">→</span>
                  {proj.label}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  )
}
