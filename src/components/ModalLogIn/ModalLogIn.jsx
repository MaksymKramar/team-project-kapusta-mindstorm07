import styles from "./ModalLogIn.module.css";
import sprite from "../../images/sprite.svg";

export default function ModalLogIn() {
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

      <form>
        <label className={styles.modalLabel}>
          Электронная почта:
          <input
            className={styles.input}
            placeholder="your@email.com"
            type="email"
            name="email"
          />
        </label>

        <label className={styles.modalLabel}>
          Пароль:
          <input
            className={styles.input}
            placeholder="Пароль"
            type="password"
            name="password"
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
