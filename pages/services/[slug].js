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

  console.log(detail)
  return (
    <Layout>
      <SEO seo={seo} />
      <PageTitle
        title={detail.Title}
        content={<BoxProcess data={detail?.Summary} />}
      />
      <div className="main">
        <div className={service.detail}>
          <div className="container">
            <h2 className="hdg-lv2">{detail.serviceHeading}</h2>
            <div className={service.list}>
              {detail.ServiceList?.map((list, key) => (
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
                    <div className={service.list_itm_title}>{list.Title}</div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: list.Content,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Animation className={`sec-bg ${service.why}`}>
          <div className="container">
            <h2 className="hdg-lv2">Why Choose Relia</h2>
          </div>
          <Slider
            className={`service_slider ${service.why_slider}`}
            {...settings}
          >
            {detail.WhyChoose.map((itm, key) => (
              <div
                className={`${service.why_slider_col} ${
                  key % 2 === 0 ? service.why_slider_col_pt : ""
                }`}
                key={key}
              >
                <div className={service.why_slider_inner}>
                  <div className={service.why_slider_img}>
                    <Image
                      src={itm.Icon.data.attributes.url}
                      width={itm.Icon.data.attributes.width}
                      height={itm.Icon.data.attributes.height}
                      layout="intrinsic"
                      loading="eager"
                      alt={itm.Title}
                    />
                  </div>
                  <h5>{itm.Title}</h5>
                  <p>{itm.Content}</p>
                </div>
              </div>
            ))}
          </Slider>
        </Animation>

        <div className={service.content}>
          <div className="container">
            <h2 className="hdg-lv2">{detail.mainHeading}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: detail.MainContent,
              }}
            />
            {detail.MainContentList.length > 0 &&
              detail.MainContentList.map((itm, key) => (
                <div
                  className={`box-media ${
                    key % 2 === 0 ? "box-media--direct" : ""
                  }`}
                  key={key}
                >
                  <Animation className="box-media__text">
                    <h3 className="hdg-lv3">{itm.Title}</h3>
                    <p>{itm.Content}</p>
                  </Animation>
                  <Animation className="box-media__img">
                    {itm.Image.data !== null || itm.Image.data ? <Image
                      src={itm.Image.data?.attributes.url}
                      width={itm.Image?.data?.attributes.width}
                      height={itm.Image?.data?.attributes.height}
                      layout="intrinsic"
                      loading="eager"
                      alt={itm.Title}
                    /> : "" }
                    {/* <Image
                      src={itm.Image.data?.attributes.url}
                      width={itm.Image?.data?.attributes.width}
                      height={itm.Image?.data?.attributes.height}
                      layout="intrinsic"
                      loading="eager"
                      alt={itm.Title}
                    /> */}
                  </Animation>
                </div>
              ))}
          </div>
        </div>
        <div className={`sec-bg ${service.capabilities}`}>
          <div className="container">
            <h2 className="hdg-lv2">{detail.capabilitiesHeading}</h2>
            {detail.Capabilities.length > 0 && (
              <ul className={service.caps}>
                {detail.Capabilities.map((cap, key) => (
                  <li key={key}>{cap.Text}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="container">
          <ContactSubSection />
        </div>
      </div>
    </Layout>
  );
};
export async function getServerSideProps({ params }) {
  const slug = params.slug;
  const servicesRes = await fetchAPI(
    `services?filters[slug][$eq]=${slug}&populate=*,ServiceList.Icon,,MainContentList.Image,Capabilities.Text,Summary,WhyChoose.Icon,metaImgShare`
  );

  const serviceDetail = servicesRes?.data ?? [];
  return {
    props: { detail: serviceDetail[0].attributes },
  };
}
export default ServiceDetail;
