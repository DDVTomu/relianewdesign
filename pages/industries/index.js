import React from "react"
import PageTitle from "@components/pageTitle"
import Layout from "@components/common/layout"
import { ListIndustries, BoxHeavy } from "../../components/industries"
import SEO from "@components/seo"
import Image from "next/image"
import CountUp from "react-countup"
import Animation from "@components/common/Animation"
import ogpImage from '/assets/images/industries/industries01.jpg'

const IndustriesPage = () => {
  const seo = {
    metaTitle: "Industry Expertise",
    metaDescription: "Industries Expertise. We help businesses build digital products and services that disrupt industries.",
    keywords: "fintech, Industries Expertise, digital products",
    shareImage: ogpImage,
    article: true,
  };
  return (
    <Layout>
      <SEO seo={seo} />
      <PageTitle
        title="Industries Expertise"
        subtitle="We help businesses build digital products and services that disrupt industries."
      />
      <div className="main">
        <div className="container">
          <div className="box-media">
            <div className="box-media__text">
              <Animation>
                <h2 className="hdg-lv2">
                  Automation at <span className="text-white">work</span>
                </h2>
              </Animation>
              <Animation>
                <p>
                  Designing User Interfaces and User Experiences is our
                  historical area of expertise, and remains the lifeblood of
                  our business to this today. When it comes to web design, the
                  two concepts are inseparable. User Experience (UX) covers
                  usability, functionality, and navigation.
                </p>
              </Animation>
              <Animation>
                Then comes artistic creation (UI), which is directed by
                Barthelemy. This process seeks not only to bring a visual
                identity to the product, but also to serve the apps underlying
                purpose while ensuring the best possible experience for the
                user.
              </Animation>
            </div>
            <Animation className="box-media__img">
              <Image
                src="/images/industries/industries01.jpg"
                width={1200}
                height={506}
                layout="intrinsic"
                loading="eager"
                alt="Automation at work"
                priority={true}
              />
            </Animation>
          </div>
          <div className="industries-success">
            <Animation>
              <h2 className="hdg-lv2">
                <span>Success</span> Stories
              </h2>
            </Animation>
            <Animation className="box-success">
              <div
                className="box-success__img"
                // ref={el => (this.yourElement = el)}
              >
                <ul>
                  <li>
                    <CountUp start={0} end={400} delay={0} suffix="+">
                      {({ countUpRef }) => <span ref={countUpRef} />}
                    </CountUp>
                    <h5>automated process by the end of 2018</h5>
                  </li>
                  <li>
                    <CountUp
                      start={0}
                      end={2500}
                      delay={0}
                      suffix="+"
                      decimal=","
                    >
                      {({ countUpRef }) => <span ref={countUpRef} />}
                    </CountUp>
                    <h5>automated process by the end of 2018, estimately</h5>
                  </li>
                  <li>
                    <CountUp
                      start={0}
                      end={10000}
                      delay={0}
                      suffix="+"
                      decimal=","
                    >
                      {({ countUpRef }) => <span ref={countUpRef} />}
                    </CountUp>
                    <h5>hours saved monthly</h5>
                  </li>
                </ul>
              </div>
              <div className="box-success__text">
                <h3>Workstyle reform across various processes</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a
                  type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <p>
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently
                  with desktop publishing software like Aldus PageMaker
                  including versions of Lorem Ipsum.
                </p>
              </div>
            </Animation>
          </div>
        </div>
        <div className="box-gray">
          <div className="container">
            <Animation>
              <h2 className="hdg-lv2">
                Explore Other <span className="text-white">Industries</span>
              </h2>
            </Animation>
            <ListIndustries />
          </div>
        </div>

        <div className="container">
          <BoxHeavy />

          <div className="box-media">
            <Animation className="box-media__img">
              <Image
                src="/images/industries/industries-contact.png"
                width={626}
                height={431}
                layout="intrinsic"
                loading="eager"
                alt=""
              />
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
              <a href="/contact"
                className="btn"
              >
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
