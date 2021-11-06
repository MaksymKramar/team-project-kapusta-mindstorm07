import { useState } from "react";
import Modal from "./modal/modal";
import ModalExit from "./modal/modalExit";
import "./App.css";


function App() {
  const [modalActive,setModalActive]=useState(true)
  return <div className="App">

    <Modal active={modalActive} setActive={setModalActive} />
    <ModalExit/>
  </div>;

}

export default App;
