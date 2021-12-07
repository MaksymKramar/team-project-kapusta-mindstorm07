import React from "react";
import "./modal.scss";
import sprite from "../images/sprite.svg";
import { useDispatch, useSelector } from "react-redux";

import { deleteTransactionById } from "../redux/transactions";

const Modal = ({ active, setActive, onCancel, transactionId }) => {
  // console.log('aljo', transactionId)
  const dispatch = useDispatch();

  const onEscCloseModal = () => {
    window.addEventListener("keydown", onEscKeyPress);

    function onEscKeyPress(e) {
      if (e.code === "Escape") {
        setActive(false);
      }
    }
  };

  return (
    <>
      <div
        className={active ? "modalDelete active" : " modalDelete"}
        onClick={() => setActive(false)}
      >
        <div
          className="modalDelete-content"
          onClick={(e) => {
            e.stopPropagation();
            onEscCloseModal();
          }}
        >
          <button
            type="button"
            className="close-button "
            aria-expanded="false"
            onClick={() => setActive(false)}
          >
            <svg width="12" height="12" className="cloce-button-icon">
              <use className="" href={sprite + "#icon-close_24px"}></use>
            </svg>
          </button>

          <p className="areYouSure">Вы уверены?</p>

          <button
            type="button"
            className="modal-button"
            onClick={() => {
              // console.log(transactionId, dispatch, deleteTransactionById);
              if (transactionId) {
                dispatch(deleteTransactionById(transactionId));
              }
              setActive(false);
            }}
          >
            ДА
          </button>
          <button
            type="button"
            className="modal-button"
            onClick={() => setActive(false)}
          >
            НЕТ
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
