import React from "react";
import { fetchAPI } from "@lib/api";
import dataSolution from "@components/data/dataSolution";
import ExportedImage from "@components/common/Image";
import solution from "./solution.module.scss";
const SolutionSection = ({ data = [], provides }) => {
  let listServices = [];
  let tempArr = [];
  provides.data.forEach((element) => {
    tempArr = [];
    data.data.forEach((itm) => {
      if (
        element.attributes.Name ===
        itm.attributes.services_provide.data.attributes.Name
      ) {
        tempArr.push({
          service: itm.attributes.Title,
          slug: itm.attributes.Slug,
        });
      }
    });
    listServices.push({
      provide: element.attributes.Name,
      image: element.attributes.image,
      content: element.attributes.Content,
      services: tempArr,
    });
  });
  return (
    <section className={solution.section}>
      <div className="container">
        <div className={solution.section_row}>
          {listServices.map((solutions, index) => (
            <div
              id={solutions.provide.toLowerCase().replace(" ", "-")}
              className={solution.section_col}
              key={index}
            >
              <div className={solution.section_img}>
                <ExportedImage
                  src={solutions.image.data.attributes.url}
                  width={solutions.image.data.attributes.width}
                  height={solutions.image.data.attributes.height}
                  alt={solutions.provide}
                />
              </div>
              <h3>{solutions.provide}</h3>
              <p>{solutions.content}</p>
              {solutions.services.length > 0 && (
                <ul className={solution.section_linklist}>
                  {solutions.services.map((solution, key) => (
                    <li key={key}>
                      <a href={`/services/${solution.slug}`}>
                        {solution.service}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SolutionSection;
