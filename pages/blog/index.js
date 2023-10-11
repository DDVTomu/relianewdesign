import { fetchAPI } from "lib/api";
import Layout from "@components/common/layout";
import Seo from "@components/seo";
import styles from "./blog.module.scss";
import ExportedImage from "next/image";
// import BlogMain from "@components/common/BlogMain/BlogMain";
import NewBlogMain from "@components/common/NewBlogMain/NewBlogMain";
import PageTitle from "@components/common/PageTitle/PageTitle";
import _ from "lodash";
import { useEffect, useState } from "react";
import ogpImage from "/assets/images/blog.jpg";

function groupByCategory(data = []) {
  if (!data?.length) {
    return [];
  }
  const formattedData = data.map((item) => {
    const attributes = item.attributes;
    const category = attributes?.category?.data?.attributes?.name;
    const thumnail = attributes?.thumnail?.data?.attributes;
    const tags = attributes?.tags?.data?.map?.((tag) => {
      return tag?.attributes?.name;
    });

    return {
      ...attributes,
      category,
      tags,
      thumnail,
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

const Blog = ({ blogs, total, allBlogs, meta, categoryData, featuredData }) => {
  const seo = {
    metaTitle: blogs.metaTitle || "Blog | Relia Software",
    metaDescription: blogs.description || "Blog",
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
            alt="bg service ellipse 1"
          />
        </div>
        <div className={styles.hero__bg_ellipse_2}>
          <ExportedImage
            src="/images/new-relia/background/services/service-ellipse-2.png"
            width={476}
            height={664}
            objectFit="contain"
            priority={true}
            alt="bg service ellipse 2"
          />
        </div>
        <div className={` ${"container"} ${styles.hero__container}`}>
          <div className={styles.hero__header_box}>
            {" "}
            <div className={styles.hero__top_header}>
              <h1 className={styles.hero__top_header__heading}>Blog</h1>
              <p>We share and review inspriring content</p>
            </div>
          </div>
        </div>
      </section>
      {/* <BlogMain expertises={blogs} total={total} blogs={allBlogs} /> */}
      {/* <BlogMain
        expertises={blogs}
        total={total}
        blogs={allBlogs}
        totalBlogsData={totalBlogsData}
        pagedBlogs={pagedBlogs}
        pagedAllBlogs={pagedAllBlogs}
      /> */}
      <NewBlogMain
        total={total}
        blogs={allBlogs}
        meta={meta}
        category={categoryData}
        featured={featuredData}
      />
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const blogs = await fetchAPI(
    "blogs?pagination[pageSize]=12&pagination[page]=1&populate=*&sort[0]=publishedAt:DESC"
  );
  const data = blogs?.data ?? [];

  const blogsTotal = await fetchAPI("blogs");
  const total = blogsTotal?.meta.pagination.total ?? [];

  const featured = await fetchAPI(
    `blogs?pagination[pageSize]=12&pagination[page]=1&populate=*&sort[0]=publishedAt:DESC&filters[category][name][$eq]=featured`
  );
  const featuredData = featured?.data ?? [];

  const meta = blogs?.meta.pagination ?? [];

  const categories = await fetchAPI("blog-categories");
  const categoryData = categories?.data ?? [];

  if (!data) {
    return {
      props: { blogs: [] },
    };
  }

  const blogsData = groupByCategory(data);
  return {
    props: {
      blogs: blogsData,
      total,
      allBlogs: data,
      meta,
      categoryData,
      featuredData,
    },
  };
}

export default Blog;
