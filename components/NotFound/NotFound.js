import { ButtonView } from "@components/common/button";
import styles from "./NotFound.module.scss";
const NotFound = () => {
  return (
    <>
      <section className={`${styles.notfound} container`}>
        <h1>404 - Page Not Found</h1>
        <h2>"WHERE ARE THEY ???"</h2>
        <ButtonView external title="RETURN HOME" to={`/`} />
      </section>
    </>
  );
};

export default NotFound;
