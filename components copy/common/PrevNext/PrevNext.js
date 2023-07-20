import Link from "next/link";
import styles from "./PrevNext.module.scss";

function convertPrevNext(item) {
  const attributes = item?.attributes;
  const title = attributes?.title;
  const category = attributes?.category?.data?.attributes?.name;
  const slug = attributes?.slug;
  const index = item?.id;
  return { ...attributes, category, slug, index, title };
}

const PrevNext = ({ blogToggle }) => {
  const prev = convertPrevNext(blogToggle.prevBlog.data[0]);
  const next = convertPrevNext(blogToggle.nextBlog.data[0]);
  return (
    <div className="container">
      <div className={styles.article__contents}>
        <nav
          className="navigation post-navigation"
          role="navigation"
          aria-label="Posts"
        >
          <div className={`${styles.article__nav} ${"nav-links"}`}>
            <div className="nav-previous">
              <Link href={`/blog/${prev.slug || ""}`}>
                <div className={styles.article__button}>
                  <h3>{prev.title}</h3>
                  {prev.slug ? <span>Prev Post</span> : ""}
                </div>
              </Link>
            </div>
            <div className={`${styles.article__nav_next}  ${"nav-next"}`}>
              <Link href={`/blog/${next.slug || ""}`}>
                <div className={styles.article__button}>
                  <h3>{next.title}</h3>
                  {next.slug ? <span>Next Post</span> : ""}
                </div>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default PrevNext;
