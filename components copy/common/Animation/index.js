import React from "react"
import classNames from "classnames"
import { InView } from "react-intersection-observer"

const Animation = ({ children, className }) => (
  <InView triggerOnce={true}>
    {({ inView, ref }) => {
      return (
        <div
          ref={ref}
          className={`inView ${className} ${classNames({
            inView: true,
            invisible: inView,
          })}`}
        >
          {children}
        </div>
      )
    }}
  </InView>
)
export default Animation
