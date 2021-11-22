import React from "react";
import "./modal.scss";
import sprite from "../images/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
// import transactionOpiration from "../redux/transactions/transactionsOperations"

const Modal = ({ active, setActive, onCancel }) => {
  const dispatch = useDispatch();
  // const deleteTransactionById = useSelector(transactionOpiration.deleteTransactionById);
  return (
    // <>
    //   {deleteTransactionById && active && (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="close-button " aria-expanded="false" onClick={() => setActive(false)} >
              <svg width="12" height="12" className="cloce-button-icon">
                <use className="" href={sprite + "#icon-close_24px"}></use>
              </svg>
            </button>
    
            <p className="areYouSure">Вы уверены?</p>
  
            <button type="button"
              className="modal-button"
              onClick={() => {
                // dispatch(deleteTransactionById());
                setActive(false);
              }}
            >
              ДА</button>
            <button type="button" className="modal-button"
              onClick={() => setActive(false)}
            >НЕТ</button>
      
      

          </div>
        </div>
      )
      }
//     </>
//   );
// };

export default Modal;