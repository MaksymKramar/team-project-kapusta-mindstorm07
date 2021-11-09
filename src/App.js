import "./App.css";
import { useEffect } from "react";
import { fetchCurrentUser } from "./redux/auth/auth-operation";
import { useSelector, useDispatch } from "react-redux";
import authSelector from "./redux/auth/auth-selector";
import { Switch } from "react-router-dom";
import PubliceRoute from "./routes/PublicRoute";
// import PrivateRoute from './routes/PrivateRoute'
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage/SignUpPage"));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Switch>
      <Suspense fallback={null}>
        <PubliceRoute path="/" exact>
          {<HomePage />}
        </PubliceRoute>

        <PubliceRoute path="/login" restricted redirectTo="/">
          {<HomePage />}
        </PubliceRoute>

        <PubliceRoute path="/signup" restricted>
          {<SignUpPage />}
        </PubliceRoute>
        {/* <div className="App">
        <HomePage />
      </div> */}
      </Suspense>
    </Switch>
  );
}

export default App;
