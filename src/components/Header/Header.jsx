import styles from "./Header.module.css";
import LogoHeader from "../LogoHeader/LogoHeader";
import UserMenuHeader from "../UserMenuHeader/UserMenuHeader";
import { useSelector } from "react-redux";
import authSelector from "../../redux/auth/auth-selector";

export default function Header() {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);

  return (
    <>
      <header className={styles.header}>
        <div class="container">
          <div className={styles.headerContaiener}>
            <LogoHeader />
            {isLoggedIn && <UserMenuHeader />}
          </div>
        </div>
      </header>
    </>
  );
}
