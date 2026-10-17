import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { site } from '../content/site'
import { EmailLink, LinkedInLink, ResumeLink } from './ContactLinks'
import { Reveal } from './Reveal'

/**
 * Closing call to action used on the homepage, About and case studies.
 * Pages end their last section with bottom spacing, so this only adds its own below;
 * pass `className="pt-section"` where nothing above provides it.
 */
export function ContactSection({ className = '' }: { className?: string }) {
  return (
    <section aria-labelledby="contact-cta-heading" className={`container-page pb-section ${className}`}>
      <Reveal
        variant="panel"
        className="rounded-lg bg-ink px-6 py-14 text-paper [&_:focus-visible]:outline-paper sm:px-12 lg:px-16 lg:py-20"
      >
        <Reveal variant="stagger" delay={200}>
          <p className="eyebrow text-paper/70">Contact</p>
          <h2 id="contact-cta-heading" className="mt-4 max-w-[18ch] font-display text-title text-balance">
            Hiring for a product design role? <em>Let&rsquo;s talk.</em>
          </h2>
          <p className="mt-6 max-w-prose text-lede text-paper/75">
            {site.availability ? `${site.availability}.` : ''} The quickest way to reach me is by email.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            {site.email ? (
              <EmailLink className="btn bg-paper text-ink hover:bg-paper/85">Email {site.email}</EmailLink>
            ) : (
              <span className="inline-flex items-center rounded-sm border border-dashed border-paper/40 px-2 py-0.5 text-sm text-paper/75">
                Email not added yet
              </span>
            )}
            <LinkedInLink showPlaceholder={false} className="btn border border-paper/30 hover:bg-paper/10" />
            <ResumeLink showPlaceholder={false} className="btn border border-paper/30 hover:bg-paper/10" />
            <Link to="/contact" className="btn text-paper underline-offset-4 hover:underline">
              All contact details <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </Reveal>
      </Reveal>
    </section>
  )
}
