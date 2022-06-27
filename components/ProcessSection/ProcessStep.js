import Image from "next/image";
import styles from "styles/ProcessSection/ProcessStep.module.css";

const ProcessStep = ({ icon, text, className, id }) => {
  return (
    <div className={styles[className]} id={styles[id]}>
      <div className={styles.step__icon}>
        <Image
          src={icon}
          alt='Paso del proceso de funcionamiento'
          layout='fill'
          sizes='20vw'
          objectFit='contain'
          objectPosition='center'
        />
      </div>
      <div className={styles.step__textcontainer}>
        <p className={styles.step__textcontainer_text}>{text}</p>
      </div>
    </div>
  );
};

export default ProcessStep;
