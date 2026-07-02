import { JobData } from "../types.js";
import { Row } from "./Row.js";
import { Dates } from "./Dates.js";

export function Job({ title, company, location, dates, bullets }: JobData) {
  return (
    <div className="job">
      <div className="header">
        <Dates {...dates} />
        <div className="title">{title}</div>
        <Row delimiter="|">
          <div>{company}</div>
          {location && <div>{location}</div>}
        </Row>
      </div>

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
