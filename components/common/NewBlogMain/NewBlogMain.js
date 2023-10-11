import { getPageAPI, getCatAPI } from "lib/api";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import IconArrowRight from "@components/common/Icon/IconArrowRight";
import CloudImg from "@components/common/Image";
import FormatDate from "@components/common/FormatDate/FormatDate";
import _, { forEach, min } from "lodash";
import styles from "./blog.module.scss";

const Pagination = ({ meta, handleChangePage, page }) => {
  const minLength =
    page >= 3 ? (page == meta.pageCount ? meta.pageCount : page + 1) : 3;
  return (
    <>
      {page == 1 ? (
        ""
      ) : (
        <button onClick={() => handleChangePage(page - 1)}>{"<<"}</button>
      )}
      {meta.pageCount > 3 ? (
        <>
          {Array.from({ length: minLength }, (_, i) => (
            <button
              key={i}
              // You can use className here to style the active page if needed
              className={i === page - 1 ? styles.paginate_current : ""}
              onClick={() => handleChangePage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          {page == meta.pageCount - 1 ? (
            ""
          ) : page == meta.pageCount ? (
            ""
          ) : (
            <>
              <span>...</span>{" "}
            </>
          )}

          {page == meta.pageCount - 1 ? (
            ""
          ) : page == meta.pageCount ? (
            ""
          ) : (
            <button
              // You can use className here to style the active page if needed
              className={page === meta.pageCount ? styles.paginate_current : ""}
              onClick={() => handleChangePage(meta.pageCount)}
            >
              {meta.pageCount}
            </button>
          )}
        </>
      ) : (
        <>
          {Array.from({ length: meta.pageCount }, (_, i) => (
            <button
              key={i}
              // You can use className here to style the active page if needed
              className={i === page - 1 ? styles.paginate_current : ""}
              onClick={() => handleChangePage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </>
      )}

      {page == meta.pageCount ? (
        ""
      ) : (
        <button onClick={() => handleChangePage(page + 1)}>{">>"}</button>
      )}
    </>
  );
};

const NewBlogMain = ({
  total,
  blogs = [],
  meta = [],
  category = [],
  featured = [],
}) => {
  const [page, setPage] = useState(1);
  const [catActive, setCatActive] = useState("all");
  const [aBlogs, setAllBlogs] = useState(blogs);
  const [blogMeta, setBlogMeta] = useState(meta);

  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToBlog() {
    if (!isBrowser()) return;
    const element = document.getElementById("blog-main");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  const handleChangePage = async (index) => {
    const pageData = await getPageAPI(index, catActive);
    setPage(index);
    setAllBlogs(pageData);
    scrollToBlog();
  };
  const handleChangeCategory = async (cat) => {
    const catData = await getCatAPI(cat);
    setPage(1);
    switch (cat) {
      case "all":
        setCatActive("all");
        break;
      default:
        setCatActive(cat);
        break;
    }
    setBlogMeta(catData.meta);
    setAllBlogs(catData.data);
    scrollToBlog();
  };

  return (
    <section className={styles.expertise}>
      <div className="container">
        <div className={styles.tab}>
          <div className={styles.tab_item}>
            <div
              className={` ${"blog_tab"} ${styles.tab_title} ${
                catActive === "all" ? styles.tab_title_active : ""
              }`}
              onClick={() => handleChangeCategory("all")}
            >
              Latest blogs [{total}]
            </div>
          </div>
          {category.map((cat, key) => {
            if (cat.attributes.name != "featured") {
              return (
                <div
                  className={styles.tab_item}
                  key={key}
                  onClick={() => handleChangeCategory(cat.attributes.name)}
                >
                  <div
                    className={` ${"blog_tab"} ${styles.tab_title} ${
                      catActive === cat.attributes.name
                        ? styles.tab_title_active
                        : ""
                    }`}
                  >
                    <span>{cat.attributes.name}</span>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div id="blog-main">
          <Link href={`/blog/${featured[0].attributes.slug}`} prefetch={false}>
            <a className={styles.highlight}>
              <div className={styles.highlight_img}>
                <CloudImg
                  src={featured[0].attributes.thumnail?.data.attributes.url}
                  width={featured[0].attributes.thumnail?.data.attributes.width}
                  height={
                    featured[0].attributes.thumnail?.data.attributes.height
                  }
                  alt={
                    featured[0].attributes.thumnail?.data.attributes
                      .alternativeText
                      ? featured[0].attributes.thumnail.data.attributes
                          .alternativeText
                      : "blog thumnail"
                  }
                  layout="fill"
                />
              </div>
              <div className={styles.highlight_desc}>
                <h2>{featured[0].attributes.title}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: featured[0].attributes.description,
                  }}
                />
                <div className={styles.post_tag}></div>

                <p>
                  {featured[0].attributes.author?.data?.attributes.name}
                  <span className={styles.date}>
                    <FormatDate
                      dateString={featured[0].attributes.publishedAt}
                    />
                  </span>
                </p>
              </div>
            </a>
          </Link>

          <div className={styles.list}>
            {aBlogs.map?.((item, index) => (
              <Link
                href={`/blog/${item.attributes.slug}`}
                prefetch={false}
                key={`${index}`}
              >
                <a className={styles.post}>
                  <div className={styles.post_img}>
                    <CloudImg
                      src={
                        item.attributes.thumnail?.data?.attributes?.url ||
                        item.attributes.thumnail?.url
                      }
                      alt={
                        item.attributes.thumnail?.data?.attributes
                          ?.alternativeText || "Relia Blog Img"
                      }
                      width={item.attributes.thumnail?.data?.attributes?.width}
                      height={
                        item.attributes.thumnail?.data?.attributes?.height
                      }
                      layout="fill"
                    />
                  </div>
                  <h2>{item.attributes.title}</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item.attributes.description,
                    }}
                  />
                  <div className={styles.post_tag}>
                    <p>
                      {item.attributes.author?.data?.attributes.name}
                      <span className={styles.date}>
                        <FormatDate dateString={item.attributes.publishedAt} />
                      </span>
                    </p>
                  </div>
                </a>
              </Link>
            ))}
          </div>
          <div id="pagination-numbers" className={styles.paginate}>
            <Pagination
              meta={blogMeta}
              handleChangePage={handleChangePage}
              page={page}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewBlogMain;
