import React from "react";
import { ButtonView } from "@components/common/button";
import Image from "@components/common/Image";
import Truncate from "react-truncate";
import Animation from "@components/common/Animation";

const ProjectsSection = React.memo(({ data = [] }) => {
  return (
    <div className="section projects-section">
      <div className="container">
        <div className="projects-section-row">
          {data.map((project, index) => (
            <div className="projects-section__block" key={index}>
              <div className={`block-project`}>
                <div className="block-project__images">
                  <div>
                    <div className="background">
                      {project.attributes.projectImage.data && (
                        <Image
                          src={
                            project.attributes.projectImage.data.attributes.url
                          }
                          width={350}
                          height={250}
                          alt={project.attributes.projectImage.projectName}
                          className="background-img"
                          priority
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="block-project__content">
                  <a href={project.attributes.slug}>
                    <h2>{project.attributes.portfolioName}</h2>
                  </a>
                  <div className="block-project__content-desc">
                    {project.attributes.projectTags?.map((val, index) => (
                      <span key={index}>{val.tagName}, </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="projects-section__block  empty">
            <div className="background">
              <p>See more of our works on our portfolio vault.</p>
              <button className="solid-button">See our Portfolio</button>
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
