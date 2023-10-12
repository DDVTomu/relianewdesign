import PropTypes from "prop-types";
import React from "react";

const PageTitle = (props) => (
  <section
    className={`page-title ${
      props.className !== undefined ? props.className : ""
    }`}
  >
    <div className="container">
      <h1>{props.title}</h1>
      <p dangerouslySetInnerHTML={{ __html: props.subtitle }} />
    </div>
  </section>
);

PageTitle.propTypes = {
  title: PropTypes.any,
  subtitle: PropTypes.any,
};
export default PageTitle;
