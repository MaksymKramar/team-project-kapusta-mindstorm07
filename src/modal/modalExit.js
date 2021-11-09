import React from "react";
import "./modal.scss";
import sprite from "../images/sprite.svg";

const ModalExit = ({ active, setActive ,onCancel}) => {
  
return (
  <div className={active?"modal active":"modal"} onClick={()=>setActive(false)}>
    <div className="modal-content" onClick={e => e.stopPropagation()}>
      <button type="button" className="close-button " aria-expanded="false" onClick={()=>setActive(false)} >
            <svg width="12" height="12" className="cloce-button-icon">
                <use className="" href={sprite + "#icon-close_24px"}></use>
            </svg>
      </button>
    
      <p className="areYouSure">Вы действительно хотите выйти?</p>
  
      <button type="button" className="modal-button" onClick={()=>setActive(false)}>ДА</button>
        <button type="button" className="modal-button">НЕТ</button>
      
      

</div>
  </div>
  )
}

export default ModalExit;