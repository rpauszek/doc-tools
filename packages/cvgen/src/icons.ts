import { default as MailIcon } from "./assets/icons/generated/Mail.js";
import { default as PythonIcon } from "./assets/icons/generated/Python.js";

const icons = {
  mail: MailIcon,
  python: PythonIcon,
} as const;

export { icons };
export type IconName = keyof typeof icons;
