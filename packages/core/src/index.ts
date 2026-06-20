export function getGreeting(name: string): string {
  return `Hello, ${name} from core`;
}

export { renderHtml, renderPdf } from "./render.js";
export { ensureOutputDir } from "./utils.js";
export { Document } from "./components/Document.js";
