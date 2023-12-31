import React from "react";
import Seo from "@components/seo";
import Layout from "@components/common/layout";
import { fetchAPI } from "@lib/api";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GlobalContext } from "./_app";

const HeroSection = dynamic(() => import("@components/home/heroSection"));
const IntroSection = dynamic(() => import("@components/home/introSection"));
const ProjectsSection = dynamic(() =>
  import("@components/home/projectsSection")
);
const ClientSection = dynamic(() => import("@components/home/clientSection"));
const AwardSection = dynamic(() => import("@components/home/awardSection"));
const BlogSection = dynamic(() => import("@components/home/blogSection"));
const ContactSection = dynamic(() => import("@components/home/contactSection"));
const TrustedSection = dynamic(() => import("@components/home/trustedSection"));
const BusinessSection = dynamic(() =>
  import("@components/home/businessSection")
);
const Home = ({ portfolios, blogs }) => {
  const global = React.useContext(GlobalContext);
  const seo = {
    metaTitle:
      global.data.attributes.defaultSeo?.metaTitle ||
      "Relia Software: Top Mobile App Development Company in Vietnam,USA",
    metaDescription:
      global.data.attributes.defaultSeo?.metaDescription ||
      "Relia software is recognized as one of the best mobile app development companies in 2019. We believe in creating digital experiences that reach millions and deliver value at every step.",
    shareImage:
      global.data.attributes.defaultSeo?.shareImage.data.attributes.url,
    article: false,
  };

  return (
    <Layout>
      <Seo seo={seo} />
      <HeroSection />
      <IntroSection />
      <AwardSection />
      <TrustedSection />
      <ProjectsSection data={portfolios.data} />
      <BusinessSection />
      <ClientSection />
      <BlogSection data={blogs.data} />
      <ContactSection />
    </Layout>
  );
};

export async function getStaticProps() {
  const portfolios = await fetchAPI(
    "portfolios?pagination[pageSize]=5&populate=*&sort[0]=createdAt%3Adesc&_limit=5"
  );
  const blogs = await fetchAPI(
    "blogs?pagination[pageSize]=6&populate=*&sort[0]=createdAt%3Adesc&_limit=6"
  );
  return {
    props: { portfolios, blogs },
    revalidate: 1,
  };
}
export default Home;
