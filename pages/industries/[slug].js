import React, { useEffect } from "react";
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
import indus from "./indus.module.scss";
import { fetchAPI } from "@lib/api";

const IndustriesPage = ({ industry }) => {
  useEffect(() => {
    const container = document.querySelector(".list-operations");
    const items = container.querySelectorAll(".list-operations__col");
    const maxColumns = 3;

    function updateColumns() {
      const itemCount = items.length;
      const columns = Math.min(itemCount, maxColumns);
      const itemWidth =
        columns > 0 ? `calc((100% - 20px * 2 ) / ${columns})` : `100%`;

      items.forEach((item) => {
        item.style.width = itemWidth;
      });
    }

    updateColumns();
  }, []);

  const keywords = [
    ...industry?.attributes.keywords.data.map(
      (keyword) => keyword?.attributes.keyword
    ),
  ];

  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_SERVER;

  const seo = {
    metaTitle: `${industry?.attributes.Title} | USA & Vietnam`,
    metaDescription: `${industry?.attributes.metaDescription}`,
    keywords: keywords ? keywords.toString() : "",
    shareImage: `${industry?.attributes.metaImage.data.url}`,
    article: true,
  };
  const processData = industry?.attributes.DataItem;
  return (
    <Layout>
      <SEO seo={seo} />
      <PageTitle
        title={industry?.attributes.Title}
        subtitle={industry?.attributes.subTitle}
        content={<BoxProcess data={processData} />}
      />

      <div className="main">
        {industry?.attributes.DynamicZone.map((section) => {
          switch (section.__component) {
            case "industry.title-box":
              return (
                <div className="container">
                  <div className={indus.heading}>
                    <h2 className={indus.header_lv2}>{section.Title}</h2>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: section.Description,
                      }}
                    />
                  </div>
                </div>
              );
            case "industry.column-box":
              return section.Reverse ? (
                <div className="container">
                  <div
                    className={`${indus.box_media} ${indus.box_media__direct}`}
                  >
                    <Animation className={`${indus.box_media__img}`}>
                      <Image
                        src={strapiUrl + section.Image?.data?.attributes.url}
                        width={section.Image?.data?.attributes.width}
                        height={section.Image?.data?.attributes.height}
                        layout="intrinsic"
                        loading="eager"
                        alt={section.Image?.data?.attributes.AlterniveText}
                      />
                    </Animation>
                    <Animation className={`${indus.box_media__text}`}>
                      <h3 className={`${indus.header_lv3}`}>{section.Title}</h3>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: section.Description,
                        }}
                      />
                    </Animation>
                  </div>
                </div>
              ) : (
                <div className="container">
                  <div className={`${indus.box_media}`}>
                    <Animation className={`${indus.box_media__img}`}>
                      <Image
                        src={strapiUrl + section.Image?.data?.attributes.url}
                        width={section.Image?.data?.attributes.width}
                        height={section.Image?.data?.attributes.height}
                        layout="intrinsic"
                        loading="eager"
                        alt={section.Image?.data?.attributes.AlterniveText}
                      />
                    </Animation>
                    <Animation className={`${indus.box_media__text}`}>
                      <h3 className={`${indus.header_lv3}`}>{section.Title}</h3>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: section.Description,
                        }}
                      />
                    </Animation>
                  </div>
                </div>
              );

            case "industry.list-section":
              return (
                <Animation className="back-office sec-bg">
                  <div className="container">
                    {section.Title ? (
                      <h2 className="hdg-lv2">{section.Title}</h2>
                    ) : (
                      ""
                    )}
                    <div
                      dangerouslySetInnerHTML={{
                        __html: section.Description,
                      }}
                    />
                    <div className="list-operations">
                      {section.ListItem?.map((list) => {
                        const updatedDescription = list.Description.replace(
                          /src="(\.\.\/)/g,
                          `src="${strapiUrl}/`
                        );

                        return (
                          <Animation className="list-operations__col">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: updatedDescription,
                              }}
                            />
                          </Animation>
                        );
                      })}
                    </div>
                  </div>
                </Animation>
              );
            case "industry.quote-box":
              return (
                <QuoteSection title={section.Title} sub={section.Description} />
              );
          }
        })}

        {/* <div className={`${indus.box_media} ${indus.box_media__direct}`}>
            <Animation className={`${indus.box_media__img}`}>
              <Image
                src="/images/industries/fintech-app-developers-for-mobile.jpg"
                width={500}
                height={250}
                layout="intrinsic"
                loading="eager"
                alt="Fintech app developers for mobile"
              />
            </Animation>
            <Animation className={`${indus.box_media__text}`}>
              <h3 className={`${indus.header_lv3}`}>
                <span>Our robots’</span> AI skills help you keep ahead of the
                compliance and regulation game
              </h3>
              <p>
                Curious about Fintech and AI in banking? Here’s how intelligent
                automation banking solutions work. Watch a quick demo showing
                how Relia robots automate Know Your Customer (KYC) using Machine
                Learning and Natural Language
              </p>
            </Animation>
          </div>
          <div className={`${indus.box_media}`}>
            <Animation className={`${indus.box_media__img}`}>
              <Image
                src="/images/industries/fintech-app-developers-for-mobile.jpg"
                width={500}
                height={250}
                layout="intrinsic"
                loading="eager"
                alt="Fintech app developers for mobile"
              />
            </Animation>
            <Animation className={`${indus.box_media__text}`}>
              <h3 className={`${indus.header_lv3}`}>
                <span>Our robots’</span> AI skills help you keep ahead of the
                compliance and regulation game
              </h3>
              <p>
                Curious about Fintech and AI in banking? Here’s how intelligent
                automation banking solutions work. Watch a quick demo showing
                how Relia robots automate Know Your Customer (KYC) using Machine
                Learning and Natural Language
              </p>
            </Animation>
          </div> */}

        {/* <div className="container">
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
        <div className="sec-bg">
          <div className="container">
            <h2 className="hdg-lv2">
              Transform your compliance operations,
              <br /> and then <span>your business</span>
            </h2>
            <div className="list-operations">
              <Animation className="list-operations__col">
                <Image
                  src="/images/icon/icon-shield.svg"
                  width={70}
                  height={81}
                  layout="intrinsic"
                  loading="eager"
                  alt=""
                />
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
                <Image
                  src="/images/icon/icon-loss.svg"
                  width={55}
                  height={85}
                  layout="intrinsic"
                  loading="eager"
                  alt=""
                />
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
                <Image
                  src="/images/icon/icon-update.svg"
                  width={72}
                  height={72}
                  layout="intrinsic"
                  loading="eager"
                  alt=""
                />
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
        </div> */}
        <div className="container">
          <ContactSubSection />
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const slug = params.slug;
  const populate =
    "DynamicZone.Image,DynamicZone.ListItem,DynamicZone.ListItem.Icon,DataItem,keywords,metaImage";
  const [industriesRes] = await Promise.all([
    fetchAPI(`industries?filters[slug][$eq]=${slug}&populate=*,${populate}`),
  ]);
  const industries = industriesRes?.data ?? [];

  // const industriesData = otherBlogRed?.data?.length
  //   ? otherBlogRed?.data.map((industry) => convertBlogData(industry))
  //   : [];
  // if (!industries?.length) {
  //   return {
  //     props: { industry: {} },
  //   };
  // }
  const industry = industries[0];
  // const formattedBlog = convertIndustryData(industry, true);
  return {
    props: {
      industry: industry,
      // industrieToggle: { prevBlog, nextBlog },
    },
  };
}

export async function getServerSidePaths() {
  const industriesRes = await fetchAPI(
    "industries?pagination[pageSize]=100&fields[0]=slug"
  );
  const data = industriesRes?.data ?? [];

  const listSlug = data.map((industry) => ({
    params: { slug: industry?.attributes?.slug },
  }));

  return {
    paths: listSlug,
    fallback: false, // can also be true or 'blocking'
  };
}

export default IndustriesPage;
