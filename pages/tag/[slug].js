import { fetchAPI } from "lib/api";
import Layout from "@components/common/layout";
import Seo from "@components/seo";
import styles from "./tag.module.scss";
import ExportedImage from "next/image";
import BlogMain from "@components/common/BlogMain/BlogMain";
import _ from "lodash";
import { useEffect } from "react";
import ogpImage from "/assets/images/blog.jpg";
import Search from "@components/common/Search/Search";

function groupByCategory(data = []) {
  if (!data?.length) {
    return [];
  }
  const formattedData = data.map((item) => {
    const attributes = item.attributes;
    const category = attributes?.category?.data?.attributes?.name;
    const thumnail = attributes?.thumnail?.data?.attributes?.url;
    const thumnailWidth = attributes?.thumnail?.data?.attributes?.width;
    const thumnailHeight = attributes?.thumnail?.data?.attributes?.height;
    const tags = attributes?.tags?.data?.map?.((tag) => {
      return tag?.attributes?.name;
    });

    return {
      ...attributes,
      category,
      tags,
      thumnail,
      thumnailWidth,
      thumnailHeight,
    };
  });
  return _.map(
    _.groupBy(formattedData, (blog) => blog.category),
    (blogs, category) => {
      return {
        expert: category,
        items: blogs,
      };
    }
  );
}

const TagFilterPage = ({ blogs, total, allBlogs, tagTitle }) => {
  const seo = {
    metaTitle: `${tagTitle} | Relia Software` || "Tag | Relia Software",
    metaDescription: tagTitle || "Tag",
    shareImage: ogpImage,
    article: true,
  };
  useEffect(() => {
    // history.scrollRestoration = "manual";
  }, []);
  return (
    <Layout>
      <Seo seo={seo} />
      <section className={styles.hero}>
        <div className={styles.hero__bg_ellipse_1}>
          <ExportedImage
            src="/images/new-relia/background/services/service-ellipse-1.png"
            width={376}
            height={564}
            objectFit="contain"
            priority={true}
          />
        </div>
        <div className={styles.hero__bg_ellipse_2}>
          <ExportedImage
            src="/images/new-relia/background/services/service-ellipse-2.png"
            width={476}
            height={664}
            objectFit="contain"
            priority={true}
          />
        </div>
        <div className={` ${"container"} ${styles.hero__container}`}>
          <div className={styles.hero__header_box}>
            {" "}
            <div className={styles.hero__top_header}>
              <h1 className={styles.hero__top_header__heading}>{tagTitle}</h1>
            </div>
          </div>
        </div>
      </section>
      <Search data={blogs} blogs={allBlogs} />
      {/* <BlogMain expertises={blogs} total={total} blogs={allBlogs} /> */}
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const slug = params.slug;
  const [blogs, blogTag] = await Promise.all([
    fetchAPI(
      `blogs?filters[tags][slug][$eq]=${slug}&populate=*&sort[0]=publishedAt:DESC`
    ),
    fetchAPI(`blog-tags?filters[slug][$eq]=${slug}&populate[tags]=*`),
  ]);
  const data = blogs?.data ?? [];
  if (!data) {
    return {
      props: { blogs: [] },
    };
  }
  const blogsTotal = data?.length;
  const blogsData = groupByCategory(data);
  const tagTitle = blogTag?.data[0].attributes?.name;
  return {
    props: {
      blogs: blogsData,
      total: blogsTotal,
      allBlogs: data,
      tagTitle: tagTitle,
    },
  };
}

export default TagFilterPage;
