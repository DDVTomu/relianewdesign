import Link from "next/link";
import styles from "./PortfolioReadMore.module.scss";
import CloudImg from "../Image";

const PorfolioReadMore = ({ portfolios = [] }) => {
  console.log(portfolios);
  return (
    // <div className={styles.list}>
    //   {portfolios.map((itm, index) => (
    //     <Link key={index} href={`${"/portfolio/"}${itm.attributes.slug}`}>
    //       <div className={styles.box_media}>
    //         <div className={styles.box_media__title}>
    //           {itm.attributes.portfolioName}
    //         </div>
    //         <div className={styles.box_media__img}>
    //           {itm.attributes.projectImage.data ? (
    //             <CloudImg
    //               src={itm.attributes.projectImage.data.attributes.url}
    //               width={734}
    //               height={574}
    //               layout="intrinsic"
    //               quality={100}
    //             />
    //           ) : (
    //             ""
    //           )}
    //         </div>
    //         <div className={styles.box_media__content}>
    //           <div className={styles.box_media__name}>
    //             {itm.attributes.projectName}
    //             <span> {itm.attributes.country}</span>
    //           </div>
    //           <div className={styles.box_media__tags}>
    //             {itm.attributes.projectTags.map((tag, key) => (
    //               <span key={`${index}-${key}`}>{tag.tagName}</span>
    //             ))}
    //           </div>
    //         </div>
    //       </div>
    //     </Link>
    //   ))}
    // </div>
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
        </div>
      </div>
    </div>
  );
};

export default PorfolioReadMore;
