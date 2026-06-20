import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Absolute paths computed relative to this module location
 */
export const workspaceRoot = path.resolve(__dirname, "../../..");  // monorepo root
export const packagesRoot = path.resolve(__dirname, "../..");
