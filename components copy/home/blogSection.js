import Link from "next/link";
import React from "react"
import CloudImg from "@components/common/Image";
import Truncate from "react-truncate"
import Moment from "react-moment"
import Animation from "@components/common/Animation"

const BlogSection = React.memo(({ data = [] }) => {
  return (
    <div className="blogs">
      <div className="container">
        <Animation>
          <h2 className="hdg-lv2">
            Blog/<span>News</span>
          </h2>
        </Animation>
        <div className="blogs__list">
          {data.map((blog, index) => (
            <Animation className="item" key={index}>
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
                <div className="item__thumb">{
                  blog.attributes.thumnail.data.attributes.formats.small && (
                    <CloudImg
                      src={blog.attributes.thumnail.data.attributes.formats.small.url}
                      width={blog.attributes.thumnail.data.attributes.formats.small.width}
                      height={blog.attributes.thumnail.data.attributes.formats.small.height}
                      layout="responsive"
                      objectFit="cover"
                      priority={true}
                    />
                  )
                }

                </div>
                <p className="item__text">
                  <Truncate lines={3}>
                    {blog.attributes.description}
                  </Truncate>
                </p>
              </a>
            </Animation>
          ))}
        </div>
        <Animation className="blogs__more">
          <Link href="/blog">
            <a className="btn">VIEW MORE</a>
          </Link>
        </Animation>
      </div>
    </div>
  )
})

export default BlogSection
