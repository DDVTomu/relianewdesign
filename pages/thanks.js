import React from "react"
import Layout from "@components/common/layout"
import SEO from "@components/seo"

const ThankYou = () => {
  const seo = {
    metaTitle: "Thank You | Relia Software",
    metaDescription: "Thank You ! We have received your enquiry & will get back to you at the earliest.",
    // shareImage: ogpImage,
    article: true,
  };
  return (
    <Layout>
      <SEO seo={seo} />
      <div className="main">
        <div className="container" style={{ textAlign: "center" }}>
          <h1>Thank You !</h1>
          <p>
            We have received your enquiry & will get back to you at the earliest.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default ThankYou
