import { JobData } from "../types.js";
import { Dates } from "./Dates.js";

export function Job({ title, company, location, dates, bullets }: JobData) {
  return (
    <div className="job">
      <div>{title}</div>
      <div>{company}</div>
      {location && <div>{location}</div>}
      <Dates {...dates} />

      {bullets?.length && (
        <ul>
          {bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
