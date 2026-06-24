import { JobData } from "../types.js";
import { Row } from "./Row.js";
import { Dates } from "./Dates.js";

export function Job({ title, company, location, dates, bullets }: JobData) {
  return (
    <div className="job">
      <Row>
        <div>{title}</div>
        <Dates {...dates} />
      </Row>

      <div>{company}</div>
      {location && <div>{location}</div>}

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
