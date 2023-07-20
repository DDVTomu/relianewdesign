// import ReactMarkdown from "react-markdown";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/common/layout";
// import Image from "../../components/common/image";
import ExportedImage from "next/image";
import Seo from "@components/seo";
import Link from "next/link";

import IconArrowRight from "@components/common/Icon/IconArrowRight";
import FAQAccordion from "@components/common/FAQAccordion/FAQAccordion";
import IconArrowRightWhite from "@components/common/Icon/IconArrowRightWhite";

import styles from "./inner2.module.scss";
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
      question: "Can React Native be used for both web and mobile?",
      answer:
        "Developers can consolidate a React Native app into a single codebase using React Native Web, eliminating the need to develop and manage two codebases for mobile and web and without sacrificing app performance. Their apps will look and work just as well on the web as they do on mobile devices.",
    },
    {
      question: "How long does it take to build a React Native App?",
      answer:
        "Developers can consolidate a React Native app into a single codebase using React Native Web, eliminating the need to develop and manage two codebases for mobile and web and without sacrificing app performance. Their apps will look and work just as well on the web as they do on mobile devices.",
    },
  ];

  const counts = [
    { no: "01", title: "Blazing Fast Performance<br/>and Speed" },
    { no: "02", title: "Reusable Code" },
    { no: "03", title: "Rapid Multi-platform<br/>Development" },
    { no: "04", title: "Live Reload" },
    { no: "05", title: "Open Source" },
    { no: "06", title: "Great Developer Tools" },
  ];

  const offers = [
    {
      name: "Zoo App",
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

  const platforms = [
    {
      frontend: [
        "JavaScript",
        "Type Script",
        "Angular",
        "React Js",
        "Vue Js",
        "Backbone JS",
        "Ember.js",
        "Bootstrap",
        "HTML5",
        "CSS3",
      ],
      backend: [
        "Laravel",
        "Node.js",
        "GOlang",
        "Python",
        "Meteor.js",
        "ExpressJs",
        "Ruby on Rails",
        "Magento",
        "PHP",
      ],
      database: [
        "Laravel",
        "Node.js",
        "GOlang",
        "Python",
        "Meteor.js",
        "ExpressJs",
        "Ruby on Rails",
        "Magento",
        "PHP",
      ],
      designtool: [
        "Illustrator",
        "Adobe XD",
        "Photoshop",
        "After Effects",
        "Sketch",
        "Figma",
        "InVision",
        "Zeplin",
      ],
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
                Java Script<span>Java Script</span>
              </h1>
              <h2 className={styles.hero__top_header__heading_h2}>
                Development Services
              </h2>
              <div className={styles.hero__top_header__deco}></div>
            </div>
            <div className={styles.hero__top_img}>
              <ExportedImage
                src="/images/new-relia/background/techstack/javascript/hero.png"
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
                  We Provide Full Stack JavaScript
                  <br />
                  Development Solutions to Meet your
                  <br />
                  Business Needs.
                </h2>
                <h3>Top JavaScript Development Company</h3>
                <div className={styles.brands__col__paragraph}>
                  <p>
                    With expert JavaScript developer on board, we provide all
                    JavaScript development services to match your business
                    needs. JavaScript popularly known as JS, is a high-level,
                    Scalable and reliable language.
                  </p>
                  <p>
                    JavaScript is nowadays well known technology for front-end
                    along with CSS and HTML. With the use of JavaScript, we can
                    create interactive web pages and so why many of popular
                    websites are migrating them self to JavaScript. Being one of
                    the top-rated JavaScript development companies, we have
                    expertise in developing a JS development solution to meet
                    your business requirements.
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
      <section className={` ${styles.assist}`}>
        <div className={styles.assist__img_bg_1}>
          <ExportedImage
            src="/images/new-relia/background/techstack/javascript/ellipse-3.png"
            width={500}
            height={764}
          />
        </div>
        <div className={` ${"container"} ${styles.assist__container}`}>
          <div className={styles.assist__box__text}>
            <h1 Id="ecommerce">
              Neque porro quisquam est qui
              <br />
              dolorem ipsum quia dolor sit amet
            </h1>
          </div>
          <div className={styles.assist__inner}>
            <div className={styles.assist__col}>
              <div className={styles.assist__col__icon}>
                <ExportedImage
                  src="/images/new-relia/background/Full-cycle-product-development/services-inner2-bg-4.png"
                  width={506}
                  height={253}
                  layout="responsive"
                  objectFit="cover"
                />
              </div>

              <div className={styles.assist__col__title}>
                Front-end JS Development
              </div>
              <p>
                Front-end JavaScript is used to develop dynamic web pages and
                respond to events that take place on the page.
              </p>
              <div className={styles.assist__col__grid_logo}>
                <div>
                  <div>
                    <ExportedImage
                      src="/images/new-relia/background/techstack/javascript/dev-1.png"
                      width={60}
                      height={60}
                      objectFit="cover"
                    />
                  </div>
                  <h3>
                    Angular
                    <br />
                    Development
                  </h3>
                </div>
                <div>
                  <div>
                    <ExportedImage
                      src="/images/new-relia/background/techstack/javascript/dev-2.png"
                      width={60}
                      height={60}
                      objectFit="cover"
                    />
                  </div>
                  <h3>
                    ReactJS
                    <br />
                    Development
                  </h3>
                </div>
                <div>
                  <div>
                    <ExportedImage
                      src="/images/new-relia/background/techstack/javascript/dev-3.png"
                      width={60}
                      height={60}
                      objectFit="cover"
                    />
                  </div>
                  <h3>
                    VueJS
                    <br />
                    Development
                  </h3>
                </div>
              </div>
            </div>
            <div className={styles.assist__col}>
              <div className={styles.assist__col__icon}>
                <ExportedImage
                  src="/images/new-relia/background/Full-cycle-product-development/services-inner2-bg-5.png"
                  width={506}
                  height={253}
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
              <div className={styles.assist__col__title}>
                Back-end JS Development
              </div>
              <p>
                Back-end JavaScript is used to manage simultaneous web page
                requests, data transfers, and general server tasks.
              </p>
              <div className={styles.assist__col__grid_logo}>
                <div>
                  <div>
                    <ExportedImage
                      src="/images/new-relia/background/techstack/javascript/dev-4.png"
                      width={60}
                      height={60}
                      objectFit="cover"
                    />
                  </div>
                  <h3>
                    Node.js
                    <br />
                    Development
                  </h3>
                </div>
                <div>
                  <div>
                    {" "}
                    <ExportedImage
                      src="/images/new-relia/background/techstack/javascript/dev-5.png"
                      width={60}
                      height={60}
                      objectFit="cover"
                    />
                  </div>
                  <h3>
                    Meteor
                    <br />
                    Development
                  </h3>
                </div>
                <div>
                  <div>
                    {" "}
                    <ExportedImage
                      src="/images/new-relia/background/techstack/javascript/dev-6.png"
                      width={60}
                      height={60}
                      objectFit="cover"
                    />
                  </div>
                  <h3>
                    Express.js
                    <br />
                    Development
                  </h3>
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
                End-to-End JavaScript Development
                <br />
                Services to Create Next-gen Web and
                <br /> Mobile Applications
              </h1>
              <div className={`${styles.establish__box}`}>
                <div className={styles.establish__box__img}>
                  {/* <div className={styles.establish__box__img_inner_img}></div>{" "} */}
                  <ExportedImage
                    src="/images/new-relia/background/techstack/react/react-5.png"
                    width={614}
                    height={405}
                    layout="responsive"
                    objectFit="contain"
                    alt="establish-image-1"
                  />
                </div>
                <div className={styles.establish__box__text}>
                  <p className={styles.establish__box__desc}>
                    On early days of JavaScript, it was only implemented on
                    client-side browser. But, now a day JS emerge rapidly and it
                    can work as a server-side technology and Node.JS is best
                    example of it. As it can be used on Front-end and Back-end,
                    JavaScript is useful for single page website to Mobile app
                    development
                    <br />
                    <br />. As a leading JavaScript development company,
                    MindInventory offers a complete range of full-stack JS
                    services to the clients worldwide:
                  </p>
                  <div className={styles.establish__box__list}>
                    <ul>
                      <li>Front-end UI Development</li>
                      <li>Backend Development</li>
                      <li>Mobile App Development</li>
                      <li>Web Development</li>
                    </ul>
                    <ul>
                      <li>Desktop App Development</li>
                      <li>Enterprise Development</li>
                      <li>Maintenance and Support</li>
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
      <section className={styles.why}>
        <div className="container">
          <div className={styles.why__inner}>
            <div className={styles.why__inner__info}>
              <div className={`${styles.why__box}`}>
                <div className={styles.why__box__img}>
                  <div className={styles.why__box__grey_bg}>
                    <h2>Why Choose</h2>
                    <h1>Java Script</h1>
                    <h3>
                      for Web & <br />
                      App Development
                    </h3>
                  </div>
                </div>
                <div className={styles.why__box__text}>
                  <h2>
                    Leverage JavaScript Frameworks and Libraries to Deliver
                    Highly Functional Web and Mobile Apps
                  </h2>
                  <p>
                    Undoubtedly, JavaScript is a preferred language to build
                    robust software solutions due to its powerful features and
                    flexibility. Here are some of the top benefits of using
                    JavaScript for web and app development:
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.listcount}>
        <div className={`${"container"} ${styles.listcount__container}`}>
          <div className={styles.listcount__box}>
            <ol>
              <li>1. Quick and Responsive</li>
              <p>
                JavaScript is capable to reduce response time which makes your
                web pages faster and responsive to users.
              </p>
              <li>2. Rich Interfaces</li>
              <p>
                Any kinds of technology you use on the server, JavaScript able
                to provide wonderful front-end as well as back-end experience.
              </p>
              <li>3. Efficiency</li>
              <p>
                JavaScript code is processed on the user’s system that allows
                for lighter, faster and more efficient apps.
              </p>
            </ol>
            <ol start="4">
              <li>4. Simplicity</li>
              <p>
                Any kinds of technology you use on the server, JavaScript able
                to provide wonderful front-end as well as back-end experience.
              </p>
              <li>5. Rich Interfaces</li>
              <p>
                JavaScript can be used to create many types of components that
                enhance the user interface and experience of a website and an
                application.
              </p>
            </ol>
          </div>
        </div>
      </section>
      <section className={styles.platform}>
        <div className="container">
          <h1>
            We Use Time-Tested React Native
            <br /> Languages & Frameworks To Make Your App
            <br /> Multi-Platform
          </h1>
          <div className={styles.platform__menu}>
            <div className={styles.platform__menu__col}>Frontend</div>
            <div className={styles.platform__menu__col}>Backend</div>
            <div className={styles.platform__menu__col}>Backend</div>
            <div className={styles.platform__menu__col}>Backend</div>
          </div>

          <div className={styles.platform__box}>
            {platforms.map((platform, index) => (
              <div key={index} className={styles.platform__flex}>
                <div className={styles.platform__flex_title}>
                  {platform.frontend.map((fe, index) => (
                    <p key={index}>{fe}</p>
                  ))}
                </div>
                <div className={styles.platform__flex_title}>
                  {platform.backend.map((be, index) => (
                    <p key={index}>{be}</p>
                  ))}
                </div>
                <div className={styles.platform__flex_title}>
                  {platform.database.map((db, index) => (
                    <p key={index}>{db}</p>
                  ))}
                </div>
                <div className={styles.platform__flex_title}>
                  {platform.designtool.map((dt, index) => (
                    <p key={index}>{dt}</p>
                  ))}
                </div>
              </div>
            ))}
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
                    <h1>MindInventory</h1>
                    <h3>
                      for JavaScript
                      <br /> Development
                    </h3>
                  </div>
                  <p>
                    Being a well-known JavaScript development company,
                    MindInventory is recognized for serving modern business
                    needs and delivering the best-in-class solutions at a
                    competitive cost across the globe. Here’s why we can be the
                    best choice when it comes to building JavaScript based apps:
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
                        We have a dedicated team of JavaScript developers who
                        are well versed in delivering high-end business
                        solutions on several frameworks and technologies.
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
                      <li>Integrity & Transparency</li>
                      <p>
                        We respect your ideas and vision, provide you every
                        small project detail regularly, and consider your worthy
                        advice when and as needed.
                      </p>
                      <li>Competitive Pricing</li>
                      <p>
                        We offer an ideal combination of cost-effective rates
                        with amazing quality to make sure the lowest pricing in
                        our segment.
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
          <h1>Answers to Your FAQs About React Native App Development</h1>
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
