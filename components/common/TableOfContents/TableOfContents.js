import { useState } from "react";
import styles from "./TableOfContents.module.scss";
import Link from "next/link";
import dynamic from "next/dynamic";
import IconTwitterOrange from "@components/common/Icon/IconTwitterOrange";
import IconFacebookOrange from "@components/common/Icon/IconFacebookOrange";
import IconInstaOrange from "@components/common/Icon/IconInstaOrange";
import useIntersectionObserver, {
  useIsMounted,
} from "./useIntersectionObserver";

const TableOfContents = ({ contents = [] }) => {
  const [activeId, setActiveId] = useState();
  const isMounted = useIsMounted();
  useIntersectionObserver(setActiveId, isMounted);

  const handleMenu = (id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView?.(true);
  };

  return (
    <nav className={styles.nav} aria-label="Table of contents">
      <h2 className={styles.nav__head}>Table of Content</h2>
      <div className={styles.nav__divide_line} />
      {contents.map((content, index) => (
        <a
          key={index}
          className={`${styles.nav__link_table} ${
            content.id === activeId ? styles.nav__link_table_active : ""
          }`}
          href={`#${content.id}`}
          onClick={() => handleMenu(content.id)}
        >
          {content.name}
        </a>
      ))}
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

export default TableOfContents;
