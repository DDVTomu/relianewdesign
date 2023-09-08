import React from "react";
import { ButtonView } from "@components/common/button";
import Image from "@components/common/Image";
import Truncate from "react-truncate";
import Animation from "@components/common/Animation";
import projects from "./projects.module.scss";
const ProjectsSection = React.memo(({ data = [] }) => {
  return (
    <div className={`section ${projects.section}`}>
      <div className="container">
        <div className={projects.section_row}>
          {data.map((project, index) => (
            <div className={projects.section_block} key={index}>
              <div className={projects.block}>
                <div className={projects.block_images}>
                  <div>
                    <div className={projects.background}>
                      {project.attributes.projectImage.data && (
                        <Image
                          src={
                            project.attributes.projectImage.data.attributes.url
                          }
                          width={350}
                          height={250}
                          alt={
                            project.attributes.projectImage.projectName ||
                            project.attributes.portfolioName
                          }
                          className="background-img"
                          priority
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className={projects.block_content}>
                  <a href={`/portfolio/${project.attributes.slug}`}>
                    <h2>{project.attributes.portfolioName}</h2>
                  </a>
                  <div className={projects.block_content_desc}>
                    {project.attributes.projectTags?.map((val, index) => (
                      <span key={index}>{val.tagName}, </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className={`${projects.section_block}  empty`}>
            <div className={projects.background}>
              <p>See more of our works on our portfolio vault.</p>
              <a href="/portfolio" className="solid-button">
                See our Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container">
        <div className="text-center">
          <p className="title">We have much more!</p>
          <p>
            <a href="/portfolio"
              className="btn"
            >
              See projects
            </a>
          </p>
        </div>
      </div> */}
    </div>
  );
});
export default ProjectsSection;
