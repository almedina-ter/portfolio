import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../content/types'

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
    <dl className="grid grid-cols-2 gap-x-6 gap-y-6 border-y border-line py-8 sm:grid-cols-3 xl:grid-cols-6">
      {rows.map(([label, value]) => (
        <div key={label} className="min-w-0">
          <dt className="eyebrow">{label}</dt>
          <dd className="mt-2 text-[0.9375rem] leading-snug break-words whitespace-pre-line">{value}</dd>
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
      <section aria-labelledby="team-structure" className="mt-10">
        <h2 id="team-structure" className="eyebrow">
          Team structure
        </h2>
        <ul className="mt-4 grid gap-4 sm:grid-cols-3">
          {project.teams.map((team) => (
            <li key={team.name} className="rounded-lg border border-line bg-surface/60 p-6">
              <p className="font-display text-[2.75rem] leading-none">{team.count}</p>
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
