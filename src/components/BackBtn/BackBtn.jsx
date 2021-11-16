import sprite from "../../images/sprite.svg";
import styles from "./BackBtn.module.css";

export default function BackBtn() {
  return (
    <div className="container">
      <button className={styles.backBtn}>
        <svg width="24" height="24" className={styles.backBtnSvg}>
          <use href={sprite + "#icon-arrow"}></use>
        </svg>{" "}
        Вернуться на главную
      </button>
    </div>
  );
}
