import { Link } from 'react-router'
import { useDocumentMeta } from '../lib/useDocumentMeta'

export function NotFound() {
  useDocumentMeta('Page not found')
  return (
    <div className="container-page pt-20 pb-section lg:pt-28">
      <p className="eyebrow">404</p>
      <h1 className="mt-6 font-display text-title">This page doesn&rsquo;t exist.</h1>
      <p className="mt-6 max-w-prose text-lede text-ink-muted">The link may be out of date, or the project may have moved.</p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link to="/" className="btn-primary">
          See selected work
        </Link>
        <Link to="/contact" className="btn-secondary">
          Contact
        </Link>
      </div>
    </div>
  )
}
