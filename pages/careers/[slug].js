import React from "react";
import { fetchAPI } from "lib/api";
import Layout from "@components/common/layout";
import Seo from "@components/seo";
import styles from "./inner.module.scss";
import ReactMarkdown from "react-markdown";
import PageTitle from "@components/pageTitle";
import CareersContact from "@components/careers/careersContact";

function convertBlogData(item, isHasAuthor = false) {
  const attributes = item.attributes;
  const title = attributes?.title;
  const category = attributes?.career_category?.data?.attributes?.name;
  const thumnail = attributes?.thumnail?.data?.attributes?.url;
  const content = attributes?.content;
  const slug = attributes?.slug;
  return { ...attributes, category, thumnail, slug, title, content };
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

const CareerDetailPage = ({ career = {} }) => {
  const seo = {
    metaTitle: career.title || "Careers",
    metaDescription: career.description || "Careers",
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

  return (
    <Layout>
      <Seo seo={seo} />
      <PageTitle
        title={career.title}
        subtitle="We work with awesome people, reasons to join us!"
      />
      <div className="careers-content">
        <div className="container">
          <div className="box-heading">
            <h2 className="hdg-lv2">{career.title}</h2>
            <p className="hdg-lv2-sub">{career.category}</p>
            <span>{career.address}</span>
          </div>
          <div className="container--small">
            <ReactMarkdown
              components={{ h2: HeadingRenderer }}
              className="careers-content"
            >
              {career.content}
            </ReactMarkdown>
            <h2 className="hdg-lv2">
              Apply to <span>Job</span>
            </h2>
            <CareersContact />
            <div>
              <h2 className="hdg-lv2">Thank you for your time!</h2>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const slug = params.slug;
  const [careersRes] = await Promise.all([
    fetchAPI(
      `careers?filters[slug][$eq]=${slug}&populate[author][populate][0]=avatar&populate[career_category]=*&populate[thumnail]=*`
    ),
  ]);

  const careers = careersRes?.data ?? [];
  const career = careers[0];
  const formattedBlog = convertBlogData(career, true);
  return {
    props: { career: formattedBlog },
  };
}

export async function getServerSidePaths() {
  const careersRes = await fetchAPI(
    "careers?pagination[pageSize]=100&fields[0]=slug"
  );
  const data = careersRes?.data ?? [];

  const listSlug = data.map((career) => ({
    params: { slug: career?.attributes?.slug },
  }));

  return {
    paths: listSlug,
    fallback: false, // can also be true or 'blocking'
  };
}

export default CareerDetailPage;
