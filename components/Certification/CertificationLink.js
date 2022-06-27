import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "styles/Certification/Certification.module.css";

const CertificationLink = ({ className }) => {
  return (
    <div className={styles[className]}>
      <a
        href='https://www.argentina.gob.ar/normativa/nacional/resoluci%C3%B3n-241-2015-252981'
        target='_blank'
        rel='noreferrer'
      >
        <span style={{ marginRight: "0.5rem" }}>Ver certificación</span>
        <FontAwesomeIcon icon={faArrowRight} />
      </a>
    </div>
  );
};

export default CertificationLink;
