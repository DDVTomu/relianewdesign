import React from "react";
import ExportedImage from "next/image";
import dataTrusted from "./dataTrusted";
const TrustedSection = React.memo(() => (
  <div className="section trusted">
    <div className="container">
      <div className="trusted-row">
        <div className="trusted-row-desc">
          <h2>Trusted by</h2>
          <p>enterprises and high-growth startups worldwide.</p>
        </div>
        <div className="trusted-row-img">
          {dataTrusted.map((trust) => (
            <ExportedImage src={trust.image} width={150} height={50} />
          ))}
        </div>
      </div>
    </div>
  </div>
));
export default TrustedSection;
