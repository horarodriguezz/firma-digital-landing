import { useWindowSize } from "hooks/useWindowSize";

import BackgroundImage from "components/BackgroundImage";
import Industry from "./Industry";
import { Signature, Team, Academy } from "components/icons";
import styles from "styles/Solutions/SolutionsSection.module.css";

const SolutionsSection = () => {
  const width = useWindowSize();

  return (
    <section className={styles.section}>
      <div className={styles.section__container}>
        <div className={styles.section__container_industries}>
          <Industry
            Icon={Signature}
            title={"Identidad digital"}
            text={`Secuencia única de letras y números que vincula al firmante con un documento electrónico`}
          />
          <Industry
            Icon={Team}
            title={"Fácil verificación"}
            text={
              "Permite la fácil identificación del autor y verificar si ese documento fue alterado."
            }
          />
          <Industry
            Icon={Academy}
            title={"Múltiples usos"}
            text={
              "A través de este servicio, podrásr ealizar todo tipo de trámites con entidades públicas y privadas."
            }
          />
        </div>
      </div>
      {width >= 768 && (
        <BackgroundImage src={"/assets/backgrounds/bluebg.jpg"} fit={"cover"} />
      )}
    </section>
  );
};

export default SolutionsSection;
