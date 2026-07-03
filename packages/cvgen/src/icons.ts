import { default as EmailIcon } from "./assets/icons/generated/Email.js";
import { default as GithubIcon } from "./assets/icons/generated/Github.js";
import { default as GitlabIcon } from "./assets/icons/generated/Gitlab.js";
import { default as LinkedinIcon } from "./assets/icons/generated/Linkedin.js";
import { default as LocationIcon } from "./assets/icons/generated/Location.js";
import { default as OrcidIcon } from "./assets/icons/generated/Orcid.js";
import { default as PhoneIcon } from "./assets/icons/generated/Phone.js";
import { default as PythonIcon } from "./assets/icons/generated/Python.js";
import { default as WebsiteIcon } from "./assets/icons/generated/Website.js";

const icons = {
  email: EmailIcon,
  github: GithubIcon,
  gitlab: GitlabIcon,
  linkedin: LinkedinIcon,
  location: LocationIcon,
  orcid: OrcidIcon,
  phone: PhoneIcon,
  python: PythonIcon,
  website: WebsiteIcon,
} as const;

export { icons };
export type IconName = keyof typeof icons;
