import React from "react";
import PageTitle from "@components/pageTitle";
import Layout from "@components/common/layout";
import { ContactSection } from "@components/home";
import SEO from "@components/seo";
// import { Gmaps, Marker, InfoWindow } from "react-gmaps"
import Image from "next/image";
// import location from "@images/location.png"
import Animation from "@components/common/Animation";
import ogpImage from "assets/images/contact-relia.jpg";

const ContactPage = () => {
  const seo = {
    metaTitle: "Contact us | Relia Software",
    metaDescription:
      "Describe your project and leave us your contact info, we’ll get back to you within 24 hours.",
    shareImage: ogpImage,
    article: true,
  };
  return (
    <Layout>
      <SEO seo={seo} />
      <PageTitle
        title="Contact us"
        subtitle="Describe your project and leave us your contact info, we’ll get back to you within 24 hours."
      />
      <div className="main-contact">
        <ContactSection />
        <div className="container">
          <div className="contact-box">
            <Animation className="contact-box-col">
              <Image
                alt=""
                src="/images/icon/icon-pin.svg"
                width={42}
                height={52}
                layout="intrinsic"
                loading="eager"
              />
              <h3>Our Location</h3>
              <p>
                Golden Bee Building, Nguyen Kiem Street, Phu Nhuan District, Ho
                Chi Minh City, Vietnam.
              </p>
            </Animation>
            <Animation className="contact-box-col">
              <Image
                alt=""
                src="/images/icon/icon-email.svg"
                width={52}
                height={38}
                layout="intrinsic"
                loading="eager"
              />
              <h3>Email & Phone</h3>
              <p>
                sales@reliasoftware.com
                <br />
                (+84) 972 016 100
              </p>
            </Animation>
            <Animation className="contact-box-col">
              <Image
                alt=""
                src="/images/icon/icon-like.svg"
                width={46}
                height={46}
                layout="intrinsic"
                loading="eager"
              />
              <h3>Get In Touch</h3>
              <p>Also find us social media below</p>
            </Animation>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ContactPage;
