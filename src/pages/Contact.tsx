import { site } from '../content/site'
import { EmailLink, LinkedInLink, OtherLinks, ResumeLink } from '../components/ContactLinks'
import { ContactForm } from '../components/ContactForm'
import { CopyEmailButton } from '../components/CopyEmailButton'
import { LocalTime } from '../components/LocalTime'
import { Availability } from '../components/SiteNav'
import { useDocumentMeta } from '../lib/useDocumentMeta'

export function Contact() {
  useDocumentMeta('Contact', `Get in touch with ${site.name} about product design roles and projects.`)

  return (
    <div className="container-page pt-14 pb-section lg:pt-24">
      <p className="eyebrow">Contact</p>
      <h1 className="mt-6 max-w-[16ch] font-display text-display text-balance">
        Let&rsquo;s <em>talk</em>.
      </h1>
      <p className="mt-8 max-w-prose text-lede text-ink-muted">
        I&rsquo;m glad to hear about product design roles and collaborations. Email is the quickest way to reach me.
      </p>
      <Availability className="mt-6" />

      <div className={`mt-16 grid gap-16 ${site.contactFormEndpoint ? 'lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]' : ''}`}>
        <dl className="divide-y divide-line self-start border-y border-line">
          <div className="grid gap-3 py-6 sm:grid-cols-[10rem_minmax(0,1fr)]">
            <dt className="eyebrow pt-1">Email</dt>
            <dd className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <EmailLink className="link-underline text-xl break-all" />
              <CopyEmailButton className="btn-secondary min-h-10 px-4 text-sm" />
            </dd>
          </div>
          <div className="grid gap-3 py-6 sm:grid-cols-[10rem_minmax(0,1fr)]">
            <dt className="eyebrow pt-1">LinkedIn</dt>
            <dd>
              <LinkedInLink className="link-underline inline-flex items-center gap-1 text-xl">View my LinkedIn profile</LinkedInLink>
            </dd>
          </div>
          <div className="grid gap-3 py-6 sm:grid-cols-[10rem_minmax(0,1fr)]">
            <dt className="eyebrow pt-1">Resume</dt>
            <dd>
              <ResumeLink className="link-underline inline-flex items-center gap-1 text-xl">Download my resume</ResumeLink>
            </dd>
          </div>
          {site.otherLinks.length > 0 && (
            <div className="grid gap-3 py-6 sm:grid-cols-[10rem_minmax(0,1fr)]">
              <dt className="eyebrow pt-1">Elsewhere</dt>
              <dd className="flex flex-wrap gap-x-6 gap-y-2 text-xl">
                <OtherLinks className="link-underline inline-flex items-center gap-1" />
              </dd>
            </div>
          )}
          {(site.location || site.timeZone) && (
            <div className="grid gap-3 py-6 sm:grid-cols-[10rem_minmax(0,1fr)]">
              <dt className="eyebrow pt-1">Based in</dt>
              <dd className="text-xl">
                {site.location}
                <LocalTime className="mt-1 text-sm text-ink-subtle" />
              </dd>
            </div>
          )}
        </dl>

        {site.contactFormEndpoint ? (
          <ContactForm />
        ) : (
          import.meta.env.DEV && (
            <p className="placeholder-chip max-w-prose">
              Developer note (hidden on the live site): the contact form is off because no form service is configured. Set
              contactFormEndpoint in src/content/site.ts to turn it on.
            </p>
          )
        )}
      </div>
    </div>
  )
}
