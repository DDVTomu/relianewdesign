import { useContext } from "react";
import dynamic from "next/dynamic";
import FooterNav from "components/common/FooterNav";
import { GlobalContext } from "pages/_app";
import Link from "next/link";
import ExportedImage from "next/image";
import Animation from "components/common/Animation"
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
  const menus = [
    {
      id: 1,
      name: "Services",
      slug: "services",
    },
    {
      id: 2,
      name: "Portfolio",
      slug: "portfolio",
    },
    {
      id: 3,
      name: "Industries",
      slug: "industries",
    },
    {
      id: 4,
      name: "Blog",
      slug: "blog",
    },
    {
      id: 5,
      name: "Careers",
      slug: "careers",
    },
    {
      id: 6,
      name: "Contact Us",
      slug: "contact",
    },
  ];
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__row">
          <Animation className="col col-contact">
            <h5 className="col__title">
              <ExportedImage
                src="/images/relia-logo.png"
                width={96}
                height={28}
                layout="intrinsic"
                loading="eager"
                alt={siteName || "Relia Software"}
              />
            </h5>
            <small>Full Stack Web & Mobile App Development Company</small>
          </Animation>
          <Animation className="col col-nav">
            <h5 className="col__title">Menu</h5>
            <div className="nav-footer">
              <FooterNav menus={menus} />
            </div>
          </Animation>
          <Animation className="col col-social">
            <h5 className="col__title">Follow</h5>
            <ul className="list-inline nav-social">
              <li>
                <a href="https://twitter.com/softwarerelia" className="btn btn-twitter" rel="noopener noreferrer" aria-label="social twitter">
                  <IconTwitter />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/Relia-Software-1803769743260471/" className="btn btn-twitter" rel="noopener noreferrer" aria-label="social facebook">
                  <IconFacebook />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/relia-software/" rel="noopener noreferrer" className="btn btn-twitter" aria-label="social linkdln">
                  <IconInsta />
                </a>
              </li>
            </ul>
            <p>(+84) 972.016.100</p>
            <p>
              <a href="mailto:sales@reliasoftware.com">sales@reliasoftware.com</a>
            </p>
          </Animation>
        </div>
        <div className="footer__row">
          <Animation className="col col-contact">
            <h6>Viet Nam</h6>
            <p>
              629 Nguyen Kiem, Ward 9, Phu Nhuan District, Ho Chi Minh City, Vietnam
            </p>
            <p>Phone: +84 35 9208574 </p>
          </Animation>
          <Animation className="col col-nav">
            <h6 style={{ marginTop: "15px" }}>USA</h6>
            <p>
              Paulina St
              <br />
              Chicago, IL 60622
            </p>
          </Animation>
          <Animation className="col col-nav">
            <h6 style={{ marginTop: "15px" }}>Canada</h6>
            <p>
              880 Westlock Rd <br />
              Mississauga ON L5C 1K6 <br />
              Canada</p>
            <p>Phone: +1 (647) 833-7428
            </p>
          </Animation>
        </div>
      </div>
      <p className="text-copyright">2020 &copy; All Rights by Relia Software</p>
    </footer>
  );

};

export default Footer;
