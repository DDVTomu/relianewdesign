import React from "react";
import { fetchAPI } from "lib/api";
import Layout from "@components/common/layout";
import Seo from "@components/seo";
import styles from "./inner.module.scss";
import CloudImg from "@components/common/Image";
import PorfolioReadMore from "@components/common/PortfolioReadMore/PortfolioReadMore";
import PageTitle from "@components/pageTitle";
import QuoteSection from "@components/home/quoteSection";
import { ContactSubSection } from "@components/home";
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
      <PageTitle
        title={portfolio[0].attributes.heroBanner.projectName}
        subtitle={portfolio[0].attributes.heroBanner.projectDescription}
        btnUrl={portfolio[0].attributes.heroBanner.linkWeb}
      />

      {portfolio[0].attributes.Challenges ? (
        <section
          className={`${styles.portfolio_content} ${styles.portfolio_challenges}`}
        >
          <div className="container">
            <h2>CHALLENGES</h2>
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
        <QuoteSection
          title={portfolio[0].attributes.customerQuote}
          sub={`${portfolio[0].attributes.customerName} - ${portfolio[0].attributes.customerJob}`}
        />
      ) : (
        ""
      )}
      <div className={styles.casestudy}>
        <div className={`${styles.casestudy_title} container`}>
          <h2>MORE CASE STUDIES</h2>
        </div>
        <PorfolioReadMore portfolios={portfolios} />
      </div>
      <ContactSubSection />
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
      `portfolios?filters[slug][$ne]=${slug}&pagination[pageSize]=3&populate=*`
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
    "porfolios?pagination[pageSize]=10&fields[0]=slug"
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
