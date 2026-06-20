import path from "node:path";
import fs from "node:fs";

import { getGreeting } from "@doc-tools/core";
import { renderHtml, renderPdf } from "@doc-tools/core/render";
import { ensureOutputDir, packagesRoot } from "@doc-tools/core/utils";
import { Document } from "@doc-tools/core";

import { renderToStaticMarkup } from "react-dom/server";
import { TextBox } from "./components/TextBox.js";
import { TestIcon } from "./components/TestIcon.js";
import { SideBar } from "./components/sections/SideBar.js";

console.log(getGreeting("CVGen"));

const cssBaseFile = path.join(packagesRoot, "cvgen/src/styles/base.css");
const css = fs.readFileSync(cssBaseFile, "utf8");

const outputDir = await ensureOutputDir("cvgen");
const htmlOutputPath = path.join(outputDir, "test.html");
const pdfOutputPath = path.join(outputDir, "test.pdf");
console.log(htmlOutputPath);

const htmlContent = renderToStaticMarkup(
  <Document css={css}>
    <SideBar text="this is my sidebar text" />
    <TextBox text="Hello React" />
    <TestIcon />
  </Document>
);
renderHtml(htmlContent, htmlOutputPath);
renderPdf(htmlContent, pdfOutputPath);
