# Product design portfolio

A fast, static portfolio site for a product designer, built with React, TypeScript, Vite and Tailwind CSS. It is designed to be hosted for free on GitHub Pages and maintained without a backend, database or paid service.

- **Pages:** Home, case studies (`/#/work/<slug>`), About, Contact, plus a "page not found" page.
- **Content lives in four files** in `src/content/`. You never need to touch the components to add or edit work.
- **Every push to `main` deploys automatically** through GitHub Actions.

> The site currently contains clearly marked **sample content** and **image placeholders**. See [MISSING-CONTENT.md](./MISSING-CONTENT.md) for everything you need to supply before publishing.

---

## Contents

1. [What you need](#1-what-you-need)
2. [Run it on your computer](#2-run-it-on-your-computer)
3. [Put it on GitHub](#3-put-it-on-github)
4. [Turn on GitHub Pages and deploy for the first time](#4-turn-on-github-pages-and-deploy-for-the-first-time)
5. [Find your public URL](#5-find-your-public-url)
6. [Update your content](#6-update-your-content)
7. [Publish changes](#7-publish-changes)
8. [Connect a custom domain (optional)](#8-connect-a-custom-domain-optional)
9. [Troubleshooting](#9-troubleshooting)
10. [How the project is organised](#10-how-the-project-is-organised)

---

## 1. What you need

- A free [GitHub](https://github.com) account.
- [Node.js](https://nodejs.org) **version 20.19 or newer** (the "LTS" download is fine). Check with `node -v` in a terminal.
- [Git](https://git-scm.com/downloads), or [GitHub Desktop](https://desktop.github.com) if you prefer not to use the command line.
- A code editor such as [VS Code](https://code.visualstudio.com).

## 2. Run it on your computer

Open a terminal in this folder and run:

```bash
npm install      # first time only: downloads the libraries the site uses
npm run dev      # starts a preview at http://localhost:5173
```

Open the address it prints. The page reloads as you save changes. Press `Ctrl + C` to stop.

Other commands:

| Command | What it does |
| --- | --- |
| `npm run build` | Type-checks the code, checks your content, and builds the final site into `dist/` |
| `npm run preview` | Serves the built `dist/` folder so you can check it before publishing |
| `npm run lint` | Checks the code for common mistakes |
| `npm run typecheck` | Checks TypeScript types only |

## 3. Put it on GitHub

### Create the repository

1. On GitHub, click **+** (top right) → **New repository**.
2. Name it, for example `portfolio`. The name becomes part of your URL (see [step 5](#5-find-your-public-url)).
3. Choose **Public**. GitHub Pages is free for public repositories.
4. Leave "Add a README", ".gitignore" and "license" **unticked**, because this project already has them.
5. Click **Create repository**.

### Upload the code

**Option A: command line.** In a terminal in this folder (replace `YOUR-USERNAME` and `portfolio`):

```bash
git init
git add .
git commit -m "First version of my portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```

**Option B: GitHub Desktop.** Choose **File → Add local repository**, pick this folder, accept the prompt to create a repository, commit, then click **Publish repository** and select the repository you created.

`node_modules/` and `dist/` are deliberately left out by `.gitignore`. GitHub Actions installs and builds everything itself.

## 4. Turn on GitHub Pages and deploy for the first time

1. In your repository on GitHub, open **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**. (Not "Deploy from a branch".)
3. Open the **Actions** tab. A run called **Deploy to GitHub Pages** starts on every push to `main`. If you pushed before changing the setting, open the workflow and click **Run workflow** to start it.
4. Wait for both jobs, **build** and **deploy**, to show a green tick. This usually takes one to two minutes.

The workflow file is `.github/workflows/deploy.yml`. It installs dependencies, lints, type-checks, checks your content (missing images or resume fail the build rather than going live broken), builds, and publishes. It needs no secrets.

## 5. Find your public URL

The address follows this pattern:

| Repository name | Public URL |
| --- | --- |
| `portfolio` (any name) | `https://YOUR-USERNAME.github.io/portfolio/` |
| `YOUR-USERNAME.github.io` | `https://YOUR-USERNAME.github.io/` |
| Custom domain set up | `https://www.yourdomain.com/` |

To see the exact URL: **Settings → Pages** shows "Your site is live at …", and each successful run in the **Actions** tab shows the link under the **deploy** job.

Pages use hash links, for example `https://YOUR-USERNAME.github.io/portfolio/#/work/my-project`. This is what makes refreshing and sharing case-study links work on GitHub Pages without any server setup. If someone types a path without the `#`, the site redirects them to the right page.

Once you know your URL, put it in `url` in `src/content/site.ts`. That turns on the canonical link, Open Graph URL and `sitemap.xml`.

## 6. Update your content

All content is in `src/content/`. Values in `[square brackets]` are placeholders.

### Your details: `src/content/site.ts`

Name, role, location, headline, intro, email, LinkedIn, resume, time zone and site URL. Anything left as `null` is hidden or shown as "not added yet", so the site never links to something that doesn't exist.

- **Headline emphasis:** wrap words in asterisks to set them in italics, e.g. `'Designing *clear, considered* products'`.
- **Local time:** set `timeZone` to a time zone name such as `'Europe/Berlin'` to show your local time, which helps remote and international recruiters.

### Your resume

1. Save your resume as a PDF, for example `resume.pdf`.
2. Put it in the `public/` folder.
3. In `site.ts`, set `resume: 'resume.pdf'`.

The links in the sidebar, menu, footer, About and Contact pages appear automatically. You can also use a full `https://` link to a hosted file.

### About and experience: `src/content/about.ts`

Bio paragraphs, homepage preview, working principles, capabilities, tools, education and work history. When you've replaced the sample text, set `sample: false` (and remove `sample: true` from each experience entry) to hide the "Sample content" tags.

### Case studies: `src/content/projects.ts`

Each project is one object in the `projects` list. **The order of the list is the order on the site.**

- **Add:** copy an existing project, change the `slug` (lowercase-with-dashes, it becomes the URL), and edit the text.
- **Reorder:** move the object up or down the list.
- **Hide without deleting:** add `draft: true`.
- **Remove from the homepage only:** set `featured: false` (it stays reachable by its link). If no project is featured, all of them are shown.
- **Remove:** delete the object.

Case studies are built from `sections`, which render **in the order you list them**, so each story can have its own structure. Section kinds:

| `kind` | Use it for | Fields |
| --- | --- | --- |
| `text` | Context, problem, approach, reflection | `body`: list of paragraphs |
| `list` | Responsibilities, constraints | `intro?`, `items` |
| `insights` | Research findings | `intro?`, `items: { title, detail }` |
| `decisions` | Design decisions and trade-offs | `intro?`, `items: { title, rationale, media? }` |
| `gallery` | Final screens, process images | `intro?`, `layout: 'grid' or 'stack'`, `images` |
| `outcomes` | Results | `intro?`, `items: { value?, detail }` |

Every section needs a unique `id` and a `heading`, and can have a short `label` (shown in the "On this page" list). Use `confidentiality` on a project to show an NDA note at the top.

Only add outcomes you can verify. Qualitative outcomes are fine when numbers aren't shareable.

### Images

1. Export images as **WebP** (or JPG/PNG), about **2000px wide** for full-width images and **1200px** for grid images. Aim for under 300 KB each.
2. Put them in `public/images/projects/<your-project-slug>/`. Placeholders on the site show a suggested file path.
3. Reference them in `projects.ts` without `public/`:

```ts
hero: {
  src: 'images/projects/my-project/hero.webp',
  alt: 'Redesigned dashboard showing the new filters panel',
  width: 2000,
  height: 1125,
  aspect: '16 / 9',
},
```

- `alt` describes the image for people using screen readers. Make it specific.
- `width` and `height` are the image file's pixel size. They stop the page jumping while images load.
- `aspect` controls the crop shape (`'16 / 9'`, `'4 / 3'`, `'1 / 1'`, `'3 / 4'` …).
- Optional `srcSet: [{ src: 'images/…/hero-1200.webp', width: 1200 }, …]` lets browsers download a smaller file on phones.
- Images that are real (have a `src`) in a gallery open in a full-size viewer when clicked.

Your portrait goes in `site.portrait` the same way, for example `src: 'images/portrait.webp'`.

**The build checks every image path and the resume path.** If a file is missing, `npm run build` (and the GitHub Action) stops with a message saying which file and where it's referenced, so a broken image never goes live.

### Social sharing image (optional)

Add a 1200×630 image to `public/` (e.g. `og-image.png`), set `ogImage: 'og-image.png'` and set `url`. Sites like LinkedIn will show it when your link is shared.

### Contact form (optional)

By default there is no form; visitors use your email link. GitHub Pages can't send email by itself, so a form needs a form service. To add one:

1. Create a free form on a service such as [Formspree](https://formspree.io) and copy its endpoint URL (e.g. `https://formspree.io/f/abcdwxyz`).
2. Set `contactFormEndpoint` in `site.ts` to that URL.

The form validates input, shows "Sending…", and only shows a success message once the service confirms it received the message. If sending fails, it says so and offers your email address.

### Colours and fonts

Design tokens (colours, fonts, spacing, type sizes, radii) are at the top of `src/styles/index.css`. Change them there and the whole site follows. The fonts (Instrument Serif and Inter Tight) are bundled with the site, so no external font service is used.

## 7. Publish changes

Every push to `main` rebuilds and redeploys the site.

```bash
npm run build                 # optional: check locally first
git add .
git commit -m "Add new case study"
git push
```

With GitHub Desktop: commit, then **Push origin**. You can also edit files directly on github.com (pencil icon) and commit; that triggers a deploy too.

Watch progress in the **Actions** tab. Changes are usually live a minute after the run turns green. If you don't see them, hard-refresh the page (`Ctrl/Cmd + Shift + R`).

## 8. Connect a custom domain (optional)

1. Buy a domain from any registrar.
2. Create a file `public/CNAME` containing only your domain, e.g. `www.yourdomain.com`, and push it. The workflow detects this file and builds the site for the domain root.
3. At your registrar, add DNS records as described in GitHub's guide: [Managing a custom domain for your GitHub Pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site). For `www`, that's a `CNAME` record pointing to `YOUR-USERNAME.github.io`.
4. In **Settings → Pages → Custom domain**, enter the domain, save, and tick **Enforce HTTPS** once it becomes available (DNS can take up to a day).
5. Update `url` in `site.ts` to the new address.

To go back to the default address, delete `public/CNAME` and remove the domain in Settings → Pages.

## 9. Troubleshooting

**The site is a blank white page, or styles are missing.**
Usually a wrong base path. Open the browser's developer tools (F12) → Console. Errors about `…/assets/index-….js` returning 404 mean files are being requested from the wrong folder.
- Deploy through the included GitHub Action rather than uploading `dist/` by hand: it sets the base path from the repository name automatically.
- If you renamed the repository, push any change (or click **Run workflow**) so it rebuilds with the new name.
- If you use a custom domain, make sure `public/CNAME` exists so the site builds for the root.
- Locally, the default base `./` works from any folder. To force a specific path, set `BASE_PATH`, e.g. `BASE_PATH=/portfolio/ npm run build`, or change the fallback in `vite.config.ts`.

**I see the README or a 404 page instead of my site.**
**Settings → Pages → Source** must be **GitHub Actions**. "Deploy from a branch" serves the raw source files instead of the built site.

**A case-study link shows "This page doesn't exist".**
The `slug` in `projects.ts` doesn't match the link, the project has `draft: true`, or the slug contains capitals or spaces. Slugs must be lowercase letters, numbers and dashes.

**Refreshing a page or opening a shared link gives a GitHub 404.**
Links should contain `/#/`, e.g. `…/portfolio/#/about`. Links without it are redirected automatically by the generated `404.html`. If that doesn't happen, check the deploy used the GitHub Action.

**Images don't show.**
Paths in `projects.ts` are relative to `public/` and must not start with `/` or `public/`. File names are case-sensitive on GitHub (`Hero.webp` is not `hero.webp`). The build tells you about missing files; read the error in the Actions log.

**The GitHub Action fails.**
Open the failed run in the **Actions** tab and click the red step to read the error.
- *Install dependencies* fails: make sure `package-lock.json` is committed. Run `npm install` locally and commit the updated lock file.
- *Lint* or *Type-check and build* fails: run `npm run lint` and `npm run build` locally. The message names the file and line.
- *Portfolio content check found … problem(s)*: a file referenced in your content is missing, or two projects share a slug. The message lists each one.
- *Deploy* fails with a permissions or environment error: check **Settings → Pages → Source** is **GitHub Actions**, and under **Settings → Environments → github-pages** that `main` is allowed to deploy.
- A warning that an action version is outdated: update the version number in `.github/workflows/deploy.yml` (for example `actions/checkout@v5` → the newer major version GitHub suggests).

**My changes aren't showing.**
Check the latest Actions run finished green, then hard-refresh. Browsers and GitHub's CDN can cache for a few minutes.

## 10. How the project is organised

```
├── .github/workflows/deploy.yml   Builds and deploys to GitHub Pages
├── build/portfolio-plugin.ts      Content check, page meta tags, robots.txt, sitemap.xml, 404 redirect
├── public/                        Copied as-is: images, resume, favicon, CNAME
│   └── images/projects/<slug>/    Project images
├── src/
│   ├── content/                   ← Edit these to update the site
│   │   ├── site.ts                Your details and links
│   │   ├── about.ts               Bio, principles, capabilities, experience
│   │   ├── projects.ts            Case studies
│   │   └── types.ts               The shape of the content (with explanations)
│   ├── components/                Reusable UI (navigation, cards, sections, gallery, footer…)
│   ├── pages/                     Home, CaseStudy, About, Contact, NotFound
│   ├── lib/                       Small helpers (asset paths, page titles, scrolling)
│   ├── styles/index.css           Design tokens and base styles
│   ├── App.tsx                    Routes
│   └── main.tsx                   Entry point
├── index.html
└── vite.config.ts                 Base path setting
```

**Technical notes**

- React 19, React Router 7 (`HashRouter`), Vite 8, Tailwind CSS 4, TypeScript 5.9, Lucide icons. No server, database or runtime environment variables.
- Hash routing is the most reliable option on GitHub Pages. The trade-off is that search engines and link previews see one page; each page still sets its own title and description in the browser, and the site-wide title, description and Open Graph tags are written into `index.html` at build time.
- Accessibility: semantic landmarks, one `h1` per page, skip link, visible focus styles, keyboard-operable menu and image viewer, `aria-current` on navigation, labelled form fields with linked error messages, and `prefers-reduced-motion` support.
- Motion: no animation library. Timing and easing tokens (`--duration-*`, `--ease-*`) and every effect live in `src/styles/index.css`; `src/lib/motion.ts` runs one shared scroll loop and one reveal observer. Wrap content in `<Reveal>` to fade it in on scroll, pass `parallax="shift"` or `"zoom"` to `<Media>` for scroll-linked depth (desktop only), and use `<SplitHeading>` for word-by-word titles. With `prefers-reduced-motion` on, nothing is hidden and nothing moves with scroll.
