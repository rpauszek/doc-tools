import React from "react";

export function SideBar(props: React.PropsWithChildren) {
  return <div className="sidebar">{props.children}</div>;
}
