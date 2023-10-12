import Link from "next/link";
import styles from "./PorfolioList.module.scss";
import CloudImg from "../Image";
const PorfolioList = ({ portfolios = [] }) => {
  return (
    <div className="section portfolio-section">
      <div className="container">
        <div className="portfolio-section-row">
          {portfolios.map((project, index) => (
            <div className="portfolio-section__block" key={index}>
              <div className={`block-project`}>
                <div className="block-project__images">
                  <div>
                    <div className="background">
                      {project.attributes.projectImage.data && (
                        <CloudImg
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
                  <a href={`/portfolio/${project.attributes.slug}`}>
                    <h2>{project.attributes.portfolioName}</h2>
                  </a>
                  <div className="block-project__content-desc">
                    <p>{project.attributes.heroBanner.projectDescription}</p>
                    {project.attributes.projectTags?.map((val, index) => (
                      <span key={index}>{val.tagName}, </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* <div className="portfolio-section__block  empty">
            <div className="background">
              <p>See more of our works on our portfolio vault.</p>
              <button className="solid-button">See our Portfolio</button>
            </div>
          </div> */}
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
};

export default PorfolioList;
