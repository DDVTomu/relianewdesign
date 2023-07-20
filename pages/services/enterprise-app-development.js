import React from "react"
import Link from "next/link"
import PageTitle from "@components/pageTitle"
import Layout from "@components/common/layout"
import { ListAccordion } from "@components/services"
import SEO from "@components/seo"
import Image from "next/image"
import Animation from "@components/common/Animation"
import dataFaq from "./faq"
import ogpImage from "assets/images/services/enterprise-app-development.jpg"

const EnterpriseApp = () => {
  const seo = {
    metaTitle: "Enterprise App Development",
    metaDescription: "We design our project-based end-to-end development services for the enterprise. Relia holds the experience to deliver mobile products that are successful and consistent in results.",
    shareImage: ogpImage,
    article: true,
  };
  return (
    <Layout>
      <SEO seo={seo} />
      <PageTitle
        title="Enterprise App Development "
        className="page-title--sub"
      />
      <div className="main">
        <div className="container">
          <Animation>
            <h2 className="hdg-lv2">
              Our Enterprise <span className="text-white">App</span> Development
              Services <br />
              and Solutions
            </h2>
          </Animation>
          <Animation>
            <Image
              alt="MVP Development Team"
              src="/images/services/enterprise-app-development.jpg"
              width={1201} height={511} layout="intrinsic" loading="eager"
            />
          </Animation>
          <Animation>
            <p style={{ marginTop: "15px" }}>
              We design our project-based end-to-end development services for
              the enterprise. Relia holds the experience to deliver mobile
              products that are successful and consistent in results.
              <br />
              Having worked with the best in the industry at all stages of
              mobile maturity, across mobile web, iOS, Android, and more, we
              know how to foster products to the demands of our clients.
            </p>

            <p>
              Simplify the development process of enterprise software for your
              employees using various mobile devices with Enterprise
              Applications.
            </p>
          </Animation>
          <div className="box-reasons">
            <Animation className="box-reasons__col">
              <Image
                alt=""
                src="/images/services/enterprise-app-development-02.jpg"
                style={{ maxWidth: "530px", margin: "auto" }}
                width={559} height={314} layout="intrinsic" loading="eager"
              />
            </Animation>
            <Animation className="box-reasons__col">
              <ul className="list-arrow">
                <li>
                  <h3>Top-notch user experience design</h3>
                  <p>
                    You can leverage dedicated experts with design experience to
                    deliver enterprise solutions anytime
                  </p>
                </li>
                <li>
                  <h3>Modernization of legacy application</h3>
                  <p>
                    In order to optimize your business’s operations and lower
                    the disruptions, we bring in the modernization of enterprise
                    applications that improves your employees’ productivity.
                  </p>
                </li>
                <li>
                  <h3>Secured Enterprise app development</h3>
                  <p>
                    The security of your enterprise software is our
                    responsibility.
                  </p>
                </li>
                <li>
                  <h3>In-app analytics</h3>
                  <p>
                    You have complete control of your project direction and
                    intellectual property and the know-how of the analytics as
                    and when you please.
                  </p>
                </li>
              </ul>
            </Animation>
          </div>
          <div className="box-reasons">
            <Animation className="box-reasons__col">
              <ul className="list-arrow">
                <li>
                  <h3>Mobility business integration services</h3>
                  <p>
                    In sync with the current processes and enterprise software,
                    we prepare your app for the learnability curve. It makes it
                    super easy to get acquainted with the app and avail huge
                    benefits.
                  </p>
                </li>
                <li>
                  <h3>Upgrade Employee Engagement</h3>
                  <p>
                    The enterprise application solutions help workers better
                    understand and communicate effectively with each other.
                  </p>
                </li>
                <li>
                  <h3>Improve Technical Support</h3>
                  <p>
                    Our on alert support system is always on the backend to run
                    any errors or changes for the enterprise mobile applications
                    that your team may require.
                  </p>
                </li>
                <li>
                  <h3>Incur Lower Costs</h3>
                  <p>
                    Being a pioneer in enterprise software development, we lower
                    the costs for your organization and help you focus on other
                    areas of development.
                  </p>
                </li>
                <li>
                  <h3>Enhance Customer Experience</h3>
                  <p>
                    Our products are built to solve real problems for your
                    business and customers, including internal apps or
                    customer-facing apps.
                  </p>
                </li>
              </ul>
            </Animation>
            <Animation className="box-reasons__col">
              <Image
                alt=""
                src="/images/services/enterprise-app-development-03.jpg"
                style={{ maxWidth: "530px", margin: "auto" }}
                width={477} height={269} layout="intrinsic" loading="eager"
              />
            </Animation>
          </div>
        </div>
        <div className="box-gray">
          <div className="container">
            <Animation className="box-heading">
              <h2 className="hdg-lv2">
                <span className="text-white">Reasons</span> To Hire Relia
                Software’s
                <br />
                Enterprise App Developers
              </h2>
              <p className="box-heading-sub">
                Our team is yours. We offer staff augmentation services to
                provide top talent for your needs from our stack of experienced
                mobile experts in domains like iOS, Android, cross-platform,
                connected TV, and various other.
              </p>
            </Animation>
            <div className="box-reasons">
              <Animation className="box-reasons__col">
                <Image alt="Get the best of talent for your team" src="/images/services/enterprise-app-development-04.jpg" width={600} height={500} layout="intrinsic" loading="eager" />
              </Animation>
              <Animation className="box-reasons__col">
                <ul className="list-arrow">
                  <li>
                    <h3>
                      <Image
                        className="icon"
                        alt=""
                        src="/images/icon/icon-arrow-right.svg"
                        width={25} height={17} layout="intrinsic" loading="eager"
                      />
                      Get the best of talent for your team
                    </h3>
                    <p>
                      The enterprise mobile application development is handled
                      by the best of our developers from across domains and
                      expertise
                    </p>
                  </li>
                  <li>
                    <h3>
                      <Image
                        className="icon"
                        alt=""
                        src="/images/icon/icon-arrow-right.svg"
                        width={25} height={17} layout="intrinsic" loading="eager"
                      />
                      Adjust the resource scale based on demand
                    </h3>
                    <p>
                      Every enterprise application solution requires to be
                      treated differently. So, adjust your manpower as per your
                      demand and needs.
                    </p>
                  </li>
                  <li>
                    <h3>
                      <Image
                        className="icon"
                        alt=""
                        src="/images/icon/icon-arrow-right.svg"
                        width={25} height={17} layout="intrinsic" loading="eager"
                      />
                      Bridge the technical gaps with platform experts
                    </h3>
                    <p>
                      Our enterprise application development services let you
                      fill the gaps that your team might be missing. We come
                      with full vigor and compassion to take on your
                      development.
                    </p>
                  </li>
                  <li>
                    <h3>
                      <Image
                        className="icon"
                        alt=""
                        src="/images/icon/icon-arrow-right.svg"
                        width={25} height={17} layout="intrinsic" loading="eager"
                      />
                      Options to co-locate
                    </h3>
                    <p>
                      We offer our team on or off locations and our packages can
                      be customized accordingly. The process is hassle-free and
                      saves you a lot of trouble when it comes to staffing.
                    </p>
                  </li>
                  <li>
                    <h3>
                      <Image
                        className="icon"
                        alt=""
                        src="/images/icon/icon-arrow-right.svg"
                        width={25} height={17} layout="intrinsic" loading="eager"
                      />
                      Just-in-time resourcing
                    </h3>
                    <p>
                      Our enterprise application development resources are
                      always available to help you with your enterprise app
                      needs.
                    </p>
                  </li>
                </ul>
              </Animation>
            </div>
          </div>
        </div>
        <div className="container">
          <Animation>
            <h2 className="hdg-lv2">Relia Software’s Tech Stack for Enterprise App Development</h2>
          </Animation>
          <div className="app-service">
            <Animation className="app-service-col">
              <Image alt="Enterprise App Development" src="/images/services/enterprise-app-development-05.jpg" width={540} height={304} layout="intrinsic" loading="eager" />
            </Animation>
            <div className="app-service-col">
              <Animation>
                <p>
                  Relia offers e enterprise mobility services and solutions to
                  cover all your major mobile platforms including Android, iOS,
                  iPhone, Windows Phone, Windows RT, HTML5, and other associated
                  server technologies.
                </p>
              </Animation>

              <Animation>
                <p>
                  We are constantly determined to deliver operational facilities
                  to assist our client's advantage and facilitate competitive
                  business measures.
                </p>
              </Animation>
            </div>
          </div>
        </div>
        <div className="container">
          <ListAccordion data={dataFaq.enterprise} />
        </div>
        <div className="box-contact">
          <div className="container">
            <Animation>
              <h2 className="hdg-lv2">
                Let us help make your Enterprise App <span>development</span>
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
export default EnterpriseApp
