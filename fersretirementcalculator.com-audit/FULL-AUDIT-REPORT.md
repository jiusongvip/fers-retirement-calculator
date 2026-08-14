# FERS Retirement Calculator - Full SEO Audit

Date: 2026-08-14
Overall SEO Health Score: **87 / 100**
Business type: **Online calculator / educational tool** (FinanceApplication, YMYL-adjacent)

## Scope

The configured production domain `https://fersretirementcalculator.com` does not currently resolve. This audit was therefore run against the reachable local production preview at `http://127.0.0.1:4327/`. Findings about DNS, HTTPS, and security headers are launch blockers rather than source-code defects.

## Executive Summary

The calculator is a strong pre-launch page. It has complete on-page fundamentals, a valid structured-data graph, a fast static build, substantial original content, and a proper `robots.txt`, `sitemap.xml`, and `llms.txt`. The main remaining work is deployment hardening and authority building: make the domain live, add security headers, name the author/reviewer, fix one unlabeled form control, and expand into supporting pages.

### Top 5 issues

1. **Critical:** The domain has no DNS record, so the site is not live or indexable.
2. **High:** Security headers are missing from the served response.
3. **Medium:** No named author/reviewer with credentials for finance-adjacent E-E-A-T.
4. **Medium:** The salary history textarea has no accessible name.
5. **Medium:** Several mobile tap targets are below the 44px recommended size.

### Top 5 quick wins

1. Configure DNS, TLS, and security headers at the production host.
2. Add an accessible name to the salary history textarea.
3. Increase vertical hit area for mobile navigation and FAQ rows.
4. Redirect `/embed/` to `/embed`.
5. Add a named author/reviewer and a proper Organization logo.

## Category Scores

| Category | Weight | Score |
| --- | ---: | ---: |
| Technical SEO | 22% | 80 |
| Content Quality | 23% | 84 |
| On-Page SEO | 20% | 90 |
| Schema / Structured Data | 10% | 90 |
| Performance (CWV) | 10% | 98 |
| AI Search Readiness | 10% | 88 |
| Images | 5% | 80 |

## Technical SEO

`robots.txt`, `sitemap.xml`, canonical URLs, and the `noindex` embed page are all correct. The content is server-rendered, so crawlers do not depend on JavaScript.

- The domain must be pointed to production and served over HTTPS before indexing.
- Add HSTS, CSP, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, and Permissions-Policy at the host or CDN.
- Add a 301 from `/embed/` to `/embed`.
- Configure production caching for hashed assets and HTML.

## Content Quality

The page contains about 21,000 characters of visible, original, topic-focused text. OPM sources are cited, and the page includes editorial standards, a disclaimer, and a last-reviewed date.

- Add a named author/reviewer with relevant credentials.
- Publish supporting pages for MRA+10, FERS Supplement, survivor benefits, CSRS, and military buyback.
- Name the reviewer or link to a methodology page.

## On-Page SEO

The title tag, meta description, single H1, URL keyword, and social metadata are all well implemented.

- Review the 52 H3 headings and demote card or definition titles that are not true subsections.
- Add one or two explanatory diagrams with descriptive alt text.

## Schema / Structured Data

The JSON-LD `@graph` is valid and includes WebPage, BreadcrumbList, WebApplication, TechArticle, FAQPage, and Organization. FAQPage matches visible FAQ content.

- Use a proper Organization logo instead of `favicon.svg`.
- Add a Person node for the author/reviewer and reference it from the article.
- Clarify the WebApplication browser requirement wording.

## Performance

The production preview is excellent: Lighthouse performance 100, local LCP 400ms, CLS near zero, four resources, and about 193KB total transfer.

- The dev-server Lighthouse result is slower because of Vite on-demand compilation; monitor field Core Web Vitals after launch.
- Enable compression and immutable caching at the production host.

## AI Search Readiness

`llms.txt` is present, content is server-rendered, and `robots.txt` allows AI crawlers. Editorial standards and sources support citability.

- Add a named author/reviewer and organization `sameAs` links.
- Add `llms-full.txt` with the full FAQ and editorial text.

## Images

The 1200x630 OG image is present, correctly tagged, and about 89KB. The page has no broken images.

- Add one or two in-content diagrams or charts with descriptive alt text.

## Verification

- Local preview: `http://127.0.0.1:4327/`
- Screenshots: `screenshots/desktop-full.png`, `screenshots/mobile-full.png`
- Raw audit data: `playwright-audit.json`
- Structured envelope: `audit-data.json`
