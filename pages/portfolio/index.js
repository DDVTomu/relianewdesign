// import ReactMarkdown from "react-markdown";
import { fetchAPI } from "@lib/api";
import Layout from "@components/common/layout";
import dynamic from "next/dynamic";
import Seo from "@components/seo";
import PorfolioList from "@components/common/PortfolioList/PorfolioList";
import { ContactSubSection } from "@components/home";
import styles from "./portfolio.module.scss";
import PageTitle from "@components/pageTitle";
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
      <PageTitle
        title="Trusted by leading brands, innovative startups and the Fortune 500"
        subtitle="Since the very get-go we have successfully completed over 300+ projects. Each day, we create software that solves real users’ problems and responds to their needs."
      />
      <div className="container">
        <h2 className={styles.portfolio__title}>Portfolio</h2>
      </div>
      <PorfolioList portfolios={portfolios.data} />
      <ContactSubSection />
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const portfolios = await fetchAPI(
    "portfolios?pagination[pageSize]=10&populate=*&sort[0]=id"
  );
  return {
    props: { portfolios },
  };
}

export default Portfolio;
