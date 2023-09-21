import React from "react";
import Modal from "react-bootstrap/Modal";

const ErrorModal = ({ open, setOpen }) => {
  return (
    <Modal show={open} onHide={setOpen} centered className="">
      <div className="d-flex flex-column w-100 h-100 align-items-center jsutify-content-start gap-1 rounded-2 error-dialog px-2">
        <h5>Réponse incorrecte</h5>

        <p style={{ color: "orangered" }} className="fw-bold">
          Veuillez réessayer
        </p>

        <div className="w-100 d-flex justify-content-end align-items-center pb-2">
          <button onClick={setOpen} className="error-cancel-btn">
            Continuer
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ErrorModal;
