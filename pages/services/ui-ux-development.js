import React from "react"
import Link from "next/link"
import PageTitle from "@components/pageTitle"
import Layout from "@components/common/layout"
import { ListAccordion, ListMobiService } from "@components/services"
import SEO from "@components/seo"
import Image from "next/image"
import Animation from "@components/common/Animation"
import data from "./data"
import dataFaq from "./faq"
import ogpImage from "assets/images/services/ui-ux-design-services.jpg"

const UiUxPage = () => {
  const seo = {
    metaTitle: "UI/UX Design Agency | Web Design | Mobile App Design | USA & Vietnam",
    metaDescription: "Relia Software is a top UX/UI Design Company that stands by to a design-driven approach. Checkout for Web and Mobile Application UI/UX Design Services.",
    shareImage: ogpImage,
    article: true,
  };
  return (
    <Layout>
      <SEO seo={seo} />
      <PageTitle title="UI/UX Design Services" className="page-title--sub" />
      <div className="main">
        <div className="container">
          <Animation>
            <h2 className="hdg-lv2">
              A Top <span className="text-white">UI</span> And{" "}
              <span className="text-white">UX</span> Design Firm
            </h2>
          </Animation>
          <Animation>
            <Image
              alt="Mobile App design firm"
              src="/images/services/ui-ux-design-services.jpg"
              width={678} height={558} layout="intrinsic" loading="eager"
            />
          </Animation>
          <Animation>
            <p style={{ marginTop: "15px" }}>
              At Relia, we create functional and clean applications that can
              cater your usability needs using the UX design process. As a UX
              design company, we create B2B applications that are effective to
              the core for the end user. Finding solutions specific to our
              clients’ situations, we bring out user-friendly, aesthetically
              pleasing apps based on UX/UI design methodology.
            </p>

            <p>
              Notable among the best UX companies, Relia has the best team of
              experienced UI/UX visual designers that inculcate the design
              consultant design process from step one.
            </p>
          </Animation>
          <Animation>
            <h2 className="hdg-lv2">
              Why Choose Relia for your <span>UX/UI</span> Requirements
            </h2>
          </Animation>
          <div className="list-idea">
            <Animation className="list-idea__col">
              <Image alt="Focused" src="/images/icon/icon-idea.svg" width={66} height={67} layout="intrinsic" loading="eager" />
              <div className="h4">Focused</div>
              <p>
                Our application process is focused on efficiency and driven by
                mission of being useful to the end user.
              </p>
            </Animation>
            <Animation className="list-idea__col">
              <Image alt="Minimalistic" src="/images/icon/icon-strategy.svg" width={62} height={52} layout="intrinsic" loading="eager" />
              <div className="h4">Minimalistic</div>
              <p>
                We ensure that our users can perform basic tasks with minimum
                difficulty. Thus, the complexity of the application is solved by
                increasing the usability value of the design.
              </p>
            </Animation>
            <Animation className="list-idea__col">
              <Image alt="Product Iterations" src="/images/icon/icon-planning.svg" width={52} height={52} layout="intrinsic" loading="eager" />
              <div className="h4">Primary End-User</div>
              <p>
                Simple applications empower our users. We give the reins of the
                design in the hands of the user to make them smarter and in more
                control of the application.
              </p>
            </Animation>
            <Animation className="list-idea__col">
              <Image alt="MVC Architecture" src="/images/icon/icon-maintenance.svg" width={60} height={60} layout="intrinsic" loading="eager" />
              <div className="h4">MVC Architecture</div>
              <p>
                Relia believes in delivering value to the customers via high
                functionality. Our offers are low on the pocket. We give high
                end designs are low cost that enable them to win hearts.
              </p>
            </Animation>
          </div>
        </div>
        <div className="box-gray">
          <div className="container">
            <div className="box-reasons">
              <Animation className="box-reasons__col">
                <Animation>
                  <h2 className="hdg-lv2" style={{ textAlign: "left" }}>
                    Mobile and Web Application Design Agency
                  </h2>
                </Animation>
                <Animation>
                  <p>
                    As a UX/UI agency, we approach our projects on case to case
                    basis. We cater to each client individually making sure they
                    are given complete attention. We adapt to their industry,
                    sector and requirements and adjust our capabilities.
                  </p>
                </Animation>
                <Animation>
                  <p>
                    Relia’s philosophy is to bring in the insights and unique
                    solutions to the table. Being innovators in the field of
                    UX/UI, we provide exclusivity to each client based on the
                    approach that is agreed mutually.
                  </p>
                </Animation>
                <Animation>
                  <p>
                    Check out our project portfolio and our recent work to get a
                    better idea. Get in touch with us directly and we can
                    dedicate our team members to navigate through your project.
                  </p>
                </Animation>
              </Animation>
              <Animation className="box-reasons__col">
                <Image
                  alt="UI UX design company"
                  src="/images/services/ui-ux-design-company.jpg"
                  width={626} height={417} layout="intrinsic" loading="eager"
                />
              </Animation>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="app-service">
            <Animation className="app-service-col">
              <Image alt="App design agency in vietnam" src="/images/services/app-design-agency-in-vietnam.jpg" width={1050} height={700} layout="intrinsic" loading="eager" />
            </Animation>
            <div className="app-service-col">
              <Animation>
                <h2 className="hdg-lv2">Our UI/UX capabilities</h2>
                <ul className="list-plus">
                  <li>Experience Design</li>
                  <li>Behaviour understanding</li>
                  <li>Architecture/Design system</li>
                  <li>Interface Design</li>
                  <li>Responsive design</li>
                  <li>Visual design and identity</li>
                  <li>Branding and Brand guidelines</li>
                  <li>Design assets</li>
                </ul>
              </Animation>
            </div>
          </div>
        </div>
        <div className="box-gray">
          <div className="container">
            <Animation className="box-heading">
              <h2 className="hdg-lv2">UI/UX Design Services</h2>
              <p className="box-heading-sub">
                We give a great level of emphasis on user experience driven
                engineering. Design is not just about pixels. We act as
                strategists to understand the user behaviour and deliver what
                users want. UX is about simplifying things yet not compromising
                the USP of the product. We have also ensure that every developer
                at Relia Software adheres to a design driven approach.
              </p>
            </Animation>
            <ListMobiService data={data.uiux} />
          </div>
        </div>
        <div className="container">
          <ListAccordion data={dataFaq.uiux} />
        </div>
        <div className="box-contact">
          <div className="container">
            <Animation>
              <h2 className="hdg-lv2">
                Let us help make your UI/UX <span>development</span>
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
            <a href="/contact" className="btn">
              CONTACT US TODAY
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default UiUxPage
