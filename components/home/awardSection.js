import React from "react";
import ExportedImage from "next/image";
import Animation from "@components/common/Animation";
import dataAward from "../data/dataAward";
const AwardSection = React.memo(() => (
  <div className="section awards">
    <div className="container">
      <div className="box-heading">
        <Animation>
          <h2 className="awards-title">
            <ExportedImage
              src="/images/award_logo.png"
              width={34}
              height={29}
            />
            Awards & Recognition
          </h2>
        </Animation>
      </div>
      <div className="awards__list">
        {dataAward.map((award, key) => (
          <Animation
            key={key}
            className="item"
            style={{
              background: award.color,
            }}
          >
            <div className="item__top">
              <ExportedImage
                src={award.image}
                width={award.width}
                height={award.height}
                layout="intrinsic"
                loading="lazy"
                alt="Ruby On Rails"
              />
            </div>
            <div className="item__bootom">
              <p>{award.desc}</p>
            </div>
          </Animation>
        ))}

        {/* <Animation className="item">
          <div className="item__top">
            <h6 className="item__top__title">
              Top Mobile App Developers Company - GoodFirms
            </h6>
            <div className="item__top__image">
              <a
                target="_blank"
                rel="nofollow noopener"
                href="https://www.goodfirms.co/company/relia-software"
              >
                <ExportedImage
                  src="/images/home/profile-reviews.svg"
                  width={175}
                  height={150}
                  layout="intrinsic"
                  loading="lazy"
                  alt="GoodFirms"
                />
              </a>
            </div>
          </div>
          <div className="item__bootom">
            <p>
              GoodFirms Recognised Relia Software as Top Mobile App Development
              Company in Vietnam.
            </p>
            <p>
              GoodFirms, a Washington, D.C. based B2B research, ratings and
              review platform.
            </p>
          </div>
        </Animation> */}
      </div>
    </div>
  </div>
));
export default AwardSection;
