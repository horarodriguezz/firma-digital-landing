import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "styles/Navbar/UserLogo.module.css";

const UserLogo = () => {
  return (
    <div className={styles.logocontainer}>
      <a href={process.env.NEXT_PUBLIC_LOGIN_URL}>
        <FontAwesomeIcon icon={faUserCircle} />
      </a>
    </div>
  );
};

export default UserLogo;
