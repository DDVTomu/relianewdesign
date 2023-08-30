// import ReactMarkdown from "react-markdown";
import React, { useState } from "react";
import { fetchAPI } from "../../lib/api";
import dynamic from "next/dynamic";
import Layout from "../../components/common/layout";
import Link from "next/link";
import ExportedImage from "next/image";
import Seo from "@components/seo";
const QuoteSection = dynamic(() => import("@components/home/quoteSection"));
import styles from "./index.module.scss";
import PageTitle from "@components/pageTitle";
const ContactSubSection = dynamic(() =>
  import("@components/home/contactSubSection")
);
const TechStack = ({ tech }) => {
  tech?.map((data) => console.log(data));
  const seo = {
    metaTitle: "Tech Stack | Relia Software",
    metaDescription: "Tech Stack",
    // shareImage: article.image,
    article: true,
  };

  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_SERVER;

  const applications = [
    {
      title: "Our Backend Tech Stack",
      apps: [
        {
          img: "/images/new-relia/background/techstack/be/span.png",
          title: "Ruby on Rails",
          href: "/services/",
          color: "#DF0000",
        },
        {
          img: "/images/new-relia/background/techstack/be/span-7.png",
          title: "Node.js",
          href: "/services/nodejs-development/",
          color: "#408A3B",
        },
        {
          img: "/images/new-relia/background/techstack/be/span-1.png",
          title: "Django",
          href: "/services/",
          color: "#002F1F",
        },
        {
          img: "/images/new-relia/background/techstack/be/span-3.png",
          title: "ASP.NET",
          href: "/services/net-web-development",
          color: "#0060A7",
        },
        {
          img: "/images/new-relia/background/techstack/be/span-2.png",
          title: "Java",
          href: "/services/angularjs-development",
          color: "#407999",
        },
        {
          img: "/images/new-relia/background/techstack/be/span-6.png",
          title: "Python",
          href: "/services/python-app-development",
          color: "#106A9B",
        },
        {
          img: "/images/new-relia/background/techstack/be/span-5.png",
          title: "PHP",
          href: "/services/",
          color: "#767BB7",
        },
        {
          img: "/images/new-relia/background/techstack/be/span-4.png",
          title: "Golang",
          href: "/services/golang-web-development",
          color: "#00AFDC",
        },
      ],
    },

    {
      title: "Our Frontend Tech Stack",
      apps: [
        {
          img: "/images/new-relia/background/techstack/fe/span.png",
          title: "React.js",
          href: "/services/reactjs-development",
          color: "#00A1D1",
        },
        {
          img: "/images/new-relia/background/techstack/fe/span-1.png",
          title: "Vue.js",
          href: "/services/",
          color: "#2E4A60",
        },
        {
          img: "/images/new-relia/background/techstack/fe/span-2.png",
          title: "Angular",
          href: "/services/angularjs-development",
          color: "#D50027",
        },
        {
          img: "/images/new-relia/background/techstack/fe/span-3.png",
          title: "JavaScript",
          href: "/services/",
          color: "#F09D00",
        },
        {
          img: "/images/new-relia/background/techstack/fe/span-4.png",
          title: "Next.js",
          href: "/services/next-js-development",
          color: "#282828",
        },
      ],
    },

    {
      title: "Mobile Tech Stack",
      apps: [
        {
          img: "/images/new-relia/background/techstack/mobile/span.png",
          title: "Android",
          href: "/services/mobile-app-development",
          color: "#00A133",
        },
        {
          img: "/images/new-relia/background/techstack/mobile/span-4.png",
          title: "Kotlin",
          href: "/services/",
          color: "#9F3AFF",
        },
        {
          img: "/images/new-relia/background/techstack/mobile/span-1.png",
          title: "iOS",
          href: "/services/mobile-app-development",
          color: "#000000",
        },
        {
          img: "/images/new-relia/background/techstack/mobile/span-5.png",
          title: "Swift",
          href: "/services/",
          color: "#FF4400",
        },
        {
          img: "/images/new-relia/background/techstack/mobile/span-2.png",
          title: "React Native",
          href: "/services/react-native-app-development",
          color: "#00A1D1",
        },
        {
          img: "/images/new-relia/background/techstack/mobile/span-3.png",
          title: "Flutter",
          href: "/services/flutter-app-development",
          color: "#00559F",
        },
      ],
    },
  ];

  const ListApp = (props) => {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = (e) => {
      setIsHover(true);
    };
    const handleMouseLeave = (e) => {
      setIsHover(false);
    };

    return (
      <li
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          backgroundColor: isHover
            ? `${props.app?.attributes.colorCode}68`
            : `#f9f9f9`,
        }}
      >
        <Link href={`/tech-stack/${props.app?.attributes.slug}` || "#"}>
          <a>
            <ExportedImage
              alt={props.app?.attributes.Icon.data?.attributes.alternativeText}
              src={`${strapiUrl}${props.app?.attributes.Icon.data?.attributes.url}`}
              width={22}
              height={28}
              objectFit="contain"
            />
            <span
              className={styles.apptitle}
              style={{
                color: isHover ? `#fff` : props.app?.attributes.colorCode,
              }}
            >
              {props.app.attributes.Tech}
            </span>
          </a>
        </Link>
      </li>
    );
  };

  return (
    <Layout>
      <Seo seo={seo} />
      <PageTitle
        title="Build Your App With Right Tech Stack"
        subtitle="We offer a suite of services tailored to your business needs."
      />
      <QuoteSection
        title="Our choice of tech stack is
              motivated by application
              architecture for feasible
              maintenance."
      />
      <section className={styles.applications}>
        <div className="container">
          <div className={styles.applications__apps}>
            {tech?.map((application, index) =>
              application.attributes.Tech.data.length > 0 ? (
                <div key={index}>
                  <h2>Our {application.attributes.Category} Tech Stack</h2>
                  <ul className={styles.applications__list}>
                    {application.attributes.Tech.data?.map((app, index) => (
                      <ListApp key={index} app={app} />
                    ))}
                  </ul>
                </div>
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </section>
      <ContactSubSection />
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const tech = await fetchAPI("techstack-categories?populate=*,Tech.Icon");

  const data = tech?.data ?? [];
  if (!data) {
    return {
      props: { tech: [] },
    };
  }

  return {
    props: { tech: data },
  };
}

export default TechStack;
