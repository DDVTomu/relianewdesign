import React from "react"
import Link from "next/link"
import PageTitle from "@components/pageTitle"
import Layout from "@components/common/layout"
import { ListAccordion } from "@components/services"
import SEO from "@components/seo"
import Animation from "@components/common/Animation"
import Image from "next/image"
import dataFaq from "./faq"
import ogpImage from "assets/images/services/angularjs-development.jpg"

const AngularJS = () => {
  const seo = {
    metaTitle: "AngularJS Development Company | Hire AngularJS Developers",
    metaDescription: "Relia Software-Top AngularJS Development Company in the USA & Vietnam. We provide excellent AngularJS Development Services. Hire Top AngularJS Developers!",
    keywords: "Angular, Angular Development Company, Development Company, Award Winning Angular Development Company",
    pathname: "/services/angularjs-development",
    shareImage: ogpImage,
    article: true,
  };

  return (
    <Layout>
      <SEO seo={seo} />
      <PageTitle
        title="Award Winning Angular Development Company"
        className="page-title--sub"
      />
      <div className="main">
        <div className="container">
          <Animation>
            <h2 className="hdg-lv2">
              <span className="text-white">Award</span> Winning Angular
              Development Company
            </h2>
          </Animation>
          <div className="box-media">
            <Animation className="box-media__img">
              <Image
                alt="Angularjs app development company in vietnam"
                src="/images/services/angularjs-development.jpg"
                width={883} height={700} layout="intrinsic" loading="eager"
              />
            </Animation>
            <Animation className="box-media__text">
              <p>
                We leverage web & mobile apps daily. We accomplish the
                majority of tasks within a few snaps of fingers with mobile
                and web apps. What’s happening behind the screen? Undoubtedly,
                it’s the magic of Angular, which is one of the popular
                frameworks like Javascript. Angular is mostly used to build
                applications for mobile and desktop.
              </p>
              <p>
                Do you know that the name ‘Angular’ was derived from the
                concept of angle brackets {`(‘< >’)`} used in HTML? AngularJS
                was developed by Google team as a side project by two
                developers Misko Hevery and Adam Abrons in 2009, aiming to
                provide an end-to-end tool that allowed web designers to
                interact with both the frontend and the backend. It is nothing
                but an open-source, web-based framework which we utilise to
                build single-page web applications. The architectures such as
                MVC (Model - View- Controller) and MVVM (Model - View - View -
                Model) provide frameworks on both development and testing to
                facilitate easy processing for the client. If you are looking
                for the market winning Angular app development solutions,
                Relia should be the name in your foresight. We let you build
                the best industry-oriented apps that would speak of your
                business legacy for days to come.
              </p>
            </Animation>
          </div>
        </div>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="box-build">
            <Animation>
              <h2 className="hdg-lv2">
                Hire Relia Software to build the <span>best</span> ever Web &
                Mobile apps using Angular
              </h2>
            </Animation>
            <Animation>
              At Reliasoft, we let customers handle millions of code, multiple
              engineers, product requirements, and workflows under one roof
              with the power of Angular. With Angular, we are here to act as a
              bridge to solve, build, manage and divide work among folks
              belonging to appropriate roles.
            </Animation>
            <Animation>
              Our expertise lies in bringing an interactive single codebase
              mobile apps using the best of technology, Flutter.
            </Animation>
            <Animation className="box-build__image">
              <Image
                alt="Award winning angularjs app developers"
                src="/images/services/award-winning-angularjs-app-developers.jpg"
                className="img"
                width={1050} height={700} layout="intrinsic" loading="eager"
              />
            </Animation>
          </div>
        </div>
        <div className="container">
          <Animation>
            <h2 className="hdg-lv2">
              <span>Why</span> Angular for business app?
            </h2>
          </Animation>
          <Animation>
            <p style={{ textAlign: "center" }}>
              AngularJS is a structured framework that helps to build the most
              user-centric and compelling mobile and web apps. It is
              considered among masses to be the most prolific and largest
              data-centric applications. With the magic potion of Angular, you
              can go on to build, manage, and control the workflow under a
              single roof. Angular lets you use HTML as your template. You can
              also extend HTML's syntax as required.
            </p>
          </Animation>
          <div className="box-reasons">
            <div className="box-reasons__col">
              <Animation>
                <Image
                  alt="Angular js development company"
                  src="/images/services/angular-js-development.jpg"
                  width={960} height={630} layout="intrinsic" loading="eager"
                />
              </Animation>
              <ul className="list-arrow" style={{ paddingLeft: 0 }}>
                <li>
                  <h3>The best pool of Developer community</h3>
                  <p>
                    Angular is very popular among the community of developers
                    in the market. Since the introduction of initial Angular
                    framework versions, it has seen rapid growth. They have
                    also created a powerful community across the world, which
                    enables all the front-row Angular developers to contribute
                    constantly, mutually share their programming experience,
                    go on to discuss their quirky ideas and solve the complex
                    problems together.
                  </p>
                </li>
                <li>
                  <h3>Abridged Architecture</h3>
                  <p>
                    Angular framework is centrally embedded with MVC
                    (Model-view-controller). The advantage is that it doesn’t
                    request any developers to dissect the app into separate
                    Model-View-Controller components. This helps the Developer
                    to perform faster with fewer coding.
                  </p>
                </li>
              </ul>
            </div>
            <Animation className="box-reasons__col">
              <ul className="list-arrow">
                <li>
                  <h3>SPA (Single-Page Applications)</h3>
                  <p>
                    SPAs is one of the finest benefits which Angular brews.
                    When a user clicks and navigates the application, it
                    continues with the flow and directs the user to the next
                    page rather than reloading or creating a new page.
                    Simultaneously, you can send and receive the data.
                  </p>
                </li>
                <li>
                  <h3>High Quality-oriented apps</h3>
                  <p>
                    Angular is one among the first of choice for any
                    developer. It comes up with the most business-friendly
                    features. Angular is popular because of its high-quality
                    features, independent platform approach and all this adds
                    on with the ability to majorly support all the browsers.
                    Whenever the Angular team is releasing new features at
                    periodic intervals, it gets constantly added to the
                    intensified user experience.
                  </p>
                </li>
                <li>
                  <h3>Maintained by Google with care</h3>
                  <p>
                    Angular Framework is proudly developed and maintained by
                    Google. It is one of the topmost frameworks. There is
                    always quick support and action from the google team
                    whenever you report any errors. At every frequent
                    interval, Google is coming up with the updated versions of
                    Angular with great features added to each framework
                    version.
                  </p>
                </li>
              </ul>
            </Animation>
          </div>
        </div>

        <div className="container">
          <Animation>
            <h2 className="hdg-lv2">
              Why rely on <span>Relia Software</span> for Angular Development
              Services?
            </h2>
          </Animation>
          <Animation>
            <p>
              Relia software is a leading product development company with a
              wider emphasis on providing experience-driven engineering
              solutions along with scalable software architecture. At Relia
              Software, our belief lies in creating digital experiences with a
              notion to reach millions of people. We also strive towards
              delivering excellent, error and bug-free solutions at each step.
            </p>
          </Animation>
          <Animation>
            <p>
              At Relia, we have gone over to build over 300+ apps across 10+
              verticals of industries. Our prominence lies in being the most
              reverent Angular mobile app development company, with core
              ethics focusing on providing high-grade quality. We have been
              listed among the top 50 startups.
            </p>
          </Animation>
          <Animation>
            <p>
              The specialization of Relia lies in building a mobile
              application, enterprise and web app development with a major
              focus on Artificial Intelligence, Chatbots and Blockchain.
            </p>
          </Animation>
          <div className="our-blockchain">
            <Animation className="our-blockchain__col">
              <div className="our-blockchain__icon">
                <Image
                  alt="We simplify the task "
                  src="/images/icon/icon-smile.svg"
                  width={76} height={76} layout="intrinsic" loading="eager"
                />
              </div>
              <h3>We simplify the task </h3>
              <p>
                Angular is being used to develop leading applications across
                the world. The improvisation happens at every instance, be it
                using polyfills (Javascript Code) to render animations in the
                recent versions and now rendered with the ability to remove it
                without JS code. We help you fast track along with the newer
                versions.
              </p>
            </Animation>
            <Animation className="our-blockchain__col">
              <div className="our-blockchain__icon">
                <Image
                  alt="Risen among your competitors "
                  src="/images/icon/icon-briefcase.svg"
                  width={65} height={59} layout="intrinsic" loading="eager"
                />
              </div>
              <h3>Risen among your competitors </h3>
              <p>
                Angular is being used by small-scale and large-scale web
                applications for their cross-browser compatible web apps. Many
                leading apps in the industry like PayPal, Gmail, Netflix,
                Upwork, The Guardian, etc were developed by Angular web
                frameworks. We let you develop apps of such high business
                standards and top-notch quality.
              </p>
            </Animation>
            <Animation className="our-blockchain__col">
              <div className="our-blockchain__icon">
                <Image
                  alt="Build Large Enterprise Applications"
                  src="/images/icon/icon-thunderbolt.svg"
                  width={55} height={78} layout="intrinsic" loading="eager"
                />
              </div>
              <h3>Build Large Enterprise Applications</h3>
              <p>
                Angular helps to organize the workflow in companies and
                manages the larger operations. It has risen among its
                competitors like React.js, Vue, Ember, Meteor, etc. With
                Angular, we let you create enterprise apps by easing the
                potency. For Mobile and Web applications development, our team
                consists of pioneers whom you can trust without an eye bait.
                With the platform-centric approach and expertise over various
                sets of tools, we code faster and roll down an easier app
                development process.
              </p>
            </Animation>
          </div>
          <ListAccordion data={dataFaq.angular} />
        </div>
        <div className="box-contact">
          <div className="container">
            <Animation>
              <h2 className="hdg-lv2">
                Let us help make your AngularJS <span>development</span>{" "}
                <br />
                project a success.
              </h2>
            </Animation>
            <Animation className="box-contact__img">
              <Image
                alt="Angular js development company"
                src="/images/services/angular-js-development-company.jpg"
                style={{ maxWidth: "279px", margin: "auto" }}
                width={801} height={533} layout="intrinsic" loading="eager"
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
export default AngularJS
