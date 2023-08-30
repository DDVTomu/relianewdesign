import React from "react";
import ExportedImage from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import dataClient from "@components/data/dataClient";
import Animation from "@components/common/Animation";

class ClientSection extends React.Component {
  render() {
    const settings = {
      center: "true",
      dots: "true",
      infinite: "true",
      speed: "500",
      arrows: "false",
      slidestoshow: "1",
      slidestoscroll: "1",
    };

    return (
      <div className="section clients">
        <div className="container">
          <div className="box-heading">
            <div className="box-heading__row">
              <div className="box-heading__row_img">
                <ExportedImage
                  src="/images/icon/world.svg"
                  width={258}
                  height={180}
                  alt="We work with clients from all over the world"
                />
              </div>
              <div className="box-heading__row_head">
                <div>
                  <h2 className="hdg-lv2">
                    We work with clients
                    <br />
                    from all over the world
                  </h2>
                </div>
                <div className="hdg-lv2-sub">
                  United States, India, Indonesia, Singapore, Vietnam and many
                  more...
                </div>
              </div>
            </div>
          </div>
          <div className="clients__wrap">
            <div {...settings} className="clients__slider">
              {dataClient.map((data, key) => (
                <div key={key} className="clients__slider__item">
                  <p className="clients__slider__item_quote">{data.desc}</p>
                  <div className="author">
                    <ExportedImage
                      className="author__image"
                      src={data.avatar}
                      width={64}
                      height={64}
                      alt={data.name}
                    />
                    <div className="author__desc">
                      <p className="author__desc_name">{data.name}</p>
                      <p className="author__desc_info">{data.info}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ClientSection;
