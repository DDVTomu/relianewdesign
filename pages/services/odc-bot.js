import React from "react"
import Link from "next/link"
import PageTitle from "@components/pageTitle"
import Layout from "@components/common/layout"
import { ListAccordion, ListMobiService } from "@components/services"
import SEO from "@components/seo"
import Image from "next/image"
import Animation from "@components/common/Animation"
import dataFaq from "./faq"
import data from "./data"
import ogpImage from "assets/images/services/odc-bot-1.jpg"

const OdcBot = () => {
  const seo = {
    metaTitle: "BOT Services & ODC Model",
    metaDescription: "The Build-Operate-Transfer model (BOT model) lets you stay competitive and successful in the market. Your ODC team should be reliable to work with.",
    shareImage: ogpImage,
    article: true,
  };
  return (
    <Layout>
      <SEO seo={seo} />
      <PageTitle title="BOT Services & ODC Model" className="page-title--sub" />
      <div className="main">
        <div className="container">
          <Animation>
            <h2 className="hdg-lv2">BOT Services & ODC Model</h2>
          </Animation>
          <div className="box-media">
            <Animation className="box-media__img">
              <Image
                src="/images/services/offshore-development-center-in-vietnam.jpg"
                width={626}
                height={431}
                layout="intrinsic"
                loading="eager"
                alt="Offshore Development Center in Vietnam"
              />
            </Animation>
            <Animation className="box-media__text">
              <p>
                The Offshore Development Center would fit every business
                requirement the right way. Wondering how? It would be the
                best-suited model for establishing your business in the future
                market goal. The Build-Operate-Transfer model (BOT model) lets
                you stay competitive and successful in the market. Your ODC team
                should be reliable to work with. They should let you spare your
                time from legal entities. They can simplify those never-ending
                hiring and testing processes. They should also hold the
                responsibility to complete all the documentation and
                paperwork-related works. Meeting deadlines on time should be
                their personal trait. With BOT services, the software developers
                should focus on all the customer requirements, project
                attributes and offer flexible operations at every stage of the
                project completion through Software outsourcing.
              </p>

              <p>
                Relia Software is 100% capable of providing the best ODC
                Services in the market. Do not worry about productivity,
                efficiency and legal operations. We are there to get all our
                requirements covered, being a one-stop ODC solution forever. Our
                priority lies in providing you with the resources and support
                which you have been looking for. With the skills and tools we
                provide, you can reach the next level of growth. With the
                Build-Operate-Transfer process, our software development team
                would take pride in streamlining every process for you from
                scratch with Software outsourcing.
              </p>
            </Animation>
          </div>
        </div>
        <div className="container">
          <Animation>
            <h2 className="hdg-lv2">
              BUILD - OPERATE - TRANSFER SERVICES (BOT services)
            </h2>
          </Animation>
          <Animation className="container--small">
            <p>
              With the Build-Operate-Transfer (BOT) process, you can handle all
              the project related processes in an ultra-professional and
              simplified manner. The Build, Operate & Transfer services are
              designed to let the software development team geographically
              accustom to the project location.
            </p>
          </Animation>
          <div className="list-plan">
            <Animation className="item">
              <div className="item__thumb">
                <Image
                  src="/images/services/odc-bot-02.jpg"
                  width={600}
                  height={415}
                  layout="intrinsic"
                  loading="eager"
                  alt="Build"
                />
              </div>
              <div className="item__content">
                <h2>Build:</h2>
                <p>
                  We build the team you trust with Software outsourcing. Every
                  operation starting from building design and software
                  development team would be foreseen by us. We let the required
                  resources starting from UI/UX designers, QA to mobile app
                  developers and web developers collaborate with you on the
                  project. Our multi-talented resources can deliver excellent
                  results as per your expectations. Meeting deadlines would be
                  their forever favourable trait. Once we choose the preferable
                  candidate and after the interview process is over, they would
                  start working with your team.
                </p>
              </div>
            </Animation>
            <Animation className="item">
              <div className="item__thumb">
                <Image
                  src="/images/services/odc-bot-03.jpg"
                  width={600}
                  height={415}
                  layout="intrinsic"
                  loading="eager"
                  alt="Operate"
                />
              </div>
              <div className="item__content">
                <h2>Operate:</h2>
                <p>
                  Our resources would set, regulate and manage all the IT
                  operations. Until the completion of the project, we are here
                  to handle every operation in a professionally enticing manner.
                  Our team let you manage all the core operations without any
                  hurdles. The operational processes would be extremely smoother
                  with no challenges. The offshore operations would get aligned
                  in a smoother manner with our software developers team by your
                  side.
                </p>
              </div>
            </Animation>
            <Animation className="item">
              <div className="item__thumb">
                <Image
                  src="/images/services/odc-bot-04.jpg"
                  width={600}
                  height={415}
                  layout="intrinsic"
                  loading="eager"
                  alt="Transfer"
                />
              </div>
              <div className="item__content">
                <h2>Transfer:</h2>
                <p>
                  Once the project is over, the resources would transfer the
                  entire control to your team. Every detail you have provided
                  would be confidential. With the like-minded BOT team, you can
                  get all the processes done and successfully complete your
                  project. This way, you can retain your customer’s trust
                  forever. Your brand value would grow multidimensionally when
                  the project gets completed.
                </p>
              </div>
            </Animation>
            <Animation className="item">
              <div className="item__thumb">
                <Image
                  src="/images/services/on-time-delivery-bot-service.jpg"
                  width={626}
                  height={626}
                  layout="intrinsic"
                  loading="eager"
                  alt="On time delivery bot service"
                />
              </div>
              <div className="item__content">
                <h2>Advantages of Build, Operate & Transfer Services:</h2>
                <p>
                  The primary focus of the BOT model is to take the business
                  operations, on-time delivery and project quality to the next
                  level. The BOT engagement model would offer everyone with
                  clear-cut advantages which can provide high-end value to every
                  business. With an ability where you can possess the upper hand
                  over the entire nearshore or offshore development operations,
                  you can get the projects done within the timeframe you prefer.
                  Let’s take a look at the advantages:
                </p>
                <Animation>
                  <ul className="list-plus">
                    <li>
                      Being a team, the team would have localized knowledge when
                      you start your IT operations at an unfamiliar location.
                    </li>
                    <li>
                      With flexible methods, you can handle your offshore
                      development process whenever the team requires any
                      changes.
                    </li>
                    <li>
                      The performance-oriented metrics would be taken care of
                      completely.
                    </li>
                    <li>
                      Talent selection becomes simplified and streamlined.
                    </li>
                    <li>
                      Transferring your in-house practices to the new team is
                      not a big deal when Relia is by your side.
                    </li>
                  </ul>
                </Animation>
              </div>
            </Animation>
          </div>
        </div>
        <div className="box-flutter box-gray">
          <div className="container">
            <Animation className="box-heading">
              <h2 className="hdg-lv2">
                <span>Why</span> do you need Offshore Development Companies?
              </h2>
              <p className="hdg-lv2-sub">
                Do you want to chunk down your development costs? Has it always
                been your priority to improve the software product quality?
                Relia Software can lower your entire operation costs and amplify
                your productivity. The Offshore Development Center model has
                proven beneficial in terms of predictability and visibility. The
                development process gets streamlined, leaving no stones unturned
                to ensure quality delivery. This is why Relia Software has been
                people’s favourite ODC choice.
              </p>
            </Animation>
            <ListMobiService data={data.odcbot} />
          </div>
        </div>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="box-build">
            <Animation>
              <h2 className="hdg-lv2">Offshore Development Center</h2>
            </Animation>
            <Animation>
              <p>
                With Offshore Development Center, the dedicated software
                development team can work on high-end values and increase your
                overall agility. You can always rely on our expertise and
                experience in the market. Let’s take a deep look into how ODC
                can help your business.
              </p>
            </Animation>
            <Animation className="box-build__image">
              <Image
                className="img"
                src="/images/services/expertise-bot-service-provider-in-vietnam.jpg"
                width={626}
                height={341}
                layout="intrinsic"
                loading="eager"
                alt="Expertise bot service provider in vietnam"
              />
            </Animation>
          </div>
        </div>
        <div className="container">
          <Animation>
            <h2 className="hdg-lv2">
              Why <span>Relia Software</span> for ODC & BOT services?
            </h2>
          </Animation>
          <div className="our-blockchain">
            <Animation className="our-blockchain__col">
              <p>
                At Relia Software, we let our professionals adopt all the
                client’s standards, norms and work environment while we maintain
                the domain skills, knowledge and products. When the client
                states their requirements and needs subtly, the team would delve
                deeper to decode their requirements to the next level in a
                proactive manner.
              </p>
            </Animation>
            <Animation className="our-blockchain__col">
              <p>
                Relia Software leverages a special model meant to handle app
                development with processes, methodologies, technologies and
                tools meant to handle every client’s requirements and needs.
                With every Offshore Development Center being dedicated to a
                single client throughout the project, every team can show equal
                commitment and embrace every client’s requirements and goals.
                They can also simplify business needs and processes. To put it
                in a nutshell, our ODC resources would be an asset to your
                onsite team.
              </p>
            </Animation>
            <Animation className="our-blockchain__col">
              <p>
                With BOT being an extensive IT outsourcing engagement model, any
                company can establish a long-term IT development team in its
                offshore location. This model would suit every company with
                access to intellectual properties, strict data along with other
                compliance and regulatory requirements. BOT would enhance your
                control over all the assets and remote resources. You can allow
                all the vital upfront costs required to establish offshore or
                nearshore IT development requirements. Relia Software is here to
                let you move on the right track.
              </p>
            </Animation>
          </div>
          <ListAccordion data={dataFaq.odcbot} />
        </div>
        <div className="box-contact">
          <div className="container">
            <Animation>
              <h2 className="hdg-lv2">
                Let us help make your <span>odc bot</span>
                <br className="visible-pc" /> project a success.
              </h2>
            </Animation>
            <Animation className="box-contact__img">
              <Image
                src="/images/services/skillfull-bot-service.jpg"
                width={626}
                height={626}
                layout="intrinsic"
                loading="eager"
                alt="Skillfull bot service"
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
export default OdcBot
