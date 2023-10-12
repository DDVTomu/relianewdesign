// import ReactMarkdown from "react-markdown";
import React, { useState } from "react";
import { fetchAPI } from "@lib/api";
import dynamic from "next/dynamic";
import Layout from "@components/common/layout";
import Link from "next/link";
import ExportedImage from "@components/common/Image";
import Seo from "@components/seo";
const QuoteSection = dynamic(() => import("@components/home/quoteSection"));
import styles from "./index.module.scss";
import PageTitle from "@components/pageTitle";
const ContactSubSection = dynamic(() =>
  import("@components/home/contactSubSection")
);
const TechStack = ({ tech }) => {
  const seo = {
    metaTitle: "Tech Stack | Relia Software",
    metaDescription: "Tech Stack",
    // shareImage: article.image,
    article: true,
  };

  return (
    <Layout>
      <Seo seo={seo} />
      <PageTitle
        title="Build Your App With Right Tech Stack"
        subtitle="We offer a suite of services tailored to your business needs."
      />
      <QuoteSection
        title="Our choice of tech stack is
              motivated by application
              architecture for feasible
              maintenance."
      />
      <section className={styles.applications}>
        <div className="container">
          <div className={styles.applications__apps}>
            {tech?.map((application, index) =>
              application.attributes.Tech.data.length > 0 ? (
                <div key={index}>
                  <h2>Our {application.attributes.Category} Tech Stack</h2>
                  <ul className={styles.applications__list}>
                    {application.attributes.Tech.data?.map((app, index) => (
                      <li key={index}>
                        {app?.attributes.CanViewDetail ? (
                          <Link
                            href={`/tech-stack/${app?.attributes.slug}` || "#"}
                          >
                            <a className={styles.a}>
                              <ExportedImage
                                alt={
                                  app?.attributes.Icon.data?.attributes
                                    .alternativeText
                                }
                                src={`${app?.attributes.Icon.data?.attributes.url}`}
                                width={22}
                                height={28}
                                objectFit="contain"
                              />
                              <span
                                className={styles.apptitle}
                                style={{
                                  color: app?.attributes.colorCode
                                    ? ``
                                    : app?.attributes.colorCode,
                                }}
                              >
                                {app.attributes.Tech}
                              </span>
                            </a>
                          </Link>
                        ) : (
                          <div className={styles.a}>
                            <ExportedImage
                              alt={
                                app?.attributes.Icon.data?.attributes
                                  .alternativeText
                              }
                              src={`${app?.attributes.Icon.data?.attributes.url}`}
                              width={22}
                              height={28}
                              objectFit="contain"
                            />
                            <span
                              className={styles.apptitle}
                              style={{
                                color: app?.attributes.colorCode
                                  ? `#fff`
                                  : app?.attributes.colorCode,
                              }}
                            >
                              {app.attributes.Tech}
                            </span>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </section>
      <ContactSubSection />
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const tech = await fetchAPI("techstack-categories?populate=*,Tech.Icon");

  const data = tech?.data ?? [];
  if (!data) {
    return {
      props: { tech: [] },
    };
  }

  return {
    props: { tech: data },
  };
}

export default TechStack;
