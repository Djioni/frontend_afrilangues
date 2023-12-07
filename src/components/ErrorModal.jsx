import React from "react";
import Modal from "react-bootstrap/Modal";
import "./ErrorModal.css";
const ErrorModal = ({ open, setOpen, error, actionText, title }) => {
  return (
    <section id="err-m" className="">
      <Modal id="err-m-content" show={open} onHide={setOpen}>
        <div className="p-3 box">
          {" "}
          <h5 style={{ fontWeight: "600" }}>{title || "Erreur"}</h5>
          <Modal.Body>
            <p style={{ color: "#1a9900", fontWeight: "300" }} className="">
              {error}
            </p>
          </Modal.Body>
          <div className="w-100 d-flex justify-content-end align-items-center">
            <button onClick={setOpen} className="drawer-close-btn">
              {actionText}
            </button>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default ErrorModal;
