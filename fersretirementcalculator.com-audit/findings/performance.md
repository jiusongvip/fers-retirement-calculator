# Performance (Core Web Vitals)

Score: 98 / 100

## What works

- Lighthouse on the production preview: performance 100.
- Local measurements: TTFB 61ms, FCP 400ms, LCP 400ms, CLS 0.0002, load 554ms.
- Four resources and about 193KB total transfer.
- No render-blocking third-party scripts or oversized images.

## Findings

- **Info - Dev server numbers are not production.** The dev server showed slower FCP/LCP because of Vite on-demand compilation. Monitor field Core Web Vitals after launch.
- **Info - Production caching.** Enable compression and immutable caching for hashed assets at the host.
