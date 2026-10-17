import { useEffect, useRef, useState } from 'react'
import { Outlet, useLocation } from 'react-router'
import { scrollToId } from '../lib/scroll'
import { Footer } from './Footer'
import { MobileNav } from './MobileNav'
import { SiteNav } from './SiteNav'

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const mainRef = useRef<HTMLElement>(null)
  const firstRender = useRef(true)

  // On navigation: start at the top and move focus to the new page for screen readers.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    window.scrollTo(0, 0)
    mainRef.current?.focus({ preventScroll: true })
  }, [pathname])

  return (
    <div className="min-h-dvh lg:grid lg:grid-cols-[var(--sidebar-width)_minmax(0,1fr)]">
      <a
        href="#main-content"
        onClick={(event) => {
          event.preventDefault()
          scrollToId('main-content')
        }}
        className="sr-only z-50 rounded-full bg-ink px-4 py-2 text-paper focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <SiteNav />
      <MobileNav open={menuOpen} onOpenChange={setMenuOpen} />
      <div inert={menuOpen} className="flex min-h-dvh min-w-0 flex-col">
        <main ref={mainRef} id="main-content" tabIndex={-1} className="flex-1 outline-none">
          <div key={pathname} className="page-enter">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
