import styles from "./ModalLogIn.module.css";
import sprite from "../../images/sprite.svg";
import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../redux/auth/auth-operation";
import authSelector from "../../redux/auth/auth-selector";
import { NavLink } from "react-router-dom";

import Spinner from "../Spinner/Spiner";

export default function ModalLogIn() {
  const dispatch = useDispatch();
  const isLoading = useSelector(authSelector.getIsLoading);

  const isErrorLogIn = useSelector(authSelector.getIsErrorLogIn);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Это обязательное поле");
  const [passwordError, setPasswordError] = useState("Это обязательное поле");
  const [formValid, setFormValid] = useState(true);

  // const handleChange = ({ target: { name, value } }) => {
  //   console.log(name)
  //   console.log(value)
  //   switch (name) {
  //     case 'email':
  //       return setEmail(value)
  //     case 'password':
  //       return setPassword(value)
  //     default:
  //       return
  //   }
  // }

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const handlerEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некоректный email");
    } else {
      setEmailError("");
    }
  };

  const handlerPassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 6) {
      setPasswordError("Пароль должен быть длинее 6 символов");
      if (!e.target.value) {
        setPasswordError("Это обязательное поле");
      }
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  const handleBlur = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
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
          Электронная почта:
          <input
            className={styles.input}
            autoComplete="off"
            required
            placeholder="your@email.com"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handlerEmail}
            onBlur={(e) => handleBlur(e)}
            title="Email должен собержать @"
          />
          {emailDirty && emailError && (
            <span className={styles.error}>{emailError}</span>
          )}
        </label>

        <label className={styles.modalLabel}>
          Пароль:
          <input
            required
            className={styles.input}
            autoComplete="off"
            placeholder="Пароль"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handlerPassword}
            onBlur={(e) => handleBlur(e)}
            pattern=".{6,}"
            title="Пароль может состоять из букв и цыфр. Не менее 6 символов"
          />
          {passwordDirty && passwordError && (
            <span className={styles.error}>{passwordError}</span>
          )}
        </label>

        {isErrorLogIn && (
          <span className={styles.isError}>
            Неправильный E-mail или пароль. Попробуйте еще раз!
          </span>
        )}

        <div className={styles.buttonsWrapper}>
          <button disabled={!formValid} className={styles.button} type="submit">
            {isLoading && <Spinner width="20px" height="20px" />}
            Войти
          </button>

          <NavLink to="/signup" exact className={styles.button}>
            Регистрация
          </NavLink>
        </div>
      </form>
    </div>
  );
}
