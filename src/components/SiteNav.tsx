import { Link, useLocation } from 'react-router'
import { site } from '../content/site'
import { EmailLink, LinkedInLink, OtherLinks, ResumeLink } from './ContactLinks'
import { LocalTime } from './LocalTime'
import { navItems } from './navigation'

export function Availability({ className = '' }: { className?: string }) {
  if (!site.availability) return null
  return (
    <p className={`flex items-start gap-2 text-sm leading-snug text-ink-muted ${className}`}>
      <span aria-hidden="true" className="pulse-dot mt-[0.4em] size-2 shrink-0 rounded-full bg-positive" />
      {site.availability}
    </p>
  )
}

/** Persistent sidebar navigation for laptop and desktop widths. */
export function SiteNav() {
  const { pathname } = useLocation()

  return (
    <aside className="sticky top-0 hidden h-dvh flex-col justify-between overflow-y-auto border-r border-line px-8 py-10 lg:flex">
      <div>
        <Link to="/" className="group block">
          <span className="block font-display text-[1.75rem] leading-none tracking-tight">{site.name}</span>
          <span className="mt-2 block text-sm text-ink-muted">{site.role}</span>
        </Link>

        <nav aria-label="Primary" className="mt-14">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const active = item.matches(pathname)
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    aria-current={active ? 'page' : undefined}
                    className={`group flex min-h-10 items-center gap-3 text-[1.0625rem] transition-colors ${
                      active ? 'text-ink' : 'text-ink-muted hover:text-ink'
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`h-px transition-all duration-300 ${active ? 'w-6 bg-ink' : 'w-3 bg-line-strong group-hover:w-5 group-hover:bg-ink'}`}
                    />
                    {item.label}
                  </Link>
                </li>
              )
            })}
            <li>
              <ResumeLink className="group flex min-h-10 items-center gap-3 text-[1.0625rem] text-ink-muted transition-colors hover:text-ink">
                <span
                  aria-hidden="true"
                  className="h-px w-3 bg-line-strong transition-all duration-300 group-hover:w-5 group-hover:bg-ink"
                />
                Resume
              </ResumeLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className="space-y-5 pt-10 text-sm">
        <Availability />
        <div className="space-y-1 text-ink-muted">
          {site.location && <p>{site.location}</p>}
          <LocalTime />
        </div>
        <ul className="space-y-1.5">
          <li>
            <EmailLink className="link-underline break-all" />
          </li>
          <li>
            <LinkedInLink className="link-underline inline-flex items-center gap-1" />
          </li>
          {site.otherLinks.length > 0 && (
            <li className="flex flex-col gap-1.5">
              <OtherLinks className="link-underline inline-flex items-center gap-1" />
            </li>
          )}
        </ul>
      </div>
    </aside>
  )
}
