import React from "react"
import Link from "next/link"
import PageTitle from "@components/pageTitle"
import Layout from "@components/common/layout"
import { ListAccordion } from "@components/services"
import SEO from "@components/seo"
import Image from "next/image"
import Animation from "@components/common/Animation"
import dataFaq from "./faq"
import ogpImage from "assets/images/services/react-native-app-development.jpg"

const ReactNative = () => {
  const seo = {
    metaTitle: "React Native App Development Company | USA & Vietnam",
    metaDescription: "Looking for Top React Native Mobile App Development Company? We proffer excellent react native development services. Hire Top React Native App Developers!",
    shareImage: ogpImage,
    pathname: "/services/react-native-app-development",
    article: true,
  };
  return (
    <Layout>
      <SEO seo={seo} />
      <PageTitle
        title="React Native App Development"
        className="page-title--sub"
      />
      <div className="main">
        <div className="container">
          <Animation>
            <h2 className="hdg-lv2">React Native Development</h2>
          </Animation>
          <div className="box-media">
            <Animation className="box-media__text">
              <p>
                Experience our A-class services based on React Native technology
                that can help you plan and develop a successful React Native
                product. React native development can save at least 30% of costs
                compared to native mobile development. As thousands of companies
                are using React Native in production, it is no doubt the future
                of mobile app development.
              </p>

              <p>
                Backed by the robustness of Facebook and ease of JavaScript,
                React Native has led to a huge transformation in the tech world.
                The age-old mobile app development process got a makeover and
                entrepreneurs choose a cost-effective solution. The Reach native
                led to developing applications that offer a native UX with
                faster operations and functionalities.
              </p>
            </Animation>
            <Animation className="box-media__img">
              <Image alt="" src="/images/services/react-native-app-development.jpg" width={750} height={422} layout="intrinsic" loading="eager" />
            </Animation>
          </div>
        </div>
        <div className="container">
          <Animation className="box-heading">
            <h2 className="hdg-lv2">Why Choose React Native?</h2>
            <p className="hdg-lv2-sub">
              With React Native, mobile apps can be built using only JavaScript.
              The technology lets you create apps with extraordinary UIs and
              utilises the same design as React- A JavaScript library. The
              mobile application development process with react native is
              indistinguishable from an app coded in Objective-C or Java.
            </p>
          </Animation>
          <div className="list-idea">
            <Animation className="list-idea__col">
              <Image
                alt=""
                src="/images/icon/icon-check-mark.png"
                style={{ width: "52px" }}
                width={104} height={104} layout="intrinsic" loading="eager"
              />
              <h3>Mobile App Development:</h3>
              <p>
                React native allows developers to create mobile apps using
                website technology.
              </p>
            </Animation>
            <Animation className="list-idea__col">
              <Image
                alt=""
                src="/images/icon/icon-check-mark.png"
                style={{ width: "52px" }}
                width={104} height={104} layout="intrinsic" loading="eager"
              />
              <h3>Cross-platform Apps:</h3>
              <p>
                The technology allows developers to build cross-platform apps
              </p>
            </Animation>
            <Animation className="list-idea__col">
              <Image
                alt=""
                src="/images/icon/icon-check-mark.png"
                style={{ width: "52px" }}
                width={104} height={104} layout="intrinsic" loading="eager"
              />
              <h3>Single Codebase:</h3>
              <p>
                Maintaining an app built with React Native is hassle free with
                only one codebase.
              </p>
            </Animation>
            <Animation className="list-idea__col">
              <Image
                alt=""
                src="/images/icon/icon-check-mark.png"
                style={{ width: "52px" }}
                width={104} height={104} layout="intrinsic" loading="eager"
              />
              <h3>Fast and Responsive:</h3>
              <p>
                React Native allows you to build apps faster apart from being
                responsive and agile.
              </p>
            </Animation>
          </div>
          <Animation>
            <h2 className="hdg-lv2">
              Work With The Best React Native Development Company
            </h2>
          </Animation>
          <div className="box-media">
            <Animation className="box-media__img">
              <Image alt="" src="/images/services/react-native-app-development-01.jpg" width={749} height={349} layout="intrinsic" loading="eager" />
            </Animation>
            <Animation className="box-media__text">
              <p>
                At Relia, we adopted the React native development at an early
                stage and witnessed the massive growth since its initial public
                release in 2015.
                <br />
                With a number of React native mobile applications successfully
                released, we are pioneers of the technology.
              </p>
              <p>
                As a React Native development company, we help enterprises
                surpass the competition by delivering remarkable UX, faster
                launch, and cost-effective solutions. Presenting in minimum time
                and with maximum output, our applications are innovative,
                scalable, and loved by the masses around the globe.
              </p>
              <p>
                By leveraging React Native in each part of the app development
                stages, react native has become an integral part of our app
                development project.
              </p>
            </Animation>
          </div>
          <Animation className="box-heading">
            <h2 className="hdg-lv2">
              Why Choose Relia for Your React Native Development
            </h2>
          </Animation>
          <div className="box-reasons">
            <Animation className="box-reasons__col">
              <Image
                alt="Relia Software For Your React Requirements"
                src="/images/services/react-native-app-development-02.jpg"
                style={{ maxWidth: "530px", margin: "auto" }}
                width={750} height={517} layout="intrinsic" loading="eager"
              />
              <ul className="list-arrow" style={{ marginTop: "15px" }}>
                <li>
                  Dedicated Project owners and managers assigned to your project
                  exclusively to work in close proximity with the clients and
                  fulfil the best-suited services.
                </li>
                <li>
                  We offer a full cycle product development to our valuable
                  clients. The React Native factors cater to the full potential
                  from the ideation to the launch of the application{" "}
                </li>
              </ul>
            </Animation>
            <Animation className="box-reasons__col">
              <ul className="list-arrow">
                <li>
                  Catering to a wide array of industries, our react-native
                  services cater to start-ups and mid-large scale businesses
                  alike.
                </li>
                <li>
                  We deliver highly usable, secure and scalable react-native
                  based apps for all our clients across the globe.
                </li>
                <li>
                  We are globally recognized as a top-notch React native app
                  development company.
                </li>
                <li>
                  Our team delivers your application on both Android and iOS
                  simultaneously.
                </li>
                <li>
                  100% satisfaction guaranteed from the highly skilled and
                  experienced react native developers. Our team is well equipped
                  and updated with the react-native developments in the
                  industry.{" "}
                </li>
                <li>
                  We leverage the global flexibility of choosing the best
                  engagement model to all our clients.
                </li>
                <li>
                  All around the year Agile practices with daily and weekly
                  reporting are documented for the ease of the project. A
                  regular check on the progress keeps the cycle of production
                  smooth and flowing.
                </li>
              </ul>
            </Animation>
          </div>
          <Animation>
            <h2 className="hdg-lv2">Hire Best React Native Developers</h2>
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
                  You can easily hire React Native developers from our team in
                  order to gain competitive advantage and knowledge-insights So,
                  fulfil your varied business objectives and distinguish your
                  business idea from the crowd.
                </p>
                <p>
                  Relia also offers an offshore React Native development team
                  that can help you produce a comprehensive range of React
                  Native customization services and thus, enhance your business
                  productivity.
                  <br />
                  As an early adopter of the technology, Relia has an upper hand
                  over the know-how of the technology. Our team is well
                  experienced in UI/UX & API development with cost-effective and
                  scalable services that run seamlessly across devices. Our
                  awesome skilled React Native developers are highly experienced
                  in building complex React Native applications within a
                  mentioned timeframe as well as guaranteed satisfaction.
                </p>
              </Animation>
            </div>
          </div>
          <ListAccordion data={dataFaq.reactnavtive} />
        </div>
        <div className="box-contact">
          <div className="container">
            <Animation>
              <h2 className="hdg-lv2">
                Let us help make your <span>React Navtive</span>{" "}
                <br className="visible-pc" />
                app development project a success.
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
export default ReactNative
