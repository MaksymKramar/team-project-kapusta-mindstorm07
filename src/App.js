import { useState } from "react";
import Modal from "./modal/modal";
import ModalExit from "./modal/modalExit";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";


function App() {

  const [modalActive,setModalActive]=useState(true)
  return (
    <div className="App">
  <HomePage />
    <Modal active={modalActive} setActive={setModalActive} />
    <ModalExit/>
  </div>);


}

export default App;
