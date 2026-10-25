# FugleAdvokatene 2027 calendar

Bilingual Norwegian/English calendar preorder page for https://kalendar.fugleadvokatene.no/.

## Edit and preview
- Edit `site/index.html`, `site/style.css`, and translations in `site/content.js`.
- Images and logos live in `site/assets/`.
- The preorder section uses Vipps number 534731 and its QR code. Edit instructions in `site/content.js` and quantity/message behavior in `site/payment.js`.
- Bird paintings are shown by default; hover, click/tap, or keyboard activation reveals the original photo. Assets use `*-painting.webp` and matching original WebP filenames.
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

## Order flow
Customers choose one, two, or three calendars (350 / 500 / 650 NOK), select a one-time payment in Vipps, and enter the amount and a message with quantity, name, and postal address or Oslo pickup. Postage must be agreed before payment. This static page does not process payments or confirm orders automatically.

Illustrations by [Agnetha](https://aggieampersand.com/); development by [Malo](https://www.linkedin.com/in/malo-grall/).
