import React from "react"
import Image from "next/image"
import Animation from "@components/common/Animation"

const ListMobiService = ({ data}) => {
  return (
    <div className="list-mobi">
      {data.map((plan, index) => (
        <Animation className="item" key={index}>
          <div className="item__thumb">
            <Image width={121}
              height={379}
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
}
export default ListMobiService
