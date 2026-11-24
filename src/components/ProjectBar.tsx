import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import { ChevronLeft } from 'lucide-react'
import type { Project } from '../content/types'
import { subscribeScroll } from '../lib/motion'

const number = (index: number) => String(index + 1).padStart(2, '0')

/**
 * The breadcrumb and the project switcher. It sits in the page like any other row, and once the
 * page scrolls it stays at the top, so the next project is always one tap away. At rest it is
 * invisible: no fill and no line. When it is stuck it picks up a soft blurred fill and a hairline.
 * On phones it sits under the site header and shrinks to a back link and the three buttons.
 */
export function ProjectBar({ project, projects, position }: { project: Project; projects: Project[]; position: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [stuck, setStuck] = useState(false)

  useEffect(
    () =>
      subscribeScroll(() => {
        const bar = ref.current
        if (!bar) return
        const top = parseFloat(getComputedStyle(bar).top) || 0
        setStuck(window.scrollY > 0 && bar.getBoundingClientRect().top <= top + 0.5)
      }),
    [],
  )

  return (
    <div
      ref={ref}
      className={`sticky top-16 z-20 mt-5 border-b transition-[background-color,border-color] duration-(--duration-ui) lg:top-0 lg:mt-11 ${
        stuck ? 'border-line bg-paper' : 'border-transparent bg-paper/0'
      }`}
    >
      <div className="container-page flex items-center justify-between gap-x-4 py-1">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-x-2 text-sm text-ink-muted">
            <li className="hidden sm:block">
              <Link to="/" className="inline-flex min-h-11 items-center transition-colors hover:text-ink">
                Portfolio
              </Link>
            </li>
            <li aria-hidden="true" className="hidden text-line-strong sm:block">
              /
            </li>
            <li>
              <Link
                to="/"
                state={{ scrollTo: 'work' }}
                className="inline-flex min-h-11 items-center gap-1 transition-colors hover:text-ink"
              >
                <ChevronLeft aria-hidden="true" className="-ml-1 size-4 sm:hidden" />
                Selected work
              </Link>
            </li>
            <li aria-hidden="true" className="hidden text-line-strong sm:block">
              /
            </li>
            <li aria-current="page" className="hidden text-ink sm:block">
              {project.title}
            </li>
          </ol>
        </nav>

        {projects.length > 1 && (
          <nav aria-label="Projects" className="flex items-center gap-1.5">
            <span className="mr-2 hidden text-sm text-ink-subtle tabular-nums sm:inline">
              Project {number(position)} of {number(projects.length - 1)}
            </span>
            {projects.map((item, i) => {
              const current = item.slug === project.slug
              return (
                <Link
                  key={item.slug}
                  to={`/work/${item.slug}`}
                  aria-label={`${item.title}${current ? ' (current project)' : ''}`}
                  aria-current={current ? 'page' : undefined}
                  className={`inline-flex size-10 items-center justify-center rounded-full border font-number text-xs transition-colors duration-(--duration-micro) ${
                    current ? 'border-ink bg-ink text-paper' : 'border-line-strong text-ink-muted hover:border-ink hover:text-ink'
                  }`}
                >
                  {number(i)}
                </Link>
              )
            })}
          </nav>
        )}
      </div>
    </div>
  )
}
