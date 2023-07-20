import Link from "next/link";
import styles from "./PorfolioList.module.scss";
import CloudImg from "../Image";
const PorfolioList = ({ portfolios = [] }) => {
  return (
    <div className={styles.list}>
      {portfolios.data.map((itm, index) => (
        <Link href={`/portfolio/${itm.attributes.slug}`} key={index}>
          <a className={styles.box_media}>
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
                {itm.attributes.projectTags.map((tag, index) => (
                  <span key={index}>{tag.tagName}</span>
                ))}
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default PorfolioList;
