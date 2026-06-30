# CoatingBazar

## Environment variables

This Vite app reads its order email API URL from an environment variable:

- `VITE_ORDER_EMAIL_API_URL`
- `VITE_ENQUIRE_EMAIL_API_URL`

Local development values are in `/.env.development`.
Production values are in `/.env.production`.

## Render deployment

For Render, set this environment variable on the frontend service before the build runs:

- `VITE_ORDER_EMAIL_API_URL=https://coating-bazaar-api.onrender.com/coatingbazar/api/email/send`
- `VITE_ENQUIRE_EMAIL_API_URL=https://coating-bazaar-api.onrender.com/coatingbazar/api/email/enquire`

Render will use it during the production build.

## SEO layer

The project now includes a reusable SEO helper and hook:

- `src/lib/seo.ts` manages title, description, canonical, robots, Open Graph, Twitter tags, and JSON-LD script tags.
- `src/hooks/useSeo.ts` applies page-level SEO metadata from React pages.

### Indexed assets

- `public/robots.txt` includes crawler directives and sitemap reference.
- `public/sitemap.xml` contains core pages and Knowledge Hub article URLs.

### Adding a new article URL to sitemap

When adding a new Knowledge Hub article in `src/data/articles.ts`, also add its URL entry to `public/sitemap.xml`.

