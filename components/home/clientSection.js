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
                />
              </div>
              <div className="box-heading__row_head">
                {" "}
                <div>
                  <h2 className="hdg-lv2">
                    We work with clients from all over the world
                  </h2>
                </div>
                <div className="hdg-lv2-sub">
                  {/* On average, only 43% of respondents have a high level of trust
                  in institutions across industries. Worse, nearly 40% plan to
                  switch to the competition or digital startup due to trust
                  issues. We observed significant differences across industries,
                  with automotive companies and retailers at the bottom of the
                  trust list. */}
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
                    />
                    <div className="author__desc">
                      <p className="author__desc_name">{data.name}</p>
                      <p className="author__desc_info">{data.info}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="clients__logo">
              <Animation>
                <ExportedImage
                  src="/images/home/google-logo.png"
                  width={209}
                  height={69}
                  layout="intrinsic"
                  loading="lazy"
                  alt="Google"
                />
              </Animation>
              <Animation>
                <ExportedImage
                  src="/images/home/toshiba-logo.png"
                  width={209}
                  height={35}
                  layout="intrinsic"
                  loading="lazy"
                  alt="Toshiba"
                />
              </Animation>
              <Animation>
                <ExportedImage
                  src="/images/home/SCMP-logo.png"
                  width={209}
                  height={69}
                  layout="intrinsic"
                  loading="lazy"
                  alt="SCMP"
                />
              </Animation>
              <Animation>
                <ExportedImage
                  src="/images/home/reebonz-logo.png"
                  width={209}
                  height={41}
                  layout="intrinsic"
                  loading="lazy"
                  alt="Reebonz"
                />
              </Animation>
            </div> */}
          </div>
          {/* <Animation>
            <h3 className="hdg-lv2 ">
              We Use Advanced <span>Tech</span> Stack
            </h3>
          </Animation>
          <div className="clients__tech">
            <div className="clients__tech__row">
              <div className="block">
                <p className="h4">Mobile</p>
                <ul className="list-inline">
                  <li>
                    <Animation>
                      <ExportedImage
                        src="/images/home/ios-logo-apple-9.png"
                        width={121}
                        height={56}
                        layout="intrinsic"
                        loading="lazy"
                        alt="IOS"
                      />
                    </Animation>
                  </li>
                  <li>
                    <Animation>
                      <ExportedImage
                        src="/images/home/Android_logo_white.png"
                        width={172}
                        height={40}
                        layout="intrinsic"
                        loading="lazy"
                        alt="Android"
                      />
                    </Animation>
                  </li>
                  <li>
                    <Animation>
                      <ExportedImage
                        src="/images/home/flutter-logo.png"
                        width={181}
                        height={86}
                        layout="intrinsic"
                        loading="lazy"
                        alt="flutter"
                      />
                    </Animation>
                  </li>
                </ul>
              </div>
            </div>
            <div className="clients__tech__row">
              <div className="block">
                <Animation>
                  <p className="h4">Frontend</p>
                </Animation>
                <ul className="list-inline">
                  <li>
                    <Animation>
                      <ExportedImage
                        src="/images/home/reactjs-logo.png"
                        width={220}
                        height={123}
                        layout="intrinsic"
                        loading="lazy"
                        alt="Reactjs"
                      />
                    </Animation>
                  </li>
                  <li>
                    <Animation>
                      <ExportedImage
                        src="/images/home/angularjs-logo.png"
                        width={200}
                        height={52}
                        layout="intrinsic"
                        loading="lazy"
                        alt="Angularjs"
                      />
                    </Animation>
                  </li>
                  <li>
                    <Animation>
                      <ExportedImage
                        src="/images/home/vuejs-logo.png"
                        width={171}
                        height={59}
                        layout="intrinsic"
                        loading="lazy"
                        alt="Vuejs"
                      />
                    </Animation>
                  </li>
                  <li>
                    <Animation>
                      <ExportedImage
                        src="/images/home/next-js-logo.png"
                        width={121}
                        height={73}
                        layout="intrinsic"
                        loading="lazy"
                        alt="Nextjs"
                      />
                    </Animation>
                  </li>
                </ul>
              </div>
            </div>
            <div className="clients__tech__row">
              <div className="block">
                <Animation>
                  <p className="h4">Backend</p>
                </Animation>
                <ul className="list-inline">
                  <li>
                    <Animation>
                      <ExportedImage
                        src="/images/home/python-logo.png"
                        width={173}
                        height={49}
                        layout="intrinsic"
                        loading="lazy"
                        alt="Python"
                      />
                    </Animation>
                  </li>
                  <li>
                    <Animation>
                      <ExportedImage
                        src="/images/home/nodejs-logo.png"
                        width={176}
                        height={48}
                        layout="intrinsic"
                        loading="lazy"
                        alt="Nodejs"
                      />
                    </Animation>
                  </li>
                  <li>
                    <Animation>
                      <ExportedImage
                        src="/images/home/Ruby_On_Rails_Logo.png"
                        width={141}
                        height={50}
                        layout="intrinsic"
                        loading="lazy"
                        alt="Ruby On Rails"
                      />
                    </Animation>
                  </li>
                  <li>
                    <Animation>
                      <ExportedImage
                        src="/images/home/golang-logo.png"
                        width={182}
                        height={80}
                        layout="intrinsic"
                        loading="lazy"
                        alt="Golang"
                      />
                    </Animation>
                  </li>
                  <li>
                    <Animation>
                      <ExportedImage
                        src="/images/home/dotnet-logo.png"
                        width={167}
                        height={55}
                        layout="intrinsic"
                        loading="lazy"
                        alt="Dotnet"
                      />
                    </Animation>
                  </li>
                  <li>
                    <Animation>
                      <ExportedImage
                        src="/images/home/php-logo.png"
                        width={103}
                        height={53}
                        layout="intrinsic"
                        loading="lazy"
                        alt="PHP"
                      />
                    </Animation>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}
export default ClientSection;
