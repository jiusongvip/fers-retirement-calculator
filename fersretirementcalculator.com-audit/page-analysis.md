# Single Page Analysis

Date: 2026-08-14
Analyzed page: `http://127.0.0.1:4327/` (local production preview)
Canonical target: `https://fersretirementcalculator.com/`

## Page Score Card

```text
Overall Score: 84/100

On-Page SEO:     92/100
Content Quality: 80/100
Technical:       90/100
Schema:          88/100
Images:          68/100
```

## Verified Signals

- Title: 57 characters, primary keyword near the beginning.
- Meta description: 142 characters, contains the keyword.
- H1: exactly one, contains the keyword.
- Heading hierarchy: H1 > H2 > H3 with no skipped levels.
- Canonical: self-referencing and correct.
- Meta robots: `index, follow`.
- Open Graph: title, description, image, URL, dimensions, type, alt.
- Twitter Card: `summary_large_image`.
- JSON-LD types detected: WebPage, BreadcrumbList, WebApplication, TechArticle, FAQPage, Organization.
- Content: 4,747 words, 310 sentences.
- Readability: Flesch 53.2, Flesch-Kincaid grade 9.6.
- Internal links: 23 same-page anchors.
- External links: 6, all authoritative (OPM, SSA, TSP).

## Issues Found

### High

1. **No named author or reviewer.** The TechArticle uses an Organization author. For a financial topic this is the biggest remaining E-E-A-T gap.
2. **Production domain is not live.** `fersretirementcalculator.com` does not resolve, so the page is not yet indexable over HTTPS.

### Medium

3. **Meta description has no CTA.** It describes the tool but does not invite the user to use it.
4. **Readability is slightly high.** Grade 9.6 and Flesch 53.2 are acceptable for finance but could be lower for a broad federal-employee audience.
5. **54 H3 headings.** Several are card or definition titles rather than true subsections.
6. **No in-content images.** The page has no diagrams or calculator screenshots.
7. **Duplicate OPM computation links.** The same OPM URL is used three times in the calculator, example, and sources sections.

### Low

8. **Organization logo points to favicon.svg.** A proper square logo asset would be stronger for entity clarity.
9. **No hreflang.** Optional for an English-only page.
10. **All internal links are same-page anchors.** Supporting pages would improve topical authority and crawl structure.

## Recommendations

- Add a named author/reviewer with credentials and reference a Person node from the TechArticle.
- Point DNS to production and verify HTTPS before submitting the sitemap.
- Rewrite the meta description with a CTA, for example: "Free FERS retirement calculator for federal employees. Estimate your pension, FERS Supplement, and survivor benefit. Compare retirement dates now."
- Simplify a few dense sentences to bring the grade level toward 8-9.
- Demote some H3 card titles to paragraphs or definition terms.
- Add one or two explanatory diagrams or calculator screenshots with descriptive alt text.
- Keep one OPM computation link in the calculator and one in Sources to reduce repetition.
- Replace the Organization logo with a square logo asset.
- Publish supporting pages for MRA+10, FERS Supplement, survivor benefits, CSRS, and military buyback.

## Schema Suggestions

Add a Person node for the named reviewer and connect it to the existing TechArticle:

```json
{
  "@type": "Person",
  "@id": "https://fersretirementcalculator.com/#reviewer",
  "name": "REPLACE_WITH_REVIEWER_NAME",
  "jobTitle": "REPLACE_WITH_CREDENTIALS",
  "url": "https://fersretirementcalculator.com/about",
  "knowsAbout": ["FERS", "federal retirement benefits", "OPM annuity computation"]
}
```

Then update the existing TechArticle:

```json
{
  "@type": "TechArticle",
  "@id": "https://fersretirementcalculator.com/#article",
  "author": { "@id": "https://fersretirementcalculator.com/#reviewer" },
  "reviewedBy": { "@id": "https://fersretirementcalculator.com/#reviewer" }
}
```

Keep FAQPage as an AI-citation signal. Do not target FAQ rich results, which Google retired in May 2026.
