import React from "react"
import Image from "next/image"
import data from "./dataChain"
import Animation from "@components/common/Animation"

const ListBlockchain = () => (
  <div className="list-chain">
    {data.map((plan, index) => (
      <Animation className="item" key={index}>
        <div className="item__thumb">
          <Image width={377}
            height={120}
            layout="intrinsic"
            loading="eager" alt={plan.title} src={plan.image} />
        </div>
        <div className="item__content">
          <h2>{plan.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: plan.description }} />
        </div>
      </Animation>
    ))}
  </div>
)
export default ListBlockchain
