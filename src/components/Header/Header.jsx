import styles from "./Header.module.css";
import LogoHeader from "../LogoHeader/LogoHeader";
import UserMenuHeader from "../UserMenuHeader/UserMenuHeader";
import { useSelector } from "react-redux";
import authSelector from "../../redux/auth/auth-selector";

export default function Header({ setActive }) {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);
  // const token = useSelector(authSelector.getToken);

  return (
    <>
      <header className={styles.header}>
        <div class="container">
          <div className={styles.headerContaiener}>
            <LogoHeader />
            {isLoggedIn && <UserMenuHeader setActive={setActive} />}
          </div>
        </div>
      </header>
    </>
  );
}
