import React from "react";
import ExportedImage from "next/image";
const QuoteSection = (props) => {
  return (
    <section className="quote-section">
      <div className="container">
        <div className="row">
          <ExportedImage
            src="/images/icon/logo-textless.svg"
            width={214}
            height={180}
            alt={props.title ? props.title : "Relia"}
          />
          <div className="content">
            <h2>{props.title ? props.title : "Quote Here"}</h2>
            {props.sub ? <p>{props.sub}</p> : ""}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
