import { join } from "node:path";

import { getGreeting } from "@doc-tools/core";
import { renderHtml, renderPdf } from "@doc-tools/core/render";
import { ensureOutputDir } from "@doc-tools/core/utils";

import { renderToStaticMarkup } from "react-dom/server";
import { TextBox } from "./components/TextBox.js";

console.log(getGreeting("CVGen"));

const outputDir = await ensureOutputDir("cvgen");
const htmlOutputPath = join(outputDir, "test.html");
const pdfOutputPath = join(outputDir, "test.pdf");
console.log(htmlOutputPath);

// const htmlContent = "<html><h1>Hello world!</h1></html>";

const htmlContent = renderToStaticMarkup(
  <TextBox text="Hello React" />,
);
renderHtml(htmlContent, htmlOutputPath);
renderPdf(htmlContent, pdfOutputPath);
