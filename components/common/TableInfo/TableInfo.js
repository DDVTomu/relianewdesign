import styles from "./TableInfo.module.scss";
import Link from "next/link";
import IconTwitterOrange from "@components/common/Icon/IconTwitterOrange";
import IconFacebookOrange from "@components/common/Icon/IconFacebookOrange";
import IconInstaOrange from "@components/common/Icon/IconInstaOrange";
import moment from "moment";
const TableInfo = ({ contents }) => {
  return (
    <nav className={styles.nav} aria-label="Table of contents">
      <div className={styles.nav__divide_line} />
      <div className={styles.nav__link_table}>
        {"Author: "}
        <p>{contents?.author?.name}</p>
      </div>
      <div className={styles.nav__link_table}>
        {"Publising Date: "}{" "}
        <p>{moment(contents?.publishedAt).format("DD MMM, YYYY")}</p>
      </div>
      <div className={styles.nav__link_table}>
        {"Categories: "}
        <p>{contents?.category}</p>
      </div>
      <div className={styles.nav__divide_line} />
      <div className="footer-social">
        <div className="social-links">
          <Link href="/contact" prefetch={false}>
            <a className="btn btn-blog" aria-label="social linkdln">
              <IconInstaOrange />
            </a>
          </Link>
          <Link href="/contact" prefetch={false}>
            <a className="btn btn-blog" aria-label="social twitter">
              <IconTwitterOrange />
            </a>
          </Link>
          <Link href="/contact" prefetch={false}>
            <a className="btn btn-blog" aria-label="social facebook">
              <IconFacebookOrange />
            </a>
          </Link>
        </div>
        <p className={styles.nav__share}>Share this article</p>
      </div>
    </nav>
  );
};

export default TableInfo;
