import { ContactItem } from "../types.js";
import { Row } from "./Row.js";

export function ContactEntry({ type, display }: ContactItem) {
  return (
    <Row>
      <div>{type}</div>
      <div>{display}</div>
    </Row>
  );
}
