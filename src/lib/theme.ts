export type Theme = 'light' | 'dark'

const KEY = 'theme'

/** The theme chosen earlier, or the one the device prefers. */
export function preferredTheme(): Theme {
  try {
    const saved = localStorage.getItem(KEY)
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    /* storage can be blocked; fall back to the device setting */
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

/** Applies a theme to the page. Colours fade over a moment instead of snapping. */
export function applyTheme(theme: Theme, { remember = false, animate = false } = {}) {
  const root = document.documentElement
  if (animate) {
    root.classList.add('theme-switching')
    window.setTimeout(() => root.classList.remove('theme-switching'), 450)
  }
  root.dataset.theme = theme
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#131211' : '#f5f3ef')
  if (remember) {
    try {
      localStorage.setItem(KEY, theme)
    } catch {
      /* ignore */
    }
  }
}
