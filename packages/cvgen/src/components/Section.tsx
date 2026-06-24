import type { ReactNode } from "react";

type SectionProps = {
  title: string;
  children: ReactNode;
};

export function Section({ title, children }: SectionProps) {
  return (
    <div className="section">
      <div className="title">{title}</div>
      {children}
    </div>
  );
}
