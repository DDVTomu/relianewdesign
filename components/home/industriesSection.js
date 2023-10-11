import Link from "next/link";
import React from "react"
import ExportedImage from "next/image";
import Animation from "@components/common/Animation"

const Industries = React.memo(() => (
  <div className="industries">
    <div className="container">
      <Animation>
        <h2 className="hdg-lv2" style={{ marginTop: 0 }}>
          <span>Industries</span>
        </h2>
      </Animation>
      <div className="industries__list">
        <div className="industries__list__col">
          <Animation className="item">
            <div className="item__icon">
              <ExportedImage
                src="/images/home/profits.png"
                width={93}
                height={86}
                layout="intrinsic"
                loading="lazy"
                alt="profits"
              />
            </div>
            <h4>
              <Link href="/industries/fintech-app-development/"><a>Fintech</a></Link>
            </h4>
            <p>
              For a top notch banking and seamless finance tracking, we have
              been building mobile apps that provide a vast experience to the
              end users. Our developers are well acquainted with the Fintech
              mobile app development trends.
            </p>
          </Animation>
          <Animation className="item">
            <div className="item__icon">
              <ExportedImage
                src="/images/home/travel.png"
                width={77}
                height={100}
                layout="intrinsic"
                loading="lazy"
                alt="travel"
              />
            </div>
            <h4>
              <Link href="/industries/travel-app-development"><a>Travel & Leisure</a></Link>
            </h4>
            <p>
              Focusing on the importance of visuals and their quality, a
              beautifully crafted travel mobile app development is our promise
              that will power your brand’s message. A vivid theming and styling
              can outline the travel mobile app by our team at Relia.
            </p>
          </Animation>
        </div>
        <div className="industries__list__col">
          <Animation className="item">
            <div className="item__icon">
              <ExportedImage
                src="/images/home/stethoscope.png"
                width={78}
                height={87}
                layout="intrinsic"
                loading="lazy"
                alt="travel"
              />
            </div>
            <h4>
              <Link href="/industries/healthcare-app-development"><a>Health & Fitness</a></Link>
            </h4>
            <p>
              Relia Software excels in creating bespoke solutions for health and
              fitness startups & enterprises by offering robust healthcare
              mobile app development. Keeping in view the increasing fitness
              awareness around, our fitness mobile apps are designed to cater to
              your contemporary needs.
            </p>
          </Animation>
          <Animation className="item">
            <div className="item__icon">
              <ExportedImage
                src="/images/home/reward.png"
                width={93}
                height={94}
                layout="intrinsic"
                loading="lazy"
                alt="reward"
              />
            </div>
            <h4>
              <Link href="/industries/loyalty-rewards-app-development"><a>Loyalty & Rewards</a></Link>
            </h4>
            <p>
              We understand the intricate detailing that goes in the loyalty app
              development and our team delivers an aesthetically proficient
              mobile app that can give you an edge over your competitors.
            </p>
          </Animation>
        </div>
        <div className="industries__list__col">
          <Animation className="item">
            <div className="item__icon">
              <ExportedImage
                src="/images/home/mortarboard.png"
                width={89}
                height={90}
                layout="intrinsic"
                loading="lazy"
                alt="mortarboard"
              />
            </div>
            <h4>
              <Link href="/industries/education-app-development">
                <a>Education & eLearning</a>
              </Link>
            </h4>
            <p>
              The products have received positive reviews in their respective
              app stores, a result of Relia Software’s smart engineering and
              appreciation for the minute details.
            </p>
          </Animation>
          <Animation className="item">
            <div className="item__icon">
              <ExportedImage
                src="/images/home/online-shop.png"
                width={84}
                height={83}
                layout="intrinsic"
                loading="lazy"
                alt="online shop"
              />
            </div>
            <h4>
              <Link href="/industries/ecommerce-app-development"><a>eCommerce</a></Link>
            </h4>
            <p>
              E-Commerce is taking over the retail market of today. To keep you
              updated, Relia offers finest of ecommerce mobile app development
              services for your brand to elevate and outshine the rest.
            </p>
          </Animation>
        </div>
      </div>
    </div>
  </div>
))
export default Industries
