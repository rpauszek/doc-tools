import path from "node:path";
import { mkdir } from "node:fs/promises";

import { workspaceRoot } from "./paths.js";

/**
 * Ensures a directory exists inside the workspace output folder.
 *
 * @param subDir Optional subdirectory inside /output
 * @returns Absolute path to the created output directory
 */
export async function ensureOutputDir(subDir?: string) {
  const outputDir = path.join(workspaceRoot, "output", subDir ?? "");
  await mkdir(outputDir, { recursive: true });
  return outputDir;
}
