import { execSync } from "node:child_process";
import fg from "fast-glob";
import fs from "node:fs";
import path from "node:path";

const inputDir = "packages/cvgen/src/assets/icons/svg";
const outputDir = "packages/cvgen/src/assets/icons/generated";
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
execSync(`pnpm exec svgr ${inputDir} --out-dir ${outputDir} --typescript --icon --no-index`, {
  stdio: "inherit",
});

// 4. Generate barrel file
// SVGR auto-generated index.ts is old CommonJS style, do this custom to match ES module style

function upperFirst(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

const names = svgFiles.map((file) => path.basename(file, ".svg")); // lower; python
const basenames = names.map((name) => upperFirst(name)); // upper; Python

const imports = basenames
  .map(
    (name) => `import { default as ${name + "Icon"} } from "./assets/icons/generated/${name}.js";`,
  )
  .join("\n");

const lookups = names.map((name) => `  ${name}: ${upperFirst(name) + "Icon"}`).join(",\n");
const lut = "const icons = {\n" + lookups + "\n} as const;";
const footer = ["export { icons };", "export type IconName = keyof typeof icons;"].join("\n");

fs.writeFileSync(barrelFile, [imports, lut, footer].join("\n\n") + "\n");

console.log(`✅ Generated ${svgFiles.length} icons + icons.ts`);
