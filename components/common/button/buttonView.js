import Link from "next/link"
import PropTypes from "prop-types"
import React from "react"

const ButtonView = props => {
  const external = props.external
  if (external) {
    return (
      <a
        href={props.to}
        className="btn-more"
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
      <Link href={props.to} className="btn-more">
        {props.title}
        <span className="icon"></span>
      </Link>
    </p>
  )
}
ButtonView.defaultProps = {
  title: "View Case Study",
  to: "#",
}
ButtonView.propTypes = {
  title: PropTypes.string,
}
export default ButtonView
