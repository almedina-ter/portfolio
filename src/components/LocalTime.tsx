import { useEffect, useState } from 'react'
import { site } from '../content/site'

function format(timeZone: string) {
  try {
    return new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone, timeZoneName: 'short' }).format(new Date())
  } catch {
    return null
  }
}

/** Shows the designer's local time, useful for remote and international hiring. */
export function LocalTime({ className = '' }: { className?: string }) {
  const timeZone = site.timeZone
  const [now, setNow] = useState(() => (timeZone ? format(timeZone) : null))

  useEffect(() => {
    if (!timeZone) return
    const id = window.setInterval(() => setNow(format(timeZone)), 30_000)
    return () => window.clearInterval(id)
  }, [timeZone])

  if (!now) return null
  return <p className={className}>Local time {now}</p>
}
