import React from "react"
import Link from "next/link"
import PageTitle from "@components/pageTitle"
import Layout from "@components/common/layout"
import { ClientSection } from "@components/services"
import SEO from "@components/seo"
import Image from "next/image"
import Animation from "@components/common/Animation"
import ogpImage from "assets/images/img-design-thinking.png"

const ServicesPage = () => {
  const seo = {
    metaTitle: "Perfect Service Suite",
    metaDescription: "We design & develop user-centric products using best tech stack to ensure faster delivery with an unmatched cost advantage. Services: UX & UI, web & mobile app development.",
    shareImage: ogpImage,
    article: true,
  };
  return (
    <Layout>
      <SEO seo={seo} />
      <PageTitle
        title={["Perfect Service Suite"]}
        subtitle="Relia software with clients to design and develop custom Web apps, platforms and experiences."
      />
      <div className="main">
        <div className="container">
          <Animation>
            <h2 className="hdg-lv3">
              It's important for us to adhere to these three
              <br className="visible-pc" />
              values, as they embody our agency and define the
              <br className="visible-pc" />
              way that we work.
            </h2>
          </Animation>
        </div>
        <div className="service-box">
          <Animation className="service-box__img">
            <Image
              src="/images/services/img-design-thinking.png"
              width={801}
              height={548}
              layout="intrinsic"
              loading="eager"
              alt="Design Thinking"
              priority={true}
            />
          </Animation>
          <Animation className="service-box__text">
            <h2 className="hdg-lv2">
              <span>Design</span> Thinking
            </h2>
            <p>Our expertise</p>
            <p>
              Designing User Interfaces and User Experiences is our historical
              area of expertise, and remains the lifeblood of our business to
              this today. When it comes to web design, the two concepts are
              inseparable. User Experience (UX) covers usability, functionality,
              and navigation. Our rigorous focus in this area involves
              prototyping and testing of all possible solutions to a given
              problem. Then comes artistic creation (UI), which is directed by
              Barthelemy. This process seeks not only to bring a visual identity
              to the product, but also to serve the apps underlying purpose
              while ensuring the best possible experience for the user.
            </p>
            <ul className="list-plus">
              <li>AI & ML</li>
              <li>
                <a href="/services/blockchain-app-development"
                >
                  Blockchain
                </a>
              </li>
              <li>
                <a href="/services/odc-bot"
                >
                  ChatBot Development Company
                </a>
              </li>
            </ul>
          </Animation>
        </div>
        <div className="service-box service-box--direct">
          <Animation className="service-box__text">
            <h2 className="hdg-lv2">
              <span>App</span> Development
            </h2>
            <p>Our expertise</p>
            <p>
              We build scalable, responsive applications for today and tomorrow!
              Our experts take care of both front-end and back-end development.
              Programming builds are based on the module, libraries, and tools,
              allowing Relia’s development team or any programmer to easily
              share libraries and implement complex functionality and features
              in a fast and efficient manner.
            </p>

            <p>
              Program clean code and write APIs which create easily maintainable
              code and version management. Create the best environment for
              multiple programmers to work on the same project. Deliver better
              readability and understanding of the source code. Ensure that
              other developers can understand and familiarise with the code in a
              short time. TDD and BDD approach. Working on latest cutting edge
              technologies.
            </p>
            <ul className="list-plus">
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>Enterprise App Development</li>
            </ul>
          </Animation>
          <Animation className="service-box__img">
            <Image
              src="/images/services/img-digital-transformation.png"
              width={925}
              height={522}
              layout="intrinsic"
              loading="eager"
              alt="App Development"
            />
          </Animation>
        </div>
        <div className="service-box">
          <Animation className="service-box__img">
            <Image
              src="/images/services/img-digital-solutions.png"
              width={801}
              height={655}
              layout="intrinsic"
              loading="eager"
              alt="Design Transformation"
            />
          </Animation>
          <Animation className="service-box__text">
            <h2 className="hdg-lv2">
              Digital <span>Transformation</span>
            </h2>
            <p>Our expertise</p>
            <p>
              Designing User Interfaces and User Experiences is our historical
              area of expertise, and remains the lifeblood of our business to
              this today. When it comes to web design, the two concepts are
              inseparable. User Experience (UX) covers usability, functionality,
              and navigation. Our rigorous focus in this area involves
              prototyping and testing of all possible solutions to a given
              problem. Then comes artistic creation (UI), which is directed by
              Barthelemy. This process seeks not only to bring a visual identity
              to the product, but also to serve the apps underlying purpose
              while ensuring the best possible experience for the user.
            </p>
            <ul className="list-plus">
              <li>AI & ML Solutions</li>
              <li>Blockchain Solutions</li>
              <li>Chatbots Development</li>
            </ul>
          </Animation>
        </div>
        <div className="service-box service-box--direct">
          <Animation className="service-box__text">
            <h2 className="hdg-lv2">
              <span>Offshore</span> Team
            </h2>
            <p>Our expertise</p>
            <p>
              With our build operate and build operate transfer models (BOT), we
              have been able to set up offshore development centres for
              companies like WhiteCoat Global, Independence Plus, Popdeem,
              Runcaster etc. We are able to quickly set up the offshore extended
              teams for our clients in Ho Chi Minh City, Vietnam.
            </p>
            <ul className="list-plus">
              <li>Suitable for medium to long term engagement</li>
              <li>Team size as low as 1 developer</li>
              <li>Fully operational within 1-2 months</li>
              <li>
                We can build, operate and transfer, if required at the end of
                contractual period
              </li>
              <li>
                Maintain confidentiality of daily operations and strictly follow
                client processes
              </li>
              <li>
                Complete flexibility on team size, working process,... etc
              </li>
              <li>Extended team or building from the scratch</li>
            </ul>
          </Animation>
          <Animation className="service-box__img">
            <Image
              src="/images/services/img-digital-transformation.png"
              width={800}
              height={451}
              layout="intrinsic"
              loading="eager"
              alt="Design Thinking"
            />
          </Animation>
        </div>
        <div className="project-idea">
          <div className="container">
            <Animation>
              <h2 className="hdg-lv2">
                How We Bring Your{" "}
                <span className="text-white">Project Idea</span>
                <br />
                to Life
              </h2>
            </Animation>
            <Animation style={{ textAlign: "center" }}>
              <Image
                src="/images/services/img-project-idea.png"
                width={1000}
                height={540}
                layout="intrinsic"
                loading="eager"
                alt="Design Thinking"
              />
            </Animation>
            <div className="list-idea">
              <Animation className="list-idea__col">
                <Image
                  src="/images/icon/icon-idea.svg"
                  width={66}
                  height={67}
                  layout="intrinsic"
                  loading="eager"
                  alt="Idea"
                />
                <h4>Ideation</h4>
                <ul className="list-plus">
                  <li>Discovery</li>
                  <li>Wireframes and Epics</li>
                </ul>
              </Animation>
              <Animation className="list-idea__col">
                <Image
                  src="/images/icon/icon-strategy.svg"
                  width={62}
                  height={52}
                  layout="intrinsic"
                  loading="eager"
                  alt="Product Strategy"
                />
                <h4>Product Strategy</h4>
                <ul className="list-plus">
                  <li>Discovery</li>
                  <li>Wireframes and Epics</li>
                </ul>
              </Animation>
              <Animation className="list-idea__col">
                <Image
                  src="/images/icon/icon-planning.svg"
                  width={52}
                  height={52}
                  layout="intrinsic"
                  loading="eager"
                  alt="Product Strategy"
                />
                <h4>Product Iterations</h4>
                <ul className="list-plus">
                  <li>Discovery</li>
                  <li>Wireframes and Epics</li>
                </ul>
              </Animation>
              <Animation className="list-idea__col">
                <Image
                  src="/images/icon/icon-maintenance.svg"
                  width={60}
                  height={60}
                  layout="intrinsic"
                  loading="eager"
                  alt="Maintenance"
                />
                <h4>Maintenance</h4>
                <ul className="list-plus">
                  <li>Discovery</li>
                  <li>Wireframes and Epics</li>
                </ul>
              </Animation>
            </div>
          </div>
        </div>
        <div className="our-developers">
          <Animation className="our-developers__text">
            <h2 className="hdg-lv2">
              Our <span>Developers</span>
            </h2>
            <p>
              Our team of experts understands the practices of today’s user,
              which drives them to develop apps that blend creativity,
              transparency, speed of delivery, and cost containment.
            </p>
            <p>
              We cover all the bits and pieces needed to develop a top-notch,
              innovative product, from strategy, to native apps, to the backend
              services. We code to very high standards and test continuously,
              which creates easy to maintain, high quality products.
            </p>
            <a href="/contact" className="btn">CONTACT US</a>
          </Animation>
          <Animation className="our-developers__img">
            <Image
              src="/images/services/img-our-deverlopers.png"
              width={960}
              height={771}
              layout="intrinsic"
              loading="eager"
              alt="Design Thinking"
            />
          </Animation>
        </div>
        <ClientSection />
      </div>
    </Layout>
  )
}

export default ServicesPage
