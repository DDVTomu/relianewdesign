import React from "react"
import { Link } from "next/link"
import PageTitle from "@components/pageTitle"
import Layout from "@components/common/layout"
import SEO from "@components/seo"
import Image from "next/image"
import Animation from "@components/common/Animation"
import ogpImage from "assets/images/industries/travel-app-development.jpg"

const IndustriesPage = () => {
  const seo = {
    metaTitle: "Travel App Development Company | USA & Vietnam",
    metaDescription: "Relia Software, Top Travel Mobile Application Development Company. We provide excellent travel app development services globally. Check out our projects!",
    shareImage: ogpImage,
    article: true,
  };
  return (
    <Layout>
      <SEO seo={seo} />
      <PageTitle title="Travel &amp; Leisure App Development Company" />
      <div className="main">
        <div className="container">
          <Image alt="Travel app development company" src="/images/industries/travel-app-development.jpg" width={626} height={626} layout="intrinsic"loading="eager" />
          <div className="industries-choose">
            <Animation className="heading">
              <h2 className="hdg-lv2">
                Iconic Travel and Leisure App Companies{" "}
                <span className="text-white">Choose</span> to Work Us
              </h2>
            </Animation>
            <Animation className="industries-choose__content">
              <p>
                Relia Software has a complete grasp over the subtleties of
                development that produces unique, intriguing, and convincing
                travel applications. We center the target audience in every
                development phase to build user-centric interfaces so as to
                give users a seamless and memorable experience.
              </p>
              <h6>
                Below are some of the necessary features every Travel and
                Leisure application should have:
              </h6>
              <Animation className="industries-choose__list">
                <ul className="list-plus">
                  <li>Social Media Login</li>
                  <li>Push Notifications</li>
                  <li>In-app Messaging</li>
                  <li>Live Map Integration</li>
                  <li>Multilanguage Support and Translator</li>
                  <li>Schedule Booking</li>
                </ul>
                <ul className="list-plus">
                  <li>AI-powered Recommendations</li>
                  <li>Advanced Search</li>
                  <li>Virtual Tour</li>
                  <li>Multiple Secure Payment Options</li>
                  <li>Multicurrency Support</li>
                  <li>Currency Converter</li>
                </ul>
              </Animation>
            </Animation>
          </div>
          <div className="box-media">
            <Animation className="box-media__img">
              <Image alt="Travel app developers" src="/images/industries/travel-app-developers.jpg" width={852} height={700} layout="intrinsic"loading="eager" />
            </Animation>
            <Animation className="box-media__text">
              <h2 className="hdg-lv2">
                <span>Our robots’</span> AI skills help you keep ahead of the
                compliance and regulation game
              </h2>
              <p>
                Curious about Fintech and AI in banking? Here’s how
                intelligent automation banking solutions work. Watch a quick
                demo showing how Relia robots automate Know Your Customer
                (KYC) using Machine Learning and Natural Language
              </p>
            </Animation>
          </div>
        </div>
        <Animation className="back-office">
          <div className="container">
            <h2 className="hdg-lv2">
              Maximize Your Web Presence and Take Advantage
              <br className="visible-pc" /> of Web Searches with{" "}
              <span>Travel Web App</span> Development
            </h2>
            <div className="back-office__row">
              <Animation className="back-office__col">
                <Image alt="" src="/images/icon/icon-screen.svg" width={71} height={66} layout="intrinsic"loading="eager" />
                <h6>Seamless Navigation</h6>
                <p>
                  As a Travel, Leisure, and Hospitality Services Company, your
                  customers don’t spend a lot of time on one page of your app.
                  They want to move around and compare. We make navigation
                  clutter-free and a pleasure for them.
                </p>
              </Animation>
              <Animation className="back-office__col">
                <Image alt="" src="/images/icon/icon-tap.svg" width={86} height={66} layout="intrinsic"loading="eager" />
                <h6>Highly Responsive</h6>
                <p>
                  Our qualified Travel web app developers go the extra mile to
                  build highly intuitive and responsive web apps to make your
                  customers’ journey planning and scheduling hasslefree.
                </p>
              </Animation>
              <Animation className="back-office__col">
                <Image alt="" src="/images/icon/icon-ai.svg" width={86} height={82} layout="intrinsic"loading="eager" />
                <h6>Technology Integration</h6>
                <p>
                  As a tech-savvy Travel app development company, we embrace
                  advanced technologies and integrate them into the
                  applications we build. We work with Blockchain, Artificial
                  Intelligence, AR, and VR, among other technologies.
                </p>
              </Animation>
            </div>
          </div>
        </Animation>
        <div className="container">
          <div className="box-heavy">
            <Animation className="box-heavy__head">
              <h3>
                71% of Smartphone Users Who Use Their Phones for Travel Do So
                at Least Weekly
              </h3>
              <p>
                Source: <strong>Celent 2018</strong>
              </p>
              <Image
                alt="Travel and leisure app Development company"
                src="/images/industries/travel-and-leisure-app-development-company.jpg"
                width={626} height={352} layout="intrinsic"loading="eager"
              />
            </Animation>
            <div className="box-heavy__content">
              <Animation className="box-heavy__inner">
                <h2 className="hdg-lv2">
                  Engage Your Users Proactively with{" "}
                  <span>Travel Mobile App</span> Development
                </h2>
                <p>
                  The advent of smartphones and mobile applications has
                  provided businesses with a plethora of tools to promote
                  themselves.
                </p>
                <p>
                  With Travel mobile app development, you can reach out to
                  your customers and market your services to increase the
                  conversions. In fact, 58% of travel apps are used at least
                  monthly. Your travel mobile app also allows your customers
                  to access your services 24x7, increasing brand loyalty,
                  revenue, and reputation.
                </p>
              </Animation>
            </div>
          </div>
          <div className="box-media">
            <Animation className="box-media__text">
              <h2 className="hdg-lv2">
                Why Relia Software <span className="text-white">remains</span>{" "}
                the Go-to Travel App Development Company of Business Giants?
              </h2>
              <p>
                Relia Software places app quality above all else. We approach
                development through a defined structure to ensure speed,
                performance, and relevancy when the products come out of the
                company. We also double our efforts to make the features of
                the app easily accessible.
              </p>
              <ul className="list-plus">
                <li>
                  Automate unstructured data from emails, PDFs, documents and
                  forms.
                </li>
                <li>
                  Put automation in the hands of your bank’s advisers, in
                  customer-facing functions.
                </li>
                <li>
                  Automate processes no matter the scenario: attended,
                  unattended or hybrid, with a human in the loop.
                </li>
              </ul>
            </Animation>
            <Animation className="box-media__img">
              <Image alt="Travel app development companies in vietnam" src="/images/industries/travel-app-development-companies-in-vietnam.jpg" width={626} height={352} layout="intrinsic"loading="eager" />
            </Animation>
          </div>
          <h2 className="hdg-lv2">
            Transform your compliance operations,
            <br /> and then <span>your business</span>
          </h2>
          <div className="list-operations">
            <Animation className="list-operations__col">
              <Image alt="" src="/images/icon/icon-shield.svg" width={70} height={81} layout="intrinsic"loading="eager" />
              <h5>Capitalize on your RPA investments with new use cases</h5>
              <p>
                Break free from previous limitations and  invigorate your
                automation  initiative
              </p>
              <ul className="list-plus">
                <li>Process work end to end, faster and easier</li>
                <li>
                  Deliver new compliance use cases with attended and hybrid
                  automation
                </li>
                <li>
                  Realize the full benefits of a more complete and expansive
                  RPA opportunity
                </li>
              </ul>
            </Animation>
            <Animation className="list-operations__col">
              <Image alt="" src="/images/icon/icon-loss.svg" width={55} height={85} layout="intrinsic"loading="eager" />
              <h5>Get control of your bank's compliance costs</h5>
              <p>
                Use intelligent technology instead of manual effort to achieve
                compliance productivity
              </p>
              <ul className="list-plus">
                <li>Rapidly reduce compliance backlogs</li>
                <li>
                  Eliminate wasted effort by making your processes more
                  intelligent with pragmatic Artificial Intelligence (AI)
                </li>
                <li>
                  Evolve your workforce strategy to meet today’s banking
                  demands
                </li>
              </ul>
            </Animation>
            <Animation className="list-operations__col">
              <Image alt="" src="/images/icon/icon-update.svg" width={72} height={72} layout="intrinsic"loading="eager" />
              <h5>Improve your bank's risk profile​</h5>
              <p>
                Reduce regulatory risk and fines by leveraging a digital
                workforce
              </p>
              <ul className="list-plus">
                <li>Reduce manual errors down to near-zero​</li>
                <li>
                  Refocus your team’s efforts on investigation and analysis
                </li>
                <li>
                  Update automations as quickly as regulations change to keep
                  pace with requirements
                </li>
              </ul>
            </Animation>
          </div>
          <div className="box-media">
            <Animation className="box-media__img">
              <Image alt="" src="/images/industries/img-note.png" width={535} height={355} layout="intrinsic"loading="eager" />
            </Animation>
            <Animation className="box-media__text">
              <h2 className="hdg-lv2">
                <span className="text-white">Need</span> for more info?
              </h2>
              <p>
                Our team of experts leverage their profound Traveltravel-app-development
                Development expertise to create custom online stores,
                integrations and applications.
              </p>
              <p>
                We're always here to help you on your Relia journey, in any
                way we can.
              </p>
              <a className="btn" href="/contact">
                CONTACT US TODAY
              </a>
            </Animation>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndustriesPage
