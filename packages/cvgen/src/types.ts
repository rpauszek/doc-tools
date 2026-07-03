import { IconName } from "./icons.js";

export interface ContactItem {
  type: IconName;
  display: string;
  icon: string;
  link?: string;
}

export interface DatesRange {
  start: string;
  end?: string; // undefined means present
}

export interface EducationData {
  degree: string;
  institution: string;
  location: string;
  dates: DatesRange;
}

export interface JobData {
  title: string;
  company: string;
  location?: string;
  dates: DatesRange;
  bullets?: string[];
}

interface SkillsCategory {
  category: string;
  useIcons?: boolean;
  items: string[];
}

export interface CvData {
  name: string;
  tagline?: string;
  contact: ContactItem[];
  summary?: string;
  education: EducationData[];
  experience: JobData[];
  skills: SkillsCategory[];
}
