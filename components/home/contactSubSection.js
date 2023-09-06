import React from "react";

const ContactSubSection = React.memo(() => {
  return (
    <section className="sub-contact-section">
      <div className="container">
        <h3>
          We're always here to help you on your Relia journey,
          <br /> in any way we can.
        </h3>
        <div>
          <a href="/contact" className="solid-button">Contact us</a>
        </div>
      </div>
    </section>
  );
});
export default ContactSubSection;
