# Visual and Mobile

Score: 88 / 100

## What works

- No horizontal scroll at 390px viewport width.
- No detected text overflow or overlapping elements.
- Desktop and mobile full-page screenshots captured successfully.

## Findings

- **Medium - Small mobile tap targets.** Navigation links, footer links, and FAQ summary rows are often below the 44px recommended height. Increase vertical padding or hit area.
- **Medium - Salary history textarea has no accessible name.** The `#salary-history` textarea has no associated label, `aria-label`, or `aria-labelledby`. Add an accessible name.
- **Info - Skip link is visually hidden until focus.** This is expected and correct, but verify it becomes visible and targetable on keyboard focus.
