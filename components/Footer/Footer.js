import { useContext } from "react";
import dynamic from "next/dynamic";
import FooterNav from "components/common/FooterNav";
import { GlobalContext } from "pages/_app";
import Link from "next/link";
import ExportedImage from "next/image";
import Animation from "components/common/Animation";
import menuFooter from "./menuFooter";
// import IconTwitter from "@components/common/Icon/IconTwitter";
// import IconFacebook from "@components/common/Icon/IconFacebook";
// import IconInsta from "@components/common/Icon/IconInsta";
// import IconArrowRightWhite from "@components/common/Icon/IconArrowRightWhite";

const Footer = () => {
  const IconTwitter = dynamic(() =>
    import("@components/common/Icon/IconTwitter")
  );
  const IconFacebook = dynamic(() =>
    import("@components/common/Icon/IconFacebook")
  );
  const IconInsta = dynamic(() => import("@components/common/Icon/IconInsta"));
  const IconArrowRightWhite = dynamic(() =>
    import("@components/common/Icon/IconArrowRightWhite")
  );

  const { logo, siteName } = useContext(GlobalContext);
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__row">
          <Animation className="col col-contact">
            <h5 className="col__title">Keep in touch</h5>
            <Animation className="col col-contact">
              <h6>Viet Nam</h6>
              <p>
                629 Nguyen Kiem, Ward 9, Phu Nhuan District, Ho Chi Minh City,
                Vietnam
                <br />
                Phone: +84 35 9208574
              </p>
            </Animation>
            <Animation className="col col-nav">
              <h6 style={{ marginTop: "15px" }}>USA</h6>
              <p>Paulina St Chicago, IL 60622</p>
            </Animation>
            <Animation className="col col-nav">
              <h6 style={{ marginTop: "15px" }}>Canada</h6>
              <p>
                880 Westlock Rd Mississauga ON L5C 1K6 Canada
                <br />
                Phone: +1 (647) 833-7428
              </p>
              <h5 className="col__title-logo">
                <ExportedImage
                  src="/images/logo.svg"
                  width={161}
                  height={44}
                  layout="intrinsic"
                  loading="eager"
                  alt={siteName || "Relia Software"}
                />
              </h5>
            </Animation>
          </Animation>
          <Animation className="col col-nav">
            <h5 className="col__title">Company</h5>
            <div className="nav-footer">
              <FooterNav menus={menuFooter.company} />
            </div>
          </Animation>
          <Animation className="col col-nav">
            <h5 className="col__title">Services</h5>
            <div className="nav-footer">
              <FooterNav menus={menuFooter.services} />
            </div>

            <h5 className="col__title">Industries</h5>
            <div className="nav-footer">
              <FooterNav menus={menuFooter.industries} />
            </div>
          </Animation>
        </div>
        <div className="footer__row"></div>
      </div>
      <div className="container copyright">
        <p className="text-copyright">
          &copy; 2023 Copyright Relia. All Rights Reserved. Privacy Policy
        </p>
        <ul className="list-inline nav-social">
          {menuFooter.dataSocial.map((social) => (
            <li>
              <a
                href="https://twitter.com/softwarerelia"
                className="btn btn-twitter"
                rel="noopener noreferrer"
                aria-label="social twitter"
              >
                <ExportedImage src={social.icon} width={22} height={22} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
