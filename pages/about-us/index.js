import React from "react";
import PageTitle from "@components/pageTitle";
import Layout from "@components/common/layout";
import dynamic from "next/dynamic";
import SEO from "@components/seo";
import BoxProcess from "@components/common/BoxProcess";
const ClientSection = dynamic(() => import("@components/home/clientSection"));
const TrustedSection = dynamic(() => import("@components/home/trustedSection"));
const QuoteSection = dynamic(() => import("@components/home/quoteSection"));
const ContactSubSection = dynamic(() =>
  import("@components/home/contactSubSection")
);
import Image from "next/image";
import Animation from "@components/common/Animation";
import ogpImage from "assets/images/relia-about-us.jpeg";
import style from "./about.module.scss";

const processData = [
  {
    value: "20+",
    text: "clients",
  },
  {
    value: "30+",
    text: "projects",
  },
  {
    value: "11+",
    text: "years experience",
  },
];
const AboutUs = () => {
  const seo = {
    metaTitle: "Relia Software - About Us - Software Development Company",
    metaDescription:
      "Looking for Software Development Agency in Vietnam? Contact us today. Delivering complex at scale, we build fast, high-performing platform.",
    shareImage: ogpImage,
    article: true,
  };
  return (
    <Layout>
      <SEO seo={seo} />
      <div className="main">
        <div className={style.banner}>
          <Image
            src="/images/relia-about-us.jpeg"
            width={1440}
            height={476}
            layout="fixed"
            loading="eager"
            alt="About us"
          />
        </div>
        <PageTitle
          className={style.hero}
          title="Building Digital Experiences for Innovative Startups and Enterprises"
          content={<BoxProcess transparent={true} data={processData} />}
        />
        <div className="container">
          <div className="box-media box-media--direct">
            <Animation className="box-media__img">
              <Image
                src="/images/about/about-pic.png"
                width={500}
                height={250}
                layout="intrinsic"
                loading="eager"
                alt="Fintech app developers for mobile"
              />
            </Animation>
            <Animation className="box-media__text">
              <p>
                Several years of work on organization development and service
                design let us gain the trust of global businesses. We have a
                clear team organization with leading positions occupied by
                experienced professionals in business analysis, design,
                development, management, and quality assurance.
              </p>
            </Animation>
          </div>
        </div>
        <div className={`sec-bg ${style.bg}`}>
          <div className="container">
            <h2 className="hdg-lv2">
              We create high-quality software for enterprises and startups with
              core values
            </h2>
            <div className="list-operations">
              <Animation className="list-operations__col">
                <h5>Efficiency</h5>
                <p>
                  We constantly push ourselves to become masters of what we do.
                  We are curious, and we love to experiment.
                </p>
              </Animation>
              <Animation className="list-operations__col">
                <h5>Innovation</h5>
                <p>
                  We embrace change and are always excited to take advantage of
                  the opportunities that come with it.
                </p>
              </Animation>
              <Animation className="list-operations__col">
                <h5>Flat Organization ​</h5>
                <p>We believe in minimum hierarchy and maximum transparency.</p>
              </Animation>
            </div>
          </div>
        </div>
        <QuoteSection title="Our organizational structure is designed to give our clients access to the best talent and the most effective approaches to build software" />
        <TrustedSection />
        <ClientSection />
        <ContactSubSection />
      </div>
    </Layout>
  );
};
export default AboutUs;
