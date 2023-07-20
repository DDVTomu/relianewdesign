// import ReactMarkdown from "react-markdown";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/common/layout";
// import Image from "../../components/common/image";
import ExportedImage from "next/image";
import Seo from "@components/seo";
import Link from "next/link";

import IconArrowRight from "@components/common/Icon/IconArrowRight";
import IconArrowRightWhite from "@components/common/Icon/IconArrowRightWhite";
import FAQAccordion from "@components/common/FAQAccordion/FAQAccordion";

import styles from "./inner3.module.scss";
import IconInsta from "@components/common/Icon/IconInsta";
const TechStack = ({ works }) => {
  const seo = {
    metaTitle: works.metaTitle || "Portfolio",
    metaDescription: works.description || "Portfolio",
    // shareImage: article.image,
    article: true,
  };

  const faqs = [
    {
      question:
        "What are the benefits of using Node.js for web app development?",
      answer:
        "Node.js offers many advantages for web app development like quick development, increased efficiency, fast execution of code, strong backing, an ideal solution for microservices, etc.",
    },
    {
      question: "Which is better: Node.js or Python?",
      answer:
        "Node.js offers many advantages for web app development like quick development, increased efficiency, fast execution of code, strong backing, an ideal solution for microservices, etc.",
    },
    {
      question: "How much does it cost to develop a Node.js Project?",
      answer:
        "Node.js offers many advantages for web app development like quick development, increased efficiency, fast execution of code, strong backing, an ideal solution for microservices, etc.",
    },
    {
      question: "What kind of applications can you build using Node.js?",
      answer:
        "Node.js offers many advantages for web app development like quick development, increased efficiency, fast execution of code, strong backing, an ideal solution for microservices, etc.",
    },
    {
      question: "What are the benefits of outsourcing Node.js development?",
      answer:
        "Node.js offers many advantages for web app development like quick development, increased efficiency, fast execution of code, strong backing, an ideal solution for microservices, etc.",
    },
  ];

  const offers = [
    {
      name: "Flask-boilerplate-structure",
      img: "/images/new-relia/background/techstack/node/node-1.png",
    },
    {
      name: "Golang-HTML-TO-PDF-Converter",
      img: "/images/new-relia/background/techstack/node/node-2.png",
    },
    {
      name: "Glide-image-utility",
      img: "/images/new-relia/background/techstack/node/node-3.png",
    },
    {
      name: "Golang-Project-Structure",
      img: "/images/new-relia/background/techstack/node/node-4.png",
    },
  ];

  const standards = [
    {
      img: "/images/new-relia/background/techstack/node/manage_history.png",
      title: "Smart",
      desc: "Smart coding is to avoid all the technical risk right away while writing the code and make it fault resistant. We plan the actions and how users could react before writing the code.",
    },
    {
      img: "/images/new-relia/background/techstack/node/manage_history-1.png",
      title: "Reusable",
      desc: "The reusability of code reduces redundancy and development time. The optimization of code is very important and we do it by having reusability of the code.",
    },
    {
      img: "/images/new-relia/background/techstack/node/manage_history-2.png",
      title: "Beautiful",
      desc: "Beautiful Code is the code that seems professional and understandable. It is written as per the widely accepted coding standard.",
    },
    {
      img: "/images/new-relia/background/techstack/node/manage_history-3.png",
      title: "Stable",
      desc: "We take utter care of code stability before releasing any of the products. We use various testing tools to check the stability of code as well as products.",
    },
  ];

  const approaches = [
    {
      img: "/images/new-relia/background/techstack/node/approach-1.png",
      title: "Agile Methodologies",
      desc: "Agile methodology is a project management approach widely used for the software development process. It is an approach where requirements and solutions evolve throughout the process by the collaborative effort of self-organizing cross-functional teams and their customers.",
    },
    {
      img: "/images/new-relia/background/techstack/node/approach-2.png",
      title: "Cost Efficient",
      desc: "Our team analyzes business requirements and shares the latest and most compatible solution in a cost-effective way. We suggest the technology stake as per the requirement and provide the best solution at an optimum cost.",
    },
    {
      img: "/images/new-relia/background/techstack/node/approach-3.png",
      title: "Transparency",
      desc: "Beautiful Code is the code that seems professional and understandable. It is written as per the widely accepted coding standard.",
    },
    {
      img: "/images/new-relia/background/techstack/node/approach-4.png",
      title: "lexibility",
      desc: "We take utter care of code stability before releasing any of the products. We use various testing tools to check the stability of code as well as products.",
    },
  ];

  return (
    <Layout>
      <Seo seo={seo} />
      <section className={styles.hero}>
        <div className={` ${"container"} ${styles.hero__container}`}>
          {/* <h1>{establish.title}</h1> */}
          <div className={styles.hero__header_box}>
            {" "}
            <div className={styles.hero__top_header}>
              <h1 className={styles.hero__top_header__heading}>
                NodeJS etc<span>NodeJS etc</span>
              </h1>
              <h2 className={styles.hero__top_header__heading_h2}>
                Development Company
              </h2>
              <div className={styles.hero__top_header__deco}></div>
            </div>
            <div className={styles.hero__top_img}>
              <ExportedImage
                src="/images/new-relia/background/techstack/node/hero.png"
                width={462}
                height={308}
                layout="responsive"
                objectFit="cover"
              />
            </div>
          </div>
          {/* <Partner partner={partner} /> */}
        </div>
      </section>
      <section className={` ${styles.brands}`}>
        <div className={` ${"container"} ${styles.brands__container}`}>
          <div className={styles.brands__inner}>
            <div className={styles.brands__col}>
              <div className={styles.brands__col__box}>
                <h2>
                  As a best Node.js development company,
                  <br /> we create fast, scalable & real time
                  <br /> applications.
                </h2>
                <h3>Node.js Web Development</h3>
                <div className={styles.brands__col__paragraph}>
                  <p>
                    Stay ahead of your competitors by growing your business with
                    our secure, fast, and real-time node.js development
                    services. We make sure to develop feature-rich, scalable,
                    and high-end node.js backend solutions and server-side apps.
                  </p>
                  <p>
                    We have a team of Node.js developers who have intense
                    knowledge about the Node.js runtime environment. Our
                    tech-savvy experts build result-oriented and innovative apps
                    through the agile-based methodology that helps empower
                    businesses with node.js web development solutions.
                  </p>
                </div>
                <div className={styles.brands__desc_grid__grid}>
                  <div className={styles.brands__desc_grid__grid_col}>
                    <h1>200+</h1>
                    <h2>Professionals</h2>
                  </div>
                  <div className={styles.brands__desc_grid__grid_col}>
                    <h1>5+</h1>
                    <h2>
                      Years of Average
                      <br />
                      Experience
                    </h2>
                  </div>
                  <div className={styles.brands__desc_grid__grid_col}>
                    <h1>100M+</h1>
                    <h2>
                      Investment
                      <br />
                      Received Clients
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.establish}>
        <div className={styles.establish__img_bg_1}>
          <ExportedImage
            src="/images/new-relia/background/techstack/react/react-ellipse-1.png"
            width={240}
            height={564}
          />
        </div>
        <div className={styles.establish__img_bg_2}>
          <ExportedImage
            src="/images/new-relia/background/techstack/react/react-ellipse-2.png"
            width={200}
            height={564}
          />
        </div>
        <div className="container">
          <div className={styles.establish__inner}>
            <div className={styles.establish__inner__info}>
              <h1>
                Next-gen Node.js Development Services
                <br /> to Meet Your Business Goals
              </h1>
              <div className={`${styles.establish__box}`}>
                <div className={styles.establish__box__img}>
                  {/* <div className={styles.establish__box__img_inner_img}></div>{" "} */}
                  <ExportedImage
                    src="/images/new-relia/background/techstack/javascript/js-1.png"
                    width={459}
                    height={408}
                    layout="responsive"
                    objectFit="contain"
                    alt="establish-image-1"
                  />
                </div>
                <div className={styles.establish__box__text}>
                  <div className={styles.establish__box__desc}>
                    <p className={styles.establish__box__desc_1}>
                      {" "}
                      Node.js is a free, JavaScript-based server system that
                      functions on many platforms. Being a node.js development
                      company, we at MindInventory utilize this system as a
                      pivotal part of our tech stacks for delivering clients
                      with the best software products.
                    </p>
                  </div>
                  <div className={styles.establish__box__desc}>
                    <p className={styles.establish__box__desc_2}>
                      Today’s smart digital pace of businesses extensively
                      accepts node.js due to its adaptability, flexibility, and
                      capacity of changing according to requirements. If you
                      hire a node.js web development company, you can execute an
                      agile approach with simultaneous and quicker testing and
                      application of changes. Our business-driven and
                      diversified node.js web development services include:
                    </p>
                    <ul>
                      <li>API Development And Integration</li>
                      <li>Plug-ins Development</li>
                      <li>Version Migration</li>
                      <li>Product Support and Maintenance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.discuss}>
        <div className={` ${"container"} ${styles.discuss__container}`}>
          {/* <h1>{establish.title}</h1> */}
          <div className={styles.discuss__header_box}>
            {" "}
            <div className={styles.discuss__top_header}>
              <h1 className={styles.discuss__top_header__heading}>
                Let’s disscuss your project
              </h1>
              <p>
                Get free consultation and let us know your project idea to turn
                it into an amazing digital product.
              </p>
              <div className={`group-link  ${styles.discuss__group_btn}`}>
                <Link href="/about-us" prefetch={false}>
                  <a
                    className={`btn btn--secondary ${styles.discuss__group_btn__primary}`}
                  >
                    Talk to our expert
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/* <Partner partner={partner} /> */}
        </div>
      </section>
      <section className={styles.projects}>
        <div className={` ${"container"} ${styles.projects__container}`}>
          <h1>
            See our lastest
            <br />
            portfolio projects
          </h1>
          <div className={styles.projects__inner}>
            <div
              className={`${styles.projects__inner__col_right} ${styles.projects__apple}`}
            >
              <h2>Apple bionic 16</h2>
              <p>View Cases</p>
              <div className={styles.projects__services_1}>
                <ExportedImage
                  src="/images/new-relia/background/services/projects/services-projects-1.png"
                  width={591}
                  height={430}
                  objectFit="contain"
                  alt="bitmap-image-1"
                />
              </div>
            </div>
            <div className={styles.projects__inner__col_left}>
              <h2>Clock Animation</h2>
              <p>View Cases</p>
              <div className={styles.projects__services_2}>
                <ExportedImage
                  src="/images/new-relia/background/services/projects/services-projects-2.png"
                  width={354}
                  height={295}
                  objectFit="contain"
                  alt="bitmap-image-1"
                />
              </div>
            </div>
          </div>
          <div className={styles.projects__inner}>
            <div className={styles.projects__inner__col_left}>
              {" "}
              <h2>Dynamic Island</h2>
              <p>View Cases</p>
              <div className={styles.projects__services_3}>
                <ExportedImage
                  src="/images/new-relia/background/services/projects/services-projects-3.png"
                  width={438}
                  height={613}
                  objectFit="contain"
                  alt="bitmap-image-1"
                />
              </div>
            </div>
            <div
              className={`${styles.projects__inner__col_right} ${styles.projects__task}`}
            >
              <h2>Task Management</h2>
              <p>View Cases</p>
              <div className={styles.projects__services_4}>
                <ExportedImage
                  src="/images/new-relia/background/services/projects/services-projects-4.png"
                  width={567}
                  height={457}
                  objectFit="contain"
                  alt="bitmap-image-1"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.offer}>
        <div className="container">
          <div className={styles.offer__about}>
            <h2 className={` ${"page_heading"} ${styles.offer__heading}`}>
              Open Source Libraries
            </h2>
            <p>
              Our React Native app development process carries innovation & user
              experience at the center of it. Making us a revered and reliable
              React native mobile app development company in the USA, South
              Asia, and European Regions.
            </p>
          </div>
          <div className={styles.offer__inner}>
            <div className={styles.offer__content}>
              {offers.map((offer, index) => (
                <div key={index} className={styles.offer__content__col}>
                  <div className={styles.offer__content__icon}>
                    <ExportedImage src={offer.img} width={55} height={55} />
                  </div>
                  <div className={styles.offer__content__heading}>
                    {offer.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={`group-link  ${styles.offer__group_btn}`}>
            <Link href="/about-us" prefetch={false}>
              <a
                className={`btn btn--secondary ${styles.offer__group_btn__primary}`}
              >
                Explore more
                <IconArrowRight />
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.services}>
        <div className="container">
          <div className={styles.services__inner}>
            <div className={styles.services__inner__info}>
              <div className={`${styles.services__box}`}>
                <div className={styles.services__box__img}>
                  <div className={styles.services__box__grey_bg}>
                    <h2>Why Choose</h2>
                    <h1>NodeJS etc</h1>
                    <h3>for Web Development</h3>
                  </div>
                  <h2>Superior Data Handling</h2>
                  <p>
                    When it comes to developing JavaScript-based apps, Node.js
                    is popular for delivering amazing tasking capacities. Here’s
                    why you should opt for Node.js web development solutions:
                  </p>
                </div>
                <div className={styles.services__box__text}>
                  <div className={styles.services__list}>
                    <ul className={styles.services__list__direction}>
                      <li>Superior Data Handling</li>
                      <p>
                        Node.js offers a seamless data exchange, an effective
                        backend, and quicker solutions from Windows Nonstop to
                        UNIX to OS X servers.
                      </p>
                      <li>Scalability</li>
                      <p>
                        Dealing with impulsive and heavy apps like PayPal,
                        LinkedIn, Netflix, and so forth, Node.js is extremely
                        scalable.
                      </p>
                      <li>Front-end & Back-end Development</li>
                      <p>
                        Being a JavaScript based technology, Node.js can be used
                        for fastening both front-end and back-end applications.
                      </p>
                      <li>Low Development Cost</li>
                      <p>
                        Enriched with improved and advanced functionalities and
                        features, the pricing incurred for node.js development
                        is relatively low.
                      </p>
                      <li>High Speed</li>
                      <p>
                        Enriched with improved and advanced functionalities and
                        features, the pricing incurred for node.js development
                        is relatively low.
                      </p>
                      <li>Superior Data Handling</li>
                      <p>
                        Node.js offers a seamless data exchange, an effective
                        backend, and quicker solutions from Windows Nonstop to
                        UNIX to OS X servers.
                      </p>
                      <li>Scalability</li>
                      <p>
                        Dealing with impulsive and heavy apps like PayPal,
                        LinkedIn, Netflix, and so forth, Node.js is extremely
                        scalable.
                      </p>
                      <li>Front-end & Back-end Development</li>
                      <p>
                        Being a JavaScript based technology, Node.js can be used
                        for fastening both front-end and back-end applications.
                      </p>
                      <li>Low Development Cost</li>
                      <p>
                        Enriched with improved and advanced functionalities and
                        features, the pricing incurred for node.js development
                        is relatively low.
                      </p>
                      <li>High Speed</li>
                      <p>
                        Enriched with improved and advanced functionalities and
                        features, the pricing incurred for node.js development
                        is relatively low.
                      </p>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={`${styles.services__box}`}>
                <div className={styles.services__box__img}>
                  <div className={styles.services__box__grey_bg}>
                    <h2>Why Choose</h2>
                    <h1>US?</h1>
                  </div>
                  <h2>Why Choose MindInventory for Node.js Web Development</h2>
                  <p>
                    Being a well-known Node.js development company,
                    MindInventory is recognized for serving modern business
                    needs and delivering the best of Node.js value and
                    compliance. Here’s why we can be the best choice when it
                    comes to building Node.js apps:
                  </p>
                </div>
                <div className={styles.services__box__text}>
                  <div className={styles.services__list}>
                    <ul className={styles.services__list__direction}>
                      <li>Customer Satisfaction</li>
                      <p>
                        We work on the latest frameworks and technologies to
                        deliver you user-friendly, scalable, secure, and new
                        business solutions as per your need.
                      </p>
                      <li>Dedicated Teams</li>
                      <p>
                        Instead of working on unwanted rigid and strict
                        parameters, we offer flexibility to our clients to
                        select from different engagement and hiring models.
                      </p>
                      <li>Flexible Engagement Models</li>
                      <p>
                        Instead of working on unwanted rigid and strict
                        parameters, we offer flexibility to our clients to
                        select from different engagement and hiring models.
                      </p>
                      <li>Agile Procedure</li>
                      <p>
                        We work on the Agile methodology and conduct frequent
                        scrum events for optimizing the practices and methods
                        and delivering the finest results.
                      </p>
                      <li>Customer Satisfaction</li>
                      <p>
                        We work on the latest frameworks and technologies to
                        deliver you user-friendly, scalable, secure, and new
                        business solutions as per your need.
                      </p>
                      <li>Dedicated Teams</li>
                      <p>
                        Instead of working on unwanted rigid and strict
                        parameters, we offer flexibility to our clients to
                        select from different engagement and hiring models.
                      </p>
                      <li>Flexible Engagement Models</li>
                      <p>
                        Instead of working on unwanted rigid and strict
                        parameters, we offer flexibility to our clients to
                        select from different engagement and hiring models.
                      </p>
                      <li>Agile Procedure</li>
                      <p>
                        We work on the Agile methodology and conduct frequent
                        scrum events for optimizing the practices and methods
                        and delivering the finest results.
                      </p>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.standards}>
        <div className="container">
          <h1>Coding Standards</h1>

          <div className={styles.standards__box}>
            {standards.map((standard, index) => (
              <div key={index} className={styles.standards__box_col}>
                <div className={styles.standards__box_img}>
                  <ExportedImage src={standard.img} width={64} height={64} />
                </div>
                <div className={styles.standards__box_text}>
                  <h2>{standard.title}</h2>
                  <p>{standard.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.faq}>
        <div className={` ${"container"} ${styles.faq__container}`}>
          <h1>
            Answers to Your FAQs About
            <br /> NodeJS App Development
          </h1>
          <p>
            React Native is growing rapidly, both in terms of use cases and
            popularity, but the framework doesn’t operate as a fit-all solution.
            There are a number of things that an entrepreneur has to consider
            when building a React Native application. We have gathered answers
            to questions that confuse you and keep you on the fence in terms of
            whether you should invest in React Native mobile applications
            development.
          </p>
          {faqs.map((faq, index) => (
            <FAQAccordion
              key={index}
              title={faq.question}
              content={faq.answer}
            />
          ))}
        </div>
      </section>
      <section className={styles.approach}>
        <div className="container">
          <h1>Our Approach</h1>

          <div className={styles.approach__box}>
            {approaches.map((approach, index) => (
              <div key={index} className={styles.approach__box_col}>
                <div className={styles.approach__box_img}>
                  <ExportedImage src={approach.img} width={92} height={92} />
                </div>
                <div className={styles.approach__box_text}>
                  <h2>{approach.title}</h2>
                  <p>{approach.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.looking}>
        <div className={`${"container"} ${styles.looking__container}`}>
          <div className={styles.looking__box}>
            <div className={styles.looking__box_img}>
              <ExportedImage
                src="/images/new-relia/background/techstack/node/look.png"
                width={255.9}
                height={387.17}
              />
            </div>
            <div className={styles.looking__box_text}>
              <h1>Looking for Other Services?</h1>
              <p>
                Explore our other related services to enhance the performance of
                your digital product.
              </p>
              <div className={`group-link  ${styles.looking__group_btn}`}>
                <Link href="/about-us" prefetch={false}>
                  <a
                    className={`btn btn--secondary ${styles.looking__group_btn__primary}`}
                  >
                    Explore All Services
                    <IconArrowRightWhite />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const works = await fetchAPI("/page-work");

  return {
    props: { works },
    revalidate: 1,
  };
}

export default TechStack;
