import React from "react";
import ButtonModal from "./ButtonModal";
import Modal from "./Modal";

const App = () => {
  const [modal, setModal] = React.useState(() => {
    const active = window.localStorage.getItem("isActive");
    return active;
  });
  const [items, setItems] = React.useState("some text");

  function handleClick() {
    setItems("another");
  }
  
  return (
    <div>
      <p>{items}</p>
      <button onClick={handleClick}>Click</button>
      <div>{modal ? "Modal opened" : "Modal closed"}</div>
      <Modal modal={modal} setModal={setModal}></Modal>
      <ButtonModal setModal={setModal} />
    </div>
  );
};

export default App;
