import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

interface SectionHeaderProps {
  id: string
  eyebrow: string
  title: ReactNode
  aside?: ReactNode
}

/** Eyebrow, title and aside rise in sequence while the rule beneath draws across. */
export function SectionHeader({ id, eyebrow, title, aside }: SectionHeaderProps) {
  return (
    <Reveal variant="stagger" className="rule-draw mb-10 flex flex-wrap items-end justify-between gap-x-8 gap-y-4 pb-6 lg:mb-14">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={id} className="mt-3 font-display text-heading text-balance">
          {title}
        </h2>
      </div>
      {aside && <div>{aside}</div>}
    </Reveal>
  )
}
