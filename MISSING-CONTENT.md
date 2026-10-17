# Missing content, assets and configuration

The site builds and works today, but it is filled with clearly labelled placeholders. Nothing below was invented: every personal detail, project and outcome needs to come from you. Items are in rough priority order for a hiring manager.

## 1. Personal details (`src/content/site.ts`)

| Field | Currently | What to add |
| --- | --- | --- |
| `name` | Almedina Termkolli (set) | Done |
| `location` | `[City, Country]` | City and country, or `null` to hide |
| `email` | `null` (shows "Email not added yet") | Your contact email. Turns on every mailto link and the "Copy email" button |
| `linkedin` | `null` | Full `https://www.linkedin.com/in/…` URL |
| `resume` | `null` | Put your PDF in `public/` and set its file name, e.g. `resume.pdf` |
| `headline` | Placeholder positioning line | One sentence in your own voice. `*asterisks*` set words in italics |
| `intro` | Placeholder | Two sentences: what you design, for whom, what you care about |
| `availability` | "Open to remote and international product design roles" | Confirm or rewrite, or `null` to hide |
| `timeZone` | `null` | Optional, e.g. `'Europe/Lisbon'`, to show your local time |
| `otherLinks` | empty | Optional: Dribbble, Behance, Read.cv, etc. Real URLs only |
| `portrait` | placeholder | Photo in `public/images/`, e.g. `images/portrait.webp`, 4:5 crop |
| `description` | Generic | One-sentence summary for search results and link previews |

## 2. Case studies (`src/content/projects.ts`)

The three projects are **samples** that explain what to write in each section. For each real project (3–5 is a good number), supply:

- Title, client or company (or "Confidential client"), one-sentence summary, project type, year
- Your role, team, timeline, platform, tools
- Problem and context, your responsibilities, research and insights, key decisions and trade-offs, final solution, outcomes you can verify, lessons learned
- A confidentiality note if the work is under NDA
- Images: a thumbnail (16:10), a hero (16:9), and gallery or decision images. WebP, about 2000px wide for full-width and 1200px for grid images
- Alt text for every image

Then delete the sample projects, or remove `sample: true` once rewritten.

## 3. About and experience (`src/content/about.ts`)

- Homepage preview paragraph and About bio (three short paragraphs)
- Three working principles in your own words
- Work history: company, job title, dates, location, one or two sentences each
- Capabilities: the starter list is generic product-design skills. Keep only what applies to you
- Tools you actually use (replace `[Tool]`)
- Education or courses
- Set `sample: false` and remove `sample: true` from experience entries when done

## 4. Configuration

| Item | Where | Notes |
| --- | --- | --- |
| GitHub repository | github.com | Not created yet. See README step 3 |
| GitHub Pages source | Settings → Pages | Must be set to "GitHub Actions" |
| Site URL | `site.url` | Fill in after the first deploy. Enables canonical, `og:url` and `sitemap.xml` |
| Share image | `site.ogImage` | Optional 1200×630 image in `public/`. Needs `site.url` |
| Contact form | `site.contactFormEndpoint` | Optional. Needs a form service such as Formspree. Without it, no form is shown and email is the contact method |
| Custom domain | `public/CNAME` | Optional. See README step 8 |
| Favicon | `public/favicon.svg` | A neutral placeholder mark. Replace with your own monogram if you have one |

## 5. Not needed

No API keys, secrets, database, paid hosting or server are required.
