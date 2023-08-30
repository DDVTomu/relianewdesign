import Link from "next/link"
import PropTypes from "prop-types"
import React from "react"

const ButtonViewBlog = props => {
  const external = props.external
  if (external) {
    return (
      <a
        href={props.to}
        className="btn-more-blog"
        title={props.title}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.title}
        <span className="icon" />
      </a>
    )
  }
  return (
    <p>
      <Link href={props.to}>
        {props.title}
        <a className="btn-more-blog"><span className="icon"></span></a>
      </Link>
    </p>
  )
}
ButtonViewBlog.defaultProps = {
  title: "Read blog post",
  to: "#",
}
ButtonViewBlog.propTypes = {
  title: PropTypes.string,
}
export default ButtonViewBlog
