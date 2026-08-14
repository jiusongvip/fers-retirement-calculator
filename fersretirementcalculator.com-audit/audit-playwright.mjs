import { chromium } from "playwright";
import fs from "node:fs/promises";
import path from "node:path";

const BASE = "http://127.0.0.1:4327";
const OUT_DIR = path.resolve("fersretirementcalculator.com-audit");
const SHOT_DIR = path.join(OUT_DIR, "screenshots");

const perfInit = `
  window.__cwv = { lcp: 0, cls: 0, entries: [] };
  try {
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          window.__cwv.lcp = entry.startTime;
        }
        if (entry.entryType === 'layout-shift' && !entry.hadRecentInput) {
          window.__cwv.cls += entry.value;
        }
      }
    }).observe({ type: 'largest-contentful-paint', buffered: true });
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'layout-shift' && !entry.hadRecentInput) {
          window.__cwv.cls += entry.value;
        }
      }
    }).observe({ type: 'layout-shift', buffered: true });
  } catch (e) {}
`;

async function collectPage(page, url) {
  await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(800);

  const dom = await page.evaluate(() => {
    const pick = (sel) => {
      const el = document.querySelector(sel);
      return el ? (el.getAttribute("content") || el.textContent || "").trim() : "";
    };

    const headings = { h1: [], h2: [], h3: [], h4: [], h5: [], h6: [] };
    document.querySelectorAll("h1,h2,h3,h4,h5,h6").forEach((h) => {
      const t = (h.textContent || "").replace(/\s+/g, " ").trim();
      if (t) headings[h.tagName.toLowerCase()].push(t);
    });

    const links = { internal: [], external: [] };
    document.querySelectorAll("a[href]").forEach((a) => {
      const href = a.getAttribute("href") || "";
      const text = (a.textContent || "").replace(/\s+/g, " ").trim();
      const item = { href, text: text.slice(0, 120), rel: a.getAttribute("rel") || "" };
      if (href.startsWith("http") || href.startsWith("//")) links.external.push(item);
      else if (href.startsWith("#")) links.internal.push(item);
      else links.internal.push(item);
    });

    const images = [];
    document.querySelectorAll("img").forEach((img) => {
      images.push({
        src: img.getAttribute("src") || "",
        alt: img.getAttribute("alt") || "",
        hasAlt: img.hasAttribute("alt"),
        loading: img.getAttribute("loading") || "",
        width: img.naturalWidth,
        height: img.naturalHeight,
      });
    });

    const schemaBlocks = [];
    document.querySelectorAll('script[type="application/ld+json"]').forEach((s) => {
      try { schemaBlocks.push(JSON.parse(s.textContent)); } catch (e) { schemaBlocks.push({ parseError: String(e) }); }
    });

    const inputs = [];
    document.querySelectorAll("input, select, textarea").forEach((el) => {
      const id = el.id || "";
      const labelEl = id && document.querySelector(`label[for="${CSS.escape(id)}"]`);
      const wrapped = el.closest("label");
      const ariaLabel = el.getAttribute("aria-label");
      const labelText = (labelEl?.textContent || wrapped?.querySelector("span")?.textContent || "").replace(/\s+/g, " ").trim();
      inputs.push({
        tag: el.tagName.toLowerCase(),
        id,
        type: el.getAttribute("type") || "",
        hasAccessibleName: !!(labelText || ariaLabel),
        labelText: labelText.slice(0, 80),
      });
    });

    const buttons = [];
    document.querySelectorAll("button").forEach((b) => {
      buttons.push({
        text: (b.textContent || "").replace(/\s+/g, " ").trim().slice(0, 80),
        ariaLabel: b.getAttribute("aria-label") || "",
      });
    });

    const overflow = [];
    document.querySelectorAll("p,h1,h2,h3,h4,span,a,button,summary,label,li").forEach((el) => {
      const style = getComputedStyle(el);
      if (style.overflowX !== "visible") return;
      const rect = el.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      if (el.scrollWidth > el.clientWidth + 1 && el.clientWidth > 0) {
        const t = (el.textContent || "").replace(/\s+/g, " ").trim().slice(0, 60);
        if (t) overflow.push({ tag: el.tagName.toLowerCase(), text: t, scrollWidth: el.scrollWidth, clientWidth: el.clientWidth });
      }
    });

    const nav = performance.getEntriesByType("navigation")[0] || {};
    const paints = {};
    for (const e of performance.getEntriesByType("paint")) paints[e.name] = e.startTime;

    return {
      title: document.title,
      lang: document.documentElement.lang,
      meta: {
        description: pick('meta[name="description"]'),
        robots: pick('meta[name="robots"]'),
        canonical: document.querySelector('link[rel="canonical"]')?.href || "",
        viewport: pick('meta[name="viewport"]'),
        themeColor: pick('meta[name="theme-color"]'),
        ogTitle: pick('meta[property="og:title"]'),
        ogImage: pick('meta[property="og:image"]'),
        twitterCard: pick('meta[name="twitter:card"]'),
        generator: pick('meta[name="generator"]'),
        hreflang: document.querySelectorAll('link[rel="alternate"][hreflang]').length,
      },
      headings,
      headingCounts: Object.fromEntries(Object.entries(headings).map(([k, v]) => [k, v.length])),
      links: {
        internal: links.internal.length,
        external: links.external.length,
        externalSamples: links.external.slice(0, 10),
      },
      images,
      imageCount: images.length,
      imagesWithoutAlt: images.filter((i) => !i.hasAlt).length,
      schemaBlocks,
      schemaTypes: schemaBlocks.flatMap((b) => (b["@graph"] || [b]).flatMap((n) => n["@type"] || [])),
      inputs,
      inputsWithoutAccessibleName: inputs.filter((i) => !i.hasAccessibleName).length,
      buttons,
      buttonCount: buttons.length,
      iframeCount: document.querySelectorAll("iframe").length,
      overflow,
      overflowCount: overflow.length,
      rawTextLength: (document.body.innerText || "").replace(/\s+/g, " ").trim().length,
      navTiming: {
        ttfb: nav.responseStart || null,
        fcp: paints["first-contentful-paint"] || null,
        domContentLoaded: nav.domContentLoadedEventEnd || null,
        load: nav.loadEventEnd || null,
      },
    };
  });

  const cwv = await page.evaluate(() => window.__cwv);
  const metrics = await page.evaluate(() => {
    const resources = performance.getEntriesByType("resource");
    let totalBytes = 0;
    const byType = {};
    for (const r of resources) {
      const t = r.initiatorType || "other";
      byType[t] = (byType[t] || 0) + 1;
      totalBytes += r.transferSize || r.encodedBodySize || 0;
    }
    return { resourceCount: resources.length, totalTransferBytes: totalBytes, byType };
  });

  return { url, dom, cwv, metrics };
}

