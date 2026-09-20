import type { ReactNode } from "react";

type SectionProps = {
  title?: string;
  id?: string;
  children: ReactNode;
};

export function Section({ title, id, children }: SectionProps) {
  return (
    <div className="section" id={id}>
      {title && <div className="title">{title}</div>}
      {children}
    </div>
  );
}
