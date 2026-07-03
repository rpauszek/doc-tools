import { CvData } from "../types.js";

import { Document } from "@doc-tools/core";
import { TestIcon } from "./TestIcon.js";
import { SideBar } from "./SideBar.js";
import { Section } from "./Section.js";
import { Header } from "./Header.js";
import { ContactEntry } from "./ContactEntry.js";
import { Job } from "./Job.js";
import { Education } from "./Education.js";

type CVProps = {
  css: string;
  cv: CvData;
};

export function CV({ css, cv }: CVProps) {
  return (
    <Document css={css}>
      <SideBar>
        <Section>
          {cv.contact.map((contact, i) => (
            <ContactEntry key={i} {...contact} />
          ))}
        </Section>
        <Section title="Education">
          {cv.education.map((edu, i) => (
            <Education key={i} {...edu} />
          ))}
        </Section>
      </SideBar>

      <Header name={cv.name} tagline={cv.tagline} />

      <Section title="Professional Experience">
        {cv.experience.map((job, i) => (
          <Job key={i} {...job} />
        ))}
      </Section>

      <TestIcon />
    </Document>
  );
}
