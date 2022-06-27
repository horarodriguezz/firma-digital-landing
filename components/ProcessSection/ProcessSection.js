import { useWindowSize } from "hooks/useWindowSize";

import Image from "next/image";
import ProcessStep from "./ProcessStep";
import styles from "styles/ProcessSection/ProcessSection.module.css";

const ProcessSection = () => {
  const width = useWindowSize();

  return (
    <section id='servicios' className={styles.process}>
      <h2 className={styles.process__container_title}>
        Cómo funciona nuestro proceso
      </h2>
      <div className={styles.process__container}>
        <div className={styles.process__container_steps}>
          <ProcessStep
            icon={"/assets/icons/step1.png"}
            text={"Solicite su certificado de firma digital."}
            className={"step"}
            id='step1'
          />
          <ProcessStep
            icon={"/assets/icons/step2.png"}
            text={`Envíe los requisitos y documentación necesaria.`}
            className={"step--reverse"}
            id='step2'
          />
          <ProcessStep
            icon={"/assets/icons/step3.png"}
            text={`Reciba su código de compra y cancele el pago.`}
            className={"step"}
            id='step3'
          />
          <ProcessStep
            icon={"/assets/icons/step4.png"}
            text={`Empadrónese en nuestras oficinas.`}
            className={"step--reverse"}
            id='step4'
          />
          <ProcessStep
            icon={"/assets/icons/step5.png"}
            text={
              "Comience a firmar digitalmente su documentación electrónica."
            }
            className={"step"}
            id='step5'
          />
          {width >= 768 && (
            <Image
              src='/assets/backgrounds/TrazadoSteps.png'
              layout='fill'
              objectFit='contain'
              objectPosition='center'
              alt=''
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
