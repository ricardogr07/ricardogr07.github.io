const steps = [
  {
    number: '01',
    title: 'Clarify scope and expected deliverables',
    description:
      'Define exactly what gets built, what does not, and what done looks like before writing a single line of code.',
  },
  {
    number: '02',
    title: 'Define inputs, outputs, and edge cases',
    description:
      'Map the data contracts, failure modes, and edge cases upfront. Surprises at delivery are avoidable.',
  },
  {
    number: '03',
    title: 'Build a small working version first',
    description:
      'Ship a working slice quickly to validate assumptions and surface real integration issues early.',
  },
  {
    number: '04',
    title: 'Add validation, tests, and documentation',
    description:
      'Wrap working code in tests, add input validation, and write documentation that makes the tool usable by someone else.',
  },
  {
    number: '05',
    title: 'Deliver runnable code and handoff notes',
    description:
      'Handoff includes working code, setup instructions, usage examples, and notes on known limitations and next steps.',
  },
]

export default function HowIWork() {
  return (
    <section
      className="bg-neutral-950 px-6 py-24 lg:px-8 lg:py-32"
      aria-labelledby="how-i-work-heading"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h2
            id="how-i-work-heading"
            className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            How I Work
          </h2>
          <p className="text-neutral-400">
            Delivery discipline is the difference between a working prototype and a handoff you can
            actually use.
          </p>
        </div>

        <div className="flex flex-col gap-0">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex gap-6 pb-10 last:pb-0">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-5 top-10 h-full w-px bg-neutral-800" />
              )}

              {/* Step number */}
              <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10">
                <span className="text-xs font-bold text-cyan-400">{step.number}</span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1 pt-1.5">
                <h3 className="text-base font-semibold text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
