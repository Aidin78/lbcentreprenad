# LBC Entreprenad – webbplats

Redesign concept for [lbcentreprenad.se](https://www.lbcentreprenad.se/), built with Next.js 16 (App Router, Cache Components), TypeScript (strict) and Tailwind CSS 4. All public-facing copy is in Swedish.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build && npm start
```

Copy `.env.example` to `.env.local` and fill in the values you need.

| Variable               | Purpose                                                                 |
| ---------------------- | ----------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin for metadata, sitemap and structured data              |
| `RESEND_API_KEY`       | API key for [Resend](https://resend.com), used by the quote form        |
| `QUOTE_FROM_EMAIL`     | Sender on a domain verified in Resend                                   |
| `QUOTE_TO_EMAIL`       | Recipient of quote requests (defaults to `kontakt@lbcentreprenad.se`)   |

Without `RESEND_API_KEY` and `QUOTE_FROM_EMAIL`, the form still validates input but tells the visitor that it cannot send, and points to phone and email instead. It never reports a fake success.

## Structure

```
src/
  app/                    Routes, metadata, sitemap, robots, icon, OG image
    kontakt/actions.ts    Server Action for the quote form
  components/
    home/                 Homepage sections
    services/             Shared template for service detail pages
    projects/             Filterable gallery and lightbox
    contact/              Quote form (client-side + server-side validation)
    layout/               Header, mobile menu, footer
    shared/ ui/ seo/      Reusable building blocks
  content/                Company facts, services, project images, values
  lib/                    SEO helpers, form schema, utilities
  assets/projekt/         Project photography (optimised by next/image)
```

Content lives in `src/content/`. Services, their detail pages and the gallery are generated from `services.ts` and `projects.ts`.

## Routes

The URLs of the existing site are kept, so search rankings and links survive the switch:

| Route                                   | Source                                  |
| --------------------------------------- | --------------------------------------- |
| `/`                                     | Start                                   |
| `/tjanster/`                            | Tjänster                                |
| `/om-oss/`                              | Om oss                                  |
| `/kontakt/`                             | Kontakt                                 |
| `/renovera-fasader-i-stockholm/`        | Existing service page                   |
| `/vaggar-malning-kakel-i-stockholm/`    | Existing service page                   |
| `/landskapsdesign-tradgard-stockholm/`  | Existing service page                   |
| `/sten-och-betongarbeten-stockholm/`    | New, based on services listed on the old site |
| `/projekt/`                             | New gallery (`?kategori=fasad\|sten\|tradgard\|kakel`) |

`trailingSlash` is enabled to match the old WordPress URLs.

## Content and photography

- Copy is based on the text published on lbcentreprenad.se (October 2026), rewritten and restructured. No statistics, testimonials, awards or team details were added.
- All project photos come from the current lbcentreprenad.se (the services gallery and the service pages). Product and stock images from the old site (heat pump, kitchen tap, bathroom render) are not used.
- The logo is a proposed simplified wordmark. The original logo can be swapped in `src/components/ui/logo.tsx` and `src/app/icon.svg`.

To confirm with the business owner before launch:

- Permission to reuse the photos, and whether all of them show LBC's own work.
- The statement "Vi är certifierade … försäkringar och garantier gäller" (taken from the current Om oss page): which certification it refers to.
- Organisation number, opening hours and any additional social channels, if they should be shown.
- The old pages `/bra-vvs-foretag-i-stockholm/` and `/varmepanna-snabb-installation-stockholm/`, which are still in the old sitemap but not linked from the site. They were left out of the redesign.
