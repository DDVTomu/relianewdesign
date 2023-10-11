import dynamic from "next/dynamic";
import React, { useState, useEffect, useRef } from "react";
const Tabs = dynamic(
  import("react-tabs").then((mod) => mod.Tabs),
  { ssr: false }
);
import { Tab, TabList, TabPanel } from "react-tabs";
import Link from "next/link";
import styles from "./BlogMain.module.scss";
import IconArrowRight from "@components/common/Icon/IconArrowRight";
import CloudImg from "../Image";
import FormatDate from "@components/common/FormatDate/FormatDate";
import _ from "lodash";

const BlogMain = ({
  expertises = [],
  total,
  blogs = [],
  totalBlogsData,
  pagedBlogs,
  pagedAllBlogs,
}) => {
  const [data, setData] = useState([]);
  const [bigData, setBigData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(2);

  const getAllBlogs = (pageNum) => {
    const getBlogs = pagedAllBlogs
      .filter((o) => o.page === pageNum)
      .map((x) => x.data);
    getBlogs.map((blog) => setBigData((current) => [...current, ...blog]));
  };

  const getCatBlogs = (pageNum) => {
    pagedBlogs.map((expert) =>
      setData((current) => [
        ...current,
        ...expert.items
          .filter((o) => o.page === pageNum)
          .map((x) => ({
            expert: expert.expert,
            items: x.data,
          })),
      ])
    );
  };

  const initFetchData = () => {
    getAllBlogs(1);
    getCatBlogs(1);
    setPage(page + 1);
  };

  const fetchData = () => {
    setLoading(true);
    setError(null);
    try {
      if (bigData?.length < total) {
        getAllBlogs(page);
      }

      setData((currentData) => {
        const newData = currentData.map((item) => {
          const expertExists = pagedBlogs.some(
            (blogsItem) => item.expert === blogsItem.expert
          );

          if (expertExists) {
            const addedItemsSet = new Set(item.items.map((x) => x.title)); // Store existing item IDs in a Set

            pagedBlogs.forEach((blogsItem) => {
              if (item.expert === blogsItem.expert) {
                blogsItem.items
                  .filter((o) => o.page === page)
                  .forEach((x) => {
                    // Iterate through the filtered items
                    x.data.forEach((dataItem) => {
                      if (!addedItemsSet.has(dataItem.title)) {
                        // Check if the dataItem ID is not already added
                        item.items.push(dataItem); // Add the unique dataItem to the item.items array
                      }
                    });
                  });
              }
            });
          }

          return item; // Return the item whether it was modified or not
        });

        // Handle the case where the expert doesn't exist in the currentData
        pagedBlogs.forEach((blogsItem) => {
          const expertExists = newData.some(
            (item) => item.expert === blogsItem.expert
          );
          if (!expertExists) {
            newData.push(blogsItem);
          }
        });

        return newData;
      });
      setPage(page + 1);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const handleScroll = () => {
    const blogMain = document.getElementById("blog-main");
    if (
      document.documentElement.scrollTop >= blogMain.offsetHeight ||
      loading
    ) {
      fetchData();
    }
  };

  useEffect(() => {
    initFetchData();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);
  return (
    <section className={styles.expertise}>
      <div className={` ${"container"} ${styles.expertise__container}`}>
        <div className={styles.expertise__inner}>
          <div className={styles.expertise__content}>
            <Tabs>
              <TabList className={styles.expertise__tab_list}>
                <Tab className={styles.expertise__tab_item}>
                  <div
                    className={` ${"blog_tab"} ${styles.expertise__tab_title}`}
                  >
                    All ({total})
                  </div>
                </Tab>
                {data.map?.((expertise, index) => (
                  <Tab key={`${index}`} className={styles.expertise__tab_item}>
                    <div
                      className={` ${"blog_tab"} ${
                        styles.expertise__tab_title
                      }`}
                    >
                      {expertise.expert} (
                      {expertises
                        .filter((o) => o.expert === expertise.expert)
                        .map((x) => x.items.length)}
                      )
                    </div>
                  </Tab>
                ))}
              </TabList>
              <div id="blog-main">
                <TabPanel className={styles.expertise__post_grid}>
                  <>
                    {" "}
                    {bigData.map?.((item, index) => (
                      <Link
                        href={`/blog/${item.attributes.slug}`}
                        prefetch={false}
                        key={`${index}`}
                      >
                        <a className={styles.expertise__post}>
                          <h2>{item.attributes.title}</h2>

                          <div className={styles.expertise__post_tag}>
                            <p key={index}>
                              {item.attributes.category.data
                                ? item.attributes.category.data.attributes.name
                                : ""}
                              <span className={styles.expertise__date}>
                                <FormatDate
                                  dateString={item.attributes.publishedAt}
                                />
                              </span>
                            </p>
                          </div>
                          <div className={styles.expertise__featured_img}>
                            <CloudImg
                              src={
                                item.attributes.thumnail.data?.attributes?.url
                              }
                              width={
                                item.attributes.thumnail.data?.attributes?.width
                              }
                              height={
                                item.attributes.thumnail.data?.attributes
                                  ?.height
                              }
                              alt={
                                item.attributes.thumnail.data?.attributes
                                  ?.alternativeText || "Relia Blog Img"
                              }
                              layout="responsive"
                              objectFit="cover"
                            />
                          </div>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: item.attributes.description,
                            }}
                          />
                          {/* <p>{item.attributes.description}</p> */}
                        </a>
                      </Link>
                    ))}{" "}
                    {loading ? (
                      <>
                        <div className="loader-container">
                          <div className="spinner"></div>
                        </div>
                      </>
                    ) : (
                      ""
                    )}
                  </>
                </TabPanel>
              </div>

              {data.map?.((expertise, index) => (
                <div id="blog-main">
                  <TabPanel key={index} className={styles.expertise__post_grid}>
                    {expertise.items.map((item, subIndex) => (
                      <Link
                        href={`/blog/${item.slug}`}
                        prefetch={false}
                        key={`${index}-${subIndex}`}
                      >
                        <a className={styles.expertise__post}>
                          <h2>{item.title}</h2>
                          <div className={styles.expertise__post_tag}>
                            <p key={index}>
                              {expertise.expert}
                              <span className={styles.expertise__date}>
                                <FormatDate dateString={item.publishedAt} />
                              </span>
                            </p>
                          </div>
                          <div className={styles.expertise__featured_img}>
                            <CloudImg
                              src={item.thumnail.url}
                              width={item.thumnail.width}
                              height={item.thumnail.height}
                              alt={
                                item.thumnail.alternativeText
                                  ? item.thumnail.alternativeText
                                  : "blog thumnail"
                              }
                              layout="responsive"
                              objectFit="cover"
                            />
                          </div>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: item.description,
                            }}
                          />
                        </a>
                      </Link>
                    ))}
                  </TabPanel>
                </div>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogMain;
