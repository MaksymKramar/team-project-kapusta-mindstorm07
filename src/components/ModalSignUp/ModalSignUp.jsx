import styles from "./ModalSignUp.module.css";
import sprite from "../../images/sprite.svg";
import { useState } from "react";
import { signUp } from "../../redux/auth/auth-operation";
import { useDispatch } from "react-redux";

export default function ModalSignUp() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    console.log(name);
    console.log(value);
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp({ name, email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div className={styles.modal}>
      <div className={styles.wrapper}>
        <p className={styles.text}>
          Вы можете зарегистрироваться с помощью Google Account:
        </p>

        <a className={styles.modalLink}>
          <svg className={styles.logoGoogle} width="18px" height="18px">
            <use href={sprite + "#icon-google-symbol-1"} />
          </svg>
          <span className={styles.textGoogle}>Google</span>
        </a>
      </div>

      <p className={styles.text}>Или с помощью e-mail и пароля:</p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.modalLabel}>
          Имя:
          <input
            className={styles.input}
            required
            placeholder="Имя"
            autoComplete="off"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>
        <label className={styles.modalLabel}>
          Электронная почта:
          <input
            className={styles.input}
            required
            placeholder="your@email.com"
            autoComplete="off"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={styles.modalLabel}>
          Пароль:
          <input
            className={styles.input}
            required
            placeholder="Пароль"
            autoComplete="off"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <div className={styles.buttonsWrapper}>
          <button type="submit" className={styles.button}>
            Зарегистрироваться
          </button>
          <button className={styles.button}>Вход</button>
        </div>
      </form>
    </div>
  );
}
