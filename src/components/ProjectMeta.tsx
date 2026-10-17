import type { Project } from '../content/types'

export function ProjectMeta({ project }: { project: Project }) {
  const rows = [
    ['Role', project.role],
    ['Team', project.team],
    ['Timeline', project.timeline],
    ['Year', project.year],
    ['Platform', project.platform],
    ['Tools', project.tools?.join(', ')],
  ].filter((row): row is [string, string] => Boolean(row[1]))

  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-6 border-y border-line py-8 sm:grid-cols-3 xl:grid-cols-6">
      {rows.map(([label, value]) => (
        <div key={label} className="min-w-0">
          <dt className="eyebrow">{label}</dt>
          <dd className="mt-2 text-[0.9375rem] leading-snug break-words">{value}</dd>
        </div>
      ))}
    </dl>
  )
}
