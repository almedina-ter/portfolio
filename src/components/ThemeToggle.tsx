import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { applyTheme, type Theme } from '../lib/theme'

/** Switches between the light and dark theme. The choice is remembered on this device. */
export function ThemeToggle({ className = '' }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>(() => (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'))

  // Follow the device setting until a choice has been made here.
  useEffect(() => {
    const query = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => {
      let saved: string | null = null
      try {
        saved = localStorage.getItem('theme')
      } catch {
        /* ignore */
      }
      if (saved) return
      const next: Theme = query.matches ? 'dark' : 'light'
      applyTheme(next, { animate: true })
      setTheme(next)
    }
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  const next: Theme = theme === 'dark' ? 'light' : 'dark'
  return (
    <button
      type="button"
      onClick={() => {
        applyTheme(next, { remember: true, animate: true })
        setTheme(next)
      }}
      aria-label={`Switch to ${next} theme`}
      className={`group inline-flex size-11 items-center justify-center rounded-full border border-line-strong text-ink-muted transition-colors duration-(--duration-micro) hover:border-ink hover:text-ink ${className}`}
    >
      {theme === 'dark' ? (
        <Sun aria-hidden="true" className="size-[1.125rem] transition-transform duration-(--duration-ui) ease-(--ease-out) group-hover:rotate-45" />
      ) : (
        <Moon aria-hidden="true" className="size-[1.125rem] transition-transform duration-(--duration-ui) ease-(--ease-out) group-hover:-rotate-12" />
      )}
    </button>
  )
}
