import React from "react";
import Animation from "@components/common/Animation";
import dataTechStack from "../data/dataTechStack";
import ExportedImage from "next/image";
import intro from "./intro.module.scss";
const IntroSection = React.memo(() => {
  return (
    <div className={intro.section}>
      <div className="container">
        <div>
          <div className={intro.section_row}>
            <div className={intro.section_desc}>
              <h2>At Relia we are</h2>
              <div className={intro.section_desc_row}>
                <div className={intro.section_desc_col}>
                  <h3>People-first</h3>
                  <p>
                    Our core principles of quality, authenticity and agility to
                    ensure successful project execution.
                  </p>
                </div>
                <div className={intro.section_desc_col}>
                  <h3>Focused</h3>
                  <p>
                    Deep Domain Experts, Robust Architecture, Flawless Design,
                    Effective Code, Wider Technology Stacks
                  </p>
                </div>
                <div className={intro.section_desc_col}>
                  <h3>Effortless</h3>
                  <p>
                    Daily communicate with the whole team not just the team
                    lead.
                  </p>
                </div>
                <div className={intro.section_desc_col}>
                  <h3>Agile</h3>
                  <p>
                    Agile approach to keep pace between speed and quality of
                    deliverables.
                  </p>
                </div>
              </div>
            </div>
            <div className={intro.section_code}>
              <ExportedImage
                className={intro.section_code_image}
                src="/images/undraw_devices_re_dxae.svg"
                width={179}
                height={109}
              />
              <div className={intro.section_code_techbox}>
                <h3>Tech Stack</h3>
                <p>{`<today-tomorrow-beyond>`}</p>
                {dataTechStack.map((tech, index) => (
                  <span style={{ color: tech.color }} key={index}>
                    {index > 0 && <>, </>}
                    {tech.title}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
export default IntroSection;
