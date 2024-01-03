import React from "react";

const App = () => {
  const [activeHook, setActiveHook] = React.useState(false);
  const [data, setData] = React.useState({name: 'Luiz', age: 27})
  function handleClick() {
    setActiveHook(!activeHook);
    setData({...data, haveCollege: 'Have college' })
  }

  return (
    <div>
      <p>Name: {data.name}</p>
      <p>Age: {data.age}</p>
      <p>College: {data.haveCollege}</p>
      <button onClick={handleClick}>{activeHook ? "Active" : "Inactive"}</button>
    </div>
  );
};

export default App;
