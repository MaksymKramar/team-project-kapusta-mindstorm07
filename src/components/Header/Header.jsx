import styles from "./Header.module.scss";
import LogoHeader from "../LogoHeader/LogoHeader";
import UserMenuHeader from "../UserMenuHeader/UserMenuHeader";
import { useSelector } from "react-redux";
import authSelector from "../../redux/auth/auth-selector";
import { NavLink } from "react-router-dom";

export default function Header({ setActive }) {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);

  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerContaiener}>
            <NavLink to="/main" exact>
              <LogoHeader />
            </NavLink>
            {isLoggedIn && <UserMenuHeader setActive={setActive} />}
          </div>
        </div>
      </header>
    </>
  );
}
