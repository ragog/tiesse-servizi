# Tiesse Servizi — Project Guide for Claude

## Who you're working with
The person using this project may be non-technical. Explain things simply, avoid jargon, and always confirm before deploying. If they describe a change in plain language, figure out which file to edit and do it.

## What this project is
A bilingual (Italian/English) static website for Tiesse Servizi, a facility & executive management company. Built with Astro + Tailwind CSS. Deployed automatically to Netlify when changes are pushed to `main` on GitHub (`ragog/tiesse-servizi`).

## Tech stack
- **Astro** — static site framework
- **Tailwind CSS** — styling
- **Netlify** — hosting, auto-deploys on push to `main`
- **GitHub** — source repository

## Where content lives

### Text content (translations)
- Italian: `src/i18n/it.ts`
- English: `src/i18n/en.ts`
- These files contain all text for the homepage sections: hero, chi siamo, missione, servizi tecnici, invest in italy, garanzie, sostenibilità, news, partners, contact.
- To change any text on the homepage, edit the relevant key in these files.

### Homepage layout
- `src/layouts/MainLayout.astro` — all homepage sections are here, pulling text from i18n files.

### Projects
- Italian: `src/content/projects/it/*.md`
- English: `src/content/projects/en/*.md`
- Each project is a markdown file with frontmatter (title, description, location, year, category, coverImage, specs) and a body with project details.
- Project cover images: `src/content/projects/_images/{project-slug}/cover.webp`

### Navigation & base layout
- `src/layouts/BaseLayout.astro` — header, footer, navigation

### Pages
- `src/pages/index.astro` — Italian homepage
- `src/pages/en.astro` — English homepage
- `src/pages/progetti.astro` — Italian projects list
- `src/pages/en/projects.astro` — English projects list
- Dynamic project detail pages are generated from the content collections

### Static assets
- `public/` — logo, general images, favicon

## Common tasks

### Change text on the homepage
Edit `src/i18n/it.ts` (and `src/i18n/en.ts` for the English version). Find the relevant section key and update the string.

### Add a new project
1. Create `src/content/projects/it/{slug}.md` with the frontmatter and content
2. Create `src/content/projects/en/{slug}.md` for the English version
3. Add a cover image at `src/content/projects/_images/{slug}/cover.webp`

### Preview changes locally
Run `npm run dev` — the site will be available at `http://localhost:4321`

### Deploy
Use the `/deploy` command. It will commit all changes, push to GitHub, and confirm the deploy went live on Netlify.

## Deploy workflow
1. Make changes
2. (Optional) Preview with `npm run dev`
3. Run `/deploy` — describe what changed and Claude will write the commit message

## Important rules
- Always work on the `main` branch directly
- The `.env` file contains the Netlify API key — never commit it (it's in `.gitignore`)
- Both Italian and English versions should be kept in sync when changing content
- When adding images, use `.webp` format for performance
