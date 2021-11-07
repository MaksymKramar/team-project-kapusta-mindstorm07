import styles from "./ModalSignUp.module.css";
import sprite from "../../images/sprite.svg";

export default function ModalSignUp() {
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

      <form className={styles.form}>
        <label className={styles.modalLabel}>
          Имя:
          <input
            className={styles.input}
            placeholder="Имя"
            type="text"
            name="name"
          />
        </label>
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
          <button className={styles.button}>Зарегистрироваться</button>
          <button className={styles.button} type="submit">
            Вход
          </button>
        </div>
      </form>
    </div>
  );
}
