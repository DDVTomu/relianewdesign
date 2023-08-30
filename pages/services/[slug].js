import React from "react";
import { Link } from "next/link";
import PageTitle from "@components/pageTitle";
import Layout from "@components/common/layout";
import BoxProcess from "@components/common/BoxProcess";
import ContactSubSection from "@components/home/contactSubSection";
import QuoteSection from "@components/home/quoteSection";
import SEO from "@components/seo";
import Image from "next/image";
import Animation from "@components/common/Animation";
import ogpImage from "assets/images/industries/fintech-app-development.jpg";
import service from "./service.module.scss";
const ServiceDetail = () => {
  const seo = {
    metaTitle: "Fintech App Development Company | USA & Vietnam",
    metaDescription:
      "Relia Software is the best fintech app development company USA & Vietnam. We have experienced fintech app developers who develop apps for Android & iOS.",
    keywords: "fintech, Industries Expertise, digital products",
    shareImage: ogpImage,
    article: true,
  };
  const processData = [
    {
      value: "20+",
      text: "client",
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
  return (
    <Layout>
      <SEO seo={seo} />
      <PageTitle
        title="FinTech App Development Company"
        content={<BoxProcess data={processData} />}
      />
      <div className="main">
        <div className={service.detail}>
          <div className="container">
            <h2 className="hdg-lv2">Our Design and Development</h2>
            <div className={service.list}>
              <div className={service.list_itm}>
                <div className={service.list_itm_img}></div>
                <div className={service.list_itm_ctn}>
                  <div className={service.list_itm_title}>
                    UX Driven Engineering
                  </div>
                  <p>
                    Unlike other companies, we are a UX first development
                    company. Projects are driven by designers and they make sure
                    design and experiences translate to code.
                  </p>
                </div>
              </div>
              <div className={service.list_itm}>
                <div className={service.list_itm_img}>
                  <Image
                    src="/images/industries/fintech-app-developers-for-mobile.jpg"
                    width={998}
                    height={698}
                    layout="intrinsic"
                    loading="eager"
                    alt="Fintech app developers for mobile"
                  />
                </div>
                <div className={service.list_itm_ctn}>
                  <div className={service.list_itm_title}>
                    UX Driven Engineering
                  </div>
                  <p>
                    Unlike other companies, we are a UX first development
                    company. Projects are driven by designers and they make sure
                    design and experiences translate to code.
                  </p>
                </div>
              </div>
              <div className={service.list_itm}>
                <div className={service.list_itm_img}></div>
                <div className={service.list_itm_ctn}>
                  <div className={service.list_itm_title}>
                    UX Driven Engineering
                  </div>
                  <p>
                    Unlike other companies, we are a UX first development
                    company. Projects are driven by designers and they make sure
                    design and experiences translate to code.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Animation className={`sec-bg ${service.why}`}>
          <div className="container">
            <h2 className="hdg-lv2">Why Choose Relia</h2>
            <div className="list-operations">
              <Animation className="list-operations__col">
                <h5>Capitalize on your RPA investments with new use cases</h5>
                <p>
                  Break free from previous limitations and  invigorate your
                  automation  initiative
                </p>
                <ul className="list-plus">
                  <li>Process work end to end, faster and easier</li>
                  <li>
                    Deliver new compliance use cases with attended and hybrid
                    automation
                  </li>
                  <li>
                    Realize the full benefits of a more complete and expansive
                    RPA opportunity
                  </li>
                </ul>
              </Animation>
              <Animation className="list-operations__col">
                <h5>Get control of your bank's compliance costs</h5>
                <p>
                  Use intelligent technology instead of manual effort to achieve
                  compliance productivity
                </p>
                <ul className="list-plus">
                  <li>Rapidly reduce compliance backlogs</li>
                  <li>
                    Eliminate wasted effort by making your processes more
                    intelligent with pragmatic Artificial Intelligence (AI)
                  </li>
                  <li>
                    Evolve your workforce strategy to meet today’s banking
                    demands
                  </li>
                </ul>
              </Animation>
              <Animation className="list-operations__col">
                <h5>Improve your bank's risk profile​</h5>
                <p>
                  Reduce regulatory risk and fines by leveraging a digital
                  workforce
                </p>
                <ul className="list-plus">
                  <li>Reduce manual errors down to near-zero​</li>
                  <li>
                    Refocus your team’s efforts on investigation and analysis
                  </li>
                  <li>
                    Update automations as quickly as regulations change to keep
                    pace with requirements
                  </li>
                </ul>
              </Animation>
            </div>
          </div>
        </Animation>

        <div className={service.content}>
          <div className="container">
            <h2 className="hdg-lv2">UI/UX Design Services We Offer</h2>
            <p>
              At Relia, we create functional and clean applications that can
              cater your usability needs using the UX design process. As a UX
              design company, we create B2B applications that are effective to
              the core for the end user. Finding solutions specific to our
              clients’ situations, we bring out user-friendly, aesthetically
              pleasing apps based on UX/UI design methodology. Notable among the
              best UX companies, Relia has the best team of experienced UI/UX
              visual designers that inculcate the design consultant design
              process from step one.
            </p>
            <div className="box-media">
              <Animation className="box-media__text">
                <h3 className="hdg-lv3">
                  Relia can <span className="text-white">help</span> your bank
                  overcome three of its biggest automation challenges
                </h3>
                <p>
                  Curious about RPA and AI in banking? Here’s how intelligent
                  automation banking solutions work. Watch a quick demo showing
                  how UiPath robots automate Know Your Customer (KYC) using
                  Machine Learning and Natural Language
                </p>
                <ul className="list-plus">
                  <li>
                    Automate unstructured data from emails, PDFs, documents and
                    forms.
                  </li>
                  <li>
                    Put automation in the hands of your bank’s advisers, in
                    customer-facing functions.
                  </li>
                  <li>
                    Automate processes no matter the scenario: attended,
                    unattended or hybrid, with a human in the loop.
                  </li>
                </ul>
              </Animation>
              <Animation className="box-media__img">
                <Image
                  src="/images/industries/fintech-app-development-company.jpg"
                  width={544}
                  height={699}
                  layout="intrinsic"
                  loading="eager"
                  alt="Fintech app development company"
                />
              </Animation>
            </div>
            <div className="box-media box-media--direct">
              <Animation className="box-media__text">
                <h3 className="hdg-lv3">
                  Relia can <span className="text-white">help</span> your bank
                  overcome three of its biggest automation challenges
                </h3>
                <p>
                  Curious about RPA and AI in banking? Here’s how intelligent
                  automation banking solutions work. Watch a quick demo showing
                  how UiPath robots automate Know Your Customer (KYC) using
                  Machine Learning and Natural Language
                </p>
                <ul className="list-plus">
                  <li>
                    Automate unstructured data from emails, PDFs, documents and
                    forms.
                  </li>
                  <li>
                    Put automation in the hands of your bank’s advisers, in
                    customer-facing functions.
                  </li>
                  <li>
                    Automate processes no matter the scenario: attended,
                    unattended or hybrid, with a human in the loop.
                  </li>
                </ul>
              </Animation>
              <Animation className="box-media__img">
                <Image
                  src="/images/industries/fintech-app-development-company.jpg"
                  width={544}
                  height={699}
                  layout="intrinsic"
                  loading="eager"
                  alt="Fintech app development company"
                />
              </Animation>
            </div>
          </div>
        </div>
        <div className={`sec-bg ${service.capabilities}`}>
          <div className="container">
            <h2 className="hdg-lv2">Our UI/UX capabilities</h2>
            <ul className={service.caps}>
              <li>Experience Design</li>
              <li>Experience Design</li>
              <li>Experience Design</li>
              <li>Experience Design</li>
              <li>Experience Design</li>
            </ul>
          </div>
        </div>
        <div className="container">
          <ContactSubSection />
        </div>
      </div>
    </Layout>
  );
};

export default ServiceDetail;
