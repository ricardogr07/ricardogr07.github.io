import Link from 'next/link'
import Footer from '@/components/footer'

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col">
      <div className="flex flex-1 items-center justify-center bg-neutral-950 px-6 py-24">
        <div className="text-center">
          <p className="text-8xl font-bold text-neutral-800">404</p>
          <h1 className="mt-4 text-2xl font-semibold text-white">Page not found</h1>
          <p className="mt-2 text-neutral-400">This page doesn&apos;t exist or was moved.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm font-medium text-neutral-300 transition-all hover:border-cyan-400/50 hover:text-cyan-400"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm font-medium text-neutral-300 transition-all hover:border-cyan-400/50 hover:text-cyan-400"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm font-medium text-neutral-300 transition-all hover:border-cyan-400/50 hover:text-cyan-400"
            >
              About
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
