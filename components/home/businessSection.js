import React from "react";
import BoxProcess from "@components/common/BoxProcess";
const data = [
  {
    value: "10+",
    text: "years of experience",
  },
  {
    value: "5.0",
    text: "rating on Clutch",
  },
  {
    value: "300+",
    text: "finished projects",
  },
  {
    value: "50%",
    text: "returning customers",
  },
];
const BusinessSection = () => {
  return (
    <div className="section business">
      <div className="container">
        <h2>Business Performance Increase</h2>
        <p className="business-desc">
          We build MVP's for startups and bespoke software solutions for
          enterprises which ensure scalability, robustness and top notch user
          experiences. We have delivered more than 300 applications since 2011
          for both web and mobile platforms varying over 10+ industries gives us
          an edge to deliver a perfect product for our clients.
        </p>
        <BoxProcess data={data} />
      </div>
    </div>
  );
};

export default BusinessSection;
