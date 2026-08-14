# Sitemap

Score: 95 / 100

## What works

- `sitemap.xml` is well-formed and returns HTTP 200 with `text/xml`.
- It lists `https://fersretirementcalculator.com/` with a valid `lastmod`.
- `robots.txt` references the sitemap.

## Findings

- **Info - Single URL sitemap.** The sitemap currently contains only the homepage. Add new supporting pages to the sitemap as they are published.
- **Info - Production verification pending.** The sitemap uses the production domain, which is not live yet. Re-verify the URLs after DNS and HTTPS are configured.
