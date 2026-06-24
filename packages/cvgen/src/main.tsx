import path from "node:path";
import fs from "node:fs";
import YAML from "yaml";

import { CvData } from "./types.js";
import {
  getGreeting,
  renderHtml,
  renderPdf,
  ensureOutputDir,
  getDir,
  Document,
} from "@doc-tools/core";

import { renderToStaticMarkup } from "react-dom/server";
import { TextBox } from "./components/TextBox.js";
import { TestIcon } from "./components/TestIcon.js";
import { SideBar } from "./components/sections/SideBar.js";
import { Header } from "./components/sections/Header.js";

function loadCvYaml(cvPath: string): CvData {
  const file = fs.readFileSync(cvPath, "utf-8");
  return YAML.parse(file);
}

function loadStyles(styleKinds: string[]) {
  const styles = ["base", ...styleKinds];
  return styles
    .map((name) =>
      fs.readFileSync(path.join(__dirname, `styles/${name}.css`), "utf8")
    )
    .join("\n");
}

// console.log(getGreeting("CVGen"));

const __dirname = getDir(import.meta.url);
const css = loadStyles(["modern"]);
const cv = loadCvYaml(path.join(__dirname, "assets/input/cv.yml"));
console.log(cv)

const outputDir = await ensureOutputDir("cvgen");
const htmlOutputPath = path.join(outputDir, "test.html");
const pdfOutputPath = path.join(outputDir, "test.pdf");

const htmlContent = renderToStaticMarkup(
  <Document css={css}>
    <SideBar text="this is my sidebar text" />
    <Header name={cv.name} tagline={cv.tagline} />
    <TextBox text="Hello React" />
    <TestIcon />
  </Document>,
);
renderHtml(htmlContent, htmlOutputPath);
renderPdf(htmlContent, pdfOutputPath);
