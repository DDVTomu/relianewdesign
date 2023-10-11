import React from "react"
import ExportedImage from "next/image";
import Animation from "@components/common/Animation"

const AwardSection = React.memo(() => (
  <div className="awards">
    <div className="container">
      <div className="box-heading">
        <Animation>
          <h2>
            <span className="text-white">Awards</span> & Recognition
          </h2>
        </Animation>
        <Animation className="hdg-lv2-sub">
          We have put our hearts and souls into what we have built and that did
          not go unrecognised. We were showcased with some love in last few
          years.
        </Animation>
      </div>
      <div className="awards__list">
        <Animation className="item">
          <div className="item__top">
            <h6 className="item__top__title">
              Relia Software is Named a Top Developer in Asia by Clutch
            </h6>
            <div className="item__top__image">
              <ExportedImage
                src="/images/home/awards01.png"
                width={102}
                height={109}
                layout="intrinsic"
                loading="lazy"
                alt="Ruby On Rails"
              />
            </div>
          </div>
          <div className="item__bootom">
            For almost a decade, Relia Software has devoted itself to provide
            top-notch mobile app development services to make startups and
            established companies the best they can be. The quality of our
            services means everything to us. That’s why it’s an honor to be
            recognized by Clutch as a top developer in Vietnam.
          </div>
        </Animation>
        <Animation className="item">
          <div className="item__top">
            <h6 className="item__top__title">
              Top Mobile App Developers Company - GoodFirms
            </h6>
            <div className="item__top__image">
              <a target='_blank' rel='nofollow noopener' href='https://www.goodfirms.co/company/relia-software'>
                <ExportedImage
                  src="/images/home/profile-reviews.svg"
                  width={175}
                  height={150}
                  layout="intrinsic"
                  loading="lazy"
                  alt="GoodFirms"
                /></a>
            </div>
          </div>
          <div className="item__bootom">
            <p>GoodFirms Recognised Relia Software as Top Mobile App Development Company in Vietnam.</p>
            <p>GoodFirms, a Washington, D.C. based B2B research, ratings and review platform.</p>
          </div>
        </Animation>
      </div>
    </div>
  </div>
))
export default AwardSection
