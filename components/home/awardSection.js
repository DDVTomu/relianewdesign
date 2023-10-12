import React from "react";
import ExportedImage from "next/image";
import Animation from "@components/common/Animation";
import dataAward from "../data/dataAward";
const AwardSection = React.memo(() => (
  <div className="section awards">
    <div className="container">
      <div className="box-heading">
        <div>
          <h2 className="awards-title">
            <ExportedImage
              src="/images/award_logo.png"
              width={34}
              height={29}
              alt="Awards"
            />
            Awards & Recognition
          </h2>
        </div>
      </div>
      <div className="awards__list">
        {dataAward.map((award, key) => (
          <a
            href={award.link}
            target="_blank"
            rel="noopener noreferrer"
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
          </a>
        ))}
      </div>
    </div>
  </div>
));
export default AwardSection;
