import React from "react"
import Link from "next/link"
import PageTitle from "@components/pageTitle"
import Layout from "@components/common/layout"
import { ListAccordion, ListMobiService } from "@components/services"
import SEO from "@components/seo"
import Image from "next/image"
import Animation from "@components/common/Animation"
import dataFaq from "./faq"
import data from "./data"
import ogpImage from "assets/images/services/nodejs-development-company.jpg"

const NodeJs = () => {
  const seo = {
    metaTitle: "NodeJS Development company",
    metaDescription: "Relia offers real-time web-apps and traffic-driven mobile apps to our clients at Relia. We are one of the leading companies providing NodeJS development to our clients.",
    shareImage: ogpImage,
    pathname: "/services/nodejs-development",
    article: true,
  };
  return (
    <Layout>
      <SEO seo={seo} />
      <PageTitle
        title="NodeJS Development company"
        className="page-title--sub"
      />
      <div className="main">
        <div className="container">
          <Animation>
            <h2 className="hdg-lv2">
              What is a <span className="text-white">NodeJS</span> platform?
            </h2>
          </Animation>
          <Animation>
            <Image
              alt="MVP Development Team"
              src="/images/services/nodejs-development-company.jpg"
              width={1231} height={427} layout="intrinsic" loading="eager"
            />
          </Animation>
          <Animation>
            <p style={{ marginTop: "15px" }}>
              Not always do we have a complete idea of the importance of an open
              source platform. However, while opting for it, it is crucial to
              understand the workings and benefits. NodeJS is one such open
              source cross-platform with around 4 million+ users across the
              globe. Entering the cloud stacks and IoT, it can assist you to
              develop server-side development on a proven track record.
            </p>
            <p>
              Relia offers real-time web-apps and traffic-driven mobile apps to
              our clients at Relia. We are one of the leading companies
              providing NodeJS development to our clients.
            </p>
            <p>
              We provide customized solutions as our expert team handles every
              minute detail of development and delivers an error-free final
              product. Relia promises of real-time & scalable applications built
              on the powerful framework of node js.
            </p>
          </Animation>
        </div>
        <div className="container">
          <Animation>
            <h2 className="hdg-lv2">Why choose NodeJS for your development?</h2>
          </Animation>
          <div className="list-idea">
            <Animation className="list-idea__col">
              <Image
                alt=""
                src="/images/icon/icon-check-mark.png"
                style={{ width: "52px" }}
                width={104} height={104} layout="intrinsic" loading="eager"
              />
              <h3>Cross-platform development</h3>
              <p>
                You can build NodeJS apps running on Linux, macOS, Microsoft
                Windows, NonStop, and Unix servers effortlessly.
              </p>
            </Animation>
            <Animation className="list-idea__col">
              <Image
                alt=""
                src="/images/icon/icon-check-mark.png"
                style={{ width: "52px" }}
                width={104} height={104} layout="intrinsic" loading="eager"
              />
              <h3>Development Speed and Flexibility</h3>
              <p>
                With fewer lines of code, the NodeJS development enables you to
                complete the project faster. It speeds up your development and
                keeps your code tighter.
              </p>
            </Animation>
            <Animation className="list-idea__col">
              <Image
                alt=""
                src="/images/icon/icon-check-mark.png"
                style={{ width: "52px" }}
                width={104} height={104} layout="intrinsic" loading="eager"
              />
              <h3>Rich Ecosystem of Modules</h3>
              <p>
                The library of modules on offer for NodeJS provides lots of
                pre-coded functionalities for use in development. It provides
                lots of pre-coded functionalities for use in development.
              </p>
            </Animation>
            <Animation className="list-idea__col">
              <Image
                alt=""
                src="/images/icon/icon-check-mark.png"
                style={{ width: "52px" }}
                width={104} height={104} layout="intrinsic" loading="eager"
              />
              <h3>High-Performance Web Applications</h3>
              <p>
                Operating on a single thread, NodeJS enables the handling of a
                million concurrent connections at once.
              </p>
            </Animation>
          </div>
        </div>
        <div className="box-gray">
          <div className="container">
            <Animation className="box-heading">
              <h2 className="hdg-lv2">
                Selecting the NodeJS Development Company
              </h2>
              <p className="hdg-lv2-sub">
                The single-threaded nature of nodeJS makes it valuable for
                non-blocking and event-driven servers. As a NodeJS Development
                Company we at Relia leverage the multiple platform facilities
                and deliver to clients with the best products. We offer:
              </p>
            </Animation>
            <div className="ieo-services">
              <Animation className="ieo-services__col">
                <Image alt="" src="/images/services/nodejs-development-company-01.jpg" width={600} height={500} layout="intrinsic" loading="eager" />
              </Animation>
              <div className="ieo-services__col">
                <Animation>
                  <h3>Dedicated Resources</h3>
                  <p>
                    Our policy is to provide cost-effective and dedicated
                    resources to our clients and ensure 100% satisfaction. You
                    can also outsource NodeJS development by facilitating remote
                    NodeJS developers if required.
                  </p>
                </Animation>
                <Animation>
                  <h3>Exclusive Project Manager</h3>
                  <p>
                    We assign a dedicated project manager for your project and
                    keep you updated about every proceeding along the way. A
                    clear roadmap is sought-after and a pipeline of work is
                    created for transparency and visibility.
                  </p>
                </Animation>
              </div>
              <div className="ieo-services__col">
                <Animation>
                  <h3>On-demand and deadline</h3>
                  <p>
                    Relia offers on-demand NodeJS developers who keep your
                    project as a priority and maintain the deadline.
                  </p>
                </Animation>
                <Animation>
                  <h3>Skilled Team </h3>
                  <p>
                    We have a skilled team in the field of NodeJS development
                    and the top NodeJS developers with exceptional talents.
                  </p>
                </Animation>
                <Animation>
                  <h3>Services Across Globe </h3>
                  <p>
                    Our NodeJS development services are spread around the world
                    as we offer 24x7 support at Relia to our valuable clients.
                  </p>
                </Animation>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <Animation className="box-heading">
            <h2 className="hdg-lv2">
              Why choose Relia for your NodeJS development?
            </h2>
            <p className="hdg-lv2-sub">
              Relia is the best NodeJS API development company in Vietnam
              helping clients achieve their business objectives. We leverage the
              depth of NodeJS and build high performing web applications based
              on Javascript.
            </p>
          </Animation>
          <div className="box-reasons" style={{ marginBottom: 0 }}>
            <Animation className="box-reasons__col">
              <Image
                alt=""
                src="/images/services/nodejs-development-company-02.jpg"
                style={{ maxWidth: "530px", margin: "auto" }}
                width={283} height={249} layout="intrinsic" loading="eager"
              />
            </Animation>
            <Animation className="box-reasons__col">
              <ul className="list-arrow">
                <li>
                  <h3>NodeJS Consultation</h3>
                  <p>
                    Our highly experienced technology experts on NodeJS
                    development can guide you with your enterprise requirements
                    and help your website perform better.
                  </p>
                </li>
                <li>
                  <h3>Multiple Connections</h3>
                  <p>
                    As a development company, our team is capable of handling a
                    large number of connections simultaneously. Relia has
                    clients across domains and hails years of experience in
                    working effortlessly.
                  </p>
                </li>
              </ul>
            </Animation>
          </div>
          <div className="box-reasons">
            <Animation className="box-reasons__col">
              <ul className="list-arrow">
                <li>
                  <h3>Faster Communication</h3>
                  <p>
                    The overall time of data communication is much faster than
                    other streaming as the process of loading is reduced.
                  </p>
                </li>
                <li>
                  <h3>Multiple Frameworks & APIs</h3>
                  <p>
                    NodeJS uses JavaScript on the server and runs on various
                    platforms. Our team taps the benefits of these multiple
                    frameworks that increase the efficiency of the platform
                    along with REST, JSON APIs, JavaScript.
                  </p>
                </li>
              </ul>
            </Animation>
            <Animation className="box-reasons__col">
              <Image
                alt=""
                src="/images/services/nodejs-development-company-03.jpg"
                style={{ maxWidth: "530px", margin: "auto" }}
                width={307} height={298} layout="intrinsic" loading="eager"
              />
            </Animation>
          </div>

          <ListAccordion data={dataFaq.nodejs} />
        </div>
        <div className="box-contact">
          <div className="container">
            <Animation>
              <h2 className="hdg-lv2">
                Let us help make your <span>NodeJs development</span>
                <br className="visible-pc" /> project a success.
              </h2>
            </Animation>
            <Animation className="box-contact__img">
              <Image alt="" src="/images/services/nodejs-contact.png" width={342} height={209} layout="intrinsic" loading="eager" />
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
export default NodeJs
