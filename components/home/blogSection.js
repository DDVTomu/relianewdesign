import Link from "next/link";
import React from "react";
import CloudImg from "@components/common/Image";
import Truncate from "react-truncate";
import Moment from "react-moment";
import Animation from "@components/common/Animation";

const BlogSection = React.memo(({ data = [] }) => {
  return (
    <div className="blogs">
      <div className="container">
        <div>
          <h2 className="hdg-lv2">
            Blog/<span>News</span>
          </h2>
        </div>
        <Animation className="blogs__list">
          {data.map((blog, index) => (
            <div className="item" key={index}>
              <a href={`/blog/${blog.attributes.slug}`} key={index}>
                <h6 className="item__title">{blog.attributes.title}</h6>
                <div className="item__meta">
                  <span className="category">
                    <span>{blog.attributes.category.data.attributes.name}</span>
                  </span>
                  <span className="date">
                    <Moment
                      format="DD MMM, YYYY"
                      date={blog.attributes.createdAt}
                    />
                  </span>
                </div>
                <div className="item__thumb">
                  {blog.attributes.thumnail.data.attributes.formats.small && (
                    <CloudImg
                      src={
                        blog.attributes.thumnail.data.attributes.formats.small
                          .url
                      }
                      width={
                        blog.attributes.thumnail.data.attributes.formats.small
                          .width
                      }
                      height={
                        blog.attributes.thumnail.data.attributes.formats.small
                          .height
                      }
                      layout="responsive"
                      objectFit="cover"
                      priority={true}
                      alt={
                        blog.attributes.thumnail.data.attributes
                          .alternativeText || "Relia Blog Img"
                      }
                    />
                  )}
                </div>
                <div className="item__text">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: blog.attributes.description,
                    }}
                  ></div>
                </div>
              </a>
            </div>
          ))}
        </Animation>
        <Animation className="blogs__more">
          <Link href="/blog">
            <a className="btn">VIEW MORE</a>
          </Link>
        </Animation>
      </div>
    </div>
  );
});

export default BlogSection;
