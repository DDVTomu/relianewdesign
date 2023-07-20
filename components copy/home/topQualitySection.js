import React from "react"
import ExportedImage from "next/image";
import { ButtonView } from "@components/common/button"
import Animation from "@components/common/Animation"

const TopQualitySection = React.memo(() => (
  <div className="top-quality">
    <h2 className="hdg-lv2">
      <ExportedImage
        src="/images/home/top-quality.png"
        width={132}
        height={95}
        layout="intrinsic"
        loading="lazy"
        alt="Top Quality"
      />
    </h2>
    <div className="container">
      <div className="top-quality__wrap">
        <Animation className="top-quality__col">
          <ExportedImage
            src="/images/home/logo-clutch.png"
            width={282}
            height={80}
            layout="intrinsic"
            loading="lazy"
            alt="Clutch"
          />
          <h5>Relia Software is Named in Top Vietnam Staff Augmentation Services by Clutch</h5>
          <ButtonView
            external
            to="https://clutch.co/vn/it-services/staff-augmentation/leaders-matrix"
            title="View review"
          />
        </Animation>
        <Animation className="top-quality__col">
          <ExportedImage
            src="/images/home/logo-wadline.png"
            width={372}
            height={52}
            layout="intrinsic"
            loading="lazy"
            alt="Wadline"
          />
          <h5>Top Mobile App Developers in Vietnam - Wadline</h5>
          <ButtonView
            external
            to="https://wadline.com/mobile/vn"
            title="View review"
          />
        </Animation>
        <Animation className="top-quality__col">
          <ExportedImage
            src="/images/home/logo-manifest.png"
            width={236}
            height={118}
            layout="intrinsic"
            loading="lazy"
            alt="The Manifest"
          />
          <h5>Top 20 Go Development Companies in Vietnam - The Manifest</h5>
          <ButtonView
            external
            to="https://themanifest.com/vn/software-development/go/companies"
            title="View review"
          />
        </Animation>
        <Animation className="top-quality__col">
          <ExportedImage
            src="/images/home/logo-goodfirms.png"
            width={400}
            height={62}
            layout="intrinsic"
            loading="lazy"
            alt="GoodFirms"
          />
          <h5>Top Blockchain Development Companies in Vietnam - GoodFirms</h5>
          <ButtonView
            to="https://www.goodfirms.co/directory/country/list-blockchain-technology-companies/vietnam"
            external
            title="View review"
          />
        </Animation>
      </div>
    </div>
  </div>
))
export default TopQualitySection
