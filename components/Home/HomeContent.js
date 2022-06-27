import styles from "styles/Home/HomeContent.module.css";

const HomeContent = () => {
  return (
    <div className={styles.container_content}>
      <h1 className={styles.content__title}>Firma Digital</h1>
      <p className={styles.content__description}>
        Es un certificado digital que permite la firma de documentos
        electrónicos, asegurando que ésta posea la misma validez jurídica que un
        documento en papel firmado de puño y letra. Vincula al firmante con un
        documento electrónico emitido por un certificador licenciado.
      </p>
      <button role='button' className={styles.content__button}>
        <a href='#contacto'>Consultar servicio</a>
      </button>
    </div>
  );
};

export default HomeContent;
