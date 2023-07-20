import React, { useEffect, useState } from "react";
import { unified } from "unified";
import { fetchAPI } from "lib/api";
import Layout from "@components/common/layout";
import Seo from "@components/seo";
import { ButtonView } from "@components/common/button";
import styles from "./inner.module.scss";
import ExportedImage from "next/image";
import CloudImg from "@components/common/Image";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import PorfolioReadMore from "@components/common/PortfolioReadMore/PortfolioReadMore";

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

const PortfolioDetailPage = ({ portfolio = {}, portfolios }) => {
  const seo = {
    metaTitle: portfolio[0].attributes.projectName || "Portfolio",
    metaDescription:
      portfolio[0].attributes.heroBanner.projectDescription ||
      "Relia Portfolio",
    shareImage: portfolio[0].attributes.heroBanner.heroImg.data.attributes.url,
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
      <section className={styles.main_banner}>
        <div className={`${"container"} ${styles.main_banner__container}`}>
          <div
            className={styles.portfolio_banner}
            style={{
              backgroundColor: portfolio[0].attributes.heroBanner.bannerColor,
            }}
          >
            <div
              className={styles.portfolio_banner__content}
              style={{
                color: portfolio[0].attributes.heroBanner.colorText
                  ? portfolio[0].attributes.heroBanner.colorText
                  : "",
              }}
            >
              <h3 className={`${"$animated"} ${"fadeInRigh"}`}>
                {portfolio[0].attributes.heroBanner.projectType}
              </h3>
              <h2 className={`${"$animated"} ${"fadeInRigh"}`}>
                {portfolio[0].attributes.heroBanner.projectName}
              </h2>
              <p
                className={`${
                  styles.portfolio_banner__info
                } ${"$animated"} ${"fadeInRigh"}`}
              >
                {portfolio[0].attributes.heroBanner.projectDescription}
              </p>
              <p
                className={`${
                  styles.portfolio_banner__tags
                } ${"$animated"} ${"fadeInRigh"}`}
              >
                {/* PWA • AMP • Web & Mobile */}
                {portfolio[0].attributes.projectTags.map((tag, index) => (
                  <span key={index}>{tag.tagName}</span>
                ))}
              </p>
              {(portfolio[0].attributes.heroBanner.linkPlayStore != null) &
              (portfolio[0].attributes.heroBanner.linkAppStore != null) ? (
                <div className={`${styles.portfolio_banner__apps}`}>
                  {portfolio[0].attributes.heroBanner.linkPlayStore != null &&
                  portfolio[0].attributes.heroBanner.linkPlayStore != "#" ? (
                    <Link
                      href={portfolio[0].attributes.heroBanner.linkPlayStore}
                    >
                      <div className={`${styles.portfolio_banner__apps_logo}`}>
                        <ExportedImage
                          alt="Portfolio App Store"
                          src="/images/img-app-store.png"
                          objectFit="contain"
                          width={200}
                          height={58}
                        />
                      </div>
                    </Link>
                  ) : (
                    ""
                  )}
                  {portfolio[0].attributes.heroBanner.linkAppStore != null &&
                  portfolio[0].attributes.heroBanner.linkAppStore != "#" ? (
                    <Link
                      href={portfolio[0].attributes.heroBanner.linkAppStore}
                    >
                      <div className={`${styles.portfolio_banner__apps_logo}`}>
                        <ExportedImage
                          alt="Portfolio Play"
                          src="/images/img-google-play.png"
                          objectFit="contain"
                          width={200}
                          height={58}
                        />
                      </div>
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
              ) : (
                ""
              )}

              <ButtonView
                external
                to={portfolio[0].attributes.heroBanner.linkWeb}
                title={portfolio[0].attributes.heroBanner.linkWeb}
              />
            </div>
            <div className={`${styles.portfolio_banner__img}`}>
              <div>
                {portfolio[0].attributes.heroBanner.heroImg.data ? (
                  <CloudImg
                    alt="Google banner"
                    src={
                      portfolio[0].attributes.heroBanner.heroImg.data.attributes
                        .url
                    }
                    objectFit="contain"
                    width={700}
                    height={574}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>{" "}
        </div>
      </section>
      {portfolio[0].attributes.Challenges ? (
        <section
          className={`${styles.portfolio_content} ${styles.portfolio_challenges}`}
        >
          <div className="container">
            <h2>CHALLENGES</h2>
            {/* <ReactMarkdown components={{ h2: HeadingRenderer }}>
              {portfolio[0].attributes.Challenges}
            </ReactMarkdown> */}
            <div
              dangerouslySetInnerHTML={{
                __html: portfolio[0].attributes.Challenges,
              }}
            />
          </div>
        </section>
      ) : (
        ""
      )}
      {portfolio[0].attributes.scopeOfWork ? (
        <section
          className={`${styles.portfolio_content} ${styles.portfolio_scopes}`}
        >
          <div className="container">
            <h2>SCOPE OF WORK</h2>
            {/* Google APAC has more than 5000 ad partners in the South-East Asian
            market. These partners spend over $2B+ per year on Google ads to
            generate leads. */}
            {/* <ReactMarkdown components={{ h2: HeadingRenderer }}>
              {portfolio[0].attributes.scopeOfWork}
            </ReactMarkdown> */}
            <div
              dangerouslySetInnerHTML={{
                __html: portfolio[0].attributes.scopeOfWork,
              }}
            />
          </div>
        </section>
      ) : (
        ""
      )}
      {portfolio[0].attributes.designAndDevelopment ? (
        <section
          className={`${styles.portfolio_content} ${styles.portfolio_design}`}
        >
          <div className="container">
            <h2>SOLUTION</h2>
            {/* <ReactMarkdown components={{ h2: HeadingRenderer }}>
              {portfolio[0].attributes.designAndDevelopment}
            </ReactMarkdown> */}
            <div
              dangerouslySetInnerHTML={{
                __html: portfolio[0].attributes.designAndDevelopment,
              }}
            />
          </div>
        </section>
      ) : (
        ""
      )}
      {portfolio[0].attributes.resultAndImpact ||
      portfolio[0].attributes.Milestone ? (
        <section
          className={`${styles.portfolio_content} ${styles.portfolio_result}`}
        >
          <div className="container">
            <h2>RESULTS & IMPACT</h2>
            {/* <ReactMarkdown components={{ h2: HeadingRenderer }}>
              {portfolio[0].attributes.resultAndImpact}
            </ReactMarkdown> */}
            <div
              dangerouslySetInnerHTML={{
                __html: portfolio[0].attributes.resultAndImpact,
              }}
            />
          </div>
        </section>
      ) : (
        ""
      )}
      {portfolio[0].attributes.Milestone ? (
        <section className={`${styles.portfolio_content__team}`}>
          <div className="container">
            <div className={`${styles.portfolio_content__team_flex}`}>
              <h2>
                {/* <ReactMarkdown components={{ h2: HeadingRenderer }}>
                  {portfolio[0].attributes.Milestone}
                </ReactMarkdown> */}
                <div
                  dangerouslySetInnerHTML={{
                    __html: portfolio[0].attributes.Milestone,
                  }}
                />
              </h2>
              <div className={`${styles.portfolio_content__team_flex_img}`}>
                {portfolio[0].attributes.milestoneImg.data ? (
                  <CloudImg
                    alt="Our Team"
                    src={
                      portfolio[0].attributes.milestoneImg.data.attributes.url
                    }
                    objectFit="contain"
                    width={
                      portfolio[0].attributes.milestoneImg.data?.attributes
                        .width
                    }
                    height={
                      portfolio[0].attributes.milestoneImg.data?.attributes
                        .height
                    }
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
      {portfolio[0].attributes.customerQuote ? (
        <section className={`${styles.portfolio_content__quote}`}>
          <div className="container">
            <div className={`${styles.portfolio_content__quote_text}`}>
              <div className={`${styles.portfolio_content__quote_text_comma}`}>
                {portfolio[0].attributes.commaIcon.data ? (
                  <CloudImg
                    alt="Our team at Mekari"
                    src={portfolio[0].attributes.commaIcon.data?.attributes.url}
                    style={{ width: "100%" }}
                    width={
                      portfolio[0].attributes.commaIcon.data?.attributes.width
                    }
                    height={
                      portfolio[0].attributes.commaIcon.data?.attributes.height
                    }
                  />
                ) : (
                  ""
                )}
              </div>
              <p>{portfolio[0].attributes.customerQuote}</p>
            </div>
            <div className={`${styles.portfolio_content__quote_teller}`}>
              <div className={`${styles.portfolio_content__quote_avatar}`}>
                {portfolio[0].attributes.customerImg.data ? (
                  <CloudImg
                    alt="mekari-avatar"
                    src={
                      portfolio[0].attributes.customerImg.data?.attributes.url
                    }
                    width={
                      portfolio[0].attributes.customerImg.data?.attributes.width
                    }
                    height={
                      portfolio[0].attributes.customerImg.data?.attributes
                        .height
                    }
                  />
                ) : (
                  ""
                )}
              </div>
              <div>
                <h3
                  style={{
                    color: portfolio[0].attributes.heroBanner.bannerColor,
                  }}
                >
                  {portfolio[0].attributes.customerName}
                </h3>
                <p>{portfolio[0].attributes.customerJob}</p>
              </div>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
      <section>
        <div className={`${"container"}`}>
          <h2>MORE CASE STUDIES</h2>
          <PorfolioReadMore portfolios={portfolios} />
        </div>
      </section>
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const slug = params.slug;
  const [portfoliosRes, morePortfolio] = await Promise.all([
    fetchAPI(
      `portfolios?filters[slug][$eq]=${slug}&populate[0]=*&populate[1]=heroBanner.heroImg&populate[2]=projectTags&populate[3]=customerImg&populate[4]=milestoneImg&populate[5]=commaIcon`
    ),
    fetchAPI(
      `portfolios?filters[slug][$ne]=${slug}&pagination[pageSize]=2&populate=*`
    ),
  ]);

  const porfolioSingle = portfoliosRes?.data ?? [];
  const porfolioData = morePortfolio?.data?.length
    ? morePortfolio?.data.map((porfolio) => porfolio)
    : [];
  if (!porfolioSingle?.length) {
    return {
      props: { portfolio: {}, portfolios: porfolioData },
    };
  }
  return {
    props: { portfolio: porfolioSingle, portfolios: porfolioData },
  };
}

export async function getServerSidePaths() {
  const blogsRes = await fetchAPI(
    "porfolios?pagination[pageSize]=100&fields[0]=slug"
  );
  const data = blogsRes?.data ?? [];

  const listSlug = data.map((portfolio) => ({
    params: { slug: portfolio?.attributes?.slug },
  }));

  return {
    paths: listSlug,
    fallback: false, // can also be true or 'blocking'
  };
}

export default PortfolioDetailPage;
