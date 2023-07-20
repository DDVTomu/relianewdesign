import Link from "next/link";
import styles from "./PortfolioReadMore.module.scss";
import CloudImg from "../Image";

const PorfolioReadMore = ({ portfolios = [] }) => {
  return (
    <div className={styles.list}>
      {portfolios.map((itm, index) => (
        <Link key={index} href={`${"/portfolio/"}${itm.attributes.slug}`}>
          <div className={styles.box_media}>
            <div className={styles.box_media__title}>
              {itm.attributes.portfolioName}
            </div>
            <div className={styles.box_media__img}>
              {itm.attributes.projectImage.data ? (
                <CloudImg
                  src={itm.attributes.projectImage.data.attributes.url}
                  width={734}
                  height={574}
                  layout="intrinsic"
                  quality={100}
                />
              ) : (
                ""
              )}
            </div>
            <div className={styles.box_media__content}>
              <div className={styles.box_media__name}>
                {itm.attributes.projectName}
                <span> {itm.attributes.country}</span>
              </div>
              <div className={styles.box_media__tags}>
                {itm.attributes.projectTags.map((tag, key) => (
                  <span key={`${index}-${key}`}>{tag.tagName}</span>
                ))}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PorfolioReadMore;
