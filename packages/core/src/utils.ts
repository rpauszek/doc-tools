import { dirname, resolve, join } from "node:path";
import { fileURLToPath } from "node:url";
import { mkdir } from "node:fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Absolute path to the monorepo root directory.
 * Computed relative to this module location.
 */
export const workspaceRoot = resolve(__dirname, "../../..");

/**
 * Ensures a directory exists inside the workspace output folder.
 *
 * @param subDir Optional subdirectory inside /output
 * @returns Absolute path to the created output directory
 */
export async function ensureOutputDir(subDir?: string) {
  const outputDir = join(workspaceRoot, "output", subDir ?? "");
  await mkdir(outputDir, { recursive: true });
  return outputDir;
}
