import React from "react"
import Image from "@components/common/Image";
import projects from "./projects.module.scss"

const ProjectsSection = React.memo(({ data = [] }) => {
  return (
    <div className={projects.section}>
      <div className="container">
        <div className={projects.section_row}>
          {data.map((project, index) => (
            <div className={projects.section_block} key={index}>
              <div className={projects.block}>
                <div className={projects.block_images}>
                  <a
                    href={`/portfolio/${project.attributes.slug}`}
                    className={projects.background}
                  >
                    {project.attributes.projectImage.data && (
                      <Image
                        src={
                          project.attributes.projectImage.data.attributes.url
                        }
                        width={project.attributes.projectImage.data.attributes.width}
                        height={project.attributes.projectImage.data.attributes.height}
                        alt={
                          project.attributes.projectImage.projectName ||
                          project.attributes.portfolioName
                        }
                        className="background-img"
                        priority
                      />
                    )}
                  </a>
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
        </div>
        <div className={projects.more}>
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
