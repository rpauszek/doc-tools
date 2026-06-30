import path from "node:path";
import { Command } from "commander";
import { getDir } from "@doc-tools/core";

interface CliOptions {
  input: string;
  theme: string;
}

export function parseCli(): CliOptions {
  const app = new Command();

  app
    .name("cvgen")
    .description("Generate a CV PDF from YAML input")
    .option("-i, --input <path>", "Path to input YAML file")
    .option("-t, --theme <name>", "Layout theme", "modern")
    .allowUnknownOption(false);

  app.parse();

  const options = app.opts();

  const __dirname = getDir(import.meta.url);
  const defaultInputPath = path.join(__dirname, "assets/input/cv.yml");

  return {
    input: options.input ?? defaultInputPath,
    theme: options.theme,
  };
}
