import React from "react"
import Link from "next/link"
import PageTitle from "@components/pageTitle"
import Layout from "@components/common/layout"
import SEO from "@components/seo"
import Image from "next/image"
import Animation from "@components/common/Animation"
import ogpImage from "assets/images/services/web-app-development.jpg"

const WebApp = () => {
  const seo = {
    metaTitle: "Web App Development Company | Custom Web Application Development Services",
    metaDescription: "Relia Software is the top web app development company. We build robust web applications & offer great web application services. Check out our projects now!",
    shareImage: ogpImage,
    article: true,
  };
  return (
    <Layout>
      <SEO seo={seo} />
      <PageTitle
        title="Full-Stack Web Development Services"
        className="page-title--sub"
      />
      <div className="main">
        <div className="container">
          <Animation className="box-heading">
            <h2 className="hdg-lv2">
              Full-Stack <span className="text-white">Web Development</span>{" "}
              Services
            </h2>
            <p className="box-heading-sub">
              With a mission to help businesses transform their future, Relia
              boosts full-stack web development services designed to innovate
              the enterprise opportunities with intelligent web development
              practices. We are a robust team that aims to provide solutions for
              web and e-commerce applications, responsive websites, digital
              asset management systems and more.
            </p>
          </Animation>
          <div className="box-media">
            <Animation className="box-media__text">
              <p>
                What your business needs is a laser-focused team to work on
                usability, scalability, efficiency, and fully responsive mobile
                design for your website. You can achieve:
              </p>
              <Animation>
                <ul className="list-plus" style={{ fontWeight: "bold" }}>
                  <li>• Multi-page and multi-lingual websites</li>
                  <li>• Customised e-commerce applications</li>
                  <li>• Fully optimized, documented and tested website</li>
                  <li>• Smooth and engaging user experience</li>
                </ul>
              </Animation>
              <Animation>
                Across browsers, devices, and operating systems, a Progressive
                Web Application can be accomplished with our team of experienced
                developers at Relia. Angular, React, Front-end and back-end
                developers have thousands of hours of experience in crafting
                world-class web apps. At Relia Software, we have experienced web
                developers who can build a highly scalable and UX design-driven
                website for your competitive advantages.
              </Animation>
            </Animation>
            <Animation className="box-media__img">
              <Image
                alt="Full stack web development service in vietnam"
                src="/images/services/web-app-development.jpg"
                width={626} height={417} layout="intrinsic" loading="eager"
              />
            </Animation>
          </div>
          <Animation>
            <h2 className="hdg-lv2">Why Choose Relia for Web Development?</h2>
          </Animation>
          <div className="app-service">
            <Animation className="app-service-col">
              <Image
                alt="Best web development agency"
                src="/images/services/web-app-development-relia.jpg"
                width={920} height={532} layout="intrinsic" loading="eager"
              />
            </Animation>
            <div className="app-service-col">
              <Animation>
                <p>
                  At the core of every website development project is the
                  connection between us and you. Our mantra is ‘Listen, Build
                  Small, Test, Listen Again’, meaning we listen before we start
                  work, build just enough of a product where we can gather
                  valuable customer feedback, and then determine what to build
                  next before we build something your customers don't need.
                </p>
              </Animation>
              <Animation>
                <p>
                  Build no more, but not less. We are committed to frequent,
                  transparent communication every step of the way from an
                  initial scope call to reliable support and maintenance once
                  your app is launched. You will transparently know where we are
                  at each point of the project and that we are listening,
                  gathering user feedback, and building exactly what you need.
                </p>
              </Animation>
            </div>
          </div>
          <Animation>
            <p>
              We have extensive experience with businesses across domains and
              verticals. This enables us with sought-after custom Android
              application solutions in multiple sectors.
            </p>
          </Animation>

          <Animation>
            <p>
              The real-time results, exceptional prominence on personalized user
              experience, and the expertise of our mobile app developers at hand
              help us understand the importance of mobile apps and Relia
              Software promises to deliver the most responsive, data-driven, and
              well-designed mobile app development services in the industry.
            </p>
          </Animation>

          <Animation>
            <p>
              We take pride in our team of skilled Vietnam mobile app developers
              who can craft intelligent apps with great emphasis on the
              importance of simplified features for enterprises and startups. If
              you are seeking a scalable, robust and secure mobile app, we are
              the company you are looking for. Our aptitude lies in developing
              cross-platform and native mobile apps aiming at 100% customer
              satisfaction.
            </p>
          </Animation>
          <Animation>
            <p>
              <strong>
                Relia Software visions to bring forth a fully functioning and
                polished app that caters to clients and stakeholders alike. We
                can guide you in enabling your users with specific needs that
                will, in turn, boost your growth and revenues with the offered
                end products.
              </strong>
            </p>
          </Animation>

          <h2 className="hdg-lv2">Hire Best Web Developers</h2>
          <div className="app-service">
            <div className="app-service-col">
              <Animation>
                <p>
                  Stretching our excellence, our offshore team is set up across
                  the globe and supports our clients dedicatedly. We provide
                  complete flexibility on team size, working process and the
                  extended team or building from scratch.
                </p>
              </Animation>

              <Animation>
                <p>
                  Being the pioneers in mobile app development, we are ready to
                  create engaging and vibrant mobile apps that will drive
                  business for your brand. Our track record speaks for itself
                  and demonstrates how our team delivers excellence each time.
                </p>
              </Animation>

              <Animation>
                <p>
                  Relia is proud to be recognized by Clutch as a top mobile app
                  developers in Vietnam. After creating a strong profile for
                  ourselves on Clutch, we are honored to receive solely
                  five-star reviews.
                </p>
              </Animation>

              <Animation>
                <p>
                  Our customers reward us for the excellent delivery model,
                  creativity, scalability and modularity that we cater, along
                  with our services.
                </p>
              </Animation>

              <Animation>
                <p>
                  Relia is continuously working towards strengthening and
                  extending partnerships and fostering futuristic technologies
                  for the clients. Our tech solutions create a meaningful
                  differentiation with our customers’ recognition.
                </p>
              </Animation>
            </div>
            <Animation className="app-service-col">
              <Image
                alt="Web developers in vietnam"
                src="/images/services/web-developers-in-vietnam.jpg"
                width={994} height={792} layout="intrinsic" loading="eager"
              />
            </Animation>
          </div>
        </div>
        <div className="industries">
          <div className="container">
            <Animation>
              <h2 className="hdg-lv2" style={{ marginTop: 0 }}>
                Why Customers Choose our Web Development Company? Web
                Development Services
              </h2>
            </Animation>
            <div className="industries__list">
              <div className="industries__list__col">
                <Animation className="item">
                  <div className="item__icon">
                    <Image
                      alt="profits"
                      style={{ width: "93px" }}
                      src="/images/services/profits.png"
                      width={93} height={86} layout="intrinsic" loading="eager"
                    />
                  </div>
                  <h4>
                    <Link href="/industries/fintech-app-development/">
                      Fintech Web Development
                    </Link>
                  </h4>
                  <p>
                    For a top notch banking and seamless finance tracking, we
                    have been building mobile apps that provide a vast
                    experience to the end users. Our developers are well
                    acquainted with the Fintech mobile app development trends.
                  </p>
                </Animation>
                <Animation className="item">
                  <div className="item__icon">
                    <Image
                      alt="travel"
                      style={{ width: "77px" }}
                      src="/images/services/travel.png"
                      width={77} height={100} layout="intrinsic" loading="eager"
                    />
                  </div>
                  <h4>
                    <Link href="/industries/travel-app-development">
                      Travel Web Development
                    </Link>
                  </h4>
                  <p>
                    Focusing on the importance of visuals and their quality, a
                    beautifully crafted travel mobile app development is our
                    promise that will power your brand’s message. A vivid
                    theming and styling can outline the travel mobile app by our
                    team at Relia.
                  </p>
                </Animation>
              </div>
              <div className="industries__list__col">
                <Animation className="item">
                  <div className="item__icon">
                    <Image
                      alt="stethoscope"
                      style={{ width: "78px" }}
                      src="/images/services/stethoscope.png"
                      width={78} height={87} layout="intrinsic" loading="eager"
                    />
                  </div>
                  <h4>
                    <Link href="/industries/healthcare-app-development">
                      Health and Fitness Web Development
                    </Link>
                  </h4>
                  <p>
                    Relia Software excels in creating bespoke solutions for
                    health and fitness startups & enterprises by offering robust
                    healthcare mobile app development. Keeping in view the
                    increasing fitness awareness around, our fitness mobile apps
                    are designed to cater to your contemporary needs.
                  </p>
                </Animation>
                <Animation className="item">
                  <div className="item__icon">
                    <Image
                      alt="reward"
                      style={{ width: "93px" }}
                      src="/images/services/reward.png"
                      width={93} height={94} layout="intrinsic" loading="eager"
                    />
                  </div>
                  <h4>
                    <Link href="/industries/loyalty-rewards-app-development">
                      Loyalty Web Development
                    </Link>
                  </h4>
                  <p>
                    We understand the intricate detailing that goes in the
                    loyalty app development and our team delivers an
                    aesthetically proficient mobile app that can give you an
                    edge over your competitors.
                  </p>
                </Animation>
              </div>
              <div className="industries__list__col">
                <Animation className="item">
                  <div className="item__icon">
                    <Image
                      alt="mortarboard"
                      style={{ width: "89px" }}
                      src="/images/services/mortarboard.png"
                      width={89} height={90} layout="intrinsic" loading="eager"
                    />
                  </div>
                  <h4>
                    <Link href="/industries/education-app-development">
                      Education & eLearning Web Development
                    </Link>
                  </h4>
                  <p>
                    The products have received positive reviews in their
                    respective app stores, a result of Relia Software’s smart
                    engineering and appreciation for the minute details.
                  </p>
                </Animation>
                <Animation className="item">
                  <div className="item__icon">
                    <Image
                      alt="online shop"
                      style={{ width: "84px" }}
                      src="/images/services/online-shop.png"
                      width={84} height={83} layout="intrinsic" loading="eager"
                    />
                  </div>
                  <h4>
                    <Link href="/industries/ecommerce-app-development">
                      Ecommerce Web Development
                    </Link>
                  </h4>
                  <p>
                    E-Commerce is taking over the retail market of today. To
                    keep you updated, Relia offers finest of ecommerce mobile
                    app development services for your brand to elevate and
                    outshine the rest.
                  </p>
                </Animation>
              </div>
            </div>
          </div>
        </div>
        <div className="box-contact">
          <div className="container">
            <Animation>
              <h2 className="hdg-lv2">
                Let us help make your Web app <span>development</span>
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
export default WebApp
