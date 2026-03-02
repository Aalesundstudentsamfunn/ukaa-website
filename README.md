# U.-KA. website

Website for U.-KA., the student festival in Ålesund.

## Stack

- Astro 5
- Tailwind CSS v4
- Skeleton UI theme (`cerberus`)
- MDX content collections (`hero`, `events`, `featured`, `revy`)
- Cloudinary images
- Mux video on the front page
- Netlify adapter in Astro config

## Requirements

- Node.js 20+
- npm

## Local development

```bash
npm install
npm run dev
```

Build and preview production output:

```bash
npm run build
npm run preview
```

## Environment variables

Create a `.env` file in the project root:

```env
PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
```

`PUBLIC_CLOUDINARY_CLOUD_NAME` is required for program/revy pages and featured modal images.

## Project structure

```text
src/
  components/
  layouts/
  pages/
    index.astro
    program.astro
    revy.astro
    404.astro
  content/
    hero/
    events/
    featured/
    revy/
  content.config.js
public/
  sw.js
  site.webmanifest
```

## Content editing

Home page:

- Hero text: `src/content/hero/index.mdx`
- Featured cards and modal content: `src/content/featured/*.mdx`

Program page (`/program`):

- Days and schedule are loaded from `src/content/events/*.mdx`
- File names follow date format: `YYYY-MM-DD.mdx`
- `order` controls day sorting
- `schedule` entries map directly to event cards

Revy page (`/revy`):

- Show entries come from `src/content/revy/*.mdx`
- `order` controls show sorting
- `banner` accepts either a local path (`/images/...`) or a Cloudinary public ID

Navigation:

- Edit links in `src/components/Navigation.astro`

## Images and media

- Cloudinary is allowed in `astro.config.mjs` (`res.cloudinary.com`)
- Local static files live in `public/`
- Front page background video uses Mux player in `src/components/Hero.astro`

## PWA and caching

- Service worker is registered in `src/layouts/PageLayout.astro`
- Caching strategy lives in `public/sw.js`
- Precached routes: `/`, `/program/`, `/revy/`
- Update `CACHE_NAME` in `public/sw.js` when changing cache behavior

## Deployment

- Astro `site` is set to `https://ukaa.no`
- Netlify adapter is enabled in `astro.config.mjs`
- Production build output is generated in `dist/`
