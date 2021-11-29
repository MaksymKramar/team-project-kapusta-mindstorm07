import sprite from "../../images/sprite.svg";
import styles from "./UserMenuHeader.module.scss";
import { useSelector } from "react-redux";
import authSelector from "../../redux/auth/auth-selector";

export default function UserMenuHeader({ setActive }) {
  const name = useSelector(authSelector.getUserName);

  const firstLetterName = name.slice(0, 1);

  return (
    <div className={styles.wrapper}>
      {name && (
        <>
          <span className={styles.firstLetterUser}>{firstLetterName}</span>
          <span className={styles.userName}>{name}</span>
        </>
      )}

      <button type="button" className={styles.buttonLogOut} onClick={setActive}>
        <span className={styles.logOutText}>Выйти </span>
        <svg
          className={styles.logOutIcon}
          data-link="home"
          width="16px"
          height="16px"
        >
          <use data-link="home" href={sprite + "#icon-logout"} />
        </svg>
      </button>
    </div>
  );
}
