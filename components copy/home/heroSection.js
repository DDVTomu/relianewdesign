import Link from "next/link";
import React from "react";
import Animation from "@components/common/Animation";
import ExportedImage from "next/image";

const HeroSection = React.memo(() => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-section">
          <div className="hero-section-text">
            <Animation>
              <h1>Award Winning Innovation Driven Engineering</h1>
            </Animation>
            <Animation>
              <p>
                Unlock the power of your busniness with intuitive, user-centric
                web and mobile apps.
              </p>
            </Animation>
            <Animation>
              <Link href="/contact">
                <a className="btn">Hire us</a>
              </Link>
            </Animation>
          </div>
          <div className="hero-section-image">
              <ExportedImage
                src="/images/hero.png"
                width={512}
                height={668}
                layout="intrinsic"
                alt="Digital Solutions Development"
                priority
              />
          </div>
        </div>
      </div>
    </div>
  );
});
export default HeroSection;
