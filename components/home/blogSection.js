import Link from "next/link";
import React from "react";
import CloudImg from "@components/common/Image";
import Truncate from "react-truncate";
import Moment from "react-moment";
import Animation from "@components/common/Animation";
import Slider from "react-slick";
const BlogSection = React.memo(({ data = [] }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="section blogs">
      <div className="container">
        <Animation>
          <h2 className="hdg-lv2">
            Blog
          </h2>
          <p className="hdg-lv2-sub">We document our process and learnings with new articles every week.</p>
        </Animation>
      </div>
      <Slider className="blogs__list" {...settings}>
        {data.map((blog, index) => (
          <Animation className="item" key={index}>
            <a href={`/blog/${blog.attributes.slug}`} key={index}>
              <div className="item__thumb">
                {blog.attributes.thumnail.data.attributes.formats.small && (
                  <CloudImg
                    src={
                      blog.attributes.thumnail.data.attributes.formats.small.url
                    }
                    // width={
                    //   blog.attributes.thumnail.data.attributes.formats.small
                    //     .width
                    // }
                    // height={
                    //   blog.attributes.thumnail.data.attributes.formats.small
                    //     .height
                    // }
                    width={500}
                    height={250}
                    layout="responsive"
                    objectFit="cover"
                    priority={true}
                  />
                )}
              </div>
              <h6 className="item__title">{blog.attributes.title}</h6>

              <div
                className="item__text"
                dangerouslySetInnerHTML={{
                  __html: blog.attributes.description,
                }}
              ></div>
            </a>
          </Animation>
        ))}
      </Slider>
      <Animation className="blogs__more">
        <Link href="/blog">
          <button className="solid-button">Read more</button>
        </Link>
      </Animation>
      <div class="blogs__gradientLeft" bis_skin_checked="1"></div>
      <div class="blogs__gradientRight" bis_skin_checked="1"></div>
    </div>
  );
});

export default BlogSection;
