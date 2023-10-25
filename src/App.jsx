import React from "react";

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const active = {
  color: "green",
};

const inactive = {
  color: "red",
};

const App = () => {
  const dados = mario;
  
  const total = dados.compras.map((item) => {
    return parseInt(item.preco.replace("R$ ", ""));
  });
  let fullTotal = 0;

  total.forEach((el) => {
    fullTotal += el;
  });

  const fullData = (
    <>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação: {" "}
        {dados.ativa ? (
          <span style={active}>Ativa</span>
        ) : (
          <span style={inactive}>Inativa</span>
        )}
      </p>
      <p>Total gasto: R$ {fullTotal}</p>
      {fullTotal >= 10000 ? <p>Você está gastando muito.</p> : ""}
    </>
  );

  return (
    <>
      <div>{fullData}</div>
    </>
  );
};

export default App;
