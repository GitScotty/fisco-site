# FISCO website

Marketing and documentation site for FISCO — the fiscal compliance observatory for IFIs.

## Stack

- [Eleventy](https://www.11ty.dev/) static site generator
- Plain CSS with system fonts
- [Cloudflare Pages](https://pages.cloudflare.com/) for hosting
- [Formspree](https://formspree.io/) for the feedback form

## Local development

```
npm install
npm start
```

Site is served at `http://localhost:8080` with live reload.

## Build

```
npm run build
```

Output goes to `_site/`.

## Deployment

Cloudflare Pages, connected to this repo's `main` branch. Each push triggers a new build.

### Cloudflare Pages setup (one-time)

1. Sign up / log in at https://dash.cloudflare.com.
2. Pages → Create a project → Connect to Git → select this repo.
3. Build command: `npm run build`. Output directory: `_site`. Environment variable `NODE_VERSION = 20`.
4. Once the first deploy succeeds, attach the custom domain in Pages → Custom domains.

### Domain

Update `src/_data/site.js` (`domain` and `url` fields) once the domain is registered and pointing at Cloudflare.

## Feedback form (Formspree)

The feedback form posts to a Formspree endpoint. To wire it up:

1. Sign up at https://formspree.io with `cameronscottd@gmail.com`.
2. Create a new form named "FISCO feedback".
3. Copy the form's POST URL (looks like `https://formspree.io/f/xxxxxxxx`).
4. Paste it into `src/_data/site.js` as `feedbackEndpoint`.
5. Submit a test message to confirm it lands in your inbox.

The free tier is 50 submissions/month. If you outgrow that, swap to Web3Forms or a Cloudflare Pages Function with MailChannels.

## Releasing a new FISCO version

Manual flow:

1. Drop the new `.xlsm` into `src/assets/downloads/FISCO-latest.xlsm`.
2. Update `latestVersion` and `latestReleaseDate` in `src/_data/site.js`.
3. Add a new section to the top of `src/changelog.md` and `CHANGELOG.md`.
4. Commit and push — Cloudflare Pages deploys automatically.

Automated flow: tag a GitHub release, and `.github/workflows/release.yml` does steps 1–2 for you (assuming the `.xlsm` is attached as a release asset).

## Licence

Code: MIT. FISCO model and content: TBD.
