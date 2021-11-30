import styles from "./LogoHeader.module.scss";
import sprite from "../../images/sprite.svg";

export default function logoHeader() {
  return (
    <svg className={styles.logoIcon} width="90px" height="31px">
      <use data-link="home" href={sprite + "#icon-logo"} />
    </svg>
  );
}
