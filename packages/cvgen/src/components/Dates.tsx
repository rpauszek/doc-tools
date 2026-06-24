import { DatesRange } from "../types.js";

export function Dates({ start, end }: DatesRange) {
  return (
    <div>
      {start} — {end ?? "present"}
    </div>
  );
}
