import { JobData } from "../types.js";

export function Job({ title, company, location, bullets }: JobData) {
  return (
    <div className="job">
      <div>{title}</div>
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
