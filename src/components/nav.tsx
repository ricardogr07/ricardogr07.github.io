'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/cv', label: 'CV' },
  { href: '/freelance', label: 'Freelance' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href))

  return (
    <header
      className="sticky top-0 z-50 h-16 border-b border-neutral-800 bg-neutral-950/95 backdrop-blur-md"
      data-testid="nav"
    >
      <nav
        className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <Link
          href="/"
          className="text-sm font-semibold text-white transition-colors hover:text-cyan-400"
        >
          Ricardo García
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href) ? 'text-cyan-400' : 'text-neutral-400 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="flex items-center justify-center rounded-md p-2 text-neutral-400 transition-colors hover:text-white sm:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-b border-neutral-800 bg-neutral-950 px-6 pb-4 sm:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'bg-cyan-400/10 text-cyan-400'
                    : 'text-neutral-400 hover:bg-neutral-800 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
