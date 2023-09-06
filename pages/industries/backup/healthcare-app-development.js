import React from "react"
import { Link } from "next/link"
import PageTitle from "@components/pageTitle"
import Layout from "@components/common/layout"
import SEO from "@components/seo"
import Image from "next/image"
import Animation from "@components/common/Animation"
import ogpImage from "assets/images/industries/healthcare-development-in-vietnam.jpg"

const IndustriesPage = () => {
  const seo = {
    metaTitle: "Healthcare and Medical App Development Company | Healthcare App Developers",
    metaDescription: "Top healthcare app development company. Our experienced mHealth app developers provide excellent healthcare app development services for your business.",
    shareImage: ogpImage,
    article: true,
  };
  return (
    <Layout>
      <SEO seo={seo} />
      <PageTitle title="Healthcare App Development" />
      <div className="main">
        <div className="container">
          <Image
            alt="Medical and healthcare app development"
            src="/images/industries/healthcare-app-development.jpg"
            width={1600} height={768} layout="intrinsic" loading="eager"
          />
          <div className="industries-choose">
            <Animation className="heading">
              <h2 className="hdg-lv2">
                Establishing Benchmarks for Medical and{" "}
                <span className="text-white">Healthcare</span> App Development
                Service Providers
              </h2>
            </Animation>
            <Animation className="industries-choose__content">
              <p>
                We, in Relia Software, possess a complete mastery over
                healthcare app services, what people expect, and how their
                expectations can be solved for quality medical app development
                that becomes an everyday part of life.
              </p>
              <h6>
                Below are some of the necessary features we build Medical and
                Healthcare Applications with:
              </h6>
              <Animation className="industries-choose__list">
                <ul className="list-plus">
                  <li>Push Notifications</li>
                  <li>Private Account</li>
                  <li>In-app Messages</li>
                  <li>In-app Payments</li>
                  <li>Activity Tracker</li>
                  <li>Telephonic and Video Consulting</li>
                </ul>
                <ul className="list-plus">
                  <li>Data Storage and AI-powered Analytics</li>
                  <li>Medical insurance claim</li>
                  <li>Pre-diagnosis</li>
                  <li>Appointment Scheduling</li>
                  <li>Report Generation</li>
                  <li>E-prescription</li>
                </ul>
              </Animation>
            </Animation>
          </div>
        </div>
        <Animation className="back-office">
          <div className="container">
            <h2 className="hdg-lv2">
              Surpass <span>Your Customers’</span> Expectations Integrating
              Technologies into Healthcare Application Solutions
            </h2>
            <div className="back-office__row">
              <Animation className="back-office__col">
                <Image
                  alt="AI-powered Data Analytics"
                  src="/images/icon/icon-screen.svg"
                  width={71} height={66} layout="intrinsic" loading="eager"
                />
                <h6>AI-powered Data Analytics</h6>
                <p>
                  Medical applications enable data analytics through every
                  medication of patients for personalized treatment and
                  comprehensive research, increasing the speed of recovery and
                  the rightness of the treatment.
                </p>
              </Animation>
              <Animation className="back-office__col">
                <Image alt="" src="/images/icon/icon-tap.svg" width={86} height={66} layout="intrinsic" loading="eager" />
                <h6>Blockchain for Data Storage</h6>
                <p>
                  A breach into a medical data storage system doesn’t just
                  leak sensitive information, but can also result in data
                  manipulation leading to incorrect treatments. Blockchain can
                  work wonders to protect data integrity.
                </p>
              </Animation>
              <Animation className="back-office__col">
                <Image alt="" src="/images/icon/icon-ai.svg" width={86} height={82} layout="intrinsic" loading="eager" />
                <h6>Cloud Computing</h6>
                <p>
                  Integrating cloud computing into medical and healthcare app
                  development solutions implies effective data sharing,
                  diagnosis, and medical help availability round the clock.
                </p>
              </Animation>
            </div>
          </div>
        </Animation>
        <div className="container">
          <div className="box-heavy">
            <Animation className="box-heavy__head">
              <h3>
                52% Smartphone Users Already Collect Medical-associated
                Information On Their Devices
              </h3>
              <p>
                Source:{" "}
                <strong>
                  <a
                    href="https://www.ortholive.com/blog/mhealth-healthcare-mobile-app-trends-in-2019"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Healthcare Mobile App Trends in 2019
                  </a>
                </strong>
              </p>
              <Image
                alt="Healthcare development in vietnam"
                src="/images/industries/healthcare-development-in-vietnam.jpg"
                width={1344} height={1098} layout="intrinsic" loading="eager"
              />
            </Animation>
            <div className="box-heavy__content">
              <Animation className="box-heavy__inner">
                <h2 className="hdg-lv2" style={{ paddingTop: 0 }}>
                  Into Your Customers’ Hands With Healthcare Mobile App
                  Development
                </h2>
                <p>
                  On average, people check their phones 150 times a day. And
                  healthcare mobile app development allows you to take
                  advantage of this habit and engage people with better
                  services.
                </p>
                <p>
                  Relia Software’s healthcare mobile app development wing
                  comprises the best healthcare mobile app developers who have
                  worked extensively in the industry and understand the
                  nuances of development to build remarkable mHealth
                  applications.
                </p>
              </Animation>
            </div>
          </div>
          <Animation className="box-heading">
            <h2 className="hdg-lv2">
              Why Relia Remains the First Choice of Enterprises for Healthcare
              App Development
            </h2>
            <p className="hdg-lv2-sub">
              With Relia Software, intuitive design, seamless navigation,
              well-defined functionalities, well-developed features, and
              error-free execution are given. But the healthcare industry
              requires more. We infuse advanced, industry-tested practices to
              develop and bring out the best and transformational healthcare
              apps ever built.
            </p>
          </Animation>
          <div className="box-media">
            <Animation className="box-media__text">
              <ul className="list-plus">
                <li>
                  <strong>
                    Robust security to make medical apps impenetrable.
                  </strong>
                  <br />
                  We reinforce medical apps with the latest security practices
                  to prevent malware, viruses, anomalies, and hackers from
                  preying on the applications.
                </li>
                <li>
                  <strong>
                    Business-oriented approach for better prospects
                  </strong>
                  <br />
                  Medical web and mobile applications we build are equipped
                  with prowess required to cut costs and increase app usage.
                </li>
                <li>
                  <strong>We build HIPAA-compliant healthcare apps</strong>
                  <br />
                  We follow the metric set by the Health Insurance Portability
                  and Accountability Act to ensure the protection of sensitive
                  medical data of patients.
                </li>
              </ul>
            </Animation>
            <Animation className="box-media__img">
              <Image
                alt="Contact healthcare app developer"
                src="/images/industries/contact-healthcare-app-developer.jpg"
                width={1828} height={1340} layout="intrinsic" loading="eager"
              />
            </Animation>
          </div>
          <h2 className="hdg-lv2">
            Stick Out With Unparalleled Healthcare Applications With the Right
            <br />
            <span>Healthcare</span> App Development Partner
          </h2>
          <div className="list-operations">
            <Animation className="list-operations__col">
              <Image alt="" src="/images/icon/icon-shield.svg" width={70} height={81} layout="intrinsic" loading="eager" />
              <h5>Top-notch Healthcare Mobile App Development</h5>
              <p>
                Reach out to every potential user and increase engagement with
                mHealth App Development
              </p>
            </Animation>
            <Animation className="list-operations__col">
              <Image alt="" src="/images/icon/icon-loss.svg" width={55} height={85} layout="intrinsic" loading="eager" />
              <h5>Healthcare Android App Development</h5>
              <p>
                With Android devices dominating the mobile phone industry,
                healthcare android app development is a must unless there is a
                unique requirement.
              </p>
            </Animation>
            <Animation className="list-operations__col">
              <Image alt="" src="/images/icon/icon-update.svg" width={72} height={72} layout="intrinsic" loading="eager" />
              <h5>Healthcare IOS App Development​</h5>
              <p>
                IOS devices remain the first choice of smartphones in
                well-developed countries, and our Healthcare iOS App
                development would help you to penetrate such regions.
              </p>
            </Animation>

            <Animation className="list-operations__col">
              <Image alt="" src="/images/icon/icon-shield.svg" width={70} height={81} layout="intrinsic" loading="eager" />
              <h5>Healthcare Cross-platform App Development</h5>
              <p>
                With cross-platform frameworks growing every day,
                cross-platform healthcare app development is a viable
                alternative for native healthcare app development.
              </p>
            </Animation>
            <Animation className="list-operations__col">
              <Image alt="" src="/images/icon/icon-loss.svg" width={55} height={85} layout="intrinsic" loading="eager" />
              <h5>Healthcare Web App Development</h5>
              <p>
                Reach Your Customers’ UX and functionality expectations with
                Medical and Healthcare Web App Development.
              </p>
            </Animation>
            <Animation className="list-operations__col">
              <Image alt="" src="/images/icon/icon-update.svg" width={72} height={72} layout="intrinsic" loading="eager" />
              <h5>Speedy MVP Development</h5>
              <p>
                We execute our strategies at maximum seed and build the
                Minimum Viable Product to help our clients to impress the
                investors and attract users.
              </p>
            </Animation>

            <Animation className="list-operations__col">
              <Image alt="" src="/images/icon/icon-shield.svg" width={70} height={81} layout="intrinsic" loading="eager" />
              <h5>Support and Maintenance</h5>
              <p>
                Hiring us implies that you have secured a reliable technical
                consultation, support, and maintenance partner for active
                collaboration.
              </p>
            </Animation>
            <Animation className="list-operations__col">
              <Image alt="" src="/images/icon/icon-loss.svg" width={55} height={85} layout="intrinsic" loading="eager" />
              <h5>Increase Your Reach</h5>
              <p>
                Our medical web app development empowers businesses to
                dominate the online space with superior performances.
              </p>
            </Animation>
            <Animation className="list-operations__col">
              <Image alt="" src="/images/icon/icon-update.svg" width={72} height={72} layout="intrinsic" loading="eager" />
              <h5>Custom Healthcare App Development</h5>
              <p>
                Our healthcare app designers and developers are standing by to
                convert your ideas into features and functionalities.
              </p>
            </Animation>

            <Animation className="list-operations__col">
              <Image alt="" src="/images/icon/icon-shield.svg" width={70} height={81} layout="intrinsic" loading="eager" />
              <h5>Wearable Healthcare App Development</h5>
              <p>
                Relia Software builds responsive wearable healthcare apps for
                continuous healthcare and fitness monitoring.
              </p>
            </Animation>
            <Animation className="list-operations__col">
              <Image alt="" src="/images/icon/icon-loss.svg" width={55} height={85} layout="intrinsic" loading="eager" />
              <h5>Onestop solution for Healthcare</h5>
              <p>
                As a medial and healthcare app development company, Relia
                Software provides healthcare consultation, designing,
                development, testing, deployment, support, and maintenance
                services.
              </p>
            </Animation>
            <Animation className="list-operations__col">
              <Image alt="" src="/images/icon/icon-update.svg" width={72} height={72} layout="intrinsic" loading="eager" />
              <h5>Setting Novel Trends</h5>
              <p>
                We refine your ideas and custom requirements to a great extent
                to endow you with the applications capable of turning the
                tides.
              </p>
            </Animation>
          </div>
          <div className="box-media">
            <Animation className="box-media__img">
              <Image alt="" src="/images/industries/img-note.png" width={535} height={355} layout="intrinsic" loading="eager" />
            </Animation>
            <Animation className="box-media__text">
              <h2 className="hdg-lv2">
                <span className="text-white">Looking</span> for a Medical and
                Healthcare App Development Partner?
              </h2>
              <p>
                We are a healthcare web and mobile app development company
                with a sound portfolio and we might be who you are looking
                for. Get in touch with us; we are just a mail away.
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
