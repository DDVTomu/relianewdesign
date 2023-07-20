// import ReactMarkdown from "react-markdown";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/common/layout";
import Link from "next/link"
import ExportedImage from "next/image";
import Seo from "@components/seo";

import styles from "./index.module.scss";
const TechStack = ({ works }) => {
  const seo = {
    metaTitle: works.metaTitle || "Tech Stack",
    metaDescription: works.description || "Tech Stack",
    // shareImage: article.image,
    article: true,
  };

  const applications = [
    {
      title: "OUR Backend TECH STACK",
      apps: [
        {
          img: "/images/new-relia/background/techstack/be/span.png",
          title: "Ruby on Rails",
          href : "/services/"
        },
        {
          img: "/images/new-relia/background/techstack/be/span-7.png",
          title: "Node.js",
          href : "/services/nodejs-development/"
        },
        {
          img: "/images/new-relia/background/techstack/be/span-1.png",
          title: "Django",
          href : "/services/"
        },
        {
          img: "/images/new-relia/background/techstack/be/span-3.png",
          title: "ASP.NET",
          href : "/services/net-web-development"
        },
        {
          img: "/images/new-relia/background/techstack/be/span-2.png",
          title: "Java",
          href : "/services/angularjs-development"
        },
        {
          img: "/images/new-relia/background/techstack/be/span-6.png",
          title: "Python",
          href : "/services/python-app-development"
        },
        {
          img: "/images/new-relia/background/techstack/be/span-5.png",
          title: "PHP",
          href : "/services/"
        },
        {
          img: "/images/new-relia/background/techstack/be/span-4.png",
          title: "Golang",
          href : "/services/golang-web-development"
        },
      ],
    },

    {
      title: "OUR FrontEnd TECH STACK",
      apps: [
        {
          img: "/images/new-relia/background/techstack/fe/span.png",
          title: "React.js",
          href : "/services/reactjs-development"
        },
        {
          img: "/images/new-relia/background/techstack/fe/span-1.png",
          title: "Vue.js",
          href : "/services/"
        },
        {
          img: "/images/new-relia/background/techstack/fe/span-2.png",
          title: "Angular",
          href : "/services/angularjs-development"
        },
        {
          img: "/images/new-relia/background/techstack/fe/span-3.png",
          title: "JavaScript",
          href : "/services/"
        },
        {
          img: "/images/new-relia/background/techstack/fe/span-4.png",
          title: "Next.js",
          href : "/services/next-js-development"
        },
      ],
    },

    {
      title: "Mobile TECH STACK",
      apps: [
        {
          img: "/images/new-relia/background/techstack/mobile/span.png",
          title: "Android",
          href : "/services/mobile-app-development"
        },
        {
          img: "/images/new-relia/background/techstack/mobile/span-4.png",
          title: "Kotlin",
          href : "/services/"
        },
        {
          img: "/images/new-relia/background/techstack/mobile/span-1.png",
          title: "iOS",
          href : "/services/mobile-app-development"
        },
        {
          img: "/images/new-relia/background/techstack/mobile/span-5.png",
          title: "Swift",
          href : "/services/"
        },
        {
          img: "/images/new-relia/background/techstack/mobile/span-2.png",
          title: "React Native",
          href : "/services/react-native-app-development"
        },
        {
          img: "/images/new-relia/background/techstack/mobile/span-3.png",
          title: "Flutter",
          href : "/services/flutter-app-development"
        },
      ],
    },
  ];
  return (
    <Layout>
      <Seo seo={seo} />
      <section className={styles.hero}>
        <div className={` ${"container"} ${styles.hero__container}`}>
          <div className={styles.hero__header_box}>
            {" "}
            <div className={styles.hero__top_header}>
              <h1 className={styles.hero__top_header__heading}>
                <span>Build Your App With Right</span>
                <br />
                Tech Stack
              </h1>
              <p>
                We offer a suite of services tailored to
                <br /> your business needs.
              </p>
              <a href="/contact" className={styles.hero__top_header__button}>
                get started
              </a>
            </div>
          </div>
        </div>
        <div className={styles.hero__bg_ellipse_1}>
          <ExportedImage
            src="/images/new-relia/background/services/service-ellipse-1.png"
            width={376}
            height={564}
            objectFit="contain"
            priority={true}
          />
        </div>
        <div className={styles.hero__bg_ellipse_2}>
          <ExportedImage
            src="/images/new-relia/background/services/service-ellipse-2.png"
            width={476}
            height={664}
            objectFit="contain"
            priority={true}
          />
        </div>

      </section>
      <section className={styles.applications}>
        <div className="container">
          <div className={styles.applications__header}>
            <h2>
              Our choice of tech stack is motivated by application architecture
              for feasible maintenance.
            </h2>
          </div>
          <div className={styles.applications__apps}>
            {applications.map((application, index) => (
              <div key={index}>
                <h2>{application.title}</h2>
                <ul className={styles.applications__list}>
                  {application.apps.map((app, index) => (
                    <li key={index}>
                      <Link href={app.href || '#'}>
                        <a>
                          <ExportedImage
                            src={app.img}
                            width={22}
                            height={28}
                            objectFit="contain"
                          />
                          <span>{app.title}</span>
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
