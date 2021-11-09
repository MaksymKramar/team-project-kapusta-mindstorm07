import Loader from "react-loader-spinner";
import styles from "./Spinner.module.css";

export default function Spinner({ width, height }) {
  return (
    <div className={styles.wrapper}>
      <Loader
        type="ThreeDots"
        color="#f8f8f8"
        height={height}
        width={width}
        timeout={0}
      />
    </div>
  );
}
