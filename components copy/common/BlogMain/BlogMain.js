import dynamic from "next/dynamic";
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
import Search from "../Search/Search";

const BlogMain = ({ expertises = [], blogs = [] }) => {
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
                    All ({blogs.length})
                  </div>
                </Tab>
                {expertises.map?.((expertise, index) => (
                  <Tab key={`${index}`} className={styles.expertise__tab_item}>
                    {expertise.items.length > 0 ? (
                      <div
                        className={` ${"blog_tab"} ${
                          styles.expertise__tab_title
                        }`}
                      >
                        {expertise.expert} ({expertise.items.length})
                      </div>
                    ) : (
                      ""
                    )}
                  </Tab>
                ))}
              </TabList>
              <TabPanel className={styles.expertise__post_grid}>
                {blogs.map?.(
                  (item, index) => (
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
                            src={item.attributes.thumnail.data?.attributes?.url}
                            // width={
                            //   item.attributes.thumnail.data?.attributes?.width
                            // }
                            // height={
                            //   item.attributes.thumnail.data?.attributes?.height
                            // }
                            width={313}
                            height={176}
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
                  )
                  // <Link
                  //   href={`/blog/${item.slug}`}
                  //   prefetch={false}
                  //   key={`${index}`}
                  // >
                  //   <a className={styles.expertise__post}>
                  //     <h2>{item.title}</h2>

                  //     <div className={styles.expertise__post_tag}>
                  //       <p key={index}>
                  //         {item.category ? item.category : ""}
                  //         <span className={styles.expertise__date}>
                  //           <FormatDate dateString={item.publishedAt} />
                  //         </span>
                  //       </p>
                  //     </div>
                  //     <div className={styles.expertise__featured_img}>
                  //       <CloudImg
                  //         src={item.thumnail}
                  //         // width={
                  //         //   item.attributes.thumnail.data?.attributes?.width
                  //         // }
                  //         // height={
                  //         //   item.attributes.thumnail.data?.attributes?.height
                  //         // }
                  //         width={313}
                  //         height={176}
                  //         layout="responsive"
                  //         objectFit="cover"
                  //       />
                  //     </div>
                  //     <div
                  //       dangerouslySetInnerHTML={{
                  //         __html: item.description,
                  //       }}
                  //     />
                  //     {/* <p>{item.attributes.description}</p> */}
                  //   </a>
                  // </Link>
                )}
              </TabPanel>
              {expertises.map?.((expertise, index) => (
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
                            src={item.thumnail}
                            // width={item.thumnailWidth}
                            // height={item.thumnailHeight}
                            width={313}
                            height={176}
                            layout="responsive"
                            objectFit="cover"
                          />
                        </div>
                        <p>{item.description}</p>
                      </a>
                    </Link>
                  ))}
                </TabPanel>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogMain;
