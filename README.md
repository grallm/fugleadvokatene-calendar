# FugleAdvokatene 2027 calendar

Bilingual Norwegian/English calendar preorder page for https://kalendar.fugleadvokatene.no/.

## Edit and preview
- Edit `site/index.html`, `site/style.css`, and translations in `site/content.js`.
- Images and logos live in `site/assets/`.
- Set the real HTTPS Vipps payment link in `site/config.js`. An empty link opens the preview dialog.
- Run `npm ci && npm run check && npm run build`.
- Preview with `python3 -m http.server 8080 --directory dist`.

The site is static: no PHP runtime or backend is required. Build adds content-based cache versions to CSS and JavaScript.

## Automatic FTP deployment
Every push to `main` runs `.github/workflows/deploy.yml`. It can also be run manually from Actions. No deploy-enabled variable is required.

Add repository Actions secrets:
- `FTP_HOST`: server hostname matching its TLS certificate (not an IP).
- `FTP_USER`: FTP account jailed to the calendar subdomain's document root.
- `FTP_PASSWORD`: that account's password.

The account's virtual `/` must point only to the calendar site, not the main website. Explicit FTPS on port 21 is used with certificate verification. Secrets in the other repository are not automatically available here.

The uploader reuses the website repo's incremental deployment approach: only changed files upload, assets precede HTML, temporary files are renamed into place, and old assets remain available. Only obsolete HTML tracked by its deployment manifest is removed. The first run uploads all files.

For manual FTP upload, upload the contents of `dist/` to the calendar document root.

## Content still to confirm
The current page retains the existing draft purchase/privacy terms, planned pickup details, price/cost split, and empty Vipps link. Complete these before accepting orders.

Illustrations by [Agnetha](https://aggieampersand.com/); development by [Malo](https://www.linkedin.com/in/malo-grall/).
