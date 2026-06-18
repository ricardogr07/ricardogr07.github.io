export default function DemoBanner() {
  return (
    <div
      role="alert"
      className="flex items-center justify-center gap-2 border-b border-amber-400/30 bg-amber-400/10 px-4 py-2.5 text-center text-sm text-amber-300"
    >
      <svg
        className="h-4 w-4 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
        />
      </svg>
      <span>
        <strong className="font-semibold">Demo:</strong> all data is synthetic. No real financial
        information is displayed.
      </span>
    </div>
  )
}
