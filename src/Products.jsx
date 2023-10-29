import React from "react";
import Product from "./Product";
import Title from "./Title";

const Products = () => {
  const products = [
    { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
    { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
  ];

  return (
    <section>
        <Title color="red" text="Products"></Title>
       {products.map((product) => (
        <Product key={product.nome} {...product} />
      ))}
    </section>
  );
};

export default Products;
