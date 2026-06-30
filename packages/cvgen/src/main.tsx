import path from "node:path";
import fs from "node:fs";
import YAML from "yaml";
import { renderToStaticMarkup } from "react-dom/server";

import { CvData } from "./types.js";
import { renderHtml, renderPdf, ensureOutputDir, getDir } from "@doc-tools/core";
import { parseCli } from "./cli.js";
import { CV } from "./components/CV.js";

function loadCvYaml(cvPath: string): CvData {
  const file = fs.readFileSync(cvPath, "utf-8");
  return YAML.parse(file);
}

function loadStyles(styleKinds: string[]) {
  const styles = ["base", ...styleKinds];
  return styles
    .map((name) => fs.readFileSync(path.join(__dirname, `styles/${name}.css`), "utf8"))
    .join("\n");
}

// console.log(getGreeting("CVGen"));

const __dirname = getDir(import.meta.url);

const options = parseCli();
console.log(options);

const css = loadStyles([options.theme]);
const cv = loadCvYaml(options.input);

const outputDir = await ensureOutputDir("cvgen");
const htmlOutputPath = path.join(outputDir, "test.html");
const pdfOutputPath = path.join(outputDir, "test.pdf");

const htmlContent = renderToStaticMarkup(<CV css={css} cv={cv} />);
renderHtml(htmlContent, htmlOutputPath);
renderPdf(htmlContent, pdfOutputPath);
