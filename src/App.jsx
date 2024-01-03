import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(1);
  const [items, setItems] = useState(["item 1"]);

  function handleClick() {
    setCount((count) => {
      setItems((items) => [...items, "item" + (count + 1)]);
      return count + 1;
    });
  }

  return (
    <div>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={handleClick}>{count}</button>
    </div>
  );
};

export default App;
