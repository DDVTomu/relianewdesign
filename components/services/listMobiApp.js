import React from "react"
import Image from "next/image"
import data from "./dataMobiApp"
import Animation from "../common/Animation"

const ListMobiApp = () => (
  <div className="list-plan">
    {data.map((plan, index) => (
      <Animation className="item" key={index}>
        <div className="item__thumb">
          <Image alt={plan.title} filename={plan.image} />
        </div>
        <div className="item__content">
          <h2>{plan.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: plan.description }} />
        </div>
      </Animation>
    ))}
  </div>
)
export default ListMobiApp
