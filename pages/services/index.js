import React from "react";
import { fetchAPI } from "@lib/api";
import dynamic from "next/dynamic";
import Link from "next/link";
import PageTitle from "@components/pageTitle";
import Layout from "@components/common/layout";

import SEO from "@components/seo";
import Image from "next/image";
import imgPlaceHoder from "@images/video-placehoder.png";
import Animation from "@components/common/Animation";
import ogpImage from "assets/images/img-design-thinking.png";
const TrustedSection = dynamic(() => import("@components/home/trustedSection"));
const ClientSection = dynamic(() => import("@components/home/clientSection"));
const ContactSubSection = dynamic(() =>
  import("@components/home/contactSubSection")
);
const SolutionSection = dynamic(() =>
  import("@components/home/solutionSection")
);
const ServicesPage = ({ data, provides }) => {
  const seo = {
    metaTitle: "Perfect Service Suite",
    metaDescription:
      "We design & develop user-centric products using best tech stack to ensure faster delivery with an unmatched cost advantage. Services: UX & UI, web & mobile app development.",
    shareImage: ogpImage,
    article: true,
  };
  return (
    <Layout>
      <SEO seo={seo} />
      <PageTitle
        title={"Perfect Service Suite"}
        subtitle="Relia software with clients to design and develop custom Web apps, platforms and experiences."
      />
      <div className="main">
        <SolutionSection data={data} provides={provides} />
        <div className="project-idea">
          <div className="container">
            <Animation>
              <h2 className="hdg-lv2">
                How We Bring Your Project
                <br />
                Idea to Life
              </h2>
            </Animation>
            <Animation style={{ textAlign: "center" }}>
              <Image
                src={imgPlaceHoder}
                width={1080}
                height={608}
                layout="intrinsic"
                loading="eager"
                alt="How We Bring Your Project"
              />
            </Animation>
          </div>
        </div>
        <ClientSection />
        <TrustedSection />
        <ContactSubSection />
      </div>
    </Layout>
  );
};
export async function getServerSideProps() {
  const response = await fetchAPI(
    "services?pagination[pageSize]=100&populate=*&sort[0]=publishedAt:DESC"
  );
  const provides = await fetchAPI(
    "services-provides?pagination[pageSize]=100&populate=*&sort[0]=publishedAt:DESC"
  );
  return {
    props: { data: response, provides: provides },
  };
}
export default ServicesPage;
