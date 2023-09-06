import { Link } from "next/link";
import React from "react";
import Image from "next/image";
// import data from "./data";
import { ButtonView } from "@components/common/button";
import { IconExternal } from "@components/common/Icon";
import Animation from "@components/common/Animation";
import industries from "./indus.module.scss";
const ListIndustries = ({ data = [] }) => {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_SERVER;
  return (
    <div className={industries.list}>
      {data?.map((item, index) => (
        <Animation className={industries.list_item} key={index}>
          <a
            href={`/industries/${item.attributes.slug}`}
            className={industries.list_item_thumb}
          >
            <Image
              width={500}
              height={300}
              layout="intrinsic"
              objectFit="cover"
              loading="eager"
              alt={item.attributes.metaImage.data?.attributes.alternativeText || item?.attributes.Title}
              src={`${strapiUrl}${item.attributes.metaImage.data?.attributes.url}`}
              className="img"
            />
            <h2>
              {item?.attributes.Title}
              <IconExternal />
            </h2>
          </a>
          <div className={industries.list_item_content}>
            <p>{item?.attributes.metaDescription}</p>
          </div>
        </Animation>
      ))}
    </div>
  );
};
export default ListIndustries;
