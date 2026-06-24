interface ContactItem {
  type: "email | phone | location | website | linkedin | github | gitlab ";
  display: string;
  icon: string;
  link?: string;
}

interface Dates {
  start: string;
  end?: string; // undefined means present
}

interface EducationData {
  degree: string;
  institution: string;
  location: string;
  dates: Dates;
}

export interface JobData {
  title: string;
  company: string;
  location?: string;
  dates: Dates;
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
