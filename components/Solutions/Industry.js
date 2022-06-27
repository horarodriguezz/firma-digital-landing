import { useRef } from "react";
import { useParentDimensions } from "hooks/useParentDimensions";
import styles from "styles/Solutions/Industry.module.css";

const Industry = ({ Icon, text, title }) => {
  const ref = useRef();
  const dimensions = useParentDimensions(ref);

  return (
    <article className={styles.industry}>
      <div ref={ref} className={styles.industry__icon}>
        <Icon width={dimensions.width} height={dimensions.height} />
      </div>
      <h3 className={styles.industry__text}>{title}</h3>
      <p className={styles.industry__description}>{text}</p>
    </article>
  );
};

export default Industry;
