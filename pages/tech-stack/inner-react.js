// import ReactMarkdown from "react-markdown";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/common/layout";
// import Image from "../../components/common/image";
import ExportedImage from "next/image";
import Seo from "@components/seo";
import Link from "next/link";

import IconArrowRight from "@components/common/Icon/IconArrowRight";
import FAQAccordion from "@components/common/FAQAccordion/FAQAccordion";

import styles from "./inner1.module.scss";
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

  const logos = [
    { src: "/images/new-relia/background/techstack/react/react-1.png" },
    { src: "/images/new-relia/background/techstack/react/react-2.png" },
    { src: "/images/new-relia/background/techstack/react/react-3.png" },
    { src: "/images/new-relia/background/techstack/react/react-4.png" },
  ];

  const offers = [
    {
      name: "Planing",
      img: "/images/new-relia/background/techstack/react/product-react-1.png",
    },
    {
      name: "Design",
      img: "/images/new-relia/background/techstack/react/product-react-2.png",
    },
    {
      name: "Single Codebase Development",
      img: "/images/new-relia/background/techstack/react/product-react-3.png",
    },
    {
      name: "Quality Assurance",
      img: "/images/new-relia/background/techstack/react/product-react-4.png",
    },
  ];

  const platforms = [
    {
      title: "Languages",
      icons: [
        "/images/new-relia/background/techstack/react/iconset/iconset-1.png",
        "/images/new-relia/background/techstack/react/iconset/iconset-10.png",
      ],
    },
    {
      title: "Navigation",
      icons: [
        "/images/new-relia/background/techstack/react/iconset/iconset-2.png",
      ],
    },
    {
      title: "Utilities",
      icons: [
        "/images/new-relia/background/techstack/react/iconset/iconset-3.png",
      ],
    },
    {
      title: "Middleware",
      icons: [
        "/images/new-relia/background/techstack/react/iconset/iconset-4.png",
      ],
    },
    {
      title: "Networking",
      icons: [
        "/images/new-relia/background/techstack/react/iconset/iconset-5.png",
        "/images/new-relia/background/techstack/react/iconset/iconset-11.png",
        "/images/new-relia/background/techstack/react/iconset/iconset-15.png",
      ],
    },
    {
      title: "Testing",
      icons: [
        "/images/new-relia/background/techstack/react/iconset/iconset-6.png",
        "/images/new-relia/background/techstack/react/iconset/iconset-12.png",
        "/images/new-relia/background/techstack/react/iconset/iconset-16.png",
      ],
    },
    {
      title: "App State",
      icons: [
        "/images/new-relia/background/techstack/react/iconset/iconset-7.png",
        "/images/new-relia/background/techstack/react/iconset/iconset-13.png",
        "/images/new-relia/background/techstack/react/iconset/iconset-17.png",
      ],
    },
    {
      title: "Forms",
      icons: [
        "/images/new-relia/background/techstack/react/iconset/iconset-8.png",
        "/images/new-relia/background/techstack/react/iconset/iconset-14.png",
        "/images/new-relia/background/techstack/react/iconset/iconset-18.png",
      ],
    },
    {
      title: "Forms",
      icons: [
        "/images/new-relia/background/techstack/react/iconset/iconset-9.png",
      ],
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
                React Native
                <br />
                App Development
              </h1>
              <p>
                Offer native-like experiences to your users in half the
                development time and cost with our react native app development
                establish.
              </p>
              <div className={`group-link  ${styles.hero__group_btn}`}>
                <Link href="/about-us" prefetch={false}>
                  <a
                    className={`btn btn--secondary ${styles.hero__group_btn__primary}`}
                  >
                    Contact Our React Native Experts
                  </a>
                </Link>
              </div>
            </div>
            <div className={styles.hero__top_img}>
              <ExportedImage
                src="/images/new-relia/background/techstack/react/frame-tech.png"
                width={553}
                height={582}
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
            {logos.map((logo, index) => (
              <div key={index} className={styles.brands__col}>
                <div className={styles.brands__col__icon}>
                  <ExportedImage
                    src={logo.src}
                    width={200}
                    height={102.81}
                    objectFit="contain"
                  />
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
                  <h1>
                    React Native App
                    <br />
                    Development
                    <br /> services
                  </h1>
                  <p>
                    Our react native app developer team develop react native
                    apps from scratch or add the framework to your existing
                    application with a single-point agenda to expedite your app
                    delivery without adding any extra react native app
                    development cost.
                  </p>
                  <div className={styles.services__box__link}>
                    <Link href="/industries/inner" prefetch={false}>
                      <a>Start Building your react native app</a>
                    </Link>
                  </div>
                </div>
                <div className={styles.services__box__text}>
                  <div className={styles.services__list}>
                    <ul className={styles.services__list__direction}>
                      <li>React Native App Ideation & Consulting</li>
                      <p>
                        React Native application development comes with a number
                        of benefits for SMEs and Enterprises alike, but the
                        framework doesn’t fit all development scenarios. Our
                        react native mobile app developer sits with you to
                        understand your product vision and find the best way in
                        which React Native can be aligned with your business
                        goals.
                      </p>
                      <li>App Development With React Native</li>
                      <p>
                        Our end-to-end react native mobile app development
                        process is designed to take care of your full-cycle
                        development needs. Our team works on everything from
                        design, development to testing and development, ensuring
                        that your product becomes a validation of high app
                        performance in your sector.
                      </p>
                      <li>React Native Migration</li>
                      <p>
                        We help you migrate your current iOS or Android
                        application into a React Native application with our
                        migration expertise. Our react native mobile app
                        development company deployment experts ensure that your
                        users’ performance remains glitch-free as we take your
                        app to other mobile platforms, web, and smart devices.
                      </p>
                    </ul>
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
                Full-Cyle Product
                <br /> Development
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
                    Backed by the robustness of Facebook and ease of JavaScript,
                    React Native puts a stop to the age-old dilemma that mobile
                    app entrepreneurs face when choosing a budget-effective
                    solution to react native app development cost. We are the
                    react native app development company USA that uses the React
                    Native framework to help you develop an app that offers a
                    native-like UX and is a lot faster to create and operate.
                    <br />
                    <br />
                    We excel in delivering applications that have near-native
                    quality and are built in the low development time and
                    efforts. As a leading React Native app development company,
                    we have extremely refined approaches and methods that help
                    us successfully deploy hundreds of innovative solutions
                    globally. With our React native mobile app development
                    company USA, we are there to help you with your requirements
                    anytime and at any place.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.count}>
        <div className="container">
          <div className={styles.count__grid}>
            {counts.map((count, index) => (
              <div key={index} className={styles.count__grid__col}>
                <h1>{count.no}</h1>
                <h2
                  dangerouslySetInnerHTML={{
                    __html: count.title,
                  }}
                ></h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={` ${styles.how}`}>
        <div className={` ${"container"} ${styles.how__container}`}>
          <div className={`${styles.how__inner_head}`}>
            <h1>
              React Native Projects Built to
              <br /> Accelerate Business Revenue
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className={`${styles.how__inner}`}>
            <div className={`${styles.how__inner__col} ${styles.how__desc}`}>
              <div className={styles.how__desc__col}>
                <h2>Lobget</h2>
                <p>
                  Backed by the robustness of Facebook and ease of JavaScript,
                  React Native puts a stop to the age-old dilemma that mobile
                  app entrepreneurs face when choosing a budget-effective
                  solution to react native app development
                </p>
                <div className={styles.how__desc__grid}>
                  <div className={styles.how__desc__grid_col}>
                    <h1>$2.1m</h1>
                    <h2>Funding Received</h2>
                  </div>
                  <div className={styles.how__desc__grid_col}>
                    <h1>150k</h1>
                    <h2>Jobseekers Placed</h2>
                  </div>
                  <div className={styles.how__desc__grid_col}>
                    <h1>30s</h1>
                    <h2>
                      Submission time
                      <br /> Brought down from hours
                    </h2>
                  </div>
                </div>
                <div className={styles.how__desc__col__link}>
                  <Link href="/industries/inner" prefetch={false}>
                    <a>Read Full Study</a>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className={`${styles.how__inner__col} ${styles.how__desc_img}`}
            >
              <div className={styles.how__img}>
                <ExportedImage
                  src="/images/new-relia/background/techstack/react/react-6.png"
                  width={412}
                  height={368}
                  layout="responsive"
                  objectFit="cover"
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
              Your Product Idea Needs a Result
              <br /> Oriented Execution
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
          </div>

          <div className={styles.platform__box}>
            {platforms.map((platform, index) => (
              <div key={index} className={styles.platform__flex}>
                <div className={styles.platform__flex_title}>
                  {platform.title}
                </div>
                <div className={styles.platform__flex_icons}>
                  {platform.icons.map((icon, index) => (
                    <div
                      key={index}
                      className={styles.platform__flex_icons__icon}
                    >
                      <ExportedImage src={icon} width={32} height={32} />
                    </div>
                  ))}
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
