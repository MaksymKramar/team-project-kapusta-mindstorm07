import styles from "./ModalLogIn.module.css";
import sprite from "../../images/sprite.svg";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/auth-operation";

export default function ModalLogIn() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    console.log(name);
    console.log(value);
    switch (name) {
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

    dispatch(logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div className={styles.modal}>
      <div className={styles.wrapper}>
        <p className={styles.text}>
          Вы можете авторизоваться с помощью <br />
          Google Account:
        </p>

        <a className={styles.modalLink}>
          <svg className={styles.logoGoogle} width="18px" height="18px">
            <use href={sprite + "#icon-google-symbol-1"} />
          </svg>
          <span className={styles.textGoogle}>Google</span>
        </a>
      </div>

      <p className={styles.text}>
        Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
      </p>

      <form onSubmit={handleSubmit}>
        <label className={styles.modalLabel}>
          <span className={styles.emailError}>*</span>Электронная почта:
          <input
            className={styles.input}
            autoComplete="off"
            required
            placeholder="your@email.com"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
            title="Email должен собержать @"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          />
        </label>

        <label className={styles.modalLabel}>
          <span className={styles.passwordError}>*</span>Пароль:
          <input
            required
            className={styles.input}
            autoComplete="off"
            placeholder="Пароль"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleChange}
            title="Пароль может состоять из букв и цыфр. Не менее 6 символов"
            // error={password.length < 1 || password.length > 6 ? false : true}
            // helperText={
            //   password.length < 1 || password.length > 6
            //     ? ''
            //     : 'need more symbols'
            // }
          />
        </label>

        <div className={styles.buttonsWrapper}>
          <button className={styles.button} type="submit">
            Войти
          </button>

          <button className={styles.button}>Регистрация</button>
        </div>
      </form>
    </div>
  );
}
