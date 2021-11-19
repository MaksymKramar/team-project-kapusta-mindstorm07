import { useDispatch } from "react-redux";
import { authGoogle } from "../../redux/auth/auth-operation";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

export default function LoadingPage() {
  //
  const location = useLocation();
  //   const useremail = new URLSearchParams(search).get('useremail')
  //   console.log(useremail)
  const { useremail } = queryString.parse(location.search);
  console.log("queryParams :>> ", useremail);

  const dispatch = useDispatch();
  dispatch(authGoogle(useremail));

  return <p>Подождите, пожалуйста</p>;
}
