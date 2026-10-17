import { ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { site } from '../content/site'
import { assetUrl } from '../lib/assets'

interface LinkProps {
  className?: string
  children?: ReactNode
  /** Show a muted "not added yet" note when the link is not configured. */
  showPlaceholder?: boolean
}

const external = { target: '_blank', rel: 'noopener noreferrer' } as const

function Missing({ label, show }: { label: string; show: boolean }) {
  return show ? <span className="placeholder-chip">{label} not added yet</span> : null
}

export function EmailLink({ className = '', children, showPlaceholder = true }: LinkProps) {
  if (!site.email) return <Missing label="Email" show={showPlaceholder} />
  return (
    <a href={`mailto:${site.email}`} className={className}>
      {children ?? site.email}
    </a>
  )
}

export function LinkedInLink({ className = '', children, showPlaceholder = true }: LinkProps) {
  if (!site.linkedin) return <Missing label="LinkedIn" show={showPlaceholder} />
  return (
    <a href={site.linkedin} {...external} className={className}>
      {children ?? 'LinkedIn'}
      <ArrowUpRight aria-hidden="true" className="inline size-[1em] shrink-0" strokeWidth={1.75} />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  )
}

export function ResumeLink({ className = '', children, showPlaceholder = true }: LinkProps) {
  if (!site.resume) return <Missing label="Resume" show={showPlaceholder} />
  const isPdf = site.resume.toLowerCase().endsWith('.pdf')
  return (
    <a href={assetUrl(site.resume)} {...external} className={className}>
      {children ?? 'Resume'}
      <ArrowUpRight aria-hidden="true" className="inline size-[1em] shrink-0" strokeWidth={1.75} />
      <span className="sr-only">{isPdf ? ' (PDF, opens in a new tab)' : ' (opens in a new tab)'}</span>
    </a>
  )
}

export function OtherLinks({ className = '' }: { className?: string }) {
  return site.otherLinks.map((link) => (
    <a key={link.href} href={link.href} {...external} className={className}>
      {link.label}
      <ArrowUpRight aria-hidden="true" className="inline size-[1em] shrink-0" strokeWidth={1.75} />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  ))
}
