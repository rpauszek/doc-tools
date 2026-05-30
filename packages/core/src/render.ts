import { writeFileSync } from "node:fs";
import puppeteer from "puppeteer";

export function renderHtml(htmlContent: string, outputPath: string) {
  writeFileSync(outputPath, htmlContent, "utf-8");
  console.log(`Saved debug HTML to ${outputPath}`);
}

export async function renderPdf(htmlContent: string, outputPath: string): Promise<void> {
  const browser = await puppeteer.launch();

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 794, height: 1122 }); // A4 approx at 96dpi

    // We intentionally wait only for page load here.
    // If document rendering later depends on external assets
    // (fonts, images, stylesheets, etc.), consider adding
    // `await page.waitForNetworkIdle()` after setContent().
    await page.setContent(htmlContent, { waitUntil: "load" });

    await page.pdf({
      path: outputPath,
      format: "A4",
      printBackground: true,
      margin: { top: "0", right: "0", bottom: "0", left: "0" },
    });
  } finally {
    await browser.close();
  }
}
