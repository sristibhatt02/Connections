# Sristi’s personal portfolio

An Astro static portfolio focused on work experience and education. Includes the supplied portrait, two research case studies, publication, grouped skills and a dark-first theme with an optional warm light palette. All substantive content is visible without JavaScript. Experience cards animate once on entry and provide hover feedback; reduced-motion preferences disable movement. The sticky header reveals Sristi’s name after scrolling. No backend or account is required.

## Run locally

Use Node.js 22 or later.

```sh
npm install
npm run dev
```

Open http://localhost:4321. To check the production output:

```sh
npm run build
npm run preview
```

## Edit content

- `src/data/profile.ts`: profile, portrait, contact links, experience, education and grouped skills.
- `src/data/research.ts`: typed case-study records. Each record gets its own static URL.
- `src/pages/index.astro`: home-page structure, introduction, about text and publication.
- `src/styles/global.css`: responsive styles and both themes.

The source briefs remain in the project root. Do not add unsupported results, clinical claims or planned projects to selected work. The contact link uses LinkedIn until an approved email is provided. The supplied portrait is imported via the profile and served as responsive WebP images in a rounded CSS frame. Add a CV link only when an approved PDF is supplied.

## GitHub Pages

The included `.github/workflows/deploy.yml` builds and deploys on pushes to `main`. Repository: https://github.com/sristibhatt02/Connections. Site: https://sristibhatt02.github.io/Connections/. Select **Settings → Pages → Source → GitHub Actions**. The workflow derives the site's origin and repository subpath from GitHub Pages. It works for both user sites and project sites. Pushes to main trigger deployment once GitHub Pages is configured to use GitHub Actions.

For a manual subpath build:

```sh
SITE_URL=https://example.github.io PUBLIC_SITE_URL=https://example.github.io BASE_PATH=/repository-name/ npm run build
```

Local builds carry `noindex`. Setting `PUBLIC_SITE_URL` enables canonical links and indexing for a reviewed production build. A sitemap is generated using the final origin and base path when `PUBLIC_SITE_URL` is set.

See `HANDOFF.private.md` for content approvals and remaining review. Remove the handoff and original briefs from any public repository if they should remain private; these files are not included in the built website.
