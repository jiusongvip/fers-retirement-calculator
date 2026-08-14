# Content Quality & E-E-A-T Analysis

Date: 2026-08-14
Analyzed page: `http://127.0.0.1:4327/` (local production preview; the production domain is not resolving yet)

## Content Quality Score: 80/100

## E-E-A-T Breakdown

| Factor | Score | Key Signals |
| --- | ---: | --- |
| Experience | 8/25 | No named author, no first-hand photos/screenshots, no original case study or process documentation. The worked examples are accurate but generic. |
| Expertise | 17/25 | Deep, accurate FERS detail (multipliers, MRA+10 reduction, sick leave credit, Supplement, survivor benefits) with OPM citations. No author credentials or byline. |
| Authoritativeness | 10/25 | Cites OPM, but the site is not live, has no backlinks, media mentions, or external recognition yet. |
| Trustworthiness | 16/25 | Transparent disclaimer, editorial standards, last-reviewed date, sources, and limitations. Missing contact info, privacy policy, terms, and live HTTPS. |

Weighted E-E-A-T: **53/100 (Moderate)** using the 20/25/25/30 weights from the framework.

## AI Citation Readiness: 85/100

The page is strongly quotable: answer-first structure, clear formulas, tables, FAQ schema, heading hierarchy, and OPM attribution. The main gap is entity clarity, since there is no Person node or named author/reviewer for AI systems to attribute the content to.

## Content Metrics

| Metric | Value | Assessment |
| --- | ---: | --- |
| Word count | 4,644 | Strong topical coverage; well above the 500-word homepage floor. |
| Sentence count | 301 | Adequate breadth. |
| Average sentence length | 15.4 words | Within the 15-20 word target. |
| Flesch Reading Ease | 53 | Below the 60-70 target; moderately difficult but expected for a financial topic. |
| Flesch-Kincaid grade level | 9.7 | A little high for a broad federal-employee audience; target roughly 8-9. |
| H1 count | 1 | Correct single H1 with target keyword. |
| H2 count | 23 | Descriptive and scannable. |
| H3 count | 52 | High; several card and definition titles are not true subsections. |
| Internal links | 23 | All same-page anchors; no supporting pages yet. |
| External links | 4 | Authoritative OPM links, but only two unique sources. |
| Images | 0 | No in-content visuals or diagrams. |
| Keyword density | 5 occurrences / 4,644 words | Natural, no stuffing. |
| Keyword placement | Title, H1, first 100 words | Excellent. |

## Issues Found

1. **No named author or reviewer.** This is the largest E-E-A-T risk after the December 2025 core update, especially for a financial topic.
2. **No first-hand Experience signals.** The page reads as expert-derived but anonymous, with no screenshots, original data, or process documentation.
3. **Missing trust infrastructure.** No contact information, privacy policy, terms of service, or live HTTPS.
4. **No multimedia.** Complex rules and timelines have no diagrams, charts, or calculator screenshots.
5. **Readability is slightly high.** Grade 9.7 and Flesch 53 could exclude less experienced federal employees.
6. **Only two unique external sources.** OPM is the right anchor, but the page could also cite SSA, TSP, and OPM FAQ pages for specific claims.
7. **Topical authority is one page deep.** There are no supporting pages for MRA+10, the Supplement, survivor benefits, CSRS, or military buyback.
8. **Schema uses an Organization author.** A Person node for the named reviewer would improve entity clarity and AI attribution.

## Recommendations

- Add a named author/reviewer with relevant credentials and reference the Person from the TechArticle schema.
- Publish an About/Methodology page and add contact information, a privacy policy, and terms of service.
- Add first-hand signals: screenshots of the calculator, a documented verification process, or a specific real-world scenario walkthrough.
- Add one or two explanatory diagrams or charts with descriptive alt text.
- Simplify a handful of long, dense sentences to bring the grade level toward 8-9 without losing technical accuracy.
- Add supporting pages and link to them with descriptive anchors to build topical authority.
- Expand external citations to include SSA and TSP where those benefits are discussed.
- Demote some H3 card titles to paragraphs or definition terms where they are not true subsections.
