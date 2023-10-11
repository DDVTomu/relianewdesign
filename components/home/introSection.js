import React from "react"
import Animation from "@components/common/Animation"

const IntroSection = React.memo(() => {
  return (
    <div className="intro-section">
      <div className="container">
        <Animation>
          <h2 className="hdg-lv2">
            Your App Development & Digital <br />
            Transformation <span className="text-white">Partner</span>
          </h2>
        </Animation>
        <Animation>
          <p>
            Relia software is a product development company which puts great
            emphasis on User experience driven engineering as well as scalable
            software architecture. At Relia Software, we believe in creating
            digital experiences that reach millions and deliver value at every
            step.
          </p>
        </Animation>
        <Animation>
          <p>
            We build MVP’s for startups and bespoke software solutions for
            enterprises which ensure scalability, robustness and top notch user
            experiences. We have delivered more than 300 applications since 2011
            for both web and mobile platforms varying over 10+ industries gives
            us an edge to deliver a perfect product for our clients.
          </p>
        </Animation>
        <div className="list-intro">
          <Animation className="list-intro-col">
            <p className="h4">Design Thinking</p>
            <ul className="list-plus">
              <li>
                <a href="/services/ui-ux-development">
                  UX/UI Design
                </a>
              </li>
              <li>
                <a href="/services/mvp-development"
                >
                  MVP Design
                </a>
              </li>
              <li>
                <a href="/services/on-demand-delivery-app-development-company"
                >
                  On-Demand Delivery App
                </a>
              </li>

              <li>Product Design</li>
            </ul>
          </Animation>
          <Animation className="list-intro-col">
            <p className="h4">Digital Transformation</p>
            <ul className="list-plus">
              <li>AI & ML</li>
              <li>
                <a href="/services/blockchain-app-development"
                >
                  Blockchain Development
                </a>
              </li>
              <li>
                <a href="/services/chatbot-development"
                >
                  ChatBot Development
                </a>
              </li>
              <li>
                <a href="/services/odc-bot"
                >
                  ODC & BOT Development
                </a>
              </li>
            </ul>
          </Animation>
          <Animation className="list-intro-col">
            <p className="h4">Digital Solutions</p>
            <ul className="list-plus">
              <li>
                <a href="/services/web-app-development"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a href="/services/mobile-app-development"
                >
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="/services/enterprise-app-development"
                >
                  Enterprise App Development
                </a>
              </li>
              <li>
                <a href="/services/flutter-app-development"
                >
                  Flutter App Development
                </a>
              </li>
              <li>
                <a href="/services/angularjs-development"
                >
                  AngularJS Development
                </a>
              </li>
              <li>
                <a href="/services/reactjs-development"
                >
                  ReactJS Development
                </a>
              </li>
              <li>
                <a href="/services/nodejs-development"
                >
                  NodeJs Development
                </a>
              </li>
              <li>
                <a href="/services/python-app-development"
                >
                  Python App Development
                </a>
              </li>
            </ul>
          </Animation>
          <Animation className="list-intro-col">
            <p className="h4">Offshore Team</p>
            <ul className="list-plus">
              <li>Offshore Development Centre</li>
              <li>C2H Developers</li>
              <li>Product Support & Mainternance</li>
              <li>
                <a href="/services/next-js-development"
                >
                  NextJs Development
                </a>
              </li>
              <li>
                <a href="/services/golang-web-development"
                >
                  GoLang Web Development
                </a>
              </li>
              <li>
                <a href="/services/net-web-development"
                >
                  .Net Web Development
                </a>
              </li>
              <li>
                <a href="/services/react-native-app-development"
                >
                  React Native Development
                </a>
              </li>
            </ul>
          </Animation>
        </div>
      </div>
    </div>
  )
})
export default IntroSection
