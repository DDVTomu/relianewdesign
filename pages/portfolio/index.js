// import ReactMarkdown from "react-markdown";
import { fetchAPI } from "@lib/api";
import Layout from "@components/common/layout";
import ExportedImage from "next/image";
import Breadcrumbs from "@components/common/breadcrumbs";
import Seo from "@components/seo";
import PorfolioList from "@components/common/PortfolioList/PorfolioList";
import styles from "./portfolio.module.scss";

const Portfolio = ({ portfolios }) => {
  const seo = {
    metaTitle: portfolios.metaTitle || "Portfolio",
    metaDescription: portfolios.description || "Portfolio",
    // shareImage: article.image,
    article: true,
  };
  const breadcrumbs = [
    {
      name: "Home",
      slug: "/",
    },
    {
      name: "portfolio",
      slug: "/portfolio",
    },
  ];

  return (
    <Layout>
      <Seo seo={seo} />
      <section className={` ${"container"} ${styles.hero__container}`}>
        <div className={styles.hero}>
          <p className={styles.hero__mini_sub}>WORK</p>
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <h1>
            TRUSTED BY <br />
            LEADING BRANDS, INNOVATIVE <br />
            STARTUPS AND THE FORTUNE 500
          </h1>
          <p className={styles.hero__sub}>
            Since the very get-go we have successfully completed over 300+
            projects. Each day, we create software that solves real users’
            problems and responds to their needs.
          </p>
        </div>
        <PorfolioList portfolios={portfolios} />
      </section>
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const portfolios = await fetchAPI(
    "portfolios?pagination[pageSize]=100&populate=*&sort[0]=id"
  );
  return {
    props: { portfolios },
  };
}

export default Portfolio;
