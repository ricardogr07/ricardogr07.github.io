export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-neutral-500 sm:flex-row">
        <p>© {new Date().getFullYear()} Ricardo García Ramírez.</p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/ricardogr07"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ricardogr07/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
