import path from "node:path";
import { fileURLToPath } from "node:url";
import { mkdir } from "node:fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Absolute path to the monorepo root directory.
 * Computed relative to this module location.
 */
export const workspaceRoot = path.resolve(__dirname, "../../..");
export const packagesRoot = path.resolve(__dirname, "../..");

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
