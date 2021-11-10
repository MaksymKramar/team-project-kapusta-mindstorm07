import { useState } from "react";
import Modal from "./modal/modal";
import ModalExit from "./modal/modalExit";
import Container from "./components/Container/Container";
import "./App.css";
import { useEffect } from "react";
import { fetchCurrentUser } from "./redux/auth/auth-operation";
import { useSelector, useDispatch } from "react-redux";
import authSelector from "./redux/auth/auth-selector";
import { Switch } from "react-router-dom";
import PubliceRoute from "./routes/PublicRoute";
// import PrivateRoute from './routes/PrivateRoute'
import { Suspense, lazy } from "react";
import { ToastContainer } from "react-toastify";

const LogInPage = lazy(() => import("./pages/LogInPage/LogInPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage/SignUpPage"));

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
          </PubliceRoute>

          <PubliceRoute path="/login" restricted redirectTo="/">
            {<LogInPage setActive={setModalExitActive} />}
          </PubliceRoute>

          <PubliceRoute path="/signup" restricted>
            {<SignUpPage />}
          </PubliceRoute>
        </Suspense>
      </Switch>

      {/* <Modal active={modalActive} setActive={setModalActive} /> */}
      <ModalExit active={modalExitActive} setActive={setModalExitActive} />
      {/* <Container /> */}

      <ToastContainer style={{ width: "250px" }} />
    </div>
  );
}
export default App;
