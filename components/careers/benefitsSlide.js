import React from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Image from "next/image"
import data from "./dataSlide"
import Slider from "react-slick"

class BenefitsSlide extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <Slider {...settings} className="benefits-slide">
        {data.map((item, key) => (
          <div className="benefits-slide__item" key={key}>
            <Image alt="" src={item.image} width={1600} height={916} layout="intrinsic"loading="eager" />
            <div className="benefits-slide__content">{item.content}</div>
            <div className="benefits-slide__meta">
              <h6>{item.meta.name}</h6>
              <p>{item.meta.des}</p>
            </div>
          </div>
        ))}
      </Slider>
    )
  }
}
export default BenefitsSlide
