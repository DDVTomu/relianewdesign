import React from "react"
import Link from "next/link"
import PageTitle from "@components/pageTitle"
import Layout from "@components/common/layout"
import { ListAccordion } from "@components/services"
import SEO from "@components/seo"
import Image from "next/image"
import Animation from "@components/common/Animation"
import dataFaq from "./faq"
import ogpImage from "assets/images/services/nextjs-development.jpg"

const NextJs = () => {
  const seo = {
    metaTitle: "NextJS Development Company | JavaScript Development Services",
    metaDescription: "Top Next.js Development Company in the USA & Vietnam. Expertise in Creating fast, flexible & scalable Next js applications. Hire Top Next.js Developers!",
    pathname: "/services/nextjs-development",
    shareImage: ogpImage,
    article: true,
  };
  return (
    <Layout>
      <SEO seo={seo} />
      <PageTitle
        title="Next.js Development Company"
        className="page-title--sub"
      />
      <div className="main">
        <div className="container">
          <Animation>
            <h2 className="hdg-lv2">
              What is a <span className="text-white">NextJS</span> platform?
            </h2>
          </Animation>
          <div className="box-media">
            <Animation className="box-media__text">
              <p>
                Released in October 2016, Next.js is an open source web
                development framework for creating web applications that
                redefine responsivity. The Next.js framework is comparatively
                younger with its stable release in June 2019, but it has got a
                stack of advantages propelling its early adoption.
              </p>

              <p>
                Of all the benefits Next.js web app development has to offer,
                two features deserve the unwavering attention of the Next.js
                development community and business.
              </p>

              <p>
                One, before a web application becomes visible to the user, it
                has to load all the JavaScript, and that increases the waiting
                time. Server-side rendering of Next.js applications brings down
                the waiting time drastically.
              </p>
            </Animation>
            <Animation className="box-media__img">
              <Image alt="" src="/images/services/nextjs-development-company-01.jpg" width={368} height={221} layout="intrinsic" loading="eager" />
            </Animation>
          </div>
          <div className="box-media">
            <Animation className="box-media__img">
              <Image alt="" src="/images/services/nextjs-development-company-02.jpg" width={455} height={408} layout="intrinsic" loading="eager" />
            </Animation>
            <Animation className="box-media__text">
              <p>
                Two, for a public webpage to appear at the top of the search
                results (meaning, to have more traffic and business), search
                engines have it crawl the webpages and understand what they are
                about before indexing. Next.js framework effectively tells the
                SEO algorithms about the content in the web page.
              </p>

              <p>
                Relia Software is a Next.js development services provider and
                company that remains the first choice for web app development in
                the industry. We have been working with Next.js framework since
                its inception, and thanks to that, we can now proudly claim that
                we understand everything there is to know about the Next.js
                development. We have also incorporated the industries’ best
                Next.js developers to empower our clients with solutions that
                will support their business growth.
              </p>
            </Animation>
          </div>
        </div>
        <div className="container">
          <Animation>
            <h2 className="hdg-lv2">Why Choose Next.js For Web Development?</h2>
          </Animation>
          <div className="box-text">
            <Animation className="box-text-col">
              <Image
                alt=""
                src="/images/icon/icon-check-mark.png"
                style={{ width: "52px" }}
                width={104} height={104} layout="intrinsic" loading="eager"
              />
              <h3>Next.js is Easy to Deploy and Use</h3>
              <p>
                Next.js doesn’t require myriad configurations before your
                developers dive into the development. It is also easy for
                developers to develop an application with Next.js.
              </p>
            </Animation>
            <Animation className="box-text-col">
              <Image
                alt=""
                src="/images/icon/icon-check-mark.png"
                style={{ width: "52px" }}
                width={104} height={104} layout="intrinsic" loading="eager"
              />
              <h3>Next.js Offers a Performance boost</h3>
              <p>
                Server-side Rendering of Next.js front-end development framework
                provides the web applications a performance boost and makes it
                super SEO-friendly.
              </p>
            </Animation>
            <Animation className="box-text-col">
              <Image
                alt=""
                src="/images/icon/icon-check-mark.png"
                style={{ width: "52px" }}
                width={104} height={104} layout="intrinsic" loading="eager"
              />
              <h3>Automatic Code Splitting</h3>
              <p>
                Next.js development framework code-splitting enables the
                applications to load faster as it has to run only the required
                bundles of code based on the request made.
              </p>
            </Animation>
          </div>
          <div className="box-text">
            <Animation className="box-text-col">
              <Image
                alt=""
                src="/images/icon/icon-check-mark.png"
                style={{ width: "52px" }}
                width={104} height={104} layout="intrinsic" loading="eager"
              />
              <h3>Prefetching: Next.js Apps </h3>
              <p>
                Next.js-developed web apps load the optimized bundles of code
                behind the screen and drastically reduces the waiting time for
                the users, improving their experience.
              </p>
            </Animation>
            <Animation className="box-text-col">
              <Image
                alt=""
                src="/images/icon/icon-check-mark.png"
                style={{ width: "52px" }}
                width={104} height={104} layout="intrinsic" loading="eager"
              />
              <h3>Quicker Next.js Development with Hot Reloading</h3>
              <p>
                Hot Reloading of Next.js development cuts down the web
                development time and equips you with a fully functioning
                solution, empowering you to take on the market.
              </p>
            </Animation>
            <Animation className="box-text-col">
              <Image
                alt=""
                src="/images/icon/icon-check-mark.png"
                style={{ width: "52px" }}
                width={104} height={104} layout="intrinsic" loading="eager"
              />
              <h3>Ecosystem Compatability of Next.js</h3>
              <p>
                Next.js framework is highly compatible and can be easily
                integrated with popular web development technologies like React,
                Node, and JavaScript ecosystems.
              </p>
            </Animation>
          </div>
        </div>

        <div className="box-gray">
          <div className="container">
            <Animation className="box-heading">
              <h2 className="hdg-lv2">Next.js Development Services</h2>
            </Animation>
            <div className="box-reasons" style={{ marginBottom: 0 }}>
              <Animation className="box-reasons__col">
                <ul className="list-arrow">
                  <li>
                    <h3>Next.js Web Development</h3>
                    <p>
                      We build highly versatile, scalable, and responsive
                      Next.js web applications with meticulously crafted
                      features and functionalities to assist you in your
                      business endeavors.
                    </p>
                  </li>
                  <li>
                    <h3>Next.Js Planning and Strategy</h3>
                    <p>
                      Relia software, as a Next.js web development company, has
                      a complete grasp over the subtleties of the framework to
                      empower the business, with a keen eye on the future.
                    </p>
                  </li>
                  <li>
                    <h3>Next.Js Custom Development</h3>
                    <p>
                      Every business and every industry has unique requirements
                      that must be quenched to grow to the next level. Our
                      Next.js development team goes the extra mile for
                      custom-tailored Next.js development solutions.
                    </p>
                  </li>
                  <li>
                    <h3>Next.js Upgrade</h3>
                    <p>
                      We have worked with various businesses upgrading their web
                      solutions into the latest Next.js updates to offer their
                      customers an experience they will want to have again.
                    </p>
                  </li>
                </ul>
              </Animation>
              <Animation className="box-reasons__col">
                <Image
                  alt=""
                  src="/images/services/nextjs-development.jpg"
                  style={{ maxWidth: "530px", margin: "auto" }}
                  width={605} height={403} layout="intrinsic" loading="eager"
                />
                <ul className="list-arrow">
                  <li>
                    <h3>Next.js Maintenance</h3>
                    <p>
                      As a Next.js development company, Relia Software deploys
                      the best Next.js developers for the maintenance of your
                      Next.js applications to ensure they remain at their
                      functional best throughout their time.
                    </p>
                  </li>
                  <li>
                    <h3>Next.js Support</h3>
                    <p>
                      Our Next.js support teams are available 24x7 to provide
                      you with better support and assistance. The experienced
                      Next.js specialists take care of the necessary as soon as
                      possible.
                    </p>
                  </li>
                </ul>
              </Animation>
            </div>
          </div>
        </div>
        <div className="container">
          <Animation>
            <h2 className="hdg-lv2">
              Why Relia Software’s <span>Next.js</span> Developers <br />
              are Sought-After in the Industry?
            </h2>
          </Animation>
          <div className="list-chain">
            <Animation className="item">
              <div className="item__thumb">
                <Image alt="" src="/images/services/nextjs-development-01.jpg" width={360} height={90} layout="intrinsic" loading="eager" />
              </div>
              <div className="item__content">
                <h2>Great Industrial Experience</h2>
                <p>
                  We have worked with a multitude of industries and businesses
                  for we understand every necessary step and process involved in
                  Next.js web app development.
                </p>
              </div>
            </Animation>
            <Animation className="item">
              <div className="item__thumb">
                <Image alt="" src="/images/services/nextjs-development-02.jpg" width={360} height={90} layout="intrinsic" loading="eager" />
              </div>
              <div className="item__content">
                <h2>Communication and Project Management</h2>
                <p>
                  Being a Next.js development company, we understand how
                  critical it is to the project management models and keep the
                  stakeholders in the loop throughout the Next.js development
                  process.
                </p>
              </div>
            </Animation>
            <Animation className="item">
              <div className="item__thumb">
                <Image alt="" src="/images/services/nextjs-development-03.jpg" width={360} height={90} layout="intrinsic" loading="eager" />
              </div>
              <div className="item__content">
                <h2>Blending With Your Teams</h2>
                <p>
                  You can hire our dedicated Next.js developers and have them
                  work closely with your team for effective planning,
                  establishing goals, and guaranteed Web app development
                </p>
              </div>
            </Animation>
            <Animation className="item">
              <div className="item__thumb">
                <Image alt="" src="/images/services/nextjs-development-04.jpg" width={360} height={90} layout="intrinsic" loading="eager" />
              </div>
              <div className="item__content">
                <h2>Capable Next.js Teams</h2>
                <p>
                  Based in Vietnam, our Next.js developers are highly skilled
                  and possess the knowledge required to develop high performing
                  and responsive Next.js web applications.
                </p>
              </div>
            </Animation>
            <Animation className="item">
              <div className="item__thumb">
                <Image alt="" src="/images/services/nextjs-development-05.jpg" width={360} height={90} layout="intrinsic" loading="eager" />
              </div>
              <div className="item__content">
                <h2>Faster Next.js Development</h2>
                <p>
                  Relia Software has incorporated experienced Next.js
                  specialists to facilitate faster Next.js development while
                  keeping the quality sky-high, if not above.
                </p>
              </div>
            </Animation>
          </div>
          <ListAccordion data={dataFaq.nextjs} />
        </div>
        <div className="box-contact">
          <div className="container">
            <Animation>
              <h2 className="hdg-lv2">
                Let us help make your <span>Next.Js development</span>
                <br className="visible-pc" /> Capabilities project a success.
              </h2>
            </Animation>
            <Animation>
              <div className="box-contact__img" style={{ maxWidth: "252px" }}>
                <Image
                  alt=""
                  src="/images/services/nextjs-development-company-01.jpg"
                  style={{ maxWidth: "252px" }}
                  width={368} height={221} layout="intrinsic" loading="eager"
                />
              </div>
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
export default NextJs
