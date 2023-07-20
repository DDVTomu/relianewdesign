import React from "react";
import { Link } from "next/link";
import PageTitle from "@components/pageTitle";
import Layout from "@components/common/layout";
import { ListCareers, BenefitsSlide } from "@components/careers";
import SEO from "@components/seo";
import Animation from "@components/common/Animation";
import Image from "next/image";
import ogpImage from "assets/images/careers-relia.jpg";
import { fetchAPI } from "@lib/api";
import _ from "lodash";
import { useEffect } from "react";
import styles from "./careers.module.scss";

function groupByCategory(data = []) {
  if (!data?.length) {
    return [];
  }
  const formattedData = data.map((item) => {
    const attributes = item.attributes;
    const category = attributes?.career_category?.data?.attributes?.name;
    const thumnail = attributes?.thumnail?.data?.attributes?.url;

    return { ...attributes, category, thumnail };
  });
  return _.map(
    _.groupBy(formattedData, (career) => career.category),
    (careers, category) => {
      return {
        expert: category,
        items: careers,
      };
    }
  );
}

const CareerPage = ({ careers }) => {
  const seo = {
    metaTitle: "Careers | Reliasoftware",
    metaDescription: "We work with awesome people, reasons to join us!",
    shareImage: ogpImage,
    article: true,
  };
  useEffect(() => {
    // history.scrollRestoration = "manual";
  }, []);
  return (
    <Layout>
      <SEO seo={seo} />
      <PageTitle
        title="Careers"
        subtitle="We work with awesome people, reasons to join us!"
      />
      <div className={`${"main"} ${styles.main}`}>
        <div className="container">
          <div className="box-media">
            <Animation className="box-media__text">
              <h2 className="hdg-lv2">
                Grow <span>Your Career</span> by Joining Relia
              </h2>
              <p>
                At Relia, our team is passionate about using technology to make
                the everyday person’s life better. We’re looking for driven
                people who making it easy and convenient for everyone.
              </p>
              <p>
                Want to join an innovative team where you’ll constantly be
                inspired by your co-workers and projects? Relia might be the
                perfect team for you! We admire and reward creativity and
                teamwork so check out some of our career opportunities to see if
                there is a fit for you at our vibrant company. We’d love to hear
                from you!
              </p>
            </Animation>
            <Animation className="box-media__img">
              <Image
                alt=""
                src="/images/careers/pexels-photo.jpg"
                width={980}
                height={656}
                layout="intrinsic"
                loading="eager"
                priority={true}
              />
            </Animation>
          </div>
          <div className="core-values">
            <Animation>
              <h2 className="hdg-lv2">
                Our team shares <span>core values</span>
              </h2>
            </Animation>
            <div className="our-blockchain">
              <Animation className="our-blockchain__col">
                <h3>Innovation</h3>
                <p>
                  We are a team of engineers and designers, and we hold the
                  products we craft to the highest standard. We truly believe
                  that a great team consists of awesome and diverse people.
                </p>
              </Animation>
              <Animation className="our-blockchain__col">
                <h3>Efficiency</h3>
                <p>
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing softker including versions of Lorem Ipsum
                </p>
              </Animation>
              <Animation className="our-blockchain__col">
                <h3>Knowledgeable</h3>
                <p>
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy.
                </p>
              </Animation>
            </div>
          </div>
        </div>
        <div className="employee-benefits">
          <div className="container">
            <Animation className="box-heading">
              <h2 className="hdg-lv2">
                Employee <span>Benefits</span>
              </h2>
              <p className="hdg-lv2-sub">
                Our employees matter. That’s why we offer paid time off, 401k
                match, and competitive salaries. Plus some extras you might not
                expect.
              </p>
            </Animation>
            <div className="our-blockchain">
              <Animation className="our-blockchain__col">
                <Image
                  alt="Flexible Work Hours"
                  src="/images/careers/desk.svg"
                  width={75}
                  height={75}
                  layout="intrinsic"
                  loading="eager"
                />
                <h3>Flexible Work Hours</h3>
                <p>
                  Our team works around different schedules and needs, while
                  always staying connected.
                </p>
              </Animation>
              <Animation className="our-blockchain__col">
                <Image
                  alt="Casual Dress"
                  src="/images/careers/shirts.svg"
                  width={73}
                  height={72}
                  layout="intrinsic"
                  loading="eager"
                />
                <h3>Casual Dress</h3>
                <p>
                  Wear clothes that make you feel comfortable because we are
                  casual, we don’t require business attire when you’re in the
                  office.
                </p>
              </Animation>
              <div className="our-blockchain__col">
                <Image
                  alt="Health Insurance"
                  src="/images/careers/stethoscope01.svg"
                  width={73}
                  height={73}
                  layout="intrinsic"
                  loading="eager"
                />
                <h3>Health Insurance</h3>
                <p>
                  Receive full coverage for you and your family. If it’s one
                  thing we’re good at, it’s insurance.
                </p>
              </div>
              <Animation className="our-blockchain__col">
                <Image
                  alt="Fully Stocked Kitchen"
                  src="/images/careers/coffee-cup.svg"
                  width={81}
                  height={71}
                  layout="intrinsic"
                  loading="eager"
                />
                <h3>Fully Stocked Kitchen</h3>
                <p>
                  With the open-source mobile app development framework we
                  provide result-oriented mobile app development services for
                  your business & enterprise.
                </p>
              </Animation>
              <Animation className="our-blockchain__col">
                <Image
                  alt="Learning & Development"
                  src="/images/careers/learning.svg"
                  width={76}
                  height={76}
                  layout="intrinsic"
                  loading="eager"
                />
                <h3>Learning & Development</h3>
                <p>
                  Continuous improvement is key so we provide the opportunity to
                  attend conference or classes.
                </p>
              </Animation>
              <Animation className="our-blockchain__col">
                <Image
                  alt="Competitive Salaries"
                  src="/images/careers/money.svg"
                  width={80}
                  height={76}
                  layout="intrinsic"
                  loading="eager"
                />
                <h3>Competitive Salaries</h3>
                <p>
                  We believe good talent should receive good salaries so you
                  never have to think about it.
                </p>
              </Animation>
            </div>
            <Animation className="employee-benefits__slide">
              <BenefitsSlide />
            </Animation>
          </div>
        </div>
        <div className="container">
          <Animation className="box-heading">
            <h2 className="hdg-lv2">
              We’re always searching for great{" "}
              <span className="text-white">talent</span>
            </h2>
            <p className="hdg-lv2-sub">
              We’re a team of engineers, designers, and insurance experts ready
              to revolutionize the insurance buying experience.
              <br />
              If this sounds like an exciting opportunity to you, learn about
              the positions that we have open today
            </p>
          </Animation>
          <ListCareers data={careers} />
          <div className="box-media">
            <Animation className="box-media__img">
              <Image
                alt=""
                src="/images/careers/Job-Search.png"
                width={972}
                height={920}
                layout="intrinsic"
                loading="eager"
              />
            </Animation>
            <Animation className="box-media__text">
              <h2 className="hdg-lv2">
                We bring amazing people <span>together</span> to make amazing
                things happen
              </h2>
              <p>
                Our team of experts leverage their profound eCommerce
                Development expertise to create custom online stores,
                integrations and applications.
              </p>
              <p>
                Whether you’re a startup or Fortune 500 company, Relia has the
                team and knowledge needed to deliver web solutions to boost your
                online business. Contact us today!
              </p>
              <a className="btn" href="/contact">
                CONTACT US TODAY
              </a>
            </Animation>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const careers = await fetchAPI(
    "careers?pagination[pageSize]=100&populate=*&sort[0]=publishedAt:DESC"
  );
  const data = careers?.data ?? [];
  if (!data) {
    return {
      props: { careers: [] },
    };
  }
  const careersData = groupByCategory(data);

  return {
    props: { careers: careersData },
  };
}

export default CareerPage;