async function capture(page, url, name) {
  await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(SHOT_DIR, name), fullPage: true, timeout: 60000 });
}

const results = { homepage: {}, embed: {} };

const browser = await chromium.launch({ channel: "chrome", headless: true });
try {
  // Desktop DOM / performance / visual collection.
  const desktop = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await desktop.newPage();
  await page.addInitScript(perfInit);
  results.homepage = await collectPage(page, `${BASE}/`);
  results.embed = await collectPage(page, `${BASE}/embed`);
  await capture(page, `${BASE}/`, "desktop-full.png");
  await desktop.close();

  // Mobile viewport checks.
  const mobile = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const mpage = await mobile.newPage();
  await mpage.goto(`${BASE}/`, { waitUntil: "networkidle", timeout: 60000 });
  await mpage.waitForTimeout(400);
  results.homepage.mobile = await mpage.evaluate(() => {
    const small = [];
    document.querySelectorAll("a,button,input,select,summary").forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.width > 0 && r.height > 0 && (r.width < 44 || r.height < 44)) {
        small.push({
          tag: el.tagName.toLowerCase(),
          text: (el.textContent || el.getAttribute("aria-label") || "").replace(/\s+/g, " ").trim().slice(0, 50),
          w: Math.round(r.width),
          h: Math.round(r.height),
        });
      }
    });
    return {
      innerWidth: window.innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
      horizontalScroll: document.documentElement.scrollWidth > window.innerWidth + 1,
      smallTapTargets: small.slice(0, 30),
      smallTapTargetCount: small.length,
    };
  });
  await mpage.screenshot({ path: path.join(SHOT_DIR, "mobile-full.png"), fullPage: true, timeout: 60000 });
  await mobile.close();
} finally {
  await browser.close();
}

await fs.mkdir(OUT_DIR, { recursive: true });
await fs.mkdir(SHOT_DIR, { recursive: true });
await fs.writeFile(path.join(OUT_DIR, "playwright-audit.json"), JSON.stringify(results, null, 2), "utf8");

console.log(JSON.stringify({
  homepage: {
    title: results.homepage.dom?.title,
    meta: results.homepage.dom?.meta,
    headingCounts: results.homepage.dom?.headingCounts,
    links: results.homepage.dom?.links,
    images: results.homepage.dom?.images,
    imageCount: results.homepage.dom?.imageCount,
    imagesWithoutAlt: results.homepage.dom?.imagesWithoutAlt,
    schemaTypes: results.homepage.dom?.schemaTypes,
    inputsWithoutAccessibleName: results.homepage.dom?.inputsWithoutAccessibleName,
    buttonCount: results.homepage.dom?.buttonCount,
    iframeCount: results.homepage.dom?.iframeCount,
    overflowCount: results.homepage.dom?.overflowCount,
    overflow: results.homepage.dom?.overflow,
    rawTextLength: results.homepage.dom?.rawTextLength,
    navTiming: results.homepage.dom?.navTiming,
    cwv: results.homepage.cwv,
    metrics: results.homepage.metrics,
    mobile: results.homepage.mobile,
  },
  embed: {
    title: results.embed.dom?.title,
    meta: results.embed.dom?.meta,
    headingCounts: results.embed.dom?.headingCounts,
    links: results.embed.dom?.links,
    imageCount: results.embed.dom?.imageCount,
    schemaTypes: results.embed.dom?.schemaTypes,
    inputsWithoutAccessibleName: results.embed.dom?.inputsWithoutAccessibleName,
    buttonCount: results.embed.dom?.buttonCount,
    iframeCount: results.embed.dom?.iframeCount,
    overflowCount: results.embed.dom?.overflowCount,
    rawTextLength: results.embed.dom?.rawTextLength,
  },
}, null, 2));
