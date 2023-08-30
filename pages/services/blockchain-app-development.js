import React from "react"
import Link from "next/link"
import PageTitle from "@components/pageTitle"
import Layout from "@components/common/layout"
import { ListAccordion, ListBlockchain } from "@components/services"
import SEO from "@components/seo"
import Animation from "@components/common/Animation"
import Image from "next/image"
import dataFaq from "./faq"
import ogpImage from "assets/images/blockchain-app-development01.png"

const BlockchainApp = () => {
  const seo = {
    metaTitle: "Blockchain Development Company | Blockchain Development Services",
    metaDescription: "Relia Software is the leading blockchain app development company. Offers the top-notch blockchain application development services. Request a Quote!",
    shareImage: ogpImage,
    article: true,
  };
  return (
    <Layout>
      <SEO seo={seo} />
      <PageTitle
        title="Blockchain App Development"
        className="page-title--sub"
      />
      <div className="main">
        <div className="container">
          <Animation>
            <h2 className="hdg-lv2">
              <span className="text-white">Blockchain</span> Development Company
            </h2>
          </Animation>
          <Animation>
            <p>
              Ever since the inception of Blockchain solutions, the word of its
              advantages has penetrated every industry in every nook and corner
              of the world.
            </p>

            <p>
              Blockchain technology is a distributed and immutable ledger that
              uses a consensus method to verify and approve before storing the
              data. The architecture enables Blockchain Solutions to offer
              better data security and integrity.
            </p>
          </Animation>
          <Animation>
            <Image
              src="/images/services/blockchain-development-company.jpg"
              width={1495}
              height={841}
              layout="intrinsic"
              loading="eager"
              alt="Blockchain development company"
            />
          </Animation>
          <Animation>
            <p style={{ marginTop: "15px" }}>
              Blockchain application development has the potential to be
              transformational for the businesses, irrespective of the industry
              they belong to. They can level competing fields for industrial
              mammoths and startups alike.
            </p>

            <p>
              At present, Blockchain App Development and Services are being
              experimented widely for early incorporation to gain a competitive
              edge against the rest of the industry.
            </p>

            <p>
              The Blockchain App Developers of Relia Software have been
              scrutinizing Blockchain Development since its introduction in
              2009.
              <br />
              Having researched Blockchain applications’ implementation across
              myriad industries, we possess complete mastery over all the facets
              of the peer-to-peer app development.
            </p>

            <p>
              Relia Software’s Blockchain Specialists also understand the
              nuances in the development of private and public Blockchain to
              craft a captivating Blockchain Application with perfect tools to
              limit transparency.
            </p>

            <p>
              We also follow the industry’s latest developments to keep
              ourselves up to date with the market and trend to empower our
              clients with quality Blockchain Software and Solutions better than
              their competitors.
            </p>
          </Animation>
        </div>
        <div className="container">
          <div className="box-solutions">
            <Animation>
              <h2 className="hdg-lv2">
                Our Blockchain App Development <span>Services</span>
                <br /> and Solutions
              </h2>
            </Animation>
            <div className="our-blockchain">
              <Animation className="our-blockchain__col">
                <Image
                  src="/images/services/blockchain-app-development02.png"
                  width={219}
                  height={242}
                  layout="intrinsic"
                  loading="eager"
                  alt="Hyperledger Development"
                />
                <h3>Hyperledger Development</h3>
                <p>
                  We specialize in developing Hyperledger Blockchain Solutions
                  that protect data integrity while allowing businesses shielded
                  transparency.
                </p>
              </Animation>
              <Animation className="our-blockchain__col">
                <Image
                  src="/images/services/blockchain-app-development03.png"
                  width={189}
                  height={194}
                  layout="intrinsic"
                  loading="eager"
                  alt="Crypto-Wallet Development"
                />
                <h3>Crypto-Wallet Development</h3>
                <p>
                  Our Blockchain App Developers build highly secured
                  Crypto-Wallets where you and your customers can store
                  currencies and feel completely safe.
                </p>
              </Animation>
              <Animation className="our-blockchain__col">
                <Image
                  src="/images/services/blockchain-app-development04.png"
                  width={219}
                  height={176}
                  layout="intrinsic"
                  loading="eager"
                  alt="Smart Contract Development"
                />
                <h3>Smart Contract Development</h3>
                <p>
                  Blockchain-powered Smart Contract Development guarantees
                  conflict-free enforcement of agreements. We guarantee an
                  impeccable development of Smart Contracts.
                </p>
              </Animation>
            </div>
          </div>
          <Animation className="box-heading">
            <h2 className="hdg-lv2">ICO & IEO Services</h2>
            <p className="hdg-lv2-sub">
              We understand how crucial Initial Coin Offering and Initial
              Exchange Offering are for a business and know what it takes for
              ICO and IEO to succeed.
            </p>
          </Animation>
          <div className="ieo-services">
            <div className="ieo-services__col">
              <Animation>
                <h3>Crypto Exchange Development</h3>
                <p>
                  As a Crypto Exchange Development Company, we will equip you
                  with a Crypto Exchange Solution that is nothing short of a
                  stronghold repelling hackers and anomalies.
                </p>
              </Animation>
              <Animation>
                <h3>Blockchain Development Consulting</h3>
                <p>
                  We humbly invite you to make use of our studies, research, and
                  expertise garnered over the span of 10 years to identify the
                  right path for your Blockchain App and services development.
                </p>
              </Animation>
            </div>
            <div className="ieo-services__col">
              <Animation>
                <h3>Decentralized App Development</h3>
                <p>
                  We deliver end-to-end DApp Development Services. From ideating
                  the structure to final release, our Blockchain Experts and
                  Specialists will walk with you throughout the journey.
                </p>
              </Animation>
              <Animation>
                <h3>Custom Blockchain Solutions Development</h3>
                <p>
                  As a Blockchain Development Company, our solutions are not
                  limited to a few mentioned Blockchain Development Services.
                  Got an idea? We can give you a custom solution to monetize it.
                </p>
              </Animation>
            </div>
            <Animation className="ieo-services__col">
              <Image
                src="/images/services/ieo-services.png"
                width={938}
                height={938}
                layout="intrinsic"
                loading="eager"
                alt="ieo services"
              />
            </Animation>
          </div>
        </div>
        <div className="box-gray">
          <div className="container">
            <Animation>
              <h2 className="hdg-lv2">
                <span>Industry-Specific</span> Blockchain <br />
                Development Solutions
              </h2>
            </Animation>
            <ListBlockchain />
          </div>
        </div>
        <div className="container">
          <Animation>
            <h2 className="hdg-lv2">
              <span className="text-white">Reasons</span> To Hire Relia
              Software’s
              <br />
              Blockchain Developers
            </h2>
          </Animation>
          <div className="box-reasons">
            <div className="box-reasons__col">
              <Animation>
                <Image
                  src="/images/services/blockchain-development-viet-nam.jpg"
                  width={800}
                  height={450}
                  layout="intrinsic"
                  loading="eager"
                  alt="Blockchain development company"
                />
              </Animation>
              <ul className="list-arrow" style={{ paddingLeft: 0 }}>
                <li>
                  <h3>
                    <Image
                      className="icon"
                      src="/images/icon/icon-arrow-right.svg"
                      width={25}
                      height={17}
                      layout="intrinsic"
                      loading="eager"
                      alt=""
                    />
                    Into Blockchain Development Since 2009
                  </h3>
                  <p>
                    We in Relia Software recognized the potential of Blockchain
                    and embarked on a quest to master the technology. The result
                    is our high-quality Blockchain Development Solutions.
                  </p>
                </li>
                <li>
                  <h3>
                    <Image
                      className="icon"
                      src="/images/icon/icon-arrow-right.svg"
                      width={25}
                      height={17}
                      layout="intrinsic"
                      loading="eager"
                      alt=""
                    />
                    Standard Development Process
                  </h3>
                  <p>
                    Having top Blockchain Developers in our company granted us
                    two advantages: one, the development process is highly
                    structured making it easy to track; two, we required less
                    testing iterations to refine the Blockchain Applications.
                  </p>
                </li>
              </ul>
            </div>
            <Animation className="box-reasons__col">
              <ul className="list-arrow">
                <li>
                  <h3>
                    <Image
                      className="icon"
                      src="/images/icon/icon-arrow-right.svg"
                      width={25}
                      height={17}
                      layout="intrinsic"
                      loading="eager"
                      alt=""
                    />
                    Proven Experience in the Blockchain Industry
                  </h3>
                  <p>
                    When you hire our Blockchain Developers, you are actually
                    hiring highly skilled Blockchain App Development veterans
                    who bring years of experience to make your product absolute.
                  </p>
                </li>
                <li>
                  <h3>
                    <Image
                      className="icon"
                      src="/images/icon/icon-arrow-right.svg"
                      width={25}
                      height={17}
                      layout="intrinsic"
                      loading="eager"
                      alt=""
                    />
                    Dedicated Blockchain Software Developers
                  </h3>
                  <p>
                    We have incorporated dedicated Blockchain Developers who see
                    to the end-to-end development for you to hire and deploy in
                    your projects.
                  </p>
                </li>
                <li>
                  <h3>
                    <Image
                      className="icon"
                      src="/images/icon/icon-arrow-right.svg"
                      width={25}
                      height={17}
                      layout="intrinsic"
                      loading="eager"
                      alt=""
                    />
                    Renowned for Quality App Development
                  </h3>
                  <p>
                    If there is something Relia Software is known for, it would
                    be the timely delivery of Blockchain Development Services
                    and Top-notch Blockchain Development.
                  </p>
                </li>
                <li>
                  <h3>
                    <Image
                      className="icon"
                      src="/images/icon/icon-arrow-right.svg"
                      width={25}
                      height={17}
                      layout="intrinsic"
                      loading="eager"
                      alt=""
                    />
                    Dedicated Blockchain Software Developers
                  </h3>
                  <p>
                    If there is something Relia Software is known for, it would
                    be the timely delivery of Blockchain Development Services
                    and Top-notch Blockchain Development.
                  </p>
                </li>
              </ul>
            </Animation>
          </div>
          <Animation className="box-heading">
            <h2 className="hdg-lv2">
              Relia Software’s <span>Tech Stack</span> For <br />
              Blockchain Apps
            </h2>
            <p className="hdg-lv2-sub">
              We deploy a slew of compatible technologies to build best
              Blockchain Applications that are faster, responsive, and secure.
            </p>
          </Animation>
          <div className="box-reasons">
            <Animation className="box-reasons__col">
              <ul>
                <li>
                  <p>
                    <strong>Blockchain Technologies</strong>: Multichain, BAAS,
                    EOS, Coinbase, BigchainDB, Hyperledger Fabric, Tierion.
                    Hedera Hashgraph, Solidity, Hyperledger Sawtooth, Waves,
                    Etherium, Hyperledger Composer, Stellar, Etherium Classic,
                    Openzepplin, Truffle, IPFS, etc.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Frontend</strong>: HTML, CSS, JavaScript, ReactJS,
                    Angular, Vue.js, Next.js, TypeScript, Bootstrap, Ajax,
                    jQuery, Dart, React Native, etc
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Backend</strong>: Python, NodeJS, Ruby on Rails,
                    Golang, .NET, PHP, Laravel, Express, Django, Spring, Grails,
                    CakePHP, CodeIgniter, Hibernate, etc
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Database</strong>: MySQL, PostgreSQL, SQLite,
                    MongoDB, Amazon Web Services, Amazon RDS, Hadoop, Cassandra,
                    CouchDB, Cloudera, etc
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Mobile</strong>: iOS, Android, ReactNative, Flutter,
                    etc
                  </p>
                </li>
              </ul>
            </Animation>
            <Animation className="box-reasons__col">
              <Image
                src="/images/services/img-reason02.png"
                width={800}
                height={781}
                layout="intrinsic"
                loading="eager"
                alt="Blockchain Apps"
              />
            </Animation>
          </div>
          <ListAccordion data={dataFaq.blockchain} />
        </div>
        <div className="box-contact">
          <div className="container">
            <Animation>
              <h2 className="hdg-lv2">
                Let us help make your Blockchain <span>development</span> <br />
                project a success.
              </h2>
            </Animation>
            <Animation className="box-contact__img">
              <Image
                src="/images/services/blockchain-development-in-vietnam.jpg"
                width={801}
                height={548}
                layout="intrinsic"
                loading="eager"
                alt="Blockchain development in vietnam"
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

export default BlockchainApp
