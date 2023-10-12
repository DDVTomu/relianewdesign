import PropTypes from "prop-types";
import React from "react";

const PageTitle = (props) => (
  <section
    className={`page-title ${
      props.className !== undefined ? props.className : ""
    }`}
    style={props.style ? props.style : {}}
  >
    <div className="container">
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
      {props.content}
      {props.btnUrl ? (
        <a href={props.btnUrl}>
          <button className="tp-button">Visit Website</button>
        </a>
      ) : (
        ""
      )}
    </div>
  </section>
);

PageTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  content: PropTypes.any,
};
export default PageTitle;
