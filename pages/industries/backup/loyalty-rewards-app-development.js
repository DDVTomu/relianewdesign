import React from "react"
import { Link } from "next/link"
import PageTitle from "@components/pageTitle"
import Layout from "@components/common/layout"
import SEO from "@components/seo"
import Image from "next/image"
import Animation from "@components/common/Animation"
import ogpImage from "assets/images/industries/loyalty-rewards-app-development.jpg"

const IndustriesPage = () => {
  const seo = {
    metaTitle: "Loyalty & Rewards App Development Company | USA & Vietnam",
    metaDescription: "Looking for the best Loyalty & Rewards App Development Company? We Provide the best loyalty app development services. Check our Projects now! Talk to us.",
    shareImage: ogpImage,
    article: true,
  };
  return (
    <Layout>
      <SEO seo={seo} />
      <PageTitle title="Loyalty and Rewards App Development Company" />
      <div className="main">
        <div className="container">
          <Image alt="Reward app development company" src="/images/industries/loyalty-rewards-app-development.jpg" width={626} height={344} layout="intrinsic"loading="eager" />
          <div className="industries-choose">
            <Animation className="heading">
              <h2 className="hdg-lv2">
                Companies Who Want Seek the{" "}
                <span className="text-white">Best</span> Loyalty Reward Apps
                Choose Relia Software
              </h2>
            </Animation>
            <Animation className="industries-choose__content">
              <p>
                Relia Software understands what customers want, how the
                rewards should be planned for maximum benefit, and how the app
                should promote reward points to gratify the customers. We
                merge our expertise with the latest loyalty app programs to
                develop the best solutions.
              </p>
              <h6>
                Our Loyalty App Developers Build Applications Integrating
                Quality-built Features
              </h6>
              <Animation className="industries-choose__list">
                <ul className="list-plus">
                  <li>Social Login</li>
                  <li>Secure Barcode Generation and Scanning</li>
                  <li>Push Notifications</li>
                  <li>Gamification</li>
                  <li>Social Badge System Reward System</li>
                  <li>Transaction Listing and History</li>
                </ul>
                <ul className="list-plus">
                  <li>Loyalty Points Tracker</li>
                  <li>Bookmarking</li>
                  <li>Multi-language Support</li>
                  <li>Lock Screen Feature</li>
                  <li>Interest Targeting</li>
                  <li>AI-powered Analytics</li>
                </ul>
              </Animation>
            </Animation>
          </div>
          <div className="box-media">
            <Animation className="box-media__img">
              <Image alt="Loyal app developers in vietnam" src="/images/industries/loyal-app-developers-in-vietnam.jpg" width={960} height={678} layout="intrinsic"loading="eager" />
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
              Data-Driven <span>Loyalty Reward App Development</span>
              <br className="visible-pc" /> to Set New Benchmarks
            </h2>
            <div className="back-office__row">
              <Animation className="back-office__col">
                <Image alt="" src="/images/icon/icon-screen.svg" width={71} height={66} layout="intrinsic"loading="eager" />
                <h6>Intuitive Designs</h6>
                <p>
                  We focus our efforts on building interfaces that appeals to
                  the customers. Because, even if you spend a fortune on
                  marketing campaigns, people won’t come back to your
                  application if it is not built with customer-friendly
                  designs and interfaces.
                </p>
              </Animation>
              <Animation className="back-office__col">
                <Image alt="" src="/images/icon/icon-tap.svg" width={86} height={66} layout="intrinsic"loading="eager" />
                <h6>Gamification as the Core</h6>
                <p>
                  Loyalty and reward app development, although not compulsory,
                  are better if rewards and reward tracking are gamified. That
                  way, people can easily relate to the app and would love to
                  engage, making the business profitable.
                </p>
              </Animation>
              <Animation className="back-office__col">
                <Image alt="" src="/images/icon/icon-ai.svg" width={86} height={82} layout="intrinsic"loading="eager" />
                <h6>Flawless Development</h6>
                <p>
                  As a loyalty and reward app development services provider,
                  we understand how crucial it is for a business to have a
                  reliable application. And so we follow a defined development
                  structure to ensure the impeccability of the app.
                </p>
              </Animation>
            </div>
          </div>
        </Animation>
        <div className="container">
          <div className="box-heavy">
            <Animation className="box-heavy__head">
              <h3>
                69% of customers allow the presence of rewards or loyalty
                programs to influence their shopping decisions
              </h3>
              <p>
                Source: <strong>Celent 2018</strong>
              </p>
              <Image
                alt="Loyalty and reward app development"
                src="/images/industries/loyalty-and-reward-app-development.jpg"
                width={626} height={626} layout="intrinsic"loading="eager"
              />
            </Animation>
            <div className="box-heavy__content">
              <Animation className="box-heavy__inner">
                <h2 className="hdg-lv2">
                  Integrate Loyalty Modules and Referral Programs into Your
                  App with SDKs and APIs
                </h2>
                <p>
                  It costs three times more to get a new customer than it
                  takes to retain a new customer. A survey also reported that
                  63% of the customers do not commit to companies that are not
                  offering loyalty benefits.
                </p>
                <p>
                  Relia Software, as a loyalty and reward app development
                  company, understands that you can’t always build a separate
                  app to engage your customers. We offer comprehensive loyalty
                  features and modules integration programs to improve your
                  customer rate with only your pre-owned application.
                </p>
              </Animation>
            </div>
          </div>
          <div className="box-media">
            <Animation className="box-media__text">
              <h2 className="hdg-lv2">
                Why Startups and Brands have Relia Software as the{" "}
                <span className="text-white">First Choice</span> for Loyalty
                and Rewards App Development
              </h2>
              <p>
                We, in Relia Software, merge the best design, standard
                development, and rigorous testing to build the fine blend that
                results in refined loyalty reward applications. We also add
                technologies like Blockchain, AI, AR, and VR to the blend to
                equip the apps with a competitive edge.
              </p>
              <ul className="list-plus">
                <li>
                  Mastery Over Engaging Loyalty and Reward App Development
                </li>
                <li>Developing Apps Integrating a Plethora of Features</li>
                <li>Structured Testing to Rid the Bugs Off the App</li>
              </ul>
            </Animation>
            <Animation className="box-media__img">
              <Image alt="Loyal app developers in vietnam" src="/images/industries/loyalty-and-reward-app-developers-in-vietnam.jpg" width={626} height={417} layout="intrinsic"loading="eager" />
            </Animation>
          </div>
          <h2 className="hdg-lv2">
            Maximize Your Customer Retention Rate With the Right{" "}
            <br className="visible-pc" />
            <span>Loyalty and Rewards</span> App Development Partner
          </h2>
          <div className="list-operations">
            <Animation className="list-operations__col">
              <Image alt="" src="/images/icon/icon-shield.svg" width={70} height={81} layout="intrinsic"loading="eager" />
              <h5>
                Increase Your Web Presence with Loyalty Web App Development
              </h5>
              <p>
                With increasing web searches and usage, loyalty web app
                development is crucial to increase customer retention.
              </p>
            </Animation>
            <Animation className="list-operations__col">
              <Image alt="" src="/images/icon/icon-loss.svg" width={55} height={85} layout="intrinsic"loading="eager" />
              <h5>Attract Customers with an MVP</h5>
              <p>
                Relia Software builds the Miniviable Viable Product as fast as
                possible to showcase and impress the investors and customers.
              </p>
            </Animation>
            <Animation className="list-operations__col">
              <Image alt="" src="/images/icon/icon-update.svg" width={72} height={72} layout="intrinsic"loading="eager" />
              <h5>Highly Scalable Solution​</h5>
              <p>
                We have greatly increased the retention rates, but that led us
                to another problem and solution: scalable apps to manage the
                sudden surges in usage.
              </p>
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
                Our team of experts leverage their profound Loyalty & Rewards
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
