import styles from "styles/Certification/Certification.module.css";
import CertificationLink from "./CertificationLink";
import Content from "./Content";
import Titles from "./Titles";

const Certification = () => {
  return (
    <section className={styles.certification}>
      <article className={styles.certification__container}>
        <Titles />
        <Content />
        <CertificationLink className={"content__link"} />
      </article>
    </section>
  );
};

export default Certification;
