import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu, X } from 'lucide-react'
import { site } from '../content/site'
import { EmailLink, LinkedInLink, ResumeLink } from './ContactLinks'
import { Availability } from './SiteNav'
import { navItems } from './navigation'

interface MobileNavProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

/**
 * Header and full-screen menu for phone and tablet widths.
 * While open, the page behind is made inert (see Layout), Escape closes it,
 * and focus returns to the menu button.
 */
export function MobileNav({ open, onOpenChange }: MobileNavProps) {
  const { pathname } = useLocation()
  const toggleRef = useRef<HTMLButtonElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (!open) return
    firstLinkRef.current?.focus()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onOpenChange(false)
        toggleRef.current?.focus()
      }
    }
    const desktop = window.matchMedia('(min-width: 64rem)')
    const onResize = () => {
      if (desktop.matches) onOpenChange(false)
    }

    document.addEventListener('keydown', onKey)
    desktop.addEventListener('change', onResize)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKey)
      desktop.removeEventListener('change', onResize)
    }
  }, [open, onOpenChange])

  const close = () => onOpenChange(false)

  // The panel sits outside <header>: the header's backdrop blur would otherwise
  // become the containing block for the fixed panel and clip it.
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md lg:hidden">
        <div className="flex h-16 items-center justify-between px-gutter">
          <Link to="/" onClick={close} className="flex min-h-11 min-w-0 flex-col justify-center">
            <span className="truncate font-display text-xl leading-none">{site.name}</span>
            <span className="mt-1 truncate text-xs text-ink-muted">{site.role}</span>
          </Link>
          <button
            ref={toggleRef}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => onOpenChange(!open)}
            className="-mr-2 inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-full px-3 text-[0.9375rem] font-medium"
          >
            {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 top-16 bottom-0 z-30 overflow-y-auto overscroll-contain bg-paper lg:hidden"
      >
        <nav aria-label="Primary" className="flex min-h-full flex-col justify-between px-gutter pt-8 pb-10">
          <ul className="space-y-1">
            {navItems.map((item, index) => {
              const active = item.matches(pathname)
              return (
                <li key={item.to}>
                  <Link
                    ref={index === 0 ? firstLinkRef : undefined}
                    to={item.to}
                    onClick={close}
                    aria-current={active ? 'page' : undefined}
                    className={`flex min-h-14 items-center font-display text-[2.5rem] leading-none ${active ? 'text-ink' : 'text-ink-muted'}`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
            <li>
              <ResumeLink className="flex min-h-14 items-center gap-2 font-display text-[2.5rem] leading-none text-ink-muted">
                Resume
              </ResumeLink>
            </li>
          </ul>
          <div className="mt-12 space-y-4 border-t border-line pt-6 text-sm">
            <Availability />
            <div className="flex flex-col items-start gap-2">
              <EmailLink className="link-underline break-all" />
              <LinkedInLink className="link-underline inline-flex items-center gap-1" />
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
