import styles from "styles/Certification/Certification.module.css";
import CertificationLink from "./CertificationLink";

const Titles = () => {
  return (
    <div className={styles.certification__container_titles}>
      <h2 className={styles.titles__title}>
        Estamos <br /> certificados por
      </h2>
      <p className={styles["titles__title--marked"]}>Ministerio de</p>
      <p className={styles["titles__title--marked"]}>Modernización de la</p>
      <p className={styles["titles__title--marked"]}>República Argentina</p>
      <CertificationLink className={"titles__link"} />
    </div>
  );
};

export default Titles;
