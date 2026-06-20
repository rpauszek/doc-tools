import React from "react";
import type { ReactNode } from "react";
import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

type DocumentProps = {
  css: string;
  children: ReactNode;
};

export function Document({ css, children }: DocumentProps) {
  const baseCss = path.join(__dirname, "../styles/base.css");
  const cssBase = fs.readFileSync(baseCss, "utf8");
  const finalCss = [cssBase, css].filter(Boolean).join("\n");

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <style>{finalCss}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
