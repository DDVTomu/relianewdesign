import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ExportedImage from "next/image";
import { withRouter } from "next/router";
import SearchBTN from "@components/common/SearchBTN";
import { fetchAPI } from "lib/api";
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
      blogData: [],
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
    async function getData() {
      const blogs = await Promise.all([
        fetchAPI(
          "blogs?pagination[pageSize]=100&populate=*&sort[0]=publishedAt:DESC"
        ),
      ]);
      const data = blogs?.data ?? [];
      if (!data) {
        return data;
      }
    }

    this.setState({ blogData: getData() });
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
    function groupByCategory(data = []) {
      if (!data?.length) {
        return [];
      }
      const formattedData = data.map((item) => {
        const attributes = item.attributes;
        const category = attributes?.category?.data?.attributes?.name;
        const thumnail = attributes?.thumnail?.data?.attributes?.url;
        const thumnailWidth = attributes?.thumnail?.data?.attributes?.width;
        const thumnailHeight = attributes?.thumnail?.data?.attributes?.height;
        const tags = attributes?.tags?.data?.map?.((tag) => {
          return tag?.attributes?.name;
        });

        return {
          ...attributes,
          category,
          tags,
          thumnail,
          thumnailWidth,
          thumnailHeight,
        };
      });
      return _.map(
        _.groupBy(formattedData, (blog) => blog.category),
        (blogs, category) => {
          return {
            expert: category,
            items: blogs,
          };
        }
      );
    }

    const blogsData = groupByCategory(this.state.blogData);
    const data = this.state.blogData;
    console.log(data);
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
                    {/* <SearchBTN data={blogs} blogs={allBlogs} /> */}
                  </li>
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
