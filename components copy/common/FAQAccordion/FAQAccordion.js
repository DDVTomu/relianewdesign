import { useState } from "react";
import styles from "./FAQAccordion.module.scss";
export default function Accordion(props) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div className={styles.faq}>
      <button className={styles.faq__btn} onClick={toggle} type="button">
        <h2>{props.title}</h2>
      </button>
      <div
        className={styles.faq__answer}
        style={{ display: isShowing ? "block" : "none", paddingTop: "32px", paddingBottom: "32px" }}
        dangerouslySetInnerHTML={{
          __html: props.content,
        }}
      />
    </div>
  );
}
