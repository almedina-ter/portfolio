# Missing content, assets and configuration

The site builds and works today, but it is filled with clearly labelled placeholders. Nothing below was invented: every personal detail, project and outcome needs to come from you. Items are in rough priority order for a hiring manager.

## 1. Personal details (`src/content/site.ts`)

| Field | Currently | What to add |
| --- | --- | --- |
| `name` | Almedina Termkolli (set) | Done |
| `location` | Prishtine, Kosovo (set) | Done |
| `email` | termkollialmedina01@gmail.com (set) | Done. Turns on every mailto link and the "Copy email" button |
| `linkedin` | linkedin.com/in/almedina-termkolli-a11359230 (set) | Done |
| `resume` | `Almedina-Termkolli-CV.pdf` (set) | Done. To update, replace `public/Almedina-Termkolli-CV.pdf` with a new PDF of the same name |
| `headline` | Placeholder positioning line | One sentence in your own voice. `*asterisks*` set words in italics |
| `intro` | Placeholder | Two sentences: what you design, for whom, what you care about |
| `availability` | "Open to remote and international product design roles" | Confirm or rewrite, or `null` to hide |
| `timeZone` | `null` | Optional, e.g. `'Europe/Lisbon'`, to show your local time |
| `otherLinks` | empty | Optional: Dribbble, Behance, Read.cv, etc. Real URLs only |
| `portrait` | placeholder | Photo in `public/images/`, e.g. `images/portrait.webp`, 4:5 crop |
| `description` | Generic | One-sentence summary for search results and link previews |

## 2. Case studies (`src/content/projects.ts`)

Selected Work shows three project slots, **Project 01 to 03** (role: UI/UX Designer). Their description and timeline are empty, so the cards say "Description coming soon" and the timeline shows a dash. Every case study uses the same structure (`caseStudyStructure()` in the same file), with prompts in [brackets]:

1. Overview and my role
2. Background and problem
3. Research and insights
4. Challenges and opportunities
5. The previous experience and its issues
6. Design process and iterations
7. Final design solutions
8. Screens and mockups
9. Outcomes and results

For each project, supply:

- Title, one-sentence description (`summary`), timeline, and optionally client, project type and year
- The content for each section above. Delete any section you don't need
- A confidentiality note if the work is under NDA
- Images in `public/images/projects/<slug>/`: a card preview (4:3), a hero (16:9), and section images. WebP, about 2000px wide for full-width and 1200px for grid images. The placeholder on the page shows the suggested file name
- Alt text for every image

The older sample projects are hidden with `draft: true` and kept as examples.

## 3. Experience (`src/content/about.ts`)

Nothing in this file is shown on the site right now. The About page and the homepage's "Where I've worked" and "Capabilities" sections have been removed. If you bring them back, update the work history and capabilities first and remove `sample: true` from the experience entries.

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
