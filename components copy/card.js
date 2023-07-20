import React from "react";
import Link from "next/link";
import Image from "./common/Image";

const Card = ({ article }) => {
    return (
        <Link as={`/blog/${article.slug}`} href="/blog/[id]" prefetch={false}>
            <a className="link-reset">
                <div className="card">
                    <div className="uk-card-media-top">
                        {/* <Image image={article.image} /> */}
                    </div>
                    <div className="uk-card-body">
                        <p id="category" className="uk-text-uppercase">
                            {/* {article.category.title} */}
                        </p>
                        <p id="title" className="uk-text-large">
                            {article.title}
                        </p>
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default Card;