import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  PinterestIcon,
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  TwitterShareButton,
} from "react-share";
import Link from "next/link";
import "./BlogSocial.module.scss";

const BlogSocial = ({ tags, slug }) => {
  return (
    <div className="blog-content__inner">
      <div className="blog-entry">
        <ul className="list-tag">
          {tags.map((tag, index) => (
            <li key={index}>
              {tag.slug != null ? (
                <Link href={`/tag/${tag.slug}`}>
                  <span>{tag.name}</span>
                </Link>
              ) : (
                ""
              )}
            </li>
          ))}
        </ul>
        <ul className="share-social">
          <li className="share-social__title">Share</li>
          <li>
            <FacebookShareButton url={`http://reliasoftware.com/blog/${slug}`}>
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
          </li>
          <li>
            <TwitterShareButton url={`http://reliasoftware.com/blog/${slug}`}>
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
          </li>
          <li>
            <PinterestShareButton url={`http://reliasoftware.com/blog/${slug}`}>
              <PinterestIcon size={32} round={true} />
            </PinterestShareButton>
          </li>
          <li>
            <LinkedinShareButton url={`http://reliasoftware.com/blog/${slug}`}>
              <LinkedinIcon size={32} round={true} />
            </LinkedinShareButton>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogSocial;
