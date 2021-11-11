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
import Balance from "./Components/Balance/Balance";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage/SignUpPage"));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  
const [modalActive, setModalActive] = useState(true);
  
  return (
    <div className="App">
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
      </Suspense>
    </Switch>

      <Modal active={modalActive} setActive={setModalActive} />
      <ModalExit />
        <Balance />
      <Container />
    </div>   
    );
}
export default App;
