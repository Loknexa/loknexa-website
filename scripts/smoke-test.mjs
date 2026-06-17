import { chromium } from "playwright";

const base = "http://localhost:5174";
const routes = ["/", "/projects", "/contact"];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

const consoleErrors = [];
page.on("console", (msg) => {
  if (msg.type() === "error") consoleErrors.push(`[console] ${msg.text()}`);
});
page.on("pageerror", (err) => consoleErrors.push(`[pageerror] ${err.message}`));

for (const route of routes) {
  await page.goto(`${base}${route}`, { waitUntil: "networkidle" });
  await page.waitForSelector("text=Loknexa", { timeout: 10000 }).catch(() => {});

  // Scroll-reveal sections stay opacity:0 until their IntersectionObserver
  // fires, which only happens once the element has actually entered the
  // viewport. Walk down the page first so every section has a chance to
  // reveal before the full-page screenshot is taken.
  const height = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < height; y += 400) {
    await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
    await page.waitForTimeout(120);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(200);

  const name = route === "/" ? "home" : route.slice(1);
  await page.screenshot({ path: `scripts/screenshots/${name}.png`, fullPage: true });
  console.log(`Captured ${route} -> scripts/screenshots/${name}.png`);
}

await browser.close();

if (consoleErrors.length > 0) {
  console.log("\nCONSOLE ERRORS FOUND:");
  consoleErrors.forEach((e) => console.log(e));
  process.exitCode = 1;
} else {
  console.log("\nNo console errors across all routes.");
}
