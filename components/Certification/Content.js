import styles from "styles/Certification/Certification.module.css";

const Content = () => {
  return (
    <div className={styles.certification__container_content}>
      <p className={styles.content__paragraph}>
        Este mecanismo criptográfico aplicado a un documento electrónico permite
        asegurar su origen, verificar que su contenido no fue alterado después
        de la firma y garantizar el no repudio o el no desconocimiento de la
        firma.
      </p>
      <p className={styles.content__paragraph}>
        Para firmar digitalmente un documento se necesitan dos claves asociadas
        entre sí, una privada y una pública. La clave privada es secreta y se
        encuentra bajo exclusivo control del firmante, la clave pública se
        encuentra en el certificado digital junto con los datos del firmante y
        sirve para que el destinatario del documento pueda verificar el origen
        del firmante.
      </p>
    </div>
  );
};

export default Content;
