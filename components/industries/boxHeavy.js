import React from "react"
import Image from "next/image"
import Animation from "@components/common/Animation"

const BoxHeavy = () => (
  <div className="box-heavy">
    <Animation className="box-heavy__head">
      <h3>
        45% heavy, disconnected and duplicative legacy systems as a key
        inhibitor to digital transformation
      </h3>
      <p>
        Source: <strong>Celent 2018</strong>
      </p>
      <Image
        src="/images/industries/computer.png"
        width={502}
        height={467}
        layout="intrinsic"
        loading="eager"
        alt="computer"
      />
    </Animation>
    <div className="box-heavy__content">
      <Animation className="box-heavy__inner">
        <h2 className="hdg-lv2">
          Relia is <span>lower cost</span> and lower risk
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries.
        </p>
        <p>
          Lorem Ipsum passages, and more recently with desktop publishing
          software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </Animation>
    </div>
  </div>
)
export default BoxHeavy
