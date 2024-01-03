import React from "react";

const Modal = ({ modal, setModal }) => {
  if (modal)
    return (
      <div>
        <p>
          This is a Modal.
          <button onClick={() => setModal(false)}>Close</button>
        </p>
      </div>
    );
  return null;
};

export default Modal;
