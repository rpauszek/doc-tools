import React from "react";
import type { ReactNode } from "react";

type DocumentProps = {
  css: string;
  children: ReactNode;
};

export function Document({ css, children }: DocumentProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <style>{css}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}