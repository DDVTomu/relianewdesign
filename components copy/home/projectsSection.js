import React from "react"
import { ButtonView } from "@components/common/button"
import Image from "@components/common/Image";
import Truncate from "react-truncate"
import Animation from "@components/common/Animation"

const ProjectsSection = React.memo(({ data = [] }) => {
  return (
    <div className="projects-section">
      {data.map((project, index) => (
        <div className="projects-section__block" key={index}>
          <div
            className={`block-project ${index === 1 ? "block-project-reverse" : ""
              }`}
          >
            <div className="block-project__images">
              <Animation className="background">
                {project.attributes.projectImage.data && (
                  <Image
                    src={project.attributes.projectImage.data.attributes.url}
                    width={project.attributes.projectImage.data.attributes.width}
                    height={project.attributes.projectImage.data.attributes.height}
                    layout="intrinsic"
                    alt={project.attributes.projectImage.projectName}
                    priority
                  />
                )}

              </Animation>
            </div>
            <Animation className="block-project__content">
              <div className="block-project__logo">
                {project.attributes.brandLogo.data && (
                  <Image
                    src={project.attributes.brandLogo.data.attributes.url}
                    width={project.attributes.brandLogo.data.attributes.width}
                    height={project.attributes.brandLogo.data.attributes.height}
                    layout="intrinsic"
                    loading="lazy"
                    alt={project.attributes.portfolioName}
                  />
                )
                }
              </div>
              <h2>{project.attributes.portfolioName}</h2>
              <p>
                <Truncate lines={3}>
                  {project.attributes.projectName}
                </Truncate>
              </p>
              <ul>
                {project.attributes.projectTags?.map((val, index) => (
                  <li key={index}>{val.tagName}</li>
                ))}
              </ul>
              <Animation>
                <ButtonView
                  external
                  title="View Case Study"
                  to={`/portfolio/${project.attributes.slug}`}
                />
              </Animation>
            </Animation>
          </div>
        </div>
      ))}
      <div className="container">
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
      </div>
    </div>
  )
})
export default ProjectsSection
