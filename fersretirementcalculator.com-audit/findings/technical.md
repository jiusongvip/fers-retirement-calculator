# Technical SEO

Score: 80 / 100

## What works

- `robots.txt` allows crawling and references the sitemap.
- `sitemap.xml` is valid and lists the canonical homepage.
- Canonical URLs are correct on `/` and `/embed`.
- Content is server-rendered, so indexing does not depend on JavaScript.
- `/embed` is `noindex, nofollow`.

## Findings

- **Critical - Domain does not resolve.** `fersretirementcalculator.com` has no DNS A record, so the site is not live or crawlable. Point DNS to the production host and provision TLS.
- **High - Security headers missing.** No HSTS, CSP, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, or Permissions-Policy are returned. Add them at the CDN/host.
- **Low - Trailing slash 404.** `GET /embed/` returns 404 instead of redirecting to `/embed`. Add a 301 redirect.
- **Info - No hreflang.** Optional for an English-only site; add `x-default` only if multilingual pages ship.
- **Info - Preview caching.** `Cache-Control: no-cache` is expected for preview; configure production caching for hashed assets and HTML.
