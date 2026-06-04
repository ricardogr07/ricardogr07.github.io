import type { Metadata } from 'next'
import HowIWork from '@/components/how-i-work'
import ContactCTA from '@/components/contact-cta'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Freelance',
  description:
    'How I work on freelance projects: scope, delivery process, and how to get in touch.',
  openGraph: {
    images: [
      {
        url: 'https://ricardogr07.github.io/og/freelance.png',
        width: 1200,
        height: 630,
        alt: 'Freelance — Ricardo García',
      },
    ],
  },
  twitter: {
    images: ['https://ricardogr07.github.io/og/freelance.png'],
  },
}

export default function FreelancePage() {
  return (
    <main>
      <section className="bg-neutral-950 px-6 pt-16 lg:px-8 lg:pt-24">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Freelance
          </h1>
          <p className="max-w-2xl text-lg text-neutral-400">
            I take on small to mid-sized projects where I can understand the problem, design the
            solution, and deliver clean, maintainable code — with clear handoff notes.
          </p>
        </div>
      </section>

      <HowIWork />
      <ContactCTA />
      <Footer />
    </main>
  )
}
