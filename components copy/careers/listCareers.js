import React from "react";
import Link from "next/link";
import Animation from "@components/common/Animation";

const ListCareers = ({ data = [] }) => {
  return (
    <div className="box-searching">
      {data.map((type, key) => (
        <Animation className="box-searching__block" key={key}>
          <h3 className="box-searching__heading">{type.expert}</h3>
          <ul>
            {type.items.map((job, index) => (
              <li key={index}>
                <a href={`/careers/${job.slug}`}>
                  <dl>
                    <dt>{job.title}</dt>
                    <dd>{job.address}</dd>
                  </dl>
                </a>
              </li>
            ))}
          </ul>
        </Animation>
      ))}
    </div>
  );
};
export default ListCareers;
