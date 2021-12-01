import { useState, useEffect, Suspense, lazy } from "react";
import { useDispatch } from "react-redux";
import { fetchCurrentUser } from "./redux/auth/auth-operation";
import { Switch, Redirect } from "react-router-dom";
import PubliceRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import { ToastContainer } from "react-toastify";
import Modal from "./modal/modal";
import ModalExit from "./modal/modalExit";
import ProjectLoader from "./components/ProjectLoader/ProjectLoader";
import "./App.css";

const LogInPage = lazy(() => import("./pages/LogInPage/LogInPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage/SignUpPage"));
const LoadingPage = lazy(() => import("./pages/LoadingPage/LoadingPage"));
const ReportPage = lazy(() => import("./pages/ReportPage/ReportPage"));
const MainPage = lazy(() => import("./pages/MainPage/MainPage"));

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
        <Suspense fallback={<ProjectLoader />}>
          <PubliceRoute path="/" exact>
            <Redirect to="/login" />
          </PubliceRoute>

          <PubliceRoute path="/login" restricted redirectTo="/main">
            {<LogInPage setActive={setModalExitActive} />}
          </PubliceRoute>

          <PubliceRoute path="/signup" restricted redirectTo="/main">
            {<SignUpPage />}
          </PubliceRoute>

          <PubliceRoute
            exact
            path="/google-redirect"
            redirectTo="/main"
            restricted
          >
            {<LoadingPage />}
          </PubliceRoute>

          <PrivateRoute path="/report">
            {<ReportPage setActive={setModalExitActive} />}
          </PrivateRoute>

          <PrivateRoute path="/main">
            {<MainPage setActive={setModalExitActive}></MainPage>}
          </PrivateRoute>
        </Suspense>
      </Switch>
      <Modal active={modalActive} setActive={setModalActive} />
      <ModalExit active={modalExitActive} setActive={setModalExitActive} />

      <ToastContainer style={{ width: "250px" }} />
    </div>
  );
}
export default App;
