import React from "react";
import Button from "./Button";
import Input from "./Input";

const Form = () => {
    const arr = ['item 1', 'item 2', 'item 3']

  return (
    <form>
        <Input id="email" label="Email: " required/>
        <Input type="password" id="password" label="Password: " />
      <Button items={arr} />
    </form>
  );
};

export default Form;
