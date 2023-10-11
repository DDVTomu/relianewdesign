import React from "react";
import PropTypes from "prop-types";
import ExportedImage from "next/image";
import { withRouter } from "next/router";
// this is only active when the location pathname is exactly
// the same as the href.
// const isActive = ({ isCurrent }) => {
//   return isCurrent ? { className: "nav-link current" } : null;
// };
// const { logo, siteName } = useContext(GlobalContext);
const menus = [
  {
    id: 1,
    name: "Services",
    slug: "/services",
  },
  {
    id: 2,
    name: "Industries",
    slug: "/industries",
  },
  {
    id: 3,
    name: "Blog",
    slug: "/blog",
  },
  {
    id: 4,
    name: "Careers",
    slug: "/careers",
  },
  {
    id: 5,
    name: "Tech Stack",
    slug: "/tech-stack",
  },
  {
    id: 6,
    name: "Portfolio",
    slug: "/portfolio",
  },
];

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
    this.scrollCheck = this.scrollCheck.bind(this);
    this.state = {
      active: false,
      show: false,
      activeClass: false,
    };
  }
  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }
  toggleShow() {
    const currentShow = this.state.show;
    this.setState({ show: !currentShow });
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollCheck);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollCheck);
  }

  scrollCheck = () => {
    let activeClass = true;
    if (window.scrollY === 0) {
      activeClass = false;
    }
    this.setState({ activeClass });
  };

  render() {
    const { siteTitle, menuLinks, className, props, router } = this.props;
    const { active } = this.state;
    return (
      <header
        className={`header ${className || ""} ${
          this.state.activeClass ? "fixed" : ""
        }`}
      >
        <div className={`header__inner ${active === true ? "is-open" : ""}`}>
          <div className="container">
            <nav className="navbar">
              <div className="navbar__brand">
                <a href="/" className="navbar__logo">
                  <ExportedImage
                    src="/images/relia-logo.png"
                    width={372}
                    height={110}
                    layout="intrinsic"
                    loading="eager"
                    alt="Relia Software"
                  />
                </a>
              </div>
              <div
                className={`navbar-toggler ${active === true ? "open" : ""}`}
                onClick={this.toggleClass}
              >
                <div className="navbar-toggler__lines"></div>
              </div>
              <div className="navbar__collapse" id="navbarSupportedContent">
                <ul className="navbar__nav">
                  {menus.map((item, index) => (
                    <li key={index}>
                      <a
                        className={`nav-link  ${
                          router.pathname.includes(item.slug)
                            ? "nav-link current"
                            : ""
                        }`}
                        role="button"
                        href={item.slug}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                  <li className="nav-item">
                    <a className="nav-link nav-link--btn" href="/contact">
                      <b>Contact</b>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: `Relia Software`,
};

export default withRouter(Header);
