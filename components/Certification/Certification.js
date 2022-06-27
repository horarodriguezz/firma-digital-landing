import styles from "styles/Services/ServicesSection.module.css";
import CertificationLink from "./CertificationLink";
import Content from "./Content";
import Titles from "./Titles";

const Certification = () => {
  return (
    <section id='servicios' className={styles.certification}>
      <article className={styles.certification__container}>
        <Titles />
        <Content />
        <CertificationLink className={"content__link"} />
      </article>
    </section>
  );
};

export default Certification;
