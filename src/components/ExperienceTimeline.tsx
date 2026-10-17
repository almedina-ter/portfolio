import type { ExperienceEntry } from '../content/types'
import { Reveal } from './Reveal'
import { SampleTag } from './SampleTag'

export function ExperienceTimeline({ entries, headingLevel: Heading = 'h3' }: { entries: ExperienceEntry[]; headingLevel?: 'h2' | 'h3' }) {
  return (
    <ol>
      {entries.map((entry, index) => (
        <Reveal as="li" variant="stagger" key={index} className="rule-draw grid gap-x-10 gap-y-2 py-7 md:grid-cols-[11rem_minmax(0,1fr)]">
          <p className="text-sm text-ink-subtle tabular-nums">{entry.period}</p>
          <div>
            <Heading className="flex flex-wrap items-center gap-x-3 gap-y-1 text-lg font-medium">
              {entry.role}
              <span className="font-normal text-ink-muted">· {entry.company}</span>
              <SampleTag show={entry.sample} />
            </Heading>
            {entry.location && <p className="mt-1 text-sm text-ink-subtle">{entry.location}</p>}
            <p className="mt-3 max-w-prose text-ink-muted">{entry.summary}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  )
}
