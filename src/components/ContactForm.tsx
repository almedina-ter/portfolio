import { useRef, useState, type FormEvent } from 'react'
import { site } from '../content/site'
import { EmailLink } from './ContactLinks'

type Field = 'name' | 'email' | 'message'
type Errors = Partial<Record<Field, string>>
type Status = 'idle' | 'sending' | 'sent' | 'error'

function validate(data: FormData): Errors {
  const errors: Errors = {}
  const name = String(data.get('name') ?? '').trim()
  const email = String(data.get('email') ?? '').trim()
  const message = String(data.get('message') ?? '').trim()
  if (!name) errors.name = 'Enter your name.'
  if (!email) errors.email = 'Enter your email address so I can reply.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Enter an email address in the format name@example.com.'
  if (message.length < 10) errors.message = 'Write a message of at least 10 characters.'
  return errors
}

/**
 * Sends to the form service in `site.contactFormEndpoint` (e.g. Formspree).
 * Only reports success when the service confirms it. Renders nothing if no endpoint is configured.
 */
export function ContactForm() {
  const endpoint = site.contactFormEndpoint
  const formRef = useRef<HTMLFormElement>(null)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')

  if (!endpoint) return null

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const found = validate(data)
    setErrors(found)
    const firstInvalid = (Object.keys(found) as Field[])[0]
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus()
      return
    }
    if (data.get('company_website')) return // spam trap filled in by bots

    setStatus('sending')
    try {
      const response = await fetch(endpoint!, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
      if (!response.ok) throw new Error(`Form service responded ${response.status}`)
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  const fieldClass = (field: Field) =>
    `mt-2 block w-full rounded-md border bg-paper px-4 py-3 text-base text-ink placeholder:text-ink-subtle focus-visible:border-ink ${
      errors[field] ? 'border-accent' : 'border-line-strong'
    }`

  const describedBy = (field: Field) => (errors[field] ? `${field}-error` : undefined)

  return (
    <form ref={formRef} noValidate onSubmit={onSubmit} aria-labelledby="contact-form-heading" className="space-y-6">
      <h2 id="contact-form-heading" className="font-display text-heading">
        Send a message
      </h2>
      {(['name', 'email'] as const).map((field) => (
        <div key={field}>
          <label htmlFor={field} className="text-sm font-medium">
            {field === 'name' ? 'Your name' : 'Your email'}
          </label>
          <input
            id={field}
            name={field}
            type={field === 'email' ? 'email' : 'text'}
            autoComplete={field === 'email' ? 'email' : 'name'}
            required
            aria-invalid={errors[field] ? true : undefined}
            aria-describedby={describedBy(field)}
            className={fieldClass(field)}
          />
          {errors[field] && (
            <p id={`${field}-error`} className="mt-2 text-sm text-accent">
              {errors[field]}
            </p>
          )}
        </div>
      ))}
      <div>
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={describedBy('message')}
          className={fieldClass('message')}
        />
        {errors.message && (
          <p id="message-error" className="mt-2 text-sm text-accent">
            {errors.message}
          </p>
        )}
      </div>
      <div aria-hidden="true" className="hidden">
        <label htmlFor="company_website">Leave this field empty</label>
        <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" disabled={status === 'sending'} className="btn-primary disabled:opacity-60">
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>
        <p role="status" aria-live="polite" className="text-sm">
          {status === 'sent' && <span className="text-positive">Thanks, your message was sent. I&rsquo;ll reply by email.</span>}
          {status === 'error' && (
            <span className="text-accent">
              Your message could not be sent. Please try again or email me directly: <EmailLink className="link-underline" />
            </span>
          )}
        </p>
      </div>
    </form>
  )
}
