import { icons } from "../icons.js";
import { ContactItem } from "../types.js";
import { Row } from "./Row.js";

export function ContactEntry({ type, display }: ContactItem) {
  const Icon = icons[type];

  return (
    <div className="contact-entry">
      <Row gap={4}>
        <Icon />
        <div>{display}</div>
      </Row>
    </div>
  );
}
