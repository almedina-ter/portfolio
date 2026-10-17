import { Link } from 'react-router'
import { ArrowUp } from 'lucide-react'
import { site } from '../content/site'
import { EmailLink, LinkedInLink, OtherLinks, ResumeLink } from './ContactLinks'
import { navItems } from './navigation'

export function Footer() {
  const year = new Date().getFullYear()
  const toTop = () => {
    const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' })
    document.getElementById('main-content')?.focus({ preventScroll: true })
  }

  return (
    <footer className="mt-auto border-t border-line">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl leading-none">{site.name}</p>
          <p className="mt-2 text-sm text-ink-muted">
            {site.role}
            {site.location ? ` · ${site.location}` : ''}
          </p>
        </div>
        <nav aria-label="Footer">
          <h2 className="eyebrow mb-4">Pages</h2>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="link-underline">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <ResumeLink className="link-underline inline-flex items-center gap-1" />
            </li>
          </ul>
        </nav>
        <div>
          <h2 className="eyebrow mb-4">Contact</h2>
          <ul className="space-y-2">
            <li>
              <EmailLink className="link-underline break-all" />
            </li>
            <li>
              <LinkedInLink className="link-underline inline-flex items-center gap-1" />
            </li>
            {site.otherLinks.length > 0 && (
              <li className="flex flex-col gap-2">
                <OtherLinks className="link-underline inline-flex items-center gap-1" />
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="container-page flex flex-wrap items-center justify-between gap-4 border-t border-line py-6 text-sm text-ink-subtle">
        <p>
          © {year} {site.name}
        </p>
        <button type="button" onClick={toTop} className="inline-flex min-h-11 items-center gap-2 hover:text-ink">
          Back to top <ArrowUp aria-hidden="true" className="size-4" />
        </button>
      </div>
    </footer>
  )
}
