import { useDispatch } from "react-redux";
import { authGoogle } from "../../redux/auth/auth-operation";
import { useLocation } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import s from "./LoadingPage.module.scss";

export default function LoadingPage() {
  const search = useLocation().search;
  const useremail = new URLSearchParams(search).get("useremail");

  const dispatch = useDispatch();
  dispatch(authGoogle(useremail));

  return (
    <div className={s.wrapper}>
      <Spinner />
    </div>
  );
}
