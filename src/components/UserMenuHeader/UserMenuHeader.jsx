import sprite from "../../images/sprite.svg";
import styles from "./UserMenuHeader.module.css";
import { useDispatch, useSelector } from "react-redux";
import authSelector from "../../redux/auth/auth-selector";
import { logOut } from "../../redux/auth/auth-operation";

export default function UserMenuHeader() {
  const dispatch = useDispatch();
  const name = useSelector(authSelector.getUserName);
  const firstLetterName = name.slice(0, 1);

  return (
    <div className={styles.wrapper}>
      <span className={styles.firstLetterUser}>{firstLetterName}</span>
      <span className={styles.userName}>{name}</span>
      <button
        type="button"
        className={styles.buttonLogOut}
        onClick={() => dispatch(logOut())}
      >
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
