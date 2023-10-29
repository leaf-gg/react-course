import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./form/Form";

const Test = () => {
  const active = true;
  if (active) {
    return <p>test</p>;
  }
};

const App = () => {
  return (
    <React.Fragment>
      <Test />
      <Header />
      App <br />
      <Form />
      <Footer />
    </React.Fragment>
  );
};

export default App;
