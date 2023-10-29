import React from "react";
import Title from "./Title";


const Description = ({ text }) => {
  return <p>{text}</p>;
};

const Home = () => {
  return (
    <div>
      <Title color="green" text="Home"></Title>
      <Description text="This is a home from your website" />
    </div>
  );
};

export default Home;
