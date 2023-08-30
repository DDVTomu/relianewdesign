import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";
import box from "./box.module.scss";
const BoxProcess = ({ data = [], transparent = false, fit = true }) => {
  return (
    <div
      className={
        transparent
          ? fit
            ? `${box.row} ${box.row_trans} ${box.row_fit}`
            : `${box.row} ${box.row_trans}`
          : box.row
      }
    >
      {data.map((itm, index) => (
        <div className={box.row_col} key={index}>
          <div className={box.row_col_shape}></div>
          <div className={box.row_col_content}>
            <h3>{itm.value}</h3>
            <p>{itm.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default BoxProcess;
