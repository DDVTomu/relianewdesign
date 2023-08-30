import React from "react"
import { Link } from "next/link"
import PageTitle from "@components/pageTitle"
import Layout from "@components/common/layout"
import SEO from "@components/seo"
import Image from "next/image"
import Animation from "@components/common/Animation"
import ogpImage from "assets/images/industries/education-app-development.jpg"

const IndustriesPage = () => {
  const seo = {
    metaTitle: "Education App Development Company | USA & Vietnam",
    metaDescription: "Are you looking for Educational App Development? We provide custom education app development services for your business. Check out our Work now! Talk to us.",
    shareImage: ogpImage,
    article: true,
  };
  return (
    <Layout>
      <SEO seo={seo} />
      <PageTitle title="Education App Development Company" />
      <div className="main">
        <div className="container">
          <Image
            alt="Education app development service"
            src="/images/industries/education-app-development.jpg"
            width={865} height={750} layout="intrinsic"loading="eager"
          />
          <div className="industries-choose">
            <Animation className="heading">
              <h2 className="hdg-lv2">
                Leading Education App Companies Choose to{" "}
                <span className="text-white">work</span> with Relia
              </h2>
            </Animation>
            <Animation className="industries-choose__content">
              <p>
                Relia Software possesses a complete understanding of designs,
                features, functionalities, and user experience that goes into
                successful education web app development. As an advocate of
                technology adoption and integration, Relia Software ensures to
                develop education applications reinforced with advanced
                technologies.
              </p>
              <h6>
                Here are some of the necessary features every Education
                application should have:
              </h6>
              <Animation className="industries-choose__list">
                <ul className="list-plus">
                  <li>Simple Registration</li>
                  <li>User Profiles</li>
                  <li>nstant Access to Learning Materials</li>
                  <li>AI-powered Analytics</li>
                  <li>AR/VR Tutoring</li>
                  <li>Bookmarks</li>
                  <li>Push Notification</li>
                </ul>
                <ul className="list-plus">
                  <li>Advanced Search</li>
                  <li>Cloud Integration</li>
                  <li>Course Tracking</li>
                  <li>New Technology Integration Capabilities</li>
                  <li>Gamification</li>
                  <li>Multiple Payment Gateway</li>
                  <li>Digital Wallet</li>
                </ul>
              </Animation>
            </Animation>
          </div>
          <div className="box-media">
            <Animation className="box-media__img">
              <Image
                alt="E learning application"
                src="/images/industries/e-learning-application.jpg"
                width={626} height={352} layout="intrinsic"loading="eager"
              />
            </Animation>
            <Animation className="box-media__text">
              <h2 className="hdg-lv2">
                <span>Our robots’</span> Deliver More Than Your Customers’
                UI/UX Expectations with Quality Education App Development
                Solutions
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
              Deliver More Than Your Customers’ UI/UX Expectations with
              <br className="visible-pc" /> Quality{" "}
              <span>Education App Development Solutions</span>
            </h2>
            <div className="back-office__row">
              <Animation className="back-office__col">
                <Image alt="" src="/images/icon/icon-screen.svg" width={71} height={66} layout="intrinsic"loading="eager" />
                <h6>Simple Yet Unique</h6>
                <p>
                  Apps for education institutions we build are marked by
                  simple designs and relevant controls. And yet, we develop
                  education apps with a unique and rememberable feel making
                  subtle changes in the development.
                </p>
              </Animation>
              <Animation className="back-office__col">
                <Image alt="" src="/images/icon/icon-tap.svg" width={86} height={66} layout="intrinsic"loading="eager"/>
                <h6>Easy Course Accessibility</h6>
                <p>
                  Your customers access your education platform to unlock
                  faster learning, and so course accessibility plays an
                  important role. With seamless navigation and evident
                  controls, we guide your customers to reach their courses and
                  goals quickly.
                </p>
              </Animation>
              <Animation className="back-office__col">
                <Image alt="" src="/images/icon/icon-ai.svg" width={86} height={82} layout="intrinsic"loading="eager" />
                <h6>Appealing UX</h6>
                <p>
                  As a mobile and web education app development company known
                  for remarkable build quality, our apps engage your customers
                  and deliver a pleasing experience to keep them coming back
                  to use your services.
                </p>
              </Animation>
            </div>
          </div>
        </Animation>
        <div className="container">
          <div className="box-heavy">
            <Animation className="box-heavy__head">
              <h3>
                The worldwide e-learning market is projected to reach the
                worth of $325 billion by 2025
              </h3>
              <p>
                Source: <strong>Celent 2018</strong>
              </p>
              <Image
                alt="Best learning app"
                src="/images/industries/best-learning-app.jpg"
                width={626} height={417} layout="intrinsic"loading="eager"
              />
            </Animation>
            <div className="box-heavy__content">
              <Animation className="box-heavy__inner">
                <h2 className="hdg-lv2">
                  One-stop Solution for All Types of{" "}
                  <span>Education App Development</span>
                </h2>
                <p>
                  There are various types of education apps targeting various
                  groups of people identified by age, demographics and the
                  industry.
                </p>
                <p>
                  Children’s education apps represent the curriculum and
                  learning materials comically to keep them engaged, gamified
                  education apps add fun to education, classroom apps aid both
                  teachers and students, videos and live lecture apps increase
                  the pace and quality of education, reference and assessment
                  education apps helps in exam preparations, and finally,
                  niche-based apps to help people belonging to a niche.
                </p>
                <p>
                  With the help of our experienced education app developers,
                  we produce the best applications to assist in your business
                  endeavors.
                </p>
              </Animation>
            </div>
          </div>
          <div className="box-heading">
            <Animation>
              <h2 className="hdg-lv2">
                Why Relia Software is Trusted for{" "}
                <span className="text-white">Education App</span> Development
                Services ?
              </h2>
            </Animation>
            <Animation className="hdg-lv2-sub">
              Relia Software follows a well-defined, structural approach
              towards development. We analyze the market trends and arrive at
              the necessities before diving into development. We also ensure
              to follow the code standards throughout the development to make
              it easy for future upgrades.
            </Animation>
          </div>
          <div className="box-media">
            <Animation className="box-media__text">
              <ul className="list-plus">
                <li>
                  Robust Features and Functionalities Relia software-built
                  education applications are reinforced with fast and
                  responsive features that get your customers’ jobs done in a
                  jiffy.
                </li>
                <li>
                  Built with Upgraded Security Walls to Become Impregnable Our
                  education app developers build your application with the
                  latest and powerful security methods to prevent viruses and
                  malware from preying on the system.
                </li>
                <li>
                  Error-free Coding Enables Pleasurable User Experience The
                  last thing you want is an erred feature to make the
                  customers feel repulsed whenever they want to use your
                  services.
                </li>
              </ul>
            </Animation>
            <Animation className="box-media__img">
              <Image
                alt="Learning app developers in vietnam"
                src="/images/industries/learning-app-developers-in-vietnam.jpg"
                width={626} height={417} layout="intrinsic"loading="eager"
              />
            </Animation>
          </div>
          <h2 className="hdg-lv2">
            Grow and Dominate the Industry with the Right
            <br />
            <span>Education App Development Partner</span>
          </h2>
          <div className="list-operations">
            <Animation className="list-operations__col">
              <Image alt="" src="/images/icon/icon-shield.svg" width={70} height={81} layout="intrinsic"loading="eager" />
              <h5>Top-notch Education Web App Development</h5>
              <p>
                Web searches are still one of the major ways people use to
                learn something..
              </p>
              <ul className="list-plus">
                <li>
                  Attract Investors with Impressive MVP Development We
                  understand how imperative it is for a business to secure
                  funding before striving to flourish and conquer. We deliver
                  Minimum Viable Products as soon as possible to assist
                  businesses financially.
                </li>
                <li>
                  We Provide 24x7 Support and Maintenance We are your
                  technical hand of business and travel with you through thick
                  and thin. We have got you covered for upgrades, support,
                  maintenance, new product development, consulting, and every
                  service.
                </li>
                <li>
                  Optimized for Search Engine optimization Every business
                  should be findable when searched for on the internet.
                  However, e-learning platforms take precedence above
                  everything as it is the only way of finding the service.
                </li>
              </ul>
            </Animation>
            <Animation className="list-operations__col">
              <Image alt="" src="/images/icon/icon-loss.svg" width={55} height={85} layout="intrinsic"loading="eager" />
              <h5>Fast and Responsive Education Mobile App Development</h5>
              <p>
                Where would you prefer to be when your customers what you: on
                the computer or in the hand?
              </p>
              <ul className="list-plus">
                <li>
                  Quality Android Education App Development A sizable portion
                  of the world population, more than 80%, use Android
                  smartphones, and the only way to reach them is to build an
                  android application.
                </li>
                <li>
                  Standard IOS Education App Development IOS device users are
                  loyal to the brand and you don’t want to miss the
                  opportunity of converting such an audience into your
                  customers with the best education app development partner.
                </li>
                <li>
                  Compatible Cross-platform Education App Development One app
                  for all the platforms doesn’t sound too bad either. The only
                  drawback was that it is hard to add unique features. With
                  Relia Software, we overcome drawbacks with quality
                  development.
                </li>
              </ul>
            </Animation>
            <Animation className="list-operations__col">
              <Image alt="" src="/images/icon/icon-update.svg" width={72} height={72} layout="intrinsic"loading="eager" />
              <h5>Benchmark Custom Education App Development ​</h5>
              <p>
                Pour your dreams into our hands and we will give it back in
                the form applications.
              </p>
              <ul className="list-plus">
                <li>
                  From Your Imaginations to Practical Applications Our custom
                  app development engineers are equipped with the prowess to
                  convert even your wildest of dreams into practical
                  applications.
                </li>
                <li>
                  Highly Scalable Solution for the Future We build apps with a
                  keen eye on the future so that when the market changes and
                  you can add new elements to your app to engage your
                  audience.
                </li>
                <li>
                  Integrated with Advanced Technologies As a company of
                  tech-savvy developers, we don’t just research to upgrade our
                  skills, we put that into practice and take app development
                  to the next level.
                </li>
              </ul>
            </Animation>
          </div>
          <div className="box-media">
            <Animation className="box-media__img">
              <Image alt="" src="/images/icon/img-note.png" width={535} height={355} layout="intrinsic"loading="eager" />
            </Animation>
            <Animation className="box-media__text">
              <h2 className="hdg-lv2">
                <span className="text-white">Need</span> for more info?
              </h2>
              <p>
                Our team of experts leverage their profound Education
                Development expertise to create custom online stores,
                integrations and applications.
              </p>
              <p>
                We're always here to help you on your Relia journey, in any
                way we can.
              </p>
              <a className="btn" to="/contact">
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
