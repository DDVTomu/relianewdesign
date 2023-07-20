import React from "react"
import Link from "next/link"
import PageTitle from "@components/pageTitle"
import Layout from "@components/common/layout"
import { ListMobiService } from "@components/services"
import SEO from "@components/seo"
import Image from "next/image"
import Animation from "@components/common/Animation"
import data from "./data"
import ogpImage from "assets/images/services/reactjs-development.jpg"

const ReactJs = () => {
  const seo = {
    metaTitle: "ReactJS Development Company | Hire Top ReactJS Developers",
    metaDescription: "Relia Software is a leading ReactJS Development Company based in the USA & Vietnam offers the best react development services. Hire Top ReactJS Developers!",
    shareImage: ogpImage,
    pathname: "/services/reactjs-development",
    article: true,
  };
  return (
    <Layout>
      <SEO seo={seo} />
      <PageTitle title="ReactJS Development" className="page-title--sub" />
      <div className="main">
        <div className="container">
          <Animation>
            <h2 className="hdg-lv2">
              We Leverage the <span className="text-white">ReactJS</span>{" "}
              libraries to Help Businesses Expand and Delight Customers
            </h2>
          </Animation>
          <div className="box-media">
            <Animation className="box-media__text">
              <p>
                Relia Software is a leading ReactJS development company with
                vast experience and dedicated developers who have created
                sensational websites and apps using ReactJS platforms. We offer
                flexible and bespoke ReactJS development services to clients
                irrespective of their domain and size. Be it app customization,
                website renovation or building new portals and apps using
                ReactJS, Relia offers you what you need.
                <br />
                When building an app or website, there are usually a lot of
                people involved in the development process which results in
                confusion and issues in accessing the source code. At Relia we
                use ReactJS to directly access the source code and break down
                any problems bringing down the hassles in the development
                process.
              </p>
            </Animation>
            <Animation className="box-media__img">
              <Image
                alt="Relia Software is a leading ReactJS development company"
                src="/images/services/reactjs-development.jpg"
                width={599} height={369} layout="intrinsic" loading="eager"
              />
            </Animation>
          </div>
        </div>
        <div className="box-gray">
          <div className="container">
            <div className="app-service">
              <Animation className="app-service-col">
                <h2 className="hdg-lv2">Our ReactJS Development Services</h2>
              </Animation>
              <Animation className="app-service-col">
                <p>
                  Relia’s result-driven ReactJS development services empower
                  enterprises to address the most complex business challenges
                  and focus on growth. Our ReactJS experts are adept at creating
                  web portals and apps that perform and are visually attractive,
                  helping clients stand out amidst competition. Our ReactJS
                  developers are skilled in technologies like NodeJS, Python,
                  PHP, Java, Ruby on Rails, MongoDB, MySQL and API development
                  tools. Our ReactJS developers also use best-in-class tools
                  like Babel, Redux, Webpack, ES6, Thunk Middleware, and React
                  Flow.
                </p>
              </Animation>
            </div>
            <ListMobiService data={data.reactjs} />
          </div>
        </div>
        <div className="container">
          <Animation>
            <h2 className="hdg-lv2">Hire Best ReactJS Developers</h2>
          </Animation>
          <div className="app-service">
            <Animation className="app-service-col">
              <Image
                alt="Enterprise App Development"
                src="/images/services/best-reactjs-developers.jpg"
                width={477} height={240} layout="intrinsic" loading="eager"
              />
            </Animation>
            <div className="app-service-col">
              <Animation>
                <p>
                  The ReactJS development team at Relia has successfully
                  completed several ReactJS development projects. Hire our
                  developers for your ReactJS projects. Our ability to apply
                  design thinking to all ReactJS development projects sets us
                  apart. Our ReactJS developers are always working at creating
                  better and faster ways of developing solutions.
                </p>
              </Animation>
            </div>
          </div>
          <Animation className="box-heading">
            <h2 className="hdg-lv2">
              Why Choose Relia Software For Your React Requirements
            </h2>
            <p className="box-heading-sub">
              We know that being average is not enough and that’s why we have
              the best talent. Our core values and adoption of tools and new
              technologies make us one of the most sought-after partners for
              ReactJS development.
            </p>
          </Animation>
          <div className="box-reasons">
            <Animation className="box-reasons__col">
              <Image
                alt="Relia Software For Your React Requirements"
                src="/images/services/relia-software-for-your-react-requirements.jpg"
                style={{ maxWidth: "530px", margin: "auto" }}
                width={326} height={247} layout="intrinsic" loading="eager"
              />
            </Animation>
            <Animation className="box-reasons__col">
              <ul className="list-arrow">
                <li>
                  <h3>Domain Expertise</h3>
                  <p>
                    Our ReactJS developers are very professional and skilled
                    ReactJS with extensive domain expertise and experience in
                    delivering ReactJS solutions for diverse domains. We promise
                    you high-rated ReactJS development services for all your
                    needs
                  </p>
                </li>
                <li>
                  <h3>High Performance</h3>
                  <p>
                    We create feature-rich ReactJS portals and apps with high
                    performance ensuring that you get only the best solution in
                    the industry.
                  </p>
                </li>
                <li>
                  <h3>Omni-platform Support</h3>
                  <p>
                    We know that you don’t want to miss out on any channel when
                    reaching out to your customers, and that’s why we offer
                    support for Android, iOS platforms and web platforms. The
                    solutions we create run smoothly on any of these platforms
                    and OS.
                  </p>
                </li>
                <li>
                  <h3>Clean Solutions</h3>
                  <p>
                    With Relia you get glitch-free, bug-free technology products
                    because our ReactJS developers conduct continuous debugging
                    sweeps for maximum app or website performance.
                  </p>
                </li>
              </ul>
            </Animation>
          </div>
          <div className="box-reasons">
            <Animation className="box-reasons__col">
              <ul className="list-arrow">
                <li>
                  <h3>Dynamic User Experience</h3>
                  <p>
                    Our ReactJS developers are not experts just in tools and
                    frameworks. They are also skilled in leveraging technology
                    to make sure they deliver a delightful user experience for
                    you and your end users.
                  </p>
                </li>
                <li>
                  <h3>Security and Scalability</h3>
                  <p>
                    We adopt high-security measures and create maximum scalable
                    apps that help your business grow further without any
                    hurdles.
                  </p>
                </li>
                <li>
                  <h3>End-to-end Development</h3>
                  <p>
                    From creating a prototype or an MVP, to building a
                    full-fledged ReactJS technology product, Relia’s ReactJS
                    developers are with you all the way to ensure successful
                    deployment. We also provide ongoing support and maintenance
                    post deployment.
                  </p>
                </li>
                <li>
                  <h3>Zero Technical Debt</h3>
                  <p>
                    We encourage test-driven development, which means we use
                    unit tests and integration tests that help you iterate
                    without fear of breaking old code.
                  </p>
                </li>
              </ul>
            </Animation>
            <Animation className="box-reasons__col">
              <Image
                alt=""
                src="/images/services/relia-software-for-your-react-requirements-02.jpg"
                style={{ maxWidth: "530px", margin: "auto" }}
                width={558} height={226} layout="intrinsic" loading="eager"
              />
            </Animation>
          </div>
          <Animation>
            <h2 className="hdg-lv2">Why Choose React For Your Next Project?</h2>
          </Animation>
          <div className="box-media">
            <Animation className="box-media__img">
              <Image alt="" src="/images/services/flutter-app-development.png" width={1290} height={806} layout="intrinsic" loading="eager" />
            </Animation>
            <Animation className="box-media__text">
              <ul className="list-plus">
                <li>
                  Your app development projects finish faster and with a more
                  efficient outcome
                </li>
                <li>ReactJS supports reusing so any future updates are easy</li>
                <li>
                  ReactJS users don’t need to wait for Javascript making your
                  site or app user-friendly
                </li>
                <li>
                  The component-based coding development of ReactJS makes
                  debugging easier.
                </li>
                <li>
                  ReactJS websites are excellent for SEO which JavaScript fails
                  to offer
                </li>
                <li>
                  ReactJS makes it easier to create JavaScript with special
                  syntax requirements and combine with HTML
                </li>
                <li>
                  ReactJS developers can harness tools that are best-in-class
                  and implement them for more efficiency
                </li>
              </ul>
            </Animation>
          </div>
        </div>
        <div className="box-contact">
          <div className="container">
            <Animation>
              <h2 className="hdg-lv2">
                Let us help make your Reactjs <span>development</span>
                <br className="visible-pc" /> project a success.
              </h2>
            </Animation>
            <Animation className="box-contact__img">
              <Image
                alt=""
                src="/images/services/learn-more-about-our-range-of-mobile-app.png"
                width={700} height={676} layout="intrinsic" loading="eager"
              />
            </Animation>
            <Link href="/contact">
              <a className="btn">CONTACT US TODAY</a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default ReactJs
