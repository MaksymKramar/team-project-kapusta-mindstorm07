import Loader from "react-loader-spinner";
import styles from "./Spinner.module.css";

export default function Spinner() {
  return (
    <div className={styles.wrapper}>
      <Loader
        type="ThreeDots"
        color="#f8f8f8"
        height={20}
        width={20}
        timeout={0}
      />
    </div>
  );
}
