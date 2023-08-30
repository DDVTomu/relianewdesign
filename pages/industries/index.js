import React from "react";
import dynamic from "next/dynamic";
import PageTitle from "@components/pageTitle";
import Layout from "@components/common/layout";
import { ListIndustries, BoxHeavy } from "../../components/industries";
import SEO from "@components/seo";
import Image from "next/image";
import CountUp from "react-countup";
import Animation from "@components/common/Animation";
import ogpImage from "/assets/images/industries/industries01.jpg";
import indus from "./indus.module.scss";
const TrustedSection = dynamic(() => import("@components/home/trustedSection"));
const ContactSubSection = dynamic(() =>
  import("@components/home/contactSubSection")
);
const QuoteSection = dynamic(() => import("@components/home/quoteSection"));
const IndustriesPage = () => {
  const seo = {
    metaTitle: "Industry Expertise",
    metaDescription:
      "Industries Expertise. We help businesses build digital products and services that disrupt industries.",
    keywords: "fintech, Industries Expertise, digital products",
    shareImage: ogpImage,
    article: true,
  };
  return (
    <Layout>
      <SEO seo={seo} />
      <PageTitle
        title="Industries Expertise"
        subtitle="We help businesses build digital products and services that disrupt industries."
      />
      <div className="main">
        <section className={indus.section}>
          <div className="container">
            <Animation>
              <h2 className="hdg-lv2">Explore Other Industries</h2>
            </Animation>
            <ListIndustries />
          </div>
        </section>
        <QuoteSection
          title="Relia is lower cost and lower risk"
          sub="We're always here to help you on your Relia journey, in any way we can."
        />
        <TrustedSection />
        <ContactSubSection />
      </div>
    </Layout>
  );
};
export default IndustriesPage;
