import { Children, Fragment, ReactNode } from "react";

type RowProps = {
  gap?: number;
  delimiter?: string;
  children: ReactNode;
};

export function Row({ gap = 8, delimiter = "", children }: RowProps) {
  const items = Children.toArray(children).map((child, i) => (
    <Fragment key={i}>
      {i > 0 && <span className="delimiter">{delimiter}</span>}
      {child}
    </Fragment>
  ));

  return <div style={{ display: "flex", alignItems: "center", gap: gap }}>{items}</div>;
}
