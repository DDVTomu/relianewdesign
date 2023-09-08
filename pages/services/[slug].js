import React from "react";
import { Link } from "next/link";
import PageTitle from "@components/pageTitle";
import Layout from "@components/common/layout";
import BoxProcess from "@components/common/BoxProcess";
import ContactSubSection from "@components/home/contactSubSection";
import SEO from "@components/seo";
import { fetchAPI } from "@lib/api";
import Image from "@components/common/Image";
import Animation from "@components/common/Animation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import service from "./service.module.scss";
const ServiceDetail = ({ detail }) => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  // console.log(detail);
  const seo = {
    metaTitle: detail.metaTitle,
    metaDescription: detail.metaDescription,
    shareImage: detail.metaImgShare.data.attributes.url,
    article: true,
  };
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_SERVER;

  const updatedDescription = (data) => {
    const update = data?.replace(/src="(\.\.\/)/g, `src="${strapiUrl}/`);
    return update;
  };
  return (
    <Layout>
      <SEO seo={seo} />
      <PageTitle
        title={detail.Title}
        content={<BoxProcess data={detail?.Summary} />}
      />
      <div className="main">
        {detail?.DynamicZone?.map((section) => {
          switch (section.__component) {
            case "service.service-section":
              return (
                <div className={service.detail}>
                  <div className="container">
                    <h2 className="hdg-lv2">{section.serviceHeading}</h2>
                    <div className={service.list}>
                      {section.serviceList?.map((list, key) => (
                        <div className={service.list_itm} key={key}>
                          <div className={service.list_itm_img}>
                            <Image
                              src={list.Icon.data.attributes.url}
                              width={list.Icon.data.attributes.width}
                              height={list.Icon.data.attributes.height}
                              layout="intrinsic"
                              loading="eager"
                              alt={list.Title}
                            />
                          </div>
                          <div className={service.list_itm_ctn}>
                            <div className={service.list_itm_title}>
                              {list.Title}
                            </div>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: updatedDescription(list.Content),
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );

            case "whychoose.why-choose-section":
              return (
                <Animation className={`sec-bg ${service.why}`}>
                  <div className="container">
                    <h2 className="hdg-lv2">Why Choose Relia</h2>
                  </div>
                  <Slider
                    className={`service_slider ${service.why_slider}`}
                    {...settings}
                  >
                    {section?.WhyChoose?.map((itm, key) => (
                      <div
                        className={`${service.why_slider_col} ${
                          key % 2 === 0 ? service.why_slider_col_pt : ""
                        }`}
                        key={key}
                      >
                        <div className={service.why_slider_inner}>
                          <div className={service.why_slider_img}>
                            {itm.Icon.data !== null || itm.Icon.data ? (
                              <Image
                                src={itm.Icon.data.attributes.url}
                                width={itm.Icon.data.attributes.width}
                                height={itm.Icon.data.attributes.height}
                                layout="intrinsic"
                                loading="eager"
                                alt={itm.Title}
                              />
                            ) : (
                              ""
                            )}
                          </div>
                          <h5>{itm.Title}</h5>
                          <p
                              dangerouslySetInnerHTML={{ __html: itm.Content }}
                            />
                        </div>
                      </div>
                    ))}
                  </Slider>
                </Animation>
              );

            case "main-content.main-content-section":
              return (
                <div className={service.content}>
                  <div className="container">
                    <h2 className="hdg-lv2">{section.mainHeading}</h2>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: updatedDescription(section.MainContent),
                      }}
                    />
                    {section.MainContentList?.length > 0 &&
                      section.MainContentList?.map((itm, key) => (
                        <div
                          className={`box-media ${
                            itm.Reverse ? "box-media--direct" : ""
                          }`}
                          key={key}
                        >
                          <Animation className="box-media__text">
                            <h3 className="hdg-lv3">{itm.Title}</h3>
                            <p
                              dangerouslySetInnerHTML={{ __html: itm.Content }}
                            />
                          </Animation>
                          <Animation className="box-media__img">
                            {itm.Image.data !== null || itm.Image.data ? (
                              <Image
                                src={itm.Image?.data?.attributes.url}
                                width={itm.Image?.data?.attributes.width}
                                height={itm.Image?.data?.attributes.height}
                                layout="intrinsic"
                                loading="eager"
                                alt={itm.Title}
                              />
                            ) : (
                              ""
                            )}
                          </Animation>
                        </div>
                      ))}
                  </div>
                </div>
              );

            case "capabilities.capabilities-section":
              return (
                <div className={`sec-bg ${service.capabilities}`}>
                  <div className="container">
                    <h2 className="hdg-lv2">{section.capabilitiesHeading}</h2>
                    {section.Capabilities?.length > 0 && (
                      <ul className={service.caps}>
                        {section.Capabilities?.map((cap, key) => (
                          <li key={key}>{cap.Text}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            case "service.title-box":
              return (
                <div className="container">
                  <div className={service.heading}>
                    <h2 className="hdg-lv2">{section.Title}</h2>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: updatedDescription(section.Description),
                      }}
                    />
                  </div>
                </div>
              );
          }
        })}
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
    "DynamicZone.TitleBox,DynamicZone.ServiceList,DynamicZone.ServiceList.Icon,DynamicZone.MainContentList,DynamicZone.MainContentList.Image,DynamicZone.Capabilities,DynamicZone.Capabilities.Text,Summary,DynamicZone.WhyChoose,DynamicZone.WhyChoose.Icon,metaImgShare";
  const servicesRes = await fetchAPI(
    `services?filters[slug][$eq]=${slug}&populate=*,${populate}`
  );

  const serviceDetail = servicesRes?.data ?? [];
  return {
    props: { detail: serviceDetail[0].attributes },
  };
}
export default ServiceDetail;
