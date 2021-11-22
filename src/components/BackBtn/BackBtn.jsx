import { useHistory } from "react-router-dom";
import sprite from "../../images/sprite.svg";
import styles from "./BackBtn.module.css";

export default function BackBtn() {
  let history = useHistory();
  
  return (
    <div>
      <button className={styles.backBtn} onClick={() => history.goBack()}>
        <svg width="24" height="24" className={styles.backBtnSvg}>
          <use href={sprite + "#icon-arrow"}></use>
        </svg>{" "}
        Вернуться на главную
      </button>
    </div>
  );
}
