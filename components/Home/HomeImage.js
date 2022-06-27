import { useWindowSize } from "hooks/useWindowSize";

import Image from "next/image";
import styles from "styles/Home/HomeImage.module.css";

const HomeImage = () => {
  const width = useWindowSize();

  return (
    <div className={styles.imagecontainer}>
      <Image
        src='/assets/backgrounds/Imagen-01.png'
        layout='fill'
        sizes={width < 1024 ? "100vw" : "50vw"}
        priority
        quality={100}
        alt=''
        objectFit='contain'
        objectPosition='center'
      />
    </div>
  );
};

export default HomeImage;
