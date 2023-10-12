import Link from "next/link";
import { fetchAPI } from "@lib/api";
import React, { useEffect, useState } from "react";
import Animation from "@components/common/Animation";
import ExportedImage from "next/image";
import CloudImg from "@components/common/Image";
import Slider from "react-slick";
import hero from "./hero.module.scss";
const HeroSection = React.memo(() => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchAPI(
          "portfolios?pagination[pageSize]=100&populate=*&sort[0]=id"
        );
        const result = await response.data;
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const settings = {
    slidesToShow: 5,
    autoplay: "true",
    autoplaySpeed: 100,
    speed: 4000,
    infinite: "true",
    focusOnSelect: "false",
    center: "true",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: "false",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: "false",
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={`section ${hero.hero}`}>
      <div className="container">
        <div className={`${hero.hero_section} ${hero.hero_section_text}`}>
          <h1>
            Engineering culture with
            <br />
            <span> top talents</span>
          </h1>
          <p>
            We have been sharing the goal with various business owners by
            leveraging innovative technologies to transform their business. We
            build partnership, not just a code or design.
          </p>
          <div className={hero.hero_section_button}>
            <Link href="/contact">
              <a className="solid-button">Start a Project</a>
            </Link>
            <Link href="/portfolio" className="tp-button">
              <a className="tp-button">See our portfolio</a>
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="hero-carousel">
        <Slider {...settings} className="hero-slider">
          {data.map((portfolio, key) => (
            <div className="hero-slides" key={key}>
              {portfolio.attributes.projectImage.data ? (
                <CloudImg
                  className="hero-slides-image"
                  src={portfolio.attributes.projectImage.data.attributes.url}
                  width={300}
                  height={200}
                  layout="intrinsic"
                  quality={100}
                />
              ) : (
                ""
              )}
            </div>
          ))}
        </Slider>
        <div className="hero-slider-gradientLeft"></div>
        <div className="hero-slider-gradientRight"></div>
      </div> */}
    </div>
  );
});
export default HeroSection;
