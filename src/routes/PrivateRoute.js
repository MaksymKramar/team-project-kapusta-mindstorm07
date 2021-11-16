import { Redirect, Route } from "react-router-dom";
import authSelector from "../redux/auth/auth-selector";
import { useSelector } from "react-redux";

export default function PrivateRoute({ children, ...routeProps }) {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);

  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to="/login"></Redirect>}
    </Route>
  );
}
