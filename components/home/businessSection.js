import React from "react";

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
        <div className="business-row">
          <div className="business-row-col">
            <h3>10+</h3>
            <p>years of experience</p>
          </div>
          <div className="business-row-col">
            <h3>5.0</h3>
            <p>rating on Clutch</p>
          </div>
          <div className="business-row-col">
            <h3>300+</h3>
            <p>finished projects</p>
          </div>
          <div className="business-row-col">
            <h3>50%</h3>
            <p>returning customers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSection;
