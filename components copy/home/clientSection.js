import React from "react"
import ExportedImage from "next/image";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import Animation from "@components/common/Animation"

class ClientSection extends React.Component {
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
      <div className="clients">
        <div className="container">
          <div className="box-heading">
            <Animation>
              <h2 className="hdg-lv2">
                <span>Brands</span> & <span>Startups</span> Trust Our
                Technologies
                <br />
                Capabilities
              </h2>
            </Animation>
            <Animation className="hdg-lv2-sub">
              On average, only 43% of respondents have a high level of trust in
              institutions across industries. Worse, nearly 40% plan to switch
              to the competition or digital startup due to trust issues. We
              observed significant differences across industries, with
              automotive companies and retailers at the bottom of the trust
              list.
            </Animation>
          </div>
          <div className="clients__wrap">
            <Slider {...settings} className="clients__slider">
              <div className="clients__slider__item">
                <p>
                  The products have received positive reviews in their
                  respective app stores, a result of Relia Software’s smart
                  engineering and appreciation for the minute details. Their
                  work rarely required fixes, making them a steady and reliable
                  partner. The development team is collaborative and organized.
                </p>
                <div className="author">
                  <p className="author__name">Pham Tuan</p>
                  <p className="author__info">CEO - Mbase Vietnam</p>
                </div>
              </div>
              <div className="clients__slider__item">
                <p>
                  The applications launched successfully, attracting 10,000
                  downloads and 2,000–3,000 daily active users, while allowing
                  the company to raise funds for future versions. The team
                  strategized the project effectively, planning apps they could
                  deliver well, and tracking the development smoothly.
                </p>
                <div className="author">
                  <p className="author__name">Founder & CDO</p>
                  <p className="author__info">
                    Fastest growing Fantasy sports app
                  </p>
                </div>
              </div>
              <div className="clients__slider__item">
                <p>
                  Relia Software delivered high-quality designs and they
                  continue to develop the app. The team is very cost-efficient
                  and thorough in their work ethic, which helps them meet
                  expectations with all of their deliverables. Additionally,
                  they are praised for their communication and expertise.
                </p>
                <div className="author">
                  <p className="author__name">Founder & CEO</p>
                  <p className="author__info">A Health tech startup</p>
                </div>
              </div>
            </Slider>
            <div className="clients__logo">
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
            </div>
          </div>
          <Animation>
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
          </div>
        </div>
      </div>
    )
  }
}
export default ClientSection
