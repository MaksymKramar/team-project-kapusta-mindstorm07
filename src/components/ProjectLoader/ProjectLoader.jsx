import Loader from "react-loader-spinner";
import s from "./ProjectLoader.module.scss";

export default function ProjectLoader({ width, height }) {
  return (
    <div className={s.wrapper}>
      <Loader
        type="Audio"
        color="var(--accent-color)"
        height={height}
        width={width}
        timeout={0}
      />
    </div>
  );
}
