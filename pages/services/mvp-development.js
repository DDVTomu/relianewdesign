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
import ogpImage from "assets/images/services/mvp-development-company1.jpg"

const MvpDevelopment = () => {
  const seo = {
    metaTitle: "MVP Development Company | MVP Development Services",
    metaDescription: "Relia Software-Minimum Viable Product Development Company that provides excellent MVP development services to build great products. Check our Portfolio!",
    shareImage: ogpImage,
    article: true,
  };
  return (
    <Layout>
      <SEO seo={seo} />
      <PageTitle title="MVP Development Company" className="page-title--sub" />
      <div className="main">
        <div className="container">
          <Animation>
            <h2 className="hdg-lv2">
              Build a Smart Product with
              <br />
              Relia Software’s{" "}
              <span className="text-white">MVP Development</span> Team
            </h2>
          </Animation>
          <div className="box-media">
            <Animation className="box-media__img">
              <Image
                alt="MVP Development Team"
                src="/images/services/mvp-development-company1.jpg"
                width={546} height={448} layout="intrinsic" loading="eager"
              />
            </Animation>
            <Animation className="box-media__text">
              <p>
                The lean startup methods have drastically transformed the way we
                deal with building new products. This approach goes in-hand with
                agile while you want to deliver more useful, feasible and
                valuable products. With MVP and POC, you can develop a reliable
                product idea and realise it visually. These two strategies would
                take your ideation phase to the next level.
              </p>

              <p>
                At Relia Software, we as an MVP Development company, are here to
                handle all your MVP and POC requirements in a professional
                manner. With our wide experience and expert team of MVP
                developers, you can build products that would take you to the
                next level in the market. The main objective behind building any
                product is to serve the client requirements. At Relia Software,
                our team has gone on to develop the best products with different
                technology stacks. Moreover, we are involved in every stage of
                product development, right from ideation to maintenance. Hence
                you can rely upon us at each and every phase with our MVP
                developers.
              </p>
            </Animation>
          </div>
        </div>
        <div className="box-gray">
          <div className="container">
            <Animation>
              <h2 className="hdg-lv2">
                <span>Why</span> build Proof of Concept (POC)?
              </h2>
            </Animation>
            <Animation>
              <p style={{ textAlign: "center" }}>
                Proof of Concept is an exercise done at a smaller scale to test
                the overall design assumption or idea. We develop POC to test
                the right functionality. This is done to verify if a certain
                theory is true or not.
              </p>
            </Animation>
            <div className="box-reasons">
              <Animation className="box-reasons__col">
                <Image
                  alt=""
                  src="/images/services/mobile-mockup.png"
                  style={{margin: "auto" }}
                  width={1058} height={1906} layout="intrinsic" loading="eager"
                />
              </Animation>
              <Animation className="box-reasons__col">
                <ul className="list-arrow">
                  <li>
                    <h3>Difference between Prototyping and POC</h3>
                    <p>
                      Prototyping would allow every innovator to get a visual
                      idea of their product function. It allows you to
                      understand how the product works. It is nothing but an
                      interactive model providing the end product with the
                      design, layout and navigation idea. On the other side, POC
                      would show that the product idea can be possible to put
                      into action in real-time. The prototyping would show how
                      we can put it into action.
                    </p>
                  </li>
                  <li>
                    <h3>Get to know lean curve and proof of concept</h3>
                    <p>
                      Before we move on to proof of concept, it is important to
                      analyse the steps involved before it. With a strong idea,
                      you can test it meticulously with proof of concept. This
                      involves testing the market demands through proof of
                      concept where we can go about providing aesthetic,
                      code-free and interactive prototypes.
                    </p>

                    <p>
                      Through proof of concept, you can go about testing the
                      riskiest ideas in the market. This would provide you with
                      all the data you need to understand the market clearly.
                    </p>
                  </li>
                  <li>
                    <h3>Top benefits of involving agile methodology</h3>
                    <p>
                      Agile methodology is the new trend in the market. When you
                      are going to involve agile methodology, you can always
                      remain flexible and as per the business trends. There are
                      lots of benefits involved with Agile product development,
                      which lays the foundation of both MVP and POC.
                    </p>
                  </li>
                  <li>
                    <h3>Release the product in the market like a storm</h3>
                    <p>
                      Test ideas and make assumptions with your users in mind
                      before you commit to any large budget project. This would
                      adhere well to the full development cycle of the project.
                      When you define the product vision to your customers, then
                      getting their feedback would not be a tough nut to crack.
                      All this would lead you to what you
                    </p>
                  </li>
                  <li>
                    <h3>Cost-effectiveness at full swing</h3>
                    <p>
                      With MVP, you can involve cost-effective strategies. You
                      can launch and promote much low-level product which would
                      define the market. This would assist the adoption and
                      product testing.
                    </p>
                  </li>
                  <li>
                    <h3>Simplify the end goal</h3>
                    <p>
                      Break down the entire product development cycle. This
                      would go well when you want to simplify your entire end
                      goal into various achievable milestones.
                    </p>
                  </li>
                  <li>
                    <h3>Ensure simplified market penetration</h3>
                    <p>
                      This is the best way to start for any startup. The
                      functional model would let you attract the right
                      investors.
                    </p>
                  </li>
                </ul>
              </Animation>
            </div>
          </div>
        </div>
        <div className="container">
          <Animation className="box-heading">
            <h2 className="hdg-lv2">ICO & IEO Services</h2>
            <p className="hdg-lv2-sub">
              A minimum viable product (MVP) is nothing but a concept which
              evolved from the Lean Startup movement by Eric Ries. It gives
              importance to the impact where you learn every phase involved in
              new product development. This is the version where you can check
              if you have provided a sufficient amount of features to your
              customers. Through this way, you can get the required feedback to
              upscale your future product development aspects.
            </p>
          </Animation>
          <p>These are some of the benefits involved in MVP:</p>
          <h3>Validate accurately with small droplets of efforts</h3>
          <p>
            The main objective of MVP is transforming your core idea into
            reality. At Relia Software, we have gone on to build 100+ MVPs. With
            the upper hand of our services, many startups have scaled up to
            great heights. We are also known for the never-ending support and
            turnarounds we provide.
          </p>

          <p>
            With a minimum viable product, you can determine the potential of
            any product. This development technique would be dependent on
            validated learning. MVP is known to be the first-ever version of any
            product. With less functioning, MVP provides a huge potential for
            growth.
          </p>

          <p>These are the steps involved by our MVP developers:</p>
          <div className="ieo-services">
            <div className="ieo-services__col">
              <Animation>
                <h3>Validate the product idea</h3>
                <p>
                  We validate your product idea and ensure that it is as per
                  industry standards. Since the idea forms the basis of any
                  product, we ensure that this step is covered wisely. Product
                  idea validation is the core aspect that would lead you to
                  determine the right measures in the market.
                </p>
              </Animation>
              <Animation>
                <h3>Receive the most important user insights</h3>
                <p>
                  We get to know what is in the minds of your users. We put that
                  into action. When you receive all your user insights, you
                  would be able to make the best ever decision without faltering
                  at any point.
                </p>
              </Animation>
            </div>
            <div className="ieo-services__col">
              <Animation>
                <h3>Start iterating the product</h3>
                <p>
                  Product iteration becomes simpler when you involve us. We
                  involve the best strategies to get the iteration rolling based
                  on user insights.
                </p>
              </Animation>
              <Animation>
                <h3>Work on improving the product</h3>
                <p>
                  Product improvisation happens primarily by involving the right
                  teamwork, planning and strategizing. With this final stage, we
                  can get everything happening.
                </p>
              </Animation>
            </div>
            <Animation className="ieo-services__col">
              <Image alt="" src="/images/services/ieo-services.png" width={938} height={938} layout="intrinsic" loading="eager" />
            </Animation>
          </div>
        </div>
        <div className="box-gray">
          <div className="container">
            <div className="app-service">
              <Animation className="app-service-col">
                <h2 className="hdg-lv2">
                  How do we <span>develop</span> your MVP?
                </h2>
              </Animation>
              <Animation className="app-service-col">
                <p>
                  Our focus lies on building your product in an incremental and
                  iterative manner. For us, customer feedback is valuable in
                  comparison to intuition. Design iteration also comes into the
                  picture.
                </p>
              </Animation>
            </div>
            <ListMobiService data={data.mvp} />
          </div>
        </div>
        <div className="container">
          <ListAccordion data={dataFaq.mvp} />
        </div>
        <div className="box-contact">
          <div className="container">
            <Animation>
              <h2 className="hdg-lv2">
                Let us help make your MVP <span>development</span>
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
export default MvpDevelopment
