import Link from "next/link"
import React from "react"
import Image from "next/image"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import Animation from "@components/common/Animation"

const ClientSection = () => {
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
        <Animation>
          <h2 className="hdg-lv2">
            We <span className="text-white">love</span> our clients.
            <br className="visible-pc" />
            They love what we do. That’s how we like it.
          </h2>
        </Animation>
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
            <div>
              <Image
                src="/images/services/google-logo.png"
                width={374}
                height={124}
                layout="intrinsic"
                loading="eager"
                alt="Google"
              />
            </div>
            <div>
              <Image
                src="/images/services/toshiba-logo.png"
                width={380}
                height={64}
                layout="intrinsic"
                loading="eager"
                alt="Toshiba"
              />
            </div>
            <div>
              <Image
                src="/images/services/SCMP-logo.png"
                width={488}
                height={160}
                layout="intrinsic"
                loading="eager"
                alt="SCMP"
              />
            </div>
            <div>
              <Image
                src="/images/services/reebonz-logo.png"
                width={468}
                height={92}
                layout="intrinsic"
                loading="eager"
                alt="Reebonz"
              />
            </div>
          </div>
        </div>
        <div className="box-successful">
          <h2 className="hdg-lv2">
            Hundreds of <span>successful</span> projects over our{" "}
            <br className="visible-pc" />
            9+ year history
          </h2>
          <div className="box-successful__number">
            <span>300+</span>
            <div className="icon">
              <Image
                src="/images/icon/icon-flight.png"
                width={390}
                height={191}
                layout="intrinsic"
                loading="eager"
                alt="Google"
              />
            </div>
          </div>
          <p className="box-successful__text">
            Let’s build your project together. All you need to do is fill out
            the form, and Relia <br />
            will get back to you within 24 hours.
          </p>
          <Link href="/portfolio">
            <a className="btn">LET’S DISCUSS YOUR PROJECT</a>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default ClientSection
