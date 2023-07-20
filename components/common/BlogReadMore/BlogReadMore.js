import Link from "next/link";
import styles from "./BlogReadMore.module.scss";
import CloudImg from "../Image";
import FormatDate from "../FormatDate/FormatDate";
const BlogReadMore = ({ expertises }) => {
  return (
    <section className={styles.expertise}>
      <div className={` ${"container"} ${styles.expertise__container}`}>
        <h1>Read more articles</h1>
        <div className={styles.expertise__post_grid}>
          {expertises.items.map((item, key) => (
            <div
              key={`${key}`}
              className={styles.expertise__post}
            >
              <Link href={`/blog/${item.slug}`} prefetch={false}>
                <h2>{item.title}</h2>
              </Link>
              <div className={styles.expertise__post_tag}>
                <p>
                  {item.category}
                  <span className={styles.expertise__date}>
                    <FormatDate dateString={item.publishedAt} />
                  </span>
                </p>
              </div>
              <div className={styles.expertise__featured_img}>
                <CloudImg
                  src={item.thumnail.url}
                  width={264}
                  height={181}
                  layout="responsive"
                  objectFit="cover"
                />
              </div>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogReadMore;
