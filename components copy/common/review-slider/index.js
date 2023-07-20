import React from "react";
import Slider from "react-slick";
import styles from "./review-slider.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ExportedImage from "next/image";
class ReviewSlider extends React.Component {
  render() {
    const reviews = [
      {
        id: 1,
        img: "images/comma2.png",
        desc: "Relia Software delivered high-quality designs and they continue to develop the app. The team is very cost-efficient and thorough in their work ethic, which helps them meet expectations with all of their deliverables. Additionally, they are praised for their communication and expertise.",
        name: "Founder & CEO",
        job: "A Health tech startup",
      },
      {
        id: 2,
        img: "/images/comma1.png",
        desc: "Relia Software delivered high-quality designs and they continue to develop the app. The team is very cost-efficient and thorough in their work ethic, which helps them meet expectations with all of their deliverables. Additionally, they are praised for their communication and expertise.",
        name: "Founder & CEO",
        job: "A Health tech startup",
      },
      {
        id: 3,
        img: "images/comma2.png",
        desc: "Relia Software delivered high-quality designs and they continue to develop the app. The team is very cost-efficient and thorough in their work ethic, which helps them meet expectations with all of their deliverables. Additionally, they are praised for their communication and expertise.",
        name: "Founder & CEO",
        job: "A Health tech startup",
      },
      {
        id: 4,
        img: "/images/comma1.png",
        desc: "Relia Software delivered high-quality designs and they continue to develop the app. The team is very cost-efficient and thorough in their work ethic, which helps them meet expectations with all of their deliverables. Additionally, they are praised for their communication and expertise.",
        name: "Founder & CEO",
        job: "A Health tech startup",
      },
    ];

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3500,
      arrows: false,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
        <section className={styles.reviews}>
          <div className="container">
            {/* <div className={styles.reviews__inner}>
              <div className={styles.reviews__content}>
                <h2>Trusted & Reviews</h2>
                <p>
                  On average, only 43% of respondents have a high level of trust
                  in institutions across industries. Worse, nearly 40% plan to
                  switch to the competition or digital startup due to trust
                  issues. We observed significant differences across industries,
                  with automotive companies and retailers at the bottom of the
                  trust list.
                </p>
              </div>
              <div className="review-slider">
                <Slider {...settings}>
                  {reviews.map((review) => (
                    <div>
                      <div className={styles.reviews__box_2__col}>
                        <ExportedImage
                          src={review.img}
                          width={30}
                          height={27}
                          layout="intrinsic"
                          loading="lazy"
                          alt="comma"
                        />
                        <p>
                          {review.desc}
                          <br />
                        </p>
                        <div className={styles.reviews__border}></div>
                        <div className={styles.reviews__name}>
                          {review.name}
                        </div>
                        <div className={styles.reviews__job}>{review.job}</div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
              <div className={styles.reviews__box}>
                <div className={styles.reviews__img}>
                  <ExportedImage
                    src="/images/Brand.png"
                    width={853.93}
                    height={81}
                    layout="fill"
                    quality={100}
                    loading="lazy"
                    alt="brand-image-1"
                  />
                </div>
              </div>
            </div> */}
            <div className={styles.reviews__inner_2}>
              <div className={styles.reviews__inner_2__content}>
                <h2>Trusted & Reviews</h2>
                <p>
                  On average, only 43% of respondents have a high level of trust
                  in institutions across industries. Worse, nearly 40% plan to
                  switch to the competition or digital startup due to trust
                  issues. We observed significant differences across industries,
                  with automotive companies and retailers at the bottom of the
                  trust list.
                </p>
                <div className={styles.reviews__box}>
                  <div className={styles.reviews__img}>
                    <ExportedImage
                      src="/images/Brand.png"
                      width={853.93}
                      height={81}
                      layout="fill"
                      quality={100}
                      loading="lazy"
                      alt="brand-image-1"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.reviews__inner_2__slider}>
                <div className="review-slider">
                  <Slider {...settings}>
                    {reviews.map((review, key) => (
                      <div key={key}>
                        <div className={styles.reviews__box_2__col}>
                          <ExportedImage
                            src={review.img}
                            width={30}
                            height={27}
                            layout="intrinsic"
                            loading="lazy"
                            alt="comma"
                          />
                          <p>
                            {review.desc}
                            <br />
                          </p>
                          <div className={styles.reviews__border}></div>
                          <div className={styles.reviews__name}>
                            {review.name}
                          </div>
                          <div className={styles.reviews__job}>
                            {review.job}
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
            {/* <Reviews data={reviews} /> */}
            {/* <Partner partners={partners} /> */}
          </div>
        </section>
      </>
    );
  }
}
export default ReviewSlider;
