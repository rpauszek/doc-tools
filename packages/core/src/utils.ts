import path from "node:path";
import { fileURLToPath } from "node:url";
import { mkdir } from "node:fs/promises";

export function getDir(metaUrl: string) {
  const __filename = fileURLToPath(metaUrl);
  const __dirname = path.dirname(__filename);
  return __dirname;
}

/**
 * Ensures a directory exists inside the workspace output folder.
 *
 * @param subDir Optional subdirectory inside /output
 * @returns Absolute path to the created output directory
 */
export async function ensureOutputDir(subDir?: string) {
  const workspaceRoot = path.resolve(getDir(import.meta.url), "../../.."); // monorepo root
  const outputDir = path.join(workspaceRoot, "output", subDir ?? "");
  await mkdir(outputDir, { recursive: true });
  return outputDir;
}
