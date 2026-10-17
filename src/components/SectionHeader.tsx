import type { ReactNode } from 'react'

interface SectionHeaderProps {
  id: string
  eyebrow: string
  title: ReactNode
  aside?: ReactNode
}

export function SectionHeader({ id, eyebrow, title, aside }: SectionHeaderProps) {
  return (
    <div className="mb-10 flex flex-wrap items-end justify-between gap-x-8 gap-y-4 border-b border-line pb-6 lg:mb-14">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={id} className="mt-3 font-display text-heading text-balance">
          {title}
        </h2>
      </div>
      {aside}
    </div>
  )
}
