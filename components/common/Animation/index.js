import React from "react";
import classNames from "classnames";
import { InView } from "react-intersection-observer";

const Animation = ({ children, className, style }) => (
  <InView triggerOnce={true}>
    {({ inView, ref }) => {
      return (
        <div
          ref={ref}
          className={`inView ${className} ${classNames({
            inView: true,
            invisible: inView,
          })}
          `}
          style={{style} ? style : ""}
        >
          {children}
        </div>
      );
    }}
  </InView>
);
export default Animation;
