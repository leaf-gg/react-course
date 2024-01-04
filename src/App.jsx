import React, { useState } from "react";
import ProductExercise from "./ProductExercise";

const App = () => {
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(null);

  async function handleClick(event) {
    setLoad(true);
    const resp = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
    );
    const json = await resp.json();

    setData(json);
    setLoad(false);
  }

  return (
    <>
      <button onClick={handleClick}>Notebook</button>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        Smartphone
      </button>
      <button onClick={handleClick}>Tablet</button>
      {load && <p>Loading...</p>}
      {!load && data && <ProductExercise data={data} />}
    </>
  );
};

export default App;
