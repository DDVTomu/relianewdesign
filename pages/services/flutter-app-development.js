import React from "react"
import Link from "next/link"
import PageTitle from "@components/pageTitle"
import Layout from "@components/common/layout"
import { ListAccordion, ListMobiService } from "@components/services"
import SEO from "@components/seo"
import Animation from "@components/common/Animation"
import Image from "next/image"
import dataFaq from "./faq"
import data from "./data"
import ogpImage from "assets/images/services/ui-ux-design-services.jpg"

const FlutterApp = () => {
  const seo = {
    metaTitle: "Flutter App Development Company | USA & Vietnam",
    metaDescription: "Relia Software-Top flutter app development company offers the best flutter app development services for the greatest user experience on iOS and Android app.",
    shareImage: ogpImage,
    article: true,
  };
  return (
    <Layout>
      <SEO seo={seo} />
      <PageTitle
        title="Flutter App Development"
        className="page-title--sub"
      />
      <div className="main">
        <div className="container">
          <Animation>
            <h2 className="hdg-lv2">
              Leading <span className="text-white">Flutter</span> App
              Development Company
            </h2>
          </Animation>
          <div className="box-media">
            <Animation className="box-media__img">
              <Image
                alt="Flutter app development company"
                src="/images/services/flutter-app-development.jpg"
                width={1280} height={710} layout="intrinsic" loading="eager"
              />
            </Animation>
            <Animation className="box-media__text">
              <p>
                With Tens of thousands of hours into development, Google
                launched its free and open source framework that can craft
                high-quality native interfaces in a record time of 120 FPS.
                Designed to create a reliable mobile UI, Flutter is the prime
                choice of modern-day developers.
              </p>
              <p>
                Using the C++ rendering engine, Google’s Flutter can
                streamline the development process like never before. Its
                architecture is based on reactive programming and Dart
                programming language which promises cross-platform app
                development for organizations looking for fast and
                customizable flutter development.
              </p>

              <p>
                Relia software is a flutter app development company with a
                decade of experience in the mobile app development industry.
                We provide robust and reactive Flutter App Development
                services to our clients with quick ship customizable widget
                sets and tools for the next-generation iOS and Android apps.
                Make Flutter your choice of development!
              </p>
            </Animation>
          </div>
        </div>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="box-build">
            <Animation>
              <h2 className="hdg-lv2">
                Hire Relia Software to <span>build</span> mobile apps <br />
                with flutter
              </h2>
            </Animation>
            <Animation>
              <p>
                At Relia, we build expressive and rich widget sets using the
                Flutter application development as per your requirements and
                <br />
                deliver world-class iOS and Android platforms.
                <br />
                Hire from our full spectrum of flutter app developers who
                guarantee much easier, convenient and exceptional to run
                application effortlessly on both the operating systems.
              </p>
            </Animation>
            <Animation>
              Our expertise lies in bringing an interactive single codebase
              mobile apps using the best of technology, Flutter.
            </Animation>
            <Animation className="box-build__image">
              <Image
                alt=""
                src="/images/services/mobile-app-info.png"
                style={{ maxWidth: "578px" }}
                className="img"
                width={1156} height={1160} layout="intrinsic" loading="eager"
              />
            </Animation>
          </div>
        </div>
        <div className="container">
          <Animation>
            <h2 className="hdg-lv2">
              <span>Why</span> Flutter For Mobile App Development?
            </h2>
          </Animation>
          <div className="box-reasons">
            <Animation className="box-reasons__col">
              <Image
                alt=""
                src="/images/services/mobile-mockup.png"
                style={{ maxWidth: "530px", margin: "auto" }}
                width={1058} height={1906} layout="intrinsic" loading="eager"
              />
            </Animation>
            <Animation className="box-reasons__col">
              <ul className="list-arrow">
                <li>
                  <h3>Cost-Efficient</h3>
                  <p>
                    Being open source, the software comes free of cost.
                    Additionally, the single code base methodology eliminates
                    too much supervision over the execution and working of the
                    code.
                  </p>
                </li>
                <li>
                  <h3>Ingenuous Maintenance</h3>
                  <p>
                    Flutter architecture is super easy to maintain and
                    develop. The mobile app development process with Flutter
                    offers ingrain of any programming language and deployment
                    of the application on both iOS and Android platforms.
                  </p>
                </li>
                <li>
                  <h3>Rich in widget sets</h3>
                  <p>
                    With flutter development, developers can enable
                    customization of widgets. The rich widget library in the
                    SDK facilitates quick and easy assimilation all along.
                  </p>
                </li>
                <li>
                  <h3>Cross-Platform</h3>
                  <p>
                    We humbly invite you to make use of our studies, research,
                    and expertise garnered over the span of 10 years to
                    identify the right path for your Blockchain App and
                    services development.
                  </p>
                </li>
                <li>
                  <h3>Phenomenal UI</h3>
                  <p>
                    An eye-catching and appealing UI is a top priority for
                    every mobile app development. Flutter assists this focus
                    area with intuitive designs and interfaces for your native
                    mobile applications. Our Flutter app development services
                    are a hallmark of highly responsive and fluid
                    applications.
                  </p>
                </li>
                <li>
                  <h3>Hot Reload</h3>
                  <p>
                    This feature allows for instant reflection of the changes
                    done by the developers. As the code gets demonstrated
                    immediately the application on Flutter improves the
                    performance run and reduces the complexity.
                  </p>
                </li>
                <li>
                  <h3>Accessible SDKs and Native Features</h3>
                  <p>
                    With Flutter, developers would have to build native apps
                    that come with native SDKs including Stripe, Twilio, and
                    streaming services such as WoWza and UStream. These
                    libraries make the development process simpler and better
                    via platform APIs and native codes.
                  </p>
                </li>
              </ul>
            </Animation>
          </div>
        </div>
        <div className="box-flutter">
          <div className="container">
            <Animation>
              <h2 className="hdg-lv2">
                Relia Software’s Mobile App Development <br />
                <span className="text-white">Services</span> with Flutter
              </h2>
            </Animation>
            <ListMobiService data={data.flutterapp} />
          </div>
        </div>

        <div className="container">
          <Animation>
            <h2 className="hdg-lv2">
              Why Choose Relia Software as Your <span>Custom</span> <br />
              Flutter App Development Company?
            </h2>
          </Animation>
          <div className="our-blockchain">
            <Animation className="our-blockchain__col">
              <div className="our-blockchain__icon">
                <Image
                  alt="Try our Mobile-friendly Flutter apps"
                  src="/images/icon/icon-smile.svg"
                  width={76} height={76} layout="intrinsic" loading="eager"
                />
              </div>
              <h3>Try our Mobile-friendly Flutter apps</h3>
              <p>
                With the open-source mobile app development framework we
                provide result-oriented mobile app development services for
                your business & enterprise.
              </p>
            </Animation>
            <Animation className="our-blockchain__col">
              <div className="our-blockchain__icon">
                <Image
                  alt="We provide On-Demand Flutter app development"
                  src="/images/icon/icon-briefcase.svg"
                  width={65} height={59} layout="intrinsic" loading="eager"
                />
              </div>
              <h3>We provide On-Demand Flutter app development</h3>
              <p>
                We value our modern tech-savvy clients and serve them with
                excellent development skills at our end. Thus, Relia is an
                on-demand app development company and provides expert
                developers for android and iOS platforms solution
              </p>
            </Animation>
            <Animation className="our-blockchain__col">
              <div className="our-blockchain__icon">
                <Image
                  alt="We Build Faster Flutter Apps"
                  src="/images/icon/icon-thunderbolt.svg"
                  width={55} height={78} layout="intrinsic" loading="eager"
                />
              </div>
              <h3>We Build Faster Flutter Apps</h3>
              <p>
                The cutting edge technology of Flutter enables our developers
                to build mobile apps with beautiful UIs and familiar
                experience for users and clients, alike. Making them
                convenient and accessible to produce, Relia has years of
                experience to reckon on.
              </p>
            </Animation>
          </div>
          <ListAccordion data={dataFaq.flutter} />
        </div>
        <div className="box-contact">
          <div className="container">
            <Animation>
              <h2 className="hdg-lv2">
                Let us help make your Flutter App <span>development</span>{" "}
                <br />
                project a success.
              </h2>
            </Animation>
            <Animation className="box-contact__img">
              <Image
                alt=""
                src="/images/services/flutter-app-development-contact.png"
                style={{ maxWidth: "279px", margin: "auto" }}
                width={558} height={558} layout="intrinsic" loading="eager"
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
export default FlutterApp
