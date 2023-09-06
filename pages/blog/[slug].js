import React from "react";
import { fetchAPI } from "lib/api";
import Layout from "@components/common/layout";
import Seo from "@components/seo";
import styles from "./inner.module.scss";
import ReactMarkdown from "react-markdown";
import BlogReadMore from "@components/common/BlogReadMore/BlogReadMore";
import CloudImg from "@components/common/Image";
import FormatDate from "@components/common/FormatDate/FormatDate";
import BlogSocial from "@components/common/BlogSocial/BlogSocial";
import PrevNext from "@components/common/PrevNext/PrevNext";
function convertBlogData(item, isHasAuthor = false) {
  const attributes = item.attributes;
  const category = attributes?.category?.data?.attributes?.name;
  const thumnail = attributes?.thumnail?.data?.attributes;
  const author = isHasAuthor
    ? {
        name: attributes?.author?.data?.attributes?.name,
        position: attributes?.author?.data?.attributes?.position,
        avatar:
          attributes?.author?.data?.attributes?.avatar?.data?.attributes?.url,
      }
    : {};
  const tags = attributes?.tags?.data?.map?.((tag) => {
    return { name: tag?.attributes?.name, slug: tag?.attributes?.slug };
  });
  const slug = attributes?.slug;
  const index = item.id;
  return {
    ...attributes,
    category,
    tags,
    thumnail,
    author,
    slug,
    index,
  };
}

function flatten(text, child) {
  return typeof child === "string"
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text);
}

function HeadingRenderer(props) {
  var children = React.Children.toArray(props.children);
  var text = children.reduce(flatten, "");
  var slug = text.toLowerCase().replace(/\W/g, "-");
  return React.createElement("h" + props.level, { id: slug }, props.children);
}

function generateLinkMarkup(str = "") {
  const headerList = str.match(new RegExp("\n##(?!#)(.)*", "g")) || [];
  return headerList.map((header) => ({
    id: header.substring(3).trim().toLowerCase().replace(/\W/g, "-"),
    name: header.substring(3).trim().replace(/\*/g, " "),
  }));
}

const CustomImage = ({ node, children }) => {
  const imageNodes = node.children.filter((child) => child.tagName === "img");
  if (imageNodes.length > 0) {
    const renderedImages = imageNodes.map((image, index) => (
      <img
        key={index}
        className="blog__img"
        src={process.env.NEXT_PUBLIC_STRAPI_SERVER + image.properties.src}
        alt={image.properties.alt}
      />
    ));

    // Insert the rendered images into the original children array

    const updatedChildren = React.Children.toArray(children);
    for (let i = 0; i < updatedChildren.length; i++) {
      if (updatedChildren[i].type === "img") {
        delete updatedChildren[i];
      }
    }
    updatedChildren.splice(1, 0, ...renderedImages);
    return <p>{updatedChildren}</p>;
  }
  return <p>{children}</p>;
};

const BlogDetailPage = ({ blog = {}, blogs, blogToggle = {} }) => {
  const seo = {
    metaTitle: blog.title || "Blog",
    metaDescription: blog.description || "Blog",
    shareImage: blog.thumnail.url,
    article: true,
  };

  if (typeof window !== "undefined") {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }

  const expertises = {
    items: blogs ?? [],
  };
  return (
    <Layout>
      <Seo seo={seo} />
      <section className={styles.hero}>
        <div className={` ${"container"} ${styles.hero__container}`}>
          <div className={styles.hero__header_box}>
            {" "}
            <div className={styles.hero__top_header}>
              <div className={styles.hero__top_header__img_box}>
                <CloudImg
                  src={blog?.thumnail.url}
                  width={blog?.thumnail.width}
                  height={blog?.thumnail.height}
                  layout="responsive"
                  objectFit="contain"
                  priority={true}
                />
              </div>
            </div>
          </div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb__item">
                <a href="/blog">Blogs</a>
              </li>
              <li className="breadcrumb__item active" aria-current="page">
                {blog.title}
              </li>
            </ol>
          </nav>
          {/* <Partner partner={partner} /> */}
        </div>
      </section>

      <section className={styles.article}>
        <div className={` ${"container"}`}>
          <h1 className={styles.hero__top_header__heading}>{blog.title}</h1>
          <div className={styles.hero__top_header__blog_meta}>
            <div className={styles.hero__top_header__blog_meta__col}>
              <p>
                <strong>Publising Date</strong>
              </p>
              <p>
                <time dateTime={<FormatDate dateString={blog.publishedAt} />}>
                  <FormatDate dateString={blog.publishedAt} />
                </time>
              </p>
            </div>
            {blog.author && (
              <div className={styles.hero__top_header__blog_meta__col}>
                <p>
                  <strong>Author Name</strong>
                </p>
                <p>{blog.author.name}</p>
              </div>
            )}

            <div className={styles.hero__top_header__blog_meta__col}>
              <p>
                <strong>Categories</strong>
              </p>
              <p>
                <span>{blog?.category}</span>
              </p>
            </div>
          </div>
        </div>
        <div className={` ${"container"} ${styles.article__container}`}>
          <div className={styles.article__contents}>
            <div className={styles.article__entries} id="article_content">
              {/* <ReactMarkdown
                components={{ h2: HeadingRenderer, p: CustomImage }}
              >
                {blog.content}
              </ReactMarkdown> */}
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>
            <div className={styles.article__author}>
              <CloudImg
                src={blog?.author?.avatar}
                width={94}
                height={94}
                objectFit="cover"
              />
              {blog?.author && (
                <div>
                  <p>THE AUTHOR</p>
                  <h2>{blog?.author?.name}</h2>
                  <h3>{blog?.author?.position}</h3>
                </div>
              )}
            </div>
            <BlogSocial tags={blog.tags} slug={blog.slug} />
          </div>
        </div>
      </section>
      <PrevNext blogToggle={blogToggle} />
      <BlogReadMore expertises={expertises} />
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const slug = params.slug;
  const [blogsRes, otherBlogRed] = await Promise.all([
    fetchAPI(
      `blogs?filters[slug][$eq]=${slug}&populate[author][populate][0]=avatar&populate[tags]=*&populate[category]=*&populate[thumnail]=*`
    ),
    fetchAPI(
      `blogs?filters[slug][$ne]=${slug}&pagination[pageSize]=3&populate=*`
    ),
  ]);
  const blogs = blogsRes?.data ?? [];

  const currentIndex = blogs[0].id;

  const prev = currentIndex - 1;
  const next = currentIndex + 1;

  const [prevBlog, nextBlog] = await Promise.all([
    fetchAPI(`blogs?filters[id][$eq]=${prev}`),
    fetchAPI(`blogs?filters[id][$eq]=${next}`),
  ]);

  const blogsData = otherBlogRed?.data?.length
    ? otherBlogRed?.data.map((blog) => convertBlogData(blog))
    : [];
  if (!blogs?.length) {
    return {
      props: { blog: {}, blogs: blogsData },
    };
  }
  const blog = blogs[0];
  const formattedBlog = convertBlogData(blog, true);
  return {
    props: {
      blog: formattedBlog,
      blogs: blogsData,
      blogToggle: { prevBlog, nextBlog },
    },
  };
}

export async function getServerSidePaths() {
  const blogsRes = await fetchAPI(
    "blogs?pagination[pageSize]=100&fields[0]=slug"
  );
  const data = blogsRes?.data ?? [];

  const listSlug = data.map((blog) => ({
    params: { slug: blog?.attributes?.slug },
  }));

  return {
    paths: listSlug,
    fallback: false, // can also be true or 'blocking'
  };
}

export default BlogDetailPage;
