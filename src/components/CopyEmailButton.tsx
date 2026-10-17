import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { site } from '../content/site'

export function CopyEmailButton({ className = '' }: { className?: string }) {
  const [status, setStatus] = useState<'idle' | 'copied' | 'failed'>('idle')
  if (!site.email) return null
  const email = site.email

  async function copy() {
    try {
      await navigator.clipboard.writeText(email)
      setStatus('copied')
    } catch {
      setStatus('failed')
    }
    window.setTimeout(() => setStatus('idle'), 2500)
  }

  return (
    <span className="inline-flex items-center gap-3">
      <button type="button" onClick={copy} className={className}>
        {status === 'copied' ? <Check aria-hidden="true" className="size-4" /> : <Copy aria-hidden="true" className="size-4" />}
        {status === 'copied' ? 'Copied' : 'Copy email'}
      </button>
      <span role="status" className="text-sm text-ink-subtle">
        {status === 'failed' ? 'Copy failed. Select the address instead.' : ''}
        <span className="sr-only">{status === 'copied' ? 'Email address copied to clipboard' : ''}</span>
      </span>
    </span>
  )
}
