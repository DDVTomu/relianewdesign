import React from "react"
import Link from "next/link"
import PageTitle from "@components/pageTitle"
import Layout from "@components/common/layout"
import { ListMobiService } from "@components/services"
import SEO from "@components/seo"
import Image from "next/image"
import Animation from "@components/common/Animation"
import data from "./data"
import ogpImage from "assets/images/services/mobile-app-development.jpg"

const MobileApp = () => {
  const seo = {
    metaTitle: "Mobile App Development Company | Mobile App Developers | iOS, Android",
    metaDescription: "Looking for Top Mobile App Development Company to build your native android, ios or hybrid mobile apps? We have the best mobile app developers to get your idea to a product.",
    shareImage: ogpImage,
    article: true,
  };
  return (
    <Layout>
      <SEO seo={seo} />
      <PageTitle title="Mobile App Development" className="page-title--sub" />
      <div className="main">
        <div className="container">
          <Animation>
            <h2 className="hdg-lv2">
              <span className="text-white">Why</span> Your Business Needs a
              Mobile App?
            </h2>
          </Animation>
          <div className="box-media">
            <Animation className="box-media__img">
              <Image alt="Mobile App Developers in Vietnam" src="/images/services/mobile-app-development.jpg" width={960} height={640} layout="intrinsic" loading="eager" />
            </Animation>
            <Animation className="box-media__text">
              <p>
                Independent researchers claim that over five billion mobile
                users in the world make the global internet penetration of
                mobile app usage stand at 57%, while a total of 194 billion apps
                were downloaded in 2018 alone. Needless to say, these figures
                prove the speed at which people are becoming app-friendly and
                seeking a revolution in the mobile app industry. More than ever,
                businesses want to make the most of this uprise in order to
                generate new or increase existing business.
              </p>

              <p>
                As the mobile app development industry is growing exponentially
                and tirelessly, there are exceedingly numerous ways in which
                users can be engaged via the apps. Today, from commercial brands
                to trading industries, every company needs mobile apps that can
                market their products and services with operational concepts.
              </p>
            </Animation>
          </div>
        </div>
        <div className="box-gray">
          <div className="container">
            <div className="box-text">
              <Animation className="box-text-col">
                <h3>
                  <Image alt="Mobi Phone" src="/images/icon/icon-mobi.svg" width={36} height={61} layout="intrinsic" loading="eager" /> Mobile
                  Apps Usage
                </h3>
                <p>
                  On average, a person spends about 162 minutes on the mobile
                  phone. With amazing marketing tactics in place, you can
                  utilize this time frame to get your customers to download your
                  app easily. 85% of the traffic comes from mobile apps. The
                  presence of a mobile app for your business increases the brand
                  presence and manifolds your chances of getting recognized.
                </p>
              </Animation>
              <Animation className="box-text-col">
                <h3>
                  <Image alt="Mobi Phone" src="/images/icon/icon-desktop.svg" width={71} height={66} layout="intrinsic" loading="eager" /> Future
                  with Mobile Apps
                </h3>
                <p>
                  With 58% year on year mobile usage increasing, mobile apps
                  have become a direct marketing channel for your business. You
                  do not have to rely on secondary means of promotions. With
                  features like push notifications, you can remind your
                  customers about various offers and deals directly.
                </p>
              </Animation>
            </div>
          </div>
        </div>
        <div className="container">
          <Animation>
            <h2 className="hdg-lv2">
              How We <span>Build</span> User-Friendly Mobile Apps?
            </h2>
          </Animation>
          <Animation className="container--small">
            <p>
              At Relia Software, we have experienced mobile app developers who
              can build a highly scalable and UX design-driven mobile app that
              is incremental and can help you gain competitive advantages over
              others.
            </p>

            <p>
              The real-time results, exceptional prominence on personalized user
              experience, and the expertise of our mobile app developers at hand
              help us understand the importance of mobile apps and Relia
              Software promises to deliver the most responsive, data-driven, and
              well-designed mobile app development services in the industry.
            </p>

            <p>
              We take pride in our team of skilled Vietnam mobile app developers
              who can craft intelligent apps with great emphasis on the
              importance of simplified features for enterprises and startups. If
              you are seeking a scalable, robust and secure mobile app, we are
              the company you are looking for. Our aptitude lies in developing
              cross-platform and native mobile apps aiming at 100% customer
              satisfaction.
            </p>

            <p>
              Relia Software visions to bring forth a fully functioning and
              polished app that caters to clients and stakeholders alike. We can
              guide you in enabling your users with specific needs that will, in
              turn, boost your growth and revenues with the offered end
              products.
            </p>
          </Animation>
          <div className="list-plan">
            <Animation className="item">
              <div className="item__thumb">
                <Image alt="Process" src="/images/services/process.jpg" width={1236} height={830} layout="intrinsic" loading="eager" />
              </div>
              <div className="item__content">
                <h2>Process</h2>
                <p>
                  With a competitive marketplace to combat, Relia believes in
                  delivering the product by minimizing the time-to-market. The
                  blueprint set by the professionals and experts at Relia helps
                  to launch the product in the market faster and improves the
                  promotion of the app.
                </p>
              </div>
            </Animation>
            <Animation className="item">
              <div className="item__thumb">
                <Image alt="Delivery" src="/images/services/platform-plan-02.jpg" width={618} height={415} layout="intrinsic" loading="eager" />
              </div>
              <div className="item__content">
                <h2>Delivery</h2>
                <p>
                  A clear direction and strategy are the pillars of a great app.
                  We understand the importance of customer engagement as a vital
                  aspect for every business and work towards making that
                  possible for you.
                  <br />
                  At Relia, we highlight the core benefits of your business in
                  the app and powers your business goals.
                </p>
              </div>
            </Animation>
            <Animation className="item">
              <div className="item__thumb">
                <Image alt="Support" src="/images/services/support.jpg" width={1236} height={830} layout="intrinsic" loading="eager" />
              </div>
              <div className="item__content">
                <h2>Support</h2>
                <p>
                  We at Relia promise a suite of administrative services that
                  assist you in maintaining your mobile applications.
                </p>

                <p>
                  We understand the strenuous process of application maintenance
                  and our services are tailor-made for today's nimble
                  enterprise. For tasks like bug fixing, server issues, and
                  system failures, our team guarantees full support.
                  Additionally, we take a step ahead and support you with new
                  functionalities and version updates according to your mobile
                  app’s requirements.
                </p>

                <p>
                  With Relia you are always assured of your application’s
                  success.
                </p>
              </div>
            </Animation>
          </div>
        </div>
        <div className="box-gray">
          <div className="container">
            <div className="app-service">
              <Animation className="app-service-col">
                <h2 className="hdg-lv2">
                  Mobile App Development <span>Services</span>
                </h2>
              </Animation>
              <Animation className="app-service-col">
                <p>
                  Our customers reward us for the excellent delivery model,
                  creativity, scalability and modularity that we cater, along
                  with our services.
                </p>
                <p>
                  Relia is continuously working towards strengthening and
                  extending partnerships and fostering futuristic technologies
                  for the clients. Our tech solutions create a meaningful
                  differentiation with our customers’ recognition.
                </p>
                <p>
                  We have extensive experience with businesses across domains
                  and verticals. This enables us with sought-after custom
                  Android application solutions in multiple sectors.
                </p>
              </Animation>
            </div>
            <ListMobiService data={data.mobileapp} />
          </div>
        </div>
        <div className="box-contact">
          <div className="container">
            <Animation>
              <h2 className="hdg-lv2">
                Let us help make your Mobile app <span>development</span>
                <br className="visible-pc" /> project a success.
              </h2>
            </Animation>
            <Animation className="box-contact__img">
              <Image
                alt="Mobile app development Company"
                src="/images/services/mobile-app-development-company.jpg"
                width={960} height={640} layout="intrinsic" loading="eager"
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
export default MobileApp
