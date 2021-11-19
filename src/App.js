import { useState } from "react";
import Modal from "./modal/modal";
import ModalExit from "./modal/modalExit";

import "./App.css";
import { useEffect } from "react";
import { fetchCurrentUser } from "./redux/auth/auth-operation";
import { useSelector, useDispatch } from "react-redux";
import authSelector from "./redux/auth/auth-selector";
import { Switch } from "react-router-dom";
import PubliceRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import { Suspense, lazy } from "react";
import Summary from "./components/Summary/summary";
import ReportPage from "./pages/ReportPage/ReportPage";

const LogInPage = lazy(() => import("./pages/LogInPage/LogInPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage/SignUpPage"));
const LoadingPage = lazy(() => import("./pages/LoadingPage/LoadingPage"));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const [modalActive, setModalActive] = useState(false);
  const [modalExitActive, setModalExitActive] = useState(false);

  return (
    <div className="App">
      <Switch>
        <Suspense fallback={null}>
          <PubliceRoute path="/" exact>
            {<LogInPage setActive={setModalExitActive} />}
            {/* {<LoadingPage />} */}
          </PubliceRoute>

          <PubliceRoute path="/login" restricted redirectTo="/">
            {<LogInPage setActive={setModalExitActive} />}
          </PubliceRoute>

          <PubliceRoute path="/signup" restricted redirectTo="/">
            {<SignUpPage />}
          </PubliceRoute>
          <PubliceRoute exact path="/google-redirect" redirectTo="/" restricted>
            {<LoadingPage />}
          </PubliceRoute>
          <PrivateRoute path="/report">{<ReportPage />}</PrivateRoute>
        </Suspense>
      </Switch>
      {/* <Summary /> */}
      <Modal active={modalActive} setActive={setModalActive} />
      <ModalExit active={modalExitActive} setActive={setModalExitActive} />
    </div>
  );
}
export default App;
