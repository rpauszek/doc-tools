import { EducationData } from "../types.js";
import { Dates } from "./Dates.js";

export function Education({ degree, institution, location, dates }: EducationData) {
  return (
    <div>
      <div>{degree}</div>
      <div>{institution}</div>
      <div>{location}</div>
      <Dates {...dates} />
    </div>
  );
}
