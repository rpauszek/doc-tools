import { DatesRange } from "../types.js";

export function Dates({ start, end }: DatesRange) {
  return (
    <div className="dates">
      {start} — {end ?? "present"}
    </div>
  );
}
