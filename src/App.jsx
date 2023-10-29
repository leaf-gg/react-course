import React from "react";
import Home from "./Home";
import Links from "./Links";
import Products from "./Products";


const App = () => {
  const {pathname} = window.location;
  console.log('pathname', pathname)
  let Component;
  if (pathname === '/products') {
    Component = Products;
  } else {
    Component = Home;
  }
  return (
    <section>
      <Links />
      <Component />
    </section>
  );
};

export default App;
