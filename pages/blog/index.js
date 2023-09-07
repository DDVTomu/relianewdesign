import { fetchAPI } from "@lib/api";
import Layout from "@components/common/layout";
import Seo from "@components/seo";
import dynamic from "next/dynamic";
import PageTitle from "@components/common/PageTitle/PageTitle";
import _ from "lodash";
import { useEffect } from "react";
import ogpImage from "/assets/images/blog.jpg";
import Search from "@components/common/Search/Search";
const TrustedSection = dynamic(() => import("@components/home/trustedSection"));
const ContactSubSection = dynamic(() =>
  import("@components/home/contactSubSection")
);

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

const Blog = ({ blogs, total, allBlogs }) => {
  const seo = {
    metaTitle: blogs.metaTitle || "Blog | Relia Software",
    metaDescription: blogs.description || "Blog",
    shareImage: ogpImage,
    article: true,
  };
  return (
    <Layout>
      <Seo seo={seo} />
      <PageTitle
        title="Our Blog"
        subtitle="Digital Transformation Strategy for Business Leaders<br/>
        Looking for something unique? We can help you find it!"
      />
      <Search data={blogs} total={total} blogs={allBlogs} />
      <TrustedSection />
      <ContactSubSection />
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const blogs = await fetchAPI(
    "blogs?pagination[pageSize]=1000&pagination[page]=1&populate=*&sort[0]=publishedAt:DESC"
  );

  const data = blogs?.data ?? [];

  const blogsTotal = await fetchAPI(
    "blogs?pagination[pageSize]=1000&pagination[page]=1&populate=*&sort[0]=publishedAt:DESC"
  );

  const total = blogsTotal?.data ? blogsTotal?.data.length : [];
  const totalBlogsData = groupByCategory(blogsTotal?.data);
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
      totalBlogsData,
    },
  };
}

export default Blog;
