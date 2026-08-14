# Schema / Structured Data

Score: 90 / 100

## What works

- Valid JSON-LD `@graph`.
- Types include WebPage, BreadcrumbList, WebApplication, TechArticle, FAQPage, and Organization.
- FAQPage markup matches visible FAQ content.
- TechArticle includes author, publisher, and date fields.

## Findings

- **Low - Organization logo uses favicon.svg.** Use a proper square organization logo asset.
- **Low - No person-level author.** Add a Person node and reference it from the article.
- **Info - Browser requirement wording.** Clarify that static content is server-rendered while the interactive calculation requires JavaScript.
