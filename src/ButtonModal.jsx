import React from "react";

const ButtonModal = ({ setModal }) => {
  function handleClick() {
    setModal((active) => !active);
  }
  return <button onClick={handleClick}>Open</button>;
};

export default ButtonModal;
