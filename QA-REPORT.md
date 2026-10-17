# Quality assurance report

Tested on 17 October 2026 in a headless Chromium browser (Playwright) against production builds served the way GitHub Pages serves them: under a `/portfolio/` subpath, with `404.html` returned for unknown paths. **The site has not been deployed to GitHub**, because no repository exists yet. Everything below was run locally.

## Summary

| Area | Result |
| --- | --- |
| `npm ci` from a clean copy | Pass, 0 vulnerabilities reported |
| `npm run lint` (ESLint + typescript-eslint + react-hooks) | Pass, 0 problems |
| `npm run typecheck` / `tsc -b` | Pass |
| `npm run build` with `BASE_PATH=/portfolio/` (what the GitHub Action does) | Pass. JS 97.5 KB gzipped, CSS 7.9 KB gzipped |
| `npm run build` with the default relative base | Pass, and the build loads with no errors from a different folder |
| GitHub Actions workflow | Passes `actionlint` (syntax, expressions, action inputs). Not run on GitHub |
| Automated browser checks | 101 checks; all pass except one false positive (see below) |
| axe-core accessibility audit (WCAG 2.0/2.1/2.2 A and AA, plus best practices) | 0 violations on all 5 page types, at 375px and 1440px, with and without the contact form and real images |

## What was tested

**Layout at 375, 768, 1024 and 1440px.** Every route (home, all three case studies, About, Contact, and an unknown slug) was checked for horizontal overflow, a single `h1`, empty links, broken images and text below 12px. No issues were found. Full-page screenshots were reviewed by eye for spacing, alignment and typography.

**Navigation and routing**
- Sidebar links work and mark the current page with `aria-current`.
- Project cards open their case study when either the title or the image is clicked. Each card uses one real link, with no clickable `div`s.
- "All work", "Read next" and "On this page" all work. "On this page" scrolls to the section, highlights it, and keeps the URL unchanged.
- New pages open at the top of the page, and focus moves to the page content.
- Refreshing a case-study URL works. A path-style URL (`/portfolio/work/…`) redirects to the matching hash route.
- An unknown slug shows the 404 page.
- Every page has a unique title.

**Mobile menu.** The menu opens with `aria-expanded="true"`, focus moves to the first link, the page behind becomes inert and stops scrolling, Escape closes it and returns focus to the button, choosing a link navigates and closes it, and widening the window to desktop closes it.

**Keyboard.** The first Tab reaches "Skip to content", which focuses the main content without changing the route. Tab order is logical, and every focused control shows a visible outline.

**Configured links (tested in a copy with sample test values).** The email link uses `mailto:`. LinkedIn opens in a new tab with `rel="noopener noreferrer"`. The resume link resolves under the base path and the PDF is served with a 200 status. "Copy email" copies the address. The local time displays correctly.

**Content safety checks**
- With no email, LinkedIn or resume configured, the site shows "not added yet" labels instead of links, so nothing points to a missing file.
- A missing image referenced in the content **fails the build** with a message naming the file and project.
- If an image fails to load at runtime anyway, a labelled placeholder appears in its place.

**Image viewer (lightbox).** It opens on click, the arrow keys move between images, Escape closes it, and focus returns to the image. Placeholders cannot be opened.

**Contact form (tested with a simulated form service).**
- An empty submit flags three fields, links each error with `aria-describedby`, focuses the first invalid field, and sends nothing.
- An invalid email address shows a specific error message.
- A valid submit shows "Sending…" and reports success only after the service confirms.
- A failed send (server error) says so and offers the email address instead.
- With no endpoint configured, the form is not shown at all.

**Reduced motion.** With `prefers-reduced-motion: reduce`, the page-entry animation and transitions are disabled.

**SEO output.** The build writes the title, description and Open Graph tags into `index.html`, and creates `robots.txt`. With `site.url` set, it also adds a canonical link, `og:url` and `sitemap.xml`.

## Fixed during QA

- The mobile menu panel was invisible because the header's blur effect clipped it. Fixed by moving the panel outside the header.
- A doubled border between the Experience heading and the timeline was removed.
- The case-study section spacing was too loose and has been tightened.
- On the Contact page, the details column stretched to the form's height and has been fixed.
- The image viewer background is now solid.
- Contact copy no longer implies freelance availability, which was never stated.

## Known limitations and remaining items

- **False positive in the focus check.** The automated focus test flagged one step where focus left the page for the browser's own interface. This is expected browser behaviour, not a missing outline.
- **Reference site.** perrene.framer.website could only be read as text (its links, headings and section order); the browser could not load it through this environment's network. The visual design follows your written direction (minimal, editorial, sidebar navigation) rather than a pixel-level inspection of the reference.
- **Hash routing and SEO.** Search engines and link previews (LinkedIn, Slack) see the site-wide title and description from `index.html`, not each page's. This is the standard trade-off for reliable routing on GitHub Pages.
- **Not tested.** The live GitHub Pages deployment, Safari and Firefox (only Chromium was available), real screen readers (axe and keyboard checks only), a real form service, and Lighthouse performance scores.
- **GitHub Action versions.** The workflow uses `checkout@v5`, `setup-node@v5`, `configure-pages@v5`, `upload-pages-artifact@v4` and `deploy-pages@v4`. These could not be checked against GitHub from this environment. If GitHub shows a deprecation warning, update the major version as the README describes.
- **Content.** Everything personal is still a placeholder. See [MISSING-CONTENT.md](./MISSING-CONTENT.md).
