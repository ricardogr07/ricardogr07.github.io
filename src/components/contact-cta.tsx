export default function ContactCTA() {
  return (
    <section
      className="bg-neutral-950 px-6 py-24 lg:px-8 lg:py-32"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-neutral-900 to-neutral-950 p-10 text-center shadow-lg shadow-cyan-400/5">
        <h2
          id="contact-heading"
          className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Work with me.
        </h2>

        <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-neutral-400">
          Have a project or idea that needs to become real software? Let&apos;s build it together!
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1RlddxA4fs-UVp6PIFGgsPRzVoisXyzQZoLuq7250339bdj9p18AWBCmS4e3WVO7lIVRTbtttO?gv=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-lg bg-cyan-400 px-8 text-sm font-semibold text-neutral-950 transition-all hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-neutral-950"
          >
            Book a 30-min call
          </a>
          <a
            href="mailto:rgr.5882@gmail.com"
            className="inline-flex h-12 items-center gap-2 rounded-lg border border-neutral-700 bg-transparent px-8 text-sm font-semibold text-neutral-300 transition-all hover:border-cyan-400/50 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-neutral-950"
          >
            Send an email
          </a>
        </div>
      </div>
    </section>
  )
}
