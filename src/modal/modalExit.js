import React from "react";
import "./modal.scss";
import sprite from "../images/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/auth/auth-operation";
import authSelector from "../redux/auth/auth-selector";

const ModalExit = ({ active, setActive }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);

  const onEscModalClose = () => {
    window.addEventListener("keydown", onEscKeyPress);

    function onEscKeyPress(e) {
      if (e.code === "Escape") {
        setActive(false);
      }
    }
  };

  return (
    <>
      {isLoggedIn && active && (
        <div
          className={active ? "backdrop" : "backdrop hidden"}
          onClick={() => setActive(false)}
        >
          <div
            className="modalOpen"
            onClick={(e) => {
              e.stopPropagation();
              onEscModalClose();
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

            <p className="areYouSure">Вы действительно хотите выйти?</p>

            <button
              type="button"
              className="modal-button"
              onClick={() => {
                dispatch(logOut());
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
      )}
    </>
  );
};

export default ModalExit;
