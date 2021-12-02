import Loader from "react-loader-spinner";
import s from "./Spinner.module.scss";

export default function Spinner({ width, height, type, color }) {
  return (
    <div className={s.wrapper}>
      <Loader
        type={type}
        color={color}
        height={height}
        width={width}
        timeout={0}
      />
    </div>
  );
}
