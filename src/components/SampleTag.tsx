/** Visible marker for sample content. Remove `sample: true` from the data to hide it. */
export function SampleTag({ show = true, className = '' }: { show?: boolean; className?: string }) {
  if (!show) return null
  return (
    <span
      className={`inline-flex items-center rounded-full border border-accent/40 px-2.5 py-0.5 text-xs font-medium tracking-wide text-accent ${className}`}
    >
      Sample content
    </span>
  )
}
