import React from "react";
import PropTypes from "prop-types";
import ExportedImage from "next/image";
import { withRouter } from "next/router";
import { fetchAPI } from "lib/api";
import Link from "next/link";
import _ from "lodash";
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
    subMenu: [
      {
        id: 1,
        name: "Design Thinking",
        slug: "/services#design-thinking",
      },
      {
        id: 2,
        name: "Digital Transformation",
        slug: "/services#digital-transformation",
      },
      {
        id: 3,
        name: "App Development",
        slug: "/services#app-development",
      },
      {
        id: 4,
        name: "Off-shore Team",
        slug: "/services#off-shore-team",
      },
    ],
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
    this.onClickSub = this.onClickSub.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
    this.scrollCheck = this.scrollCheck.bind(this);
    this.state = {
      active: false,
      show: false,
      openSub: false,
      activeClass: false,
      blogData: [],
    };
  }
  onClickSub() {
    this.setState({ openSub: !this.state.openSub });
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
    // console.log(data);
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
                    src="/images/logo.svg"
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
                    <li
                      key={index}
                      className={`${item.subMenu ? "hadSub" : ""} ${
                        this.state.openSub === true ? "open" : ""
                      }`}
                    >
                      <Link href={item.slug} scroll={true}>
                        <a
                          className={`nav-link  ${
                            router.pathname.includes(item.slug)
                              ? "nav-link current"
                              : ""
                          }`}
                          role="button"
                        >
                          {item.name}
                        </a>
                      </Link>
                      {item.subMenu && (
                        <>
                          <div
                            className={`navbar__sub ${
                              this.state.openSub === true ? "open" : ""
                            }`}
                          >
                            <div className="navbar__sub_itm">
                              <h2>Solutions We Provide</h2>
                              <ul>
                                {item.subMenu.map((sub, index) => (
                                  <li key={index}>
                                    <Link href={sub.slug}>{sub.name}</Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="navbar__sub_itm">
                              <span>iOS</span>,
                              <span style={{ color: "#00A133" }}>Android</span>,
                              <span style={{ color: "#9F3AFF" }}>Kotlin</span>,
                              <span style={{ color: "#00AFDC" }}>
                                React Native
                              </span>
                              ,<span style={{ color: "#0060A7" }}>Flutter</span>
                              ,<span>Swift</span>,
                              <span style={{ color: "#D50027" }}>Angular</span>,
                              <span style={{ color: "#00AFDC" }}>ReactJS</span>,
                              <span>Vue.js</span>,
                              <span style={{ color: "#F09D00" }}>
                                Javascript
                              </span>
                              ,<span>Next.js</span>,
                              <span style={{ color: "#00AFDC" }}>Golang</span>,
                              <span style={{ color: "#767BB7" }}>PHP</span>,
                              <span style={{ color: "#D50027" }}>
                                Ruby on Rails
                              </span>
                              ,<span>Node.js</span> ,<span>Python</span>,
                              <span>Java</span>,<span>ASP.NET</span>,
                              <span>Django</span>
                            </div>
                          </div>
                          <span
                            className={`icon-plus ${
                              this.state.openSub === true ? "open" : ""
                            }`}
                            onClick={this.onClickSub}
                          ></span>
                        </>
                      )}
                    </li>
                  ))}
                  <li className="nav-item">
                    <a className="nav-link solid-button" href="/contact">
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
