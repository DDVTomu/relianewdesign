import React from "react"
import { Link } from "next/link"
import PageTitle from "@components/pageTitle"
import Layout from "@components/common/layout"
import SEO from "@components/seo"
import Image from "next/image"
import Animation from "@components/common/Animation"
import ogpImage from "assets/images/industries/health-and-fitness-app-development-in-vietnam.jpg"

const IndustriesPage = () => {
  const seo = {
    metaTitle: "Health and Fitness App Development | Health and Fitness App Developers",
    metaDescription: "The increasing awareness of fitness and personal wellbeing has resulted in the unprecedented growth of fitness apps, increasing the demand for quality health and fitness app development companies and fitness app developers",
    shareImage: ogpImage,
    article: true,
  };
  return (
    <Layout>
      <SEO seo={seo} />
      <PageTitle title="Health and Fitness App Development" />
      <div className="main">
        <div className="container">
          <Image width={463} height={502} layout="intrinsic" loading="eager" alt="health & fitness app development" src="/images/industries/health-and-fitness-app-development.jpg" />
          <div className="industries-choose">
            <Animation className="heading">
              <h2 className="hdg-lv2">
                Benchmark Health and Fitness App Companies and Services
                Providers <span className="text-white">work</span> with Relia
              </h2>
            </Animation>
            <Animation className="industries-choose__content">
              <p>
                The primordial focus of Relia Software is set on building
                eye-catching, intuitive designs; powerful features and
                functionalities; standard, impeccable programming; series test
                iterations; gamified achievements for engagement; and quality
                support and maintenance to empower fitness app business and
                enterprises.
              </p>
              <h6>
                Some of the necessary features integrating which we develop
                Health and Fitness Apps with:
              </h6>
              <Animation className="industries-choose__list">
                <ul className="list-plus">
                  <li>Social Media Login</li>
                  <li>Wearable Integration</li>
                  <li>User Activity Tracker</li>
                  <li>Real-time Feedback</li>
                  <li>Timer and Countdown Clock</li>
                  <li>Food Logging and Nutrition Analysis</li>
                  <li>Pre-exercise routines</li>
                </ul>
                <ul className="list-plus">
                  <li>Live Streaming</li>
                  <li>Set Targets</li>
                  <li>Push Notification</li>
                  <li>Geo Location</li>
                  <li>Secured Payment Modules</li>
                  <li>Custom Membership</li>
                  <li>Gamification</li>
                </ul>
              </Animation>
            </Animation>
          </div>
          <div className="box-media">
            <Animation className="box-media__img">
              <Image width={2520} height={1253} layout="intrinsic" loading="eager" alt="health & fitness app development" src="/images/industries/health-and-fitness-app-development-in-vietnam.jpg" />
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
              Data-driven <span>Health and Fitness</span> App Development to
              <br className="visible-pc" /> Inspire People to Take Action
            </h2>
            <div className="back-office__row">
              <Animation className="back-office__col">
                <Image width={71} height={66} layout="intrinsic" loading="eager" alt="Instinctive Designs" src="/images/icon/icon-screen.svg" />
                <h6>Instinctive Designs</h6>
                <p>
                  Relia Software has incorporated experienced fitness app
                  designers to build intuitive designs, making navigation and
                  usage of features a breeze. We step into development with a
                  keen eye on making the codes cohesive with the design.
                </p>
              </Animation>
              <Animation className="back-office__col">
                <Image width={86} height={66} layout="intrinsic" loading="eager" alt="" src="/images/icon/icon-tap.svg" />
                <h6>Advanced Technology Integration</h6>
                <p>
                  We possess a mastery over advanced technologies like
                  Blockchain, Artificial Intelligence, Machine Learning,
                  Augmented Reality, and Virtual Reality to integrate into
                  fitness applications to improve the quality of service.
                </p>
              </Animation>
              <Animation className="back-office__col">
                <Image width={86} height={82} layout="intrinsic" loading="eager" alt="" src="/images/icon/icon-ai.svg" />
                <h6>Flawless Development</h6>
                <p>
                  With a structured approach towards testing, we in Relia
                  Software clean the codes, clear the bugs, and ensure the
                  right execution of functionalities before deploying the
                  fitness app.
                </p>
              </Animation>
            </div>
          </div>
        </Animation>
        <div className="container">
          <div className="box-heavy">
            <Animation className="box-heavy__head">
              <h3>Fitness App Usage has Grown 330% in Just 3 Years</h3>
              <p>
                Source: <strong>Celent 2018</strong>
              </p>
              <Image width={626} height={417} layout="intrinsic" loading="eager"
                alt="Healthcare development in vietnam"
                src="/images/industries/fitness-tracking-app.jpg"
              />
            </Animation>
            <div className="box-heavy__content">
              <Animation className="box-heavy__inner">
                <h2 className="hdg-lv2" style={{ paddingTop: 0 }}>
                  Become the go-to fitness app with Top-notch{" "}
                  <span>Health and Fitness Mobile App Development</span>
                </h2>
                <p>
                  While fitness web app development addresses your customers
                  on the web, fitness mobile app development helps you to
                  become a part of their everyday part of life.
                </p>
                <p>
                  We, in Relia Software, taking advantage of the experience we
                  have gathered working in various industries, build highly
                  interactive, gamified mobile apps to engage your audience
                  and convert them into your loyal customers.
                </p>
              </Animation>
            </div>
          </div>
          <div className="box-media">
            <Animation className="box-media__text">
              <h2 className="hdg-lv2">
                Relia can <span className="text-white">help</span> your bank
                overcome three of its biggest automation challenges
              </h2>
              <p>
                Curious about RPA and AI in banking? Here’s how intelligent
                automation banking solutions work. Watch a quick demo showing
                how UiPath robots automate Know Your Customer (KYC) using
                Machine Learning and Natural Language
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
              <Image width={626} height={417} layout="intrinsic" loading="eager" alt="Contact healthcare app developer" src="/images/industries/contact-health-and-fitness-app-development.jpg" priority={true} />
            </Animation>
          </div>
          <h2 className="hdg-lv2">
            Transform your compliance operations,
            <br /> and then <span>your business</span>
          </h2>
          <div className="list-operations">
            <Animation className="list-operations__col">
              <Image width={70} height={81} layout="intrinsic" loading="eager" alt="" src="/images/icon/icon-shield.svg" />
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
              <Image width={55} height={85} layout="intrinsic" loading="eager" alt="" src="/images/icon/icon-loss.svg" />
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
              <Image width={72} height={72} layout="intrinsic" loading="eager" alt="" src="/images/icon/icon-update.svg" />
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
              <Image width={535} height={355} layout="intrinsic" loading="eager" alt="" src="/images/icon/img-note.png" />
            </Animation>
            <Animation className="box-media__text">
              <h2 className="hdg-lv2">
                <span className="text-white">Need</span> for more info?
              </h2>
              <p>
                Our team of experts leverage their profound Healthcare
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
