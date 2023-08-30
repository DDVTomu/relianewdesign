import React from "react"
import { Link } from "next/link"
import PageTitle from "@components/pageTitle"
import Layout from "@components/common/layout"
import SEO from "@components/seo"
import Image from "next/image"
import Animation from "@components/common/Animation"
import ogpImage from "assets/images/industries/ecommerce-app-development-for-startup-company.jpg"

const IndustriesPage = () => {
  const seo = {
    metaTitle: "eCommerce App Development Company | USA & Vietnam",
    metaDescription: "Looking for an E-commerce Mobile App Development Company? We Provide the best E-commerce mobile app development services for your business. Talk to us now!",
    shareImage: ogpImage,
    article: true,
  };
  return (
    <Layout>
      <SEO seo={seo} />
      <PageTitle title="eCommerce App Development Company" />
      <div className="main">
        <div className="container">
          <Image alt="Ecommerce app development" src="/images/industries/ecommerce-app-development-for-startup-company.jpg"
            width={1125} height={750} layout="intrinsic" loading="eager" />
          <div className="industries-choose">
            <Animation className="heading">
              <h2 className="hdg-lv2">
                State-of-the-art{" "}
                <span className="text-white">E-commerce</span> Web Application
                Development
              </h2>
            </Animation>
            <Animation className="industries-choose__content">
              <p>
                E-commerce web and mobile applications should have the epitome
                of technology integration and functionalities development to
                succeed in the industry. Relia Software’s E-commerce app
                developers possess the knowledge from every successful
                E-commerce app ever built to develop apps that people love to
                use.
              </p>
              <h6>
                Here are some of the necessary features every E-commerce
                application should have:
              </h6>
              <Animation className="industries-choose__list">
                <ul className="list-plus">
                  <li>Simple Registration Process</li>
                  <li>Visually Appealing Themes</li>
                  <li>Simple UI and Seamless Navigation</li>
                  <li>Advanced Search and Filters</li>
                  <li>AI-powered Recommendations and Analytics</li>
                  <li>Multiple Currencies & Payment Support</li>
                  <li>Wishlist and Cart</li>
                </ul>
                <ul className="list-plus">
                  <li>Easy Checkout</li>
                  <li>Ratings, Reviews, and Feedback</li>
                  <li>Push Notifications</li>
                  <li>Order Tracking</li>
                  <li>Return Policy</li>
                  <li>Multi-lingual and Vendor Support</li>
                  <li>Product Categorization</li>
                </ul>
              </Animation>
            </Animation>
          </div>
          <div className="box-media">
            <Animation className="box-media__img">
              <Image alt="Ecommerce app development for startup company" src="/images/industries/ecommerce-app-development.jpg"
                width={626} height={417} layout="intrinsic" loading="eager" />
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
              Boost Your Revenue with Data-driven and{" "}
              <span>Technology-powered</span> App Development
            </h2>
            <div className="back-office__row">
              <Animation className="back-office__col">
                <Image alt="" src="/images/icon/icon-screen.svg"
                  width={71} height={66} layout="intrinsic" loading="eager" />
                <h6>AI-powered Recommendations</h6>
                <p>
                  We integrate E-commerce app development services with the
                  Artificial Intelligence-powered analytics that understands
                  the user behavior and buying patterns. The insights play a
                  crucial role in coming up with recommendations that increase
                  the conversion rate.
                </p>
              </Animation>
              <Animation className="back-office__col">
                <Image alt="" src="/images/icon/icon-tap.svg"
                  width={86} height={66} layout="intrinsic" loading="eager" />
                <h6>Personalized Discounts</h6>
                <p>
                  While general festival and promotional offers are one thing,
                  Machine Learning-backed analytics can determine what the
                  user wants with their searches, comparisons, and behavior.
                  Our websites and applications assist in tailoring attractive
                  discounts to increase buying percentage.
                </p>
              </Animation>
              <Animation className="back-office__col">
                <Image alt="" src="/images/icon/icon-ai.svg"
                  width={86} height={82} layout="intrinsic" loading="eager" />
                <h6>Custom Technology Integration</h6>
                <p>
                  AR virtual dressing rooms to improve engagement and service,
                  blockchain data storage for security and integrity, computer
                  vision for users’ exact measurements, voice assistants,
                  digital wallets, face recognition, and everything can be
                  integrated with our custom E-commerce app development
                  services.
                </p>
              </Animation>
            </div>
          </div>
        </Animation>
        <div className="container">
          <div className="box-heavy">
            <Animation className="box-heavy__head">
              <h3>
                79% of customers shop through mobile E-commerce applications
              </h3>
              <p>
                Source: <strong>Celent 2018</strong>
              </p>
              <Image
                alt="ecommerce web app"
                src="/images/industries/ecommerce-web-app.jpg"
                width={626} height={376} layout="intrinsic" loading="eager"
              />
            </Animation>
            <div className="box-heavy__content">
              <Animation className="box-heavy__inner">
                <h2 className="hdg-lv2">
                  Maximize Your Engagement with <span>E-commerce</span> Mobile
                  App Development
                </h2>
                <p>
                  While E-commerce web app development takes your services to
                  your users’ homes, E-commerce mobile app development gets
                  your services into the users’ hands.
                </p>
                <p>
                  Mobile apps equip your business with a powerful tool with
                  which you can actively reach out to your customers with
                  personalized recommendations, weekly suggestions, and
                  actively remind them about their wishlist and cart. Further,
                  customer conversion is 140% higher on mobile apps.
                </p>
                <p>
                  With E-commerce mobile app development, the farthest you are
                  away from your customers is their arms’ reach.
                </p>
              </Animation>
            </div>
          </div>
          <div className="box-media">
            <Animation className="box-media__text">
              <h2 className="hdg-lv2">
                Why Startups and Enterprises{" "}
                <span className="text-white">Trust</span> Relia Software for
                E-commerce App Development?
              </h2>
              <p>
                80% of people, when they are in a physical store, look into
                mobile E-commerce applications to compare the price. If the
                price is lower in mobile apps, there is an increased chance
                that they will choose E-commerce.
              </p>
              <p>
                Relia Software, as a top web, Android, and iOS E-commerce app
                development company, transcends businesses by colluding
                game-changing insights with development.
              </p>
              <ul className="list-plus">
                <li>
                  Intuitive UI Designs A simple, unique, and relevant design
                  combined with easy navigation is everything a user looks for
                  in an E-commerce application.
                </li>
                <li>
                  Robust Functionalities Infusing technology with innovation,
                  we build E-commerce apps with a multitude of features and
                  functionalities to improve service and engagement.
                </li>
                <li>
                  Impenetrable Security Relia Software’s E-commerce app
                  developers upgrade themselves with the latest advancements
                  in security to build highly-secured E-commerce applications.
                </li>
              </ul>
            </Animation>
            <Animation className="box-media__img">
              <Image alt="Ecommerce app development company in vietnam" src="/images/industries/ecommerce-app-development-company-in-vietnam.jpg"
                width={1050} height={700} layout="intrinsic" loading="eager" />
            </Animation>
          </div>
          <h2 className="hdg-lv2">
            Transform Your Ideas into Business Solutions
            <br /> with the Right <span>E-commerce</span> Development Partner
          </h2>
          <div className="list-operations">
            <Animation className="list-operations__col">
              <Image alt="" src="/images/icon/icon-shield.svg"
                width={70} height={81} layout="intrinsic" loading="eager" />
              <h5>Impress Your Customers with Your MVP</h5>
              <p>
                Allure investors and customers alike with a robust Minimum
                Viable Product.
              </p>
              <ul className="list-plus">
                <li>Performance to Loyalty</li>
                <li>Highly Scalable</li>
                <li>Support & Maintenance</li>
              </ul>
            </Animation>
            <Animation className="list-operations__col">
              <Image alt="" src="/images/icon/icon-loss.svg"
                width={55} height={85} layout="intrinsic" loading="eager" />
              <h5>Hybrid and Native E-commerce App Development</h5>
              <p>
                We have got you covered irrespective of your choice for
                development.
              </p>
              <ul className="list-plus">
                <li>Android E-commerce App Development</li>
                <li>iOS E-commerce App Development</li>
                <li>Cross-platform E-commerce App Development</li>
              </ul>
            </Animation>
            <Animation className="list-operations__col">
              <Image alt="" src="/images/icon/icon-update.svg"
                width={72} height={72} layout="intrinsic" loading="eager" />
              <h5>Custom E-commerce App Development​</h5>
              <p>
                Be unique to become the trendsetter of the E-commerce
                industry.
              </p>
              <ul className="list-plus">
                <li>Creativity & Innovation</li>
                <li>Data-driven App Development</li>
                <li>Industries We Serve</li>
              </ul>
            </Animation>
          </div>
          <div className="box-media">
            <Animation className="box-media__img">
              <Image alt="" src="/images/industries/img-note.png"
                width={535} height={355} layout="intrinsic" loading="eager" />
            </Animation>
            <Animation className="box-media__text">
              <h2 className="hdg-lv2">
                <span className="text-white">Need</span> for more info?
              </h2>
              <p>
                Our team of experts leverage their profound eCommerce
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
