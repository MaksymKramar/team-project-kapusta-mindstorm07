import styles from "./ModalSignUp.module.css";
import sprite from "../../images/sprite.svg";
import { useState, useEffect } from "react";
import { signUp, authGoogle } from "../../redux/auth/auth-operation";
import { useDispatch, useSelector } from "react-redux";
import authSelector from "../../redux/auth/auth-selector";
import Spinner from "../Spinner/Spiner";
import { NavLink } from "react-router-dom";

export default function ModalSignUp() {
  const dispatch = useDispatch();
  const isLoading = useSelector(authSelector.getIsLoading);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [nameError, setNameError] = useState("Это обязательное поле");
  const [emailError, setEmailError] = useState("Это обязательное поле");
  const [passwordError, setPasswordError] = useState("Это обязательное поле");
  const [formValid, setFormValid] = useState(true);

  const isErrorSignUp = useSelector(authSelector.getIsErrorSignUp);

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

  useEffect(() => {
    if (emailError || passwordError || nameError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError, nameError]);

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

  const handlerName = (e) => {
    setName(e.target.value);
    if (e.target.value.length < 2) {
      setNameError("Имя должно быть длинее");
      if (!e.target.value) {
        setPasswordError("Это обязательное поле");
      }
    } else {
      setNameError("");
    }
  };

  const handleBlur = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      case "name":
        setNameDirty(true);
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp({ name, email, password }));
    setEmail("");
    setPassword("");
    setName("");
  };

  const handleGoogle = (e) => {
    e.preventDefault();
    dispatch(authGoogle());
    setEmail("");
    setPassword("");
  };

  return (
    <div className={styles.modal}>
      <div className={styles.wrapper}>
        <p className={styles.text}>
          Вы можете зарегистрироваться с помощью Google Account:
        </p>

        <a
          href="https://kapusta-backend-project.herokuapp.com/api/auth/google"
          onClick={() => {
            dispatch(handleGoogle);
          }}
          className={styles.modalLink}
        >
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
            pattern=".{2,}"
            onBlur={(e) => handleBlur(e)}
            onChange={handlerName}
          />
          {nameDirty && nameError && (
            <span className={styles.error}>{nameError}</span>
          )}
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
            onBlur={(e) => handleBlur(e)}
            onChange={handlerEmail}
            title="Email должен собержать @"
          />
          {emailDirty && emailError && (
            <span className={styles.error}>{emailError}</span>
          )}
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
            onBlur={(e) => handleBlur(e)}
            onChange={handlerPassword}
            pattern=".{6,}"
            title="Пароль может состоять из букв и цыфр. Не менее 6 символов"
          />
          {passwordDirty && passwordError && (
            <span className={styles.error}>{passwordError}</span>
          )}
        </label>
        {isErrorSignUp && (
          <span className={styles.isError}>
            Что-то пошло не так. Попробуйте еще раз!
          </span>
        )}

        <div className={styles.buttonsWrapper}>
          <button disabled={!formValid} type="submit" className={styles.button}>
            {isLoading && <Spinner width="20px" height="20px" />}
            Зарегистрироваться
          </button>
          <NavLink to="/login" exact className={styles.button}>
            Вход
          </NavLink>
        </div>
      </form>
    </div>
  );
}
