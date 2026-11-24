import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../content/types'
import { CountUp } from './CountUp'

/** One column per detail on wide screens, so the details share the full width. */
const wideColumns: Record<number, string> = {
  2: 'xl:grid-cols-2',
  3: 'xl:grid-cols-3',
  4: 'xl:grid-cols-4',
  5: 'xl:grid-cols-5',
}

export function ProjectMeta({ project }: { project: Project }) {
  const rows = [
    ['Role', project.role],
    ['Team', project.team],
    ['Project status', project.status],
    ['My involvement', project.involvement],
    // An empty timeline ('') still shows the field, with a dash, until it is filled in.
    ['Timeline', project.timeline === '' ? '—' : project.timeline],
    ['Year', project.year],
    ['Platform', project.platform],
    ['Tools', project.tools?.join(', ')],
  ].filter((row): row is [string, string] => Boolean(row[1]))

  return (
    <>
    <dl
      className={`grid grid-cols-2 gap-x-6 gap-y-6 border-y border-line py-8 sm:grid-cols-3 ${
        wideColumns[rows.length + (project.website ? 1 : 0)] ?? 'xl:grid-cols-6'
      }`}
    >
      {rows.map(([label, value]) => (
        <div key={label} className="min-w-0">
          <dt className="eyebrow">{label}</dt>
          <dd className="mt-2 text-[0.9375rem] leading-snug break-words">
            {value.split('\n').map((line, i) =>
              i === 0 ? (
                <span key={i}>{line}</span>
              ) : (
                // Lines after the first are supporting detail, set smaller and quieter.
                <span key={i} className="mt-1 block text-sm text-ink-subtle">
                  {line}
                </span>
              ),
            )}
          </dd>
        </div>
      ))}
      {project.website && (
        <div className="min-w-0">
          <dt className="eyebrow">Website</dt>
          <dd className="mt-2 text-[0.9375rem] leading-snug">
            <a href={project.website} target="_blank" rel="noopener noreferrer" className="link-underline inline-flex items-center gap-1 break-all">
              {project.website.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
              <ArrowUpRight aria-hidden="true" className="size-3.5 shrink-0" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </dd>
        </div>
      )}
    </dl>
    {project.teams && project.teams.length > 0 && (
      <section aria-labelledby="team-structure" className="mt-12">
        <h2 id="team-structure" className="eyebrow">
          Team structure
        </h2>
        <ul className="mt-4 grid gap-4 sm:grid-cols-3">
          {project.teams.map((team) => (
            <li key={team.name} className="rounded-lg border border-line bg-surface/60 p-6">
              <p className="font-display text-[2.75rem] leading-none tabular-nums">
                <CountUp value={team.count} duration={900} />
              </p>
              <p className="mt-3 text-sm text-ink-muted">{team.unit}</p>
              <p className="mt-6 border-t border-line pt-4 font-medium">{team.name}</p>
            </li>
          ))}
        </ul>
      </section>
    )}
    </>
  )
}
