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
import ogpImage from "assets/images/services/chatbot-development-company.png"

const ChatbotDevelopment = () => {
  const seo = {
    metaTitle: "Chatbot Development Company",
    metaDescription: "The Chatbot Development Company also ensures the Chatbots understand the users’ tone with Natural Language Processing and responds accordingly to pacify and solve the queries.",
    shareImage: ogpImage,
    article: true,
  };
  return (
    <Layout>
      <SEO seo={seo} />
      <PageTitle
        title="Chatbot Development Company"
        className="page-title--sub"
      />
      <div className="main">
        <div className="container">
          <Animation>
            <h2 className="hdg-lv2">Chatbot Development Company</h2>
          </Animation>
          <div className="box-media">
            <Animation className="box-media__text">
              <p>
                AI Chatbot Development is nothing short of transformational to
                businesses irrespective of the industries they belong to.
              </p>

              <p>
                70% of millennials have reported a positive experience after
                interacting with Chatbot Solutions. 75% of customers prefer to
                receive responses instantly, and 69% prefer Chatbots for instant
                responses. The numbers on the use of Chatbots are expected to go
                nowhere but higher.
              </p>

              <p>
                Chatbots are software that can effectively initiate a
                conversation, listen, respond to humans in real-time. Digital
                Chatbot Development helps businesses to engage their customers
                proactively, learn what they want, solve their queries, and feed
                companies with valuable insights that will help them grow to the
                next stage.
              </p>

              <p>
                Whether it is a Facebook page or Telegram Account, Chatbot
                Development is already being adopted by many companies to
                attract potential customers and interact with them.
              </p>

              <p>
                Powered by Artificial Intelligence, Chatbots also ensure that
                all of the customers’ needs are catered to when they leave the
                conversation.
              </p>
            </Animation>
            <Animation className="box-media__img">
              <p>
                Software’s expertise in Artificial Intelligence and Chatbot
                Development Services led to a blend of technologies to create
                impeccable Chatbot Solutions that will increase customer
                engagement and retention.
              </p>

              <p>
                The Chatbot Development Company also ensures the Chatbots
                understand the users’ tone with Natural Language Processing and
                responds accordingly to pacify and solve the queries.
              </p>
              <Image
                src="/images/services/chatbot-development-company.png"
                width={600}
                height={355}
                layout="intrinsic"
                loading="eager"
                alt="The Chatbot Development Company"
              />
            </Animation>
          </div>
        </div>
        <div className="container">
          <Animation>
            <h2 className="hdg-lv2">
              How Chatbot Development Helps <br />
              Your Business Grow
            </h2>
          </Animation>
          <div className="list-idea">
            <Animation className="list-idea__col">
              <Image
                className="icon"
                src="/images/icon/icon-chatbot.png"
                width={94}
                height={94}
                layout="intrinsic"
                loading="eager"
                alt="The Chatbot Development Company"
              />
              <h3>Chatbot Solutions Improves Customer Experience</h3>
              <p>
                Chatbots are developed to mimic the human style of interaction
                to provide customers with personalized responses and improve
                their communication experience.
              </p>
            </Animation>
            <Animation className="list-idea__col">
              <Image
                className="icon"
                src="/images/icon/icon-chatbot.png"
                width={94}
                height={94}
                layout="intrinsic"
                loading="eager"
                alt="The Chatbot Development Company"
              />
              <h3>Chatbots Automate Business Processes</h3>
              <p>
                Chatbot Applications, apart from gathering insight on customers,
                can automate repetitive processes like payment processing,
                technical support, scheduling appointments, and managing
                marketing campaigns.
              </p>
            </Animation>
            <Animation className="list-idea__col">
              <Image
                className="icon"
                src="/images/icon/icon-chatbot.png"
                width={94}
                height={94}
                layout="intrinsic"
                loading="eager"
                alt="The Chatbot Development Company"
              />
              <h3>Messaging Bots Reach a Wider Audience</h3>
              <p>
                The AI-enabled Chatbot works 24x7 and can be integrated with
                various platforms like Facebook and Slack to interact with a
                large number of people at the same time without clutter, lags,
                or interferences.
              </p>
            </Animation>
            <Animation className="list-idea__col">
              <Image
                className="icon"
                src="/images/icon/icon-chatbot.png"
                width={94}
                height={94}
                layout="intrinsic"
                loading="eager"
                alt="The Chatbot Development Company"
              />
              <h3>Chatbot Applications Development Reduce Labor Costs</h3>
              <p>
                Unlike the human workforce, Chatbot solutions do not require to
                be scaled every time it needs to cater to a larger audience,
                saving a hefty price which can be used for business development.
              </p>
            </Animation>
          </div>
        </div>
        <div className="box-flutter box-gray">
          <div className="container">
            <Animation className="box-heading">
              <h2 className="hdg-lv2">
                We <span>Build</span> Industry-Specific Chatbots
              </h2>
            </Animation>
            <ListMobiService data={data.chatbot} />
          </div>
        </div>
        <div className="container">
          <Animation className="box-heading">
            <h2 className="hdg-lv2">How We Build AI-Powered Chatbots?</h2>
            <p className="hdg-lv2-sub">
              4 strong points with a brief description - make sure you research
              about data science - AI, ML and NLP usage in chatbots and how to
              build intelligent chatbots with AI.
            </p>
          </Animation>
          <div className="ieo-services">
            <Animation className="ieo-services__col">
              <Image
                src="/images/services/chatbot-development-company-01.png"
                width={461}
                height={477}
                layout="intrinsic"
                loading="eager"
                alt="The Chatbot Development Company"
              />
            </Animation>
            <div className="ieo-services__col">
              <Animation>
                <h3>Data Science:</h3>
                <p>
                  <strong>• 1st Step:</strong> Spell of Chatbot Development
                </p>
              </Animation>
              <Animation>
                <h3>Artificial Intelligence:</h3>
                <p>
                  <strong>• 2st Step:</strong> Spell of Chatbot Development
                </p>
              </Animation>
            </div>
            <div className="ieo-services__col">
              <Animation>
                <h3>Machine Learning:</h3>
                <p>
                  <strong>• 3st Step:</strong> Spell of Chatbot Development
                </p>
              </Animation>
              <Animation>
                <h3>Natural Language Processing:</h3>
                <p>
                  <strong>• 4st Step:</strong> Spell of Chatbot Development
                </p>
              </Animation>
            </div>
          </div>
        </div>
        <div className="container">
          <Animation>
            <h2 className="hdg-lv2">
              Relia Software’s Chatbot <br />
              Development Services
            </h2>
          </Animation>
          <div className="box-reasons" style={{ marginBottom: 0 }}>
            <Animation className="box-reasons__col">
              <Image
                alt=""
                src="/images/services/chatbot-development-service.jpg"
                style={{ maxWidth: "530px", margin: "auto" }}
                width={539} height={282} layout="intrinsic" loading="eager"
              />
            </Animation>
            <Animation className="box-reasons__col">
              <ul className="list-arrow">
                <li>
                  <h3>Chatbot Development for Enterprise Messengers</h3>
                  <p>
                    Our Chatbot Development Services makes the app seamless to
                    integrate with Business and Enterprise Messengers like
                    Slack, Skype, and Hangouts.
                  </p>
                </li>
                <li>
                  <h3>Chatbot Development for Website/ Mobile App</h3>
                  <p>
                    Companies with websites, web apps, and mobile apps can
                    deploy Relia Software’s chatbots to proactively engage their
                    customers for a better conversion rate.
                  </p>
                </li>
                <li>
                  <h3>Chatbot Development for LiveChat and Voicebot </h3>
                  <p>
                    Hiring our Chatbot Developers grants companies personnel who
                    are highly experienced and understands what it takes for a
                    Chatbot to succeed.
                  </p>
                </li>
              </ul>
            </Animation>
          </div>
          <div className="box-reasons">
            <Animation className="box-reasons__col">
              <ul className="list-arrow">
                <li>
                  <h3>Chatbot Development for Social messengers</h3>
                  <p>
                    We build Chatbots for Social Messengers like Telegram,
                    Whatsapp, and Facebook Messenger for companies to engage
                    their customers personally.
                  </p>
                </li>
                <li>
                  <h3>Chatbot Development Solution for SMS and Email Apps</h3>
                  <p>
                    Our messaging Chatbot Development for SMS and Email
                    Applications endows businesses with a sound medium to
                    understand their users.
                  </p>
                </li>
                <li>
                  <h3>Custom Chatbot Development Services</h3>
                  <p>
                    Being one of the best Chatbot Development Companies, Relia
                    Software understands that every business is unique and
                    crafts custom solutions to cater to the requirements.
                  </p>
                </li>
              </ul>
            </Animation>
            <Animation className="box-reasons__col">
              <Image
                alt=""
                src="/images/services/chatbot-development-service-02.jpg"
                style={{ maxWidth: "530px", margin: "auto" }}
                width={488} height={315} layout="intrinsic" loading="eager"
              />
            </Animation>
          </div>

          <ListAccordion data={dataFaq.chatbot} />
        </div>
        <div className="box-contact">
          <div className="container">
            <Animation>
              <h2 className="hdg-lv2">
                Let us help make your <span>Chatbot development</span>
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
export default ChatbotDevelopment
