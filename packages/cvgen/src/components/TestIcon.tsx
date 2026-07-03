import { icons } from "../icons.js";

export function TestIcon() {
  const Icon = icons["python"];

  return (
    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
      <Icon />
      <span>Python</span>
    </div>
  );
}
