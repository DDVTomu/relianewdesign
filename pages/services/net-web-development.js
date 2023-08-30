import React from "react"
import Link from "next/link"
import PageTitle from "@components/pageTitle"
import Layout from "@components/common/layout"
import { ListAccordion } from "@components/services"
import SEO from "@components/seo"
import Image from "next/image"
import Animation from "@components/common/Animation"
import dataFaq from "./faq"
import ogpImage from "assets/images/services/net-web-development.png"

const NetWeb = () => {
  const seo = {
    metaTitle: ".NET Development Company | Dot Net Development Services",
    metaDescription: "Relia Software - Leading Dot Net Development Company in the USA & Vietnam. Offers the best .net development services. Hire our top Dot Net Developers!",
    shareImage: ogpImage,
    pathname: "/services/net-web-development",
    article: true,
  };
  return (
    <Layout>
      <SEO seo={seo} />
      <PageTitle
        title=".NET Web Development Company"
        className="page-title--sub"
      />
      <div className="main">
        <div className="container">
          <Animation>
            <h2 className="hdg-lv2">
              <span className="text-white">.NET</span> Web Development Company
            </h2>
          </Animation>
          <div className="box-media">
            <Animation className="box-media__text">
              <p>
                Introduced in 2002, .NET is an open-source software development
                framework developed by Microsoft. Despite being challenged by
                new and upgraded software development technologies introduced in
                the early and mid-2010s, .NET is still one of the best
                frameworks. Along the way, .NET has gone through a slew of
                changes to upgrade and assist businesses in their voyage towards
                success.
              </p>

              <p>
                .Net web development framework is majorly made of FCL (Framework
                Class Library) and CLR (Common Language Runtime).{" "}
              </p>

              <p>
                While FCL facilitates database connectivity, cryptography, user
                interface, data access, web app development, and network
                communications; CLR, the application virtual machine, is
                responsible for memory management and security.
              </p>

              <p>
                Being one of the forerunners app development, .NET has been the
                crux of thousands of application among which are some of the
                leading applications dominating the world.
              </p>
              <p>
                .NET is beyond the limitations of platforms as it allows
                developers to build for mobile, desktop, and browser-centric
                applications in compliant languages such as c#, VB.NET, Visual
                COBOL, IronPython, IronRuby, etc. .NET Web Development is also
                highly secured and reliable.
              </p>
            </Animation>
            <Animation className="box-media__img">
              <Image alt="" src="/images/services/net-web-development-01.jpg" width={328} height={370} layout="intrinsic" loading="eager" />
              <p style={{ marginTop: "15px" }}>
                Relia Software is a .NET Development Services Provider and
                Company housing the best .NET developers to build
                state-of-the-art applications. The .Net Development Company has
                also worked with a good number of industries and racked a sound
                portfolio to exhibit.
              </p>

              <p>
                Startups, SMBs, and Enterprises can also hire dedicated .NET
                Developers for their .Net App Development requirements.
              </p>
            </Animation>
          </div>
        </div>
        <div className="container">
          <Animation>
            <h2 className="hdg-lv2">Why Choose .NET For Web Development?</h2>
          </Animation>
          <div className="box-text">
            <Animation className="box-text-col">
              <Image
                alt=""
                src="/images/icon/icon-check-mark.png"
                style={{ width: "52px" }}
                width={104} height={104} layout="intrinsic" loading="eager"
              />
              <h3>Stability & Scalability</h3>
              <p>
                .NET is highly adaptable. Simple changes in the code are all it
                requires to accommodate new technologies and algorithms.
              </p>
            </Animation>
            <Animation className="box-text-col">
              <Image
                alt=""
                src="/images/icon/icon-check-mark.png"
                style={{ width: "52px" }}
                width={104} height={104} layout="intrinsic" loading="eager"
              />
              <h3>Quick Development</h3>
              <p>
                Since .NET is Object Oriented, it eliminates unnecessary coding
                and enables developers a faster development environment while
                retaining the quality high.
              </p>
            </Animation>
            <Animation className="box-text-col">
              <Image
                alt=""
                src="/images/icon/icon-check-mark.png"
                style={{ width: "52px" }}
                width={104} height={104} layout="intrinsic" loading="eager"
              />
              <h3>Performance</h3>
              <p>
                .NET is faster than any other technology and its applications
                are highly engaging to the viewers. All it takes is a few
                servers to serve a large number of viewers.
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
              <h3>MVC Architecture</h3>
              <p>
                Model-View-Controller architecture of .NET app development
                framework simplifies development as the model doesn’t depend on
                the view for changes in data.
              </p>
            </Animation>
            <Animation className="box-text-col">
              <Image
                alt=""
                src="/images/icon/icon-check-mark.png"
                style={{ width: "52px" }}
                width={104} height={104} layout="intrinsic" loading="eager"
              />
              <h3>Across Platforms</h3>
              <p>
                .NET is not limited to web or mobile or desktop-based
                application development. Developers can use .NET to develop apps
                on all three platforms.
              </p>
            </Animation>
            <Animation className="box-text-col">
              <Image
                alt=""
                src="/images/icon/icon-check-mark.png"
                style={{ width: "52px" }}
                width={104} height={104} layout="intrinsic" loading="eager"
              />
              <h3>Security</h3>
              <p>
                ASP.NET is renowned for its security layers in web apps. It
                makes sure to keep the system safe from viruses and malware.
              </p>
            </Animation>
          </div>
        </div>

        <div className="box-gray">
          <div className="container">
            <Animation className="box-heading">
              <h2 className="hdg-lv2">
                Reasons To <span>Hire Relia</span> Software’s .NET Developers
              </h2>
            </Animation>
            <div className="box-reasons" style={{ marginBottom: 0 }}>
              <Animation className="box-reasons__col">
                <ul className="list-arrow">
                  <li>
                    <h3>Turnkey Solutions</h3>
                    <p>
                      We understand the need for .NET development to be
                      intuitive and scalable to assist the businesses in the
                      long run. We also make them easy to be integrated to fit
                      into the structure as soon as possible.
                    </p>
                  </li>
                  <li>
                    <h3>Full Cycle Development Process</h3>
                    <p>
                      We in Relia Software travel with you through every process
                      from designing, development, testing, deployment,
                      integration, and all the way to maintenance to give you
                      flawless business solutions that will boost your business.
                    </p>
                  </li>
                  <li>
                    <h3>Flexible Engagement Models</h3>
                    <p>
                      As a .NET Development Company, we have chosen a
                      client-centric development model to provide businesses and
                      enterprises with the best .NET development services for
                      the respective budget.
                    </p>
                  </li>
                  <li>
                    <h3>Support & Maintenance</h3>
                    <p>
                      Relia Software sees to end-to-end development of your
                      business solutions and beyond. Our .NET support and
                      maintenance services ensure your application to perform
                      flawlessly for a long time.
                    </p>
                  </li>
                </ul>
              </Animation>
              <Animation className="box-reasons__col">
                <Image
                  alt=""
                  src="/images/services/net-web-development.png"
                  style={{ maxWidth: "530px", margin: "auto" }}
                  width={503} height={465} layout="intrinsic" loading="eager"
                />
                <ul className="list-arrow">
                  <li>
                    <h3>Good Industrial Experience</h3>
                    <p>
                      Our .NET Developers have hands-on experience working with
                      various industries tailoring .NET Development Services
                      according to the requirement of a myriad target audience.
                    </p>
                  </li>
                  <li>
                    <h3>Skilled .NET Developers</h3>
                    <p>
                      Relia Software houses the best and highly skilled .NET
                      Developers for you to hire. Our .NET Developers represent
                      the epitome of .NET Development Services that result in
                      quality applications.
                    </p>
                  </li>
                </ul>
              </Animation>
            </div>
          </div>
        </div>

        <div className="container">
          <Animation className="box-heading">
            <h2 className="hdg-lv2">Our .NET Development Services</h2>
            <p className="box-heading-sub">
              Powered by 14+ years of .NET development experience, Relia creates
              modern .NET business applications for global clients
            </p>
          </Animation>
          <div className="box-reasons">
            <Animation className="box-reasons__col">
              <Image alt="" src="/images/services/net-web-development-02.jpg" width={431} height={347} layout="intrinsic" loading="eager" />
            </Animation>
            <Animation className="box-reasons__col">
              <ul className="list-arrow">
                <li>
                  <h3>.NET Web App and Product Development</h3>
                  <p>
                    Inheriting the superior qualities of .NET, Relia Software
                    has built unique, intuitive and high-performance web apps
                    and products to equip businesses with a competitive edge.
                  </p>
                </li>
                <li>
                  <h3>.NET Web App and Product Development</h3>
                  <p>
                    Inheriting the superior qualities of .NET, Relia Software
                    has built unique, intuitive and high-performance web apps
                    and products to equip businesses with a competitive edge.
                  </p>
                </li>
              </ul>
            </Animation>
          </div>
          <ListAccordion data={dataFaq.netweb} />
        </div>
        <div className="box-contact">
          <div className="container">
            <Animation>
              <h2 className="hdg-lv2">
                Let us help make your <span>.Net development</span>
                <br className="visible-pc" /> project a success.
              </h2>
            </Animation>
            <Animation>
              <div className="box-contact__img" style={{ maxWidth: "252px" }}>
                <Image
                  alt=""
                  src="/images/services/net-web-contact.jpg"
                  style={{ maxWidth: "252px" }}
                  width={234} height={223} layout="intrinsic" loading="eager"
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
export default NetWeb
