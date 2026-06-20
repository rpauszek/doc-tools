import { execSync } from "node:child_process";
import fg from "fast-glob";
import fs from "node:fs";
import path from "node:path";

const inputDir = "packages/cvgen/assets/icons";
const outputDir = "packages/cvgen/src/generated/icons";
const barrelFile = "packages/cvgen/src/icons.ts";

// 1. Find icons
const svgFiles = await fg(`${inputDir}/*.svg`);

if (svgFiles.length === 0) {
  console.log("No SVGs found");
  process.exit(0);
}

// 2. Optimize SVGs in-place
execSync(`pnpm svgo -f ${inputDir} -o ${inputDir}`, {
  stdio: "inherit",
});

// 3. Generate React components (NO index file)
execSync(
  `pnpm exec svgr ${inputDir} --out-dir ${outputDir} --typescript --icon --no-index`,
  { stdio: "inherit" }
);

// 4. Generate barrel file
// SVGR auto-generated index.ts is old CommonJS style, do this custom to match ES module style
const imports = svgFiles.map((file) => {
  const basename = path.basename(file, ".svg");
  const name = basename.charAt(0).toUpperCase() + basename.slice(1)
  const componentName =
    name + "Icon";

  return `export { default as ${componentName} } from "./generated/icons/${name}.js";`;
});

fs.writeFileSync(barrelFile, imports.join("\n") + "\n");

console.log(`✅ Generated ${svgFiles.length} icons + icons.ts`);