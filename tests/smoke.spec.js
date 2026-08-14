import { test, expect } from "@playwright/test";

test("page loads with the expected title and calculator", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(
    "FERS Retirement Calculator: Estimate Your Federal Pension",
  );
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "FERS Retirement Calculator",
  );
  await expect(page.getByRole("heading", { name: /Estimate your FERS pension/i })).toBeVisible();
  await expect(page.locator("#high3")).toBeVisible();
  await expect(page.locator("#service-years")).toBeVisible();
  await expect(page.locator("#retirement-age")).toBeVisible();
  await expect(page.locator("#annual-pension")).toContainText("$27,500");
});

test("advanced options reveal the extended inputs", async ({ page }) => {
  await page.goto("/");

  const toggle = page.getByRole("button", { name: /Advanced options/i });
  await toggle.click();

  await expect(page.locator("#sick-leave")).toBeVisible();
  await expect(page.locator("#military-years")).toBeVisible();
  await expect(page.locator("#special-category")).toBeVisible();
  await expect(page.locator("#survivor-benefit")).toBeVisible();
  await expect(page.locator("#retirement-system")).toBeVisible();
  await expect(page.locator("#salary-history")).toBeVisible();
});

test("quick estimate bar updates with the result", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator("#quick-annual")).toHaveText("$27,500");
  await page.locator("#high3").fill("80000");
  await page.locator("#calculate-button").click();

  await expect(page.locator("#quick-annual")).toHaveText("$22,000");
});

test("quick answer and clickable retirement scenarios are visible", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByText("Quick answer")).toBeVisible();
  await expect(page.getByText(/High-3 × Years of Creditable Service × Multiplier/)).toBeVisible();

  const mraScenario = page.locator("#scenario-summary [data-scenario-age]").first();
  await mraScenario.click();

  await expect(page.locator("#retirement-age")).toHaveValue("57");
});

test("survivor benefit comparison applies a selected option", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByText("Survivor benefit comparison")).toBeVisible();

  const fullSurvivor = page.locator("#survivor-comparison [data-survivor-benefit='full']");
  await fullSurvivor.click();

  await expect(page.locator("#survivor-benefit")).toHaveValue("full");
  await expect(page.locator("#after-survivor")).toHaveText("$24,750");
});

test("editorial section states what the page does not calculate", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByText("What this page does not calculate")).toBeVisible();
  await expect(page.getByText(/Disability retirement/)).toBeVisible();
});

test("mobile view shows a compact section navigation", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const mobileNav = page.getByRole("navigation", { name: "Page sections mobile" });
  await expect(mobileNav).toBeVisible();
  await expect(mobileNav.getByRole("link", { name: "Calculator" })).toBeVisible();
  await expect(mobileNav.getByRole("link", { name: "FAQ" })).toBeVisible();
});

test("mobile view shows a persistent quick result bar", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  await expect(page.locator("#mobile-quick-bar")).toBeVisible();
  await expect(page.locator("#mobile-quick-annual")).toHaveText("$27,500");
});

test("decision summary explains the retirement age tradeoff", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator("#decision-summary")).toContainText("at least 20 years");
  await page.locator("#retirement-age").fill("57");
  await page.locator("#birth-year").fill("1970");
  await page.locator("#calculate-button").click();

  await expect(page.locator("#decision-summary")).toContainText("MRA+10 reduces");
});

test("retirement type checker updates guidance", async ({ page }) => {
  await page.goto("/");

  const result = page.locator("#rt-result");
  await expect(result).toContainText("FERS uses the 1%");
  await page.locator("#rt-system").selectOption("csrs");
  await expect(result).toContainText("CSRS generally covers");
});

test("download report creates a text file", async ({ page }) => {
  await page.goto("/");

  const downloadPromise = page.waitForEvent("download");
  await page.locator("#download-report-button").click();
  const download = await downloadPromise;

  expect(download.suggestedFilename()).toBe("fers-retirement-estimate-2026-08-14.txt");
});

test("embed page renders the calculator without site chrome", async ({ page }) => {
  await page.goto("/embed");

  await expect(page.locator("header")).toHaveCount(0);
  await expect(page.locator("footer")).toHaveCount(0);
  await expect(page.locator("#high3")).toBeVisible();
  await expect(page.locator("#calculate-button")).toBeVisible();
});

test("result panel shows a compact retirement age comparison", async ({ page }) => {
  await page.goto("/");

  const summary = page.locator("#scenario-summary");
  await expect(summary).toBeVisible();
  await expect(summary.locator(":scope > div")).toHaveCount(3);
  await expect(summary).toContainText("MRA+10");
  await expect(summary).toContainText("Age 60");
  await expect(summary).toContainText("Age 62");
});

test("MRA comparison preserves months instead of rounding to an integer", async ({ page }) => {
  await page.goto("/");

  await page.locator("#birth-year").fill("1969");
  await page.locator("#calculate-button").click();

  await expect(page.locator("#scenario-summary")).toContainText("Age 56y 10m");
});

test("MRA+10 retirees are eligible for the FERS Supplement estimate", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: /Advanced options/i }).click();
  await page.locator("#retirement-age").fill("57");
  await page.locator("#birth-year").fill("1970");
  await page.locator("#service-years").fill("25");
  await page.locator("#social-security-input").fill("2000");
  await page.locator("#calculate-button").click();

  await expect(page.locator("#supplement-estimate")).toHaveText("$1,250");
});

test("schema includes the web application and FAQ entities", async ({ page }) => {
  await page.goto("/");

  const schemaText = await page
    .locator('script[type="application/ld+json"]')
    .first()
    .textContent();

  expect(schemaText).toBeTruthy();

  const schema = JSON.parse(schemaText);
  const types = schema["@graph"].map((node) => node["@type"]).flat();

  expect(types).toContain("WebApplication");
  expect(types).toContain("FAQPage");
  expect(types).toContain("WebPage");
  expect(types).toContain("TechArticle");
  expect(types).toContain("BreadcrumbList");
});

test("technical files are available for crawlers and AI assistants", async ({ request }) => {
  const robots = await request.get("/robots.txt");
  const sitemap = await request.get("/sitemap.xml");
  const llms = await request.get("/llms.txt");

  expect(robots.status()).toBe(200);
  expect(await robots.text()).toContain("fersretirementcalculator.com");

  expect(sitemap.status()).toBe(200);
  expect(await sitemap.text()).toContain("https://fersretirementcalculator.com/");

  expect(llms.status()).toBe(200);
  expect(await llms.text()).toContain("# FERS Retirement Calculator");
});
