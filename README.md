# PlanoLand — planoland.vercel.app

Marketing site for the PlanoLand landscape design studio (Russian default,
English under `/en/`).

Stack: React 19 + TypeScript + Vite + React Router, Tailwind CSS 4.

## Commands

```bash
npm install        # install dependencies
npm run dev        # local dev server (vite)
npm run build      # production build → dist/
```

## Deploy

Vercel project `planoland`, connected to this GitHub repo — every push to
`master` deploys automatically. `vercel.json` holds the SPA rewrite plus
permanent redirects from old project-codename URLs
(`/portfolio/buxus` → `/portfolio/planting`, etc.).

## Scripts

- `node scripts/generate-sitemap.mjs` — regenerate `public/sitemap.xml`
  (run after adding/removing routes or slugs).
- `node scripts/optimize-images.mjs` / `optimize-galleries.mjs` — build
  optimized webp under `public/images/projects/` from the raw originals in
  `public/images/Project Images/` (raw originals are kept in the repo but
  are not referenced by the site).
- `node scripts/generate-seo-assets.mjs` — regenerate OG/Twitter images.

## Structure

- `src/data/projects.ts` — portfolio records (slugs must match the sitemap).
- `src/data/content.ts` — services, team, principles, blog stubs.
- `src/i18n/useT.ts` — all UI strings (RU source of truth, EN fallback to RU).
- `src/lib/telegram.ts` — contact-form submission via a Cloudflare Worker
  (bot side lives outside this repo).

Images/fonts still hot-linked from `ext.same-assets.com` — self-hosting
them is a known TODO.
