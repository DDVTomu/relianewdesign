import React from "react"
import { Link } from "next/link"
import PageTitle from "@components/pageTitle"
import Layout from "@components/common/layout"
import SEO from "@components/seo"
import Image from "next/image"
import Animation from "@components/common/Animation"
import ogpImage from "assets/images/industries/fintech-app-development.jpg"
const IndustriesPage = () => {
  const seo = {
    metaTitle: "Fintech App Development Company | USA & Vietnam",
    metaDescription: "Relia Software is the best fintech app development company USA & Vietnam. We have experienced fintech app developers who develop apps for Android & iOS.",
    keywords: "fintech, Industries Expertise, digital products",
    shareImage: ogpImage,
    article: true,
  };
  return (
    <Layout>
      <SEO seo={seo} />
      <PageTitle title="FinTech App Development Company" />
      <div className="main">
        <div className="container">
          <Image
            src="/images/industries/fintech-app-development.jpg"
            width={960}
            height={640}
            layout="intrinsic"
            loading="eager"
            priority={true}
            alt="Fintech app development company in Vietnam"
          />
          <div className="industries-choose">
            <Animation className="heading">
              <h2 className="hdg-lv2">
                State Auto Fintech Companies choose to{" "}
                <span className="text-white">work</span> with Relia
              </h2>
            </Animation>
            <Animation className="industries-choose__content">
              <p>
                Relia takes the privacy and security of individuals and their
                personal information very seriously. Accordingly, we take
                every reasonable measure and precaution possible to help our
                clients protect and secure the data that they process.
              </p>
              <h6>
                Below are a few examples of Fintech related technologies we
                work with:
              </h6>
              <Animation className="industries-choose__list">
                <ul className="list-plus">
                  <li>Software as a Service (SaaS)</li>
                  <li>Business Intelligence (BI)</li>
                  <li>Augmented Reality (AR)</li>
                  <li>Virtual Reality (VR)</li>
                  <li>Mixed Reality</li>
                  <li>Machine Learning</li>
                </ul>
                <ul className="list-plus">
                  <li>Artificial Intelligence (AI)</li>
                  <li>Robotics</li>
                  <li>Voice Assistants</li>
                  <li>Face Recognition</li>
                  <li>Holography</li>
                  <li>Quantum Programming</li>
                </ul>
              </Animation>
            </Animation>
          </div>
          <div className="box-media">
            <Animation className="box-media__img">
              <Image
                src="/images/industries/fintech-app-developers-for-mobile.jpg"
                width={998}
                height={698}
                layout="intrinsic"
                loading="eager"
                alt="Fintech app developers for mobile"
              />
            </Animation>
            <Animation className="box-media__text">
              <h2 className="hdg-lv2">
                <span>Our robots’</span> AI skills help you keep ahead of the
                compliance and regulation game
              </h2>
              <p>
                Curious about Fintech and AI in banking? Here’s how
                intelligent automation banking solutions work. Watch a quick
                demo showing how Relia robots automate Know Your Customer
                (KYC) using Machine Learning and Natural Language
              </p>
            </Animation>
          </div>
        </div>
        <Animation className="back-office">
          <div className="container">
            <h2 className="hdg-lv2">
              Reach Your Customers’ UX Expectations With
              <br className="visible-pc" /> Flawless <span>Fintech</span>{" "}
              Mobile Apps
            </h2>
            <div className="back-office__row">
              <Animation className="back-office__col">
                <Image
                  src="/images/icon/icon-screen.svg"
                  width={71}
                  height={66}
                  layout="intrinsic"
                  loading="eager"
                  alt=""
                />
                <h6>Simple and Relevant</h6>
                <p>
                  Time and time again, people have favored Fintech mobile and
                  web applications with simple, unique designs. We make subtle
                  changes to simple designs to give your users a pleasant
                  experience.
                </p>
              </Animation>
              <Animation className="back-office__col">
                <Image
                  src="/images/icon/icon-tap.svg"
                  width={86}
                  height={66}
                  layout="intrinsic"
                  loading="eager"
                  alt=""
                />
                <h6>Feature Accessibility</h6>
                <p>
                  No matter how complex and multi-tier a Fintech app’s
                  functionalities are, everything is for naught if customers
                  cannot access them easily. We build customer-centric designs
                  to unravel it easy for your customers.
                </p>
              </Animation>
              <Animation className="back-office__col">
                <Image
                  src="/images/icon/icon-ai.svg"
                  width={86}
                  height={82}
                  layout="intrinsic"
                  loading="eager"
                  alt=""
                />
                <h6>UX for Brand Voice</h6>
                <p>
                  We optimize the designs to ensure your Fintech mobile and
                  web applications a unique voice that distinguishes itself
                  from other Fintech solutions and instills your brand
                  identity among your users.
                </p>
              </Animation>
            </div>
          </div>
        </Animation>
        <div className="container">
          <div className="box-heavy">
            <Animation className="box-heavy__head">
              <h3>
                89% of people prefer using mobile Fintech solutions to
                traditional banking methods.
              </h3>
              <p>
                Source: <strong>Celent 2018</strong>
              </p>
              <Image
                src="/images/industries/banking-application-development-company.jpg"
                width={1051}
                height={669}
                layout="intrinsic"
                loading="eager"
                alt="Banking Application Development company"
              />
            </Animation>
            <div className="box-heavy__content">
              <Animation className="box-heavy__inner">
                <h2 className="hdg-lv2">
                  Stand Out With an Outstanding{" "}
                  <span>Fintech Mobile App</span>
                </h2>
                <p>
                  A recent survey has revealed that mobile wallet adoption has
                  increased by 56 percent and mobile transactions by 53
                  percent. Competing with the adoption speed, voice-based
                  transactions are also on the rise.
                </p>
                <p>
                  With us, simple yet unique designs, powerful and structured
                  programming, and reinforced security go hand-in-hand with
                  the latest technology upgrades and trending market
                  customizations.
                </p>
              </Animation>
            </div>
          </div>
          <div className="box-media">
            <Animation className="box-media__text">
              <h2 className="hdg-lv2">
                Relia can <span className="text-white">help</span> your bank
                overcome three of its biggest automation challenges
              </h2>
              <p>
                Curious about RPA and AI in banking? Here’s how intelligent
                automation banking solutions work. Watch a quick demo showing
                how UiPath robots automate Know Your Customer (KYC) using
                Machine Learning and Natural Language
              </p>
              <ul className="list-plus">
                <li>
                  Automate unstructured data from emails, PDFs, documents and
                  forms.
                </li>
                <li>
                  Put automation in the hands of your bank’s advisers, in
                  customer-facing functions.
                </li>
                <li>
                  Automate processes no matter the scenario: attended,
                  unattended or hybrid, with a human in the loop.
                </li>
              </ul>
            </Animation>
            <Animation className="box-media__img">
              <Image
                src="/images/industries/fintech-app-development-company.jpg"
                width={544}
                height={699}
                layout="intrinsic"
                loading="eager"
                alt="Fintech app development company"
              />
            </Animation>
          </div>
          <h2 className="hdg-lv2">
            Transform your compliance operations,
            <br /> and then <span>your business</span>
          </h2>
          <div className="list-operations">
            <Animation className="list-operations__col">
              <Image
                src="/images/icon/icon-shield.svg"
                width={70}
                height={81}
                layout="intrinsic"
                loading="eager"
                alt=""
              />
              <h5>Capitalize on your RPA investments with new use cases</h5>
              <p>
                Break free from previous limitations and  invigorate your
                automation  initiative
              </p>
              <ul className="list-plus">
                <li>Process work end to end, faster and easier</li>
                <li>
                  Deliver new compliance use cases with attended and hybrid
                  automation
                </li>
                <li>
                  Realize the full benefits of a more complete and expansive
                  RPA opportunity
                </li>
              </ul>
            </Animation>
            <Animation className="list-operations__col">
              <Image
                src="/images/icon/icon-loss.svg"
                width={55}
                height={85}
                layout="intrinsic"
                loading="eager"
                alt=""
              />
              <h5>Get control of your bank's compliance costs</h5>
              <p>
                Use intelligent technology instead of manual effort to achieve
                compliance productivity
              </p>
              <ul className="list-plus">
                <li>Rapidly reduce compliance backlogs</li>
                <li>
                  Eliminate wasted effort by making your processes more
                  intelligent with pragmatic Artificial Intelligence (AI)
                </li>
                <li>
                  Evolve your workforce strategy to meet today’s banking
                  demands
                </li>
              </ul>
            </Animation>
            <Animation className="list-operations__col">
              <Image
                src="/images/icon/icon-update.svg"
                width={72}
                height={72}
                layout="intrinsic"
                loading="eager"
                alt=""
              />
              <h5>Improve your bank's risk profile​</h5>
              <p>
                Reduce regulatory risk and fines by leveraging a digital
                workforce
              </p>
              <ul className="list-plus">
                <li>Reduce manual errors down to near-zero​</li>
                <li>
                  Refocus your team’s efforts on investigation and analysis
                </li>
                <li>
                  Update automations as quickly as regulations change to keep
                  pace with requirements
                </li>
              </ul>
            </Animation>
          </div>
          <div className="box-media">
            <Animation className="box-media__img">
              <Image
                src="/images/industries/img-note.png"
                width={535}
                height={355}
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
                Our team of experts leverage their profound Fintech
                Development expertise to create custom online stores,
                integrations and applications.
              </p>
              <p>
                We're always here to help you on your Relia journey, in any
                way we can.
              </p>
              <a className="btn" href="/contact">
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
