import { Link } from "next/link"
import React from "react"
import Image from "next/image"
import data from "./data"
import { ButtonView } from "@components/common/button"
import Animation from "@components/common/Animation"

const ListIndustries = () => (
  <div className="list-industries">
    {data.map((item, index) => (
      <Animation className="item" key={index}>
        <a href={item.link} className="item__thumb">
          <Image width={1200}
            height={506}
            layout="intrinsic"
            loading="eager" alt={item.title} src={item.image} className="img" />
        </a>
        <div className="item__content">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <ButtonView title="View More" external to={item.link} />
        </div>
      </Animation>
    ))}
  </div>
)
export default ListIndustries
