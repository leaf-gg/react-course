import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./form/Form";

const Title = ({color, text, children}) => {
  return <h1 style={{color: color}}>{text}, {children}</h1>
} 

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Title color="#faa200"text="Hello">
          This is a children
        </Title> 
      <br />
      <Form />
      <Footer />
    </React.Fragment>
  );
};

export default App;
