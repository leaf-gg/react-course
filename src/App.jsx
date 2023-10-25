import React from "react";

// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
const produtos = [
  {
    id: 1,
    nome: "Smartphone",
    preco: "R$ 2000",
    cores: ["#29d8d5", "#252a34", "#fc3766"],
  },
  {
    id: 2,
    nome: "Notebook",
    preco: "R$ 3000",
    cores: ["#ffd045", "#d4394b", "#f37c59"],
  },
  {
    id: 3,
    nome: "Tablet",
    preco: "R$ 1500",
    cores: ["#365069", "#47c1c8", "#f95786"],
  },
];

const App = () => {
  return (
    <section>
      {produtos.map((item) => (
        <div key={item.id} className="produto">
          {Number(item.preco.replace("R$ ", "")) > 1500 && (
            <>
              <h1 key={item.nome}>{item.nome}</h1>
              <p key={item.preco}>Preço: {item.preco}</p>

              {item.cores.map((cor) => (
                <div
                  style={{
                    backgroundColor: cor,
                    color: "white",
                    padding: "10px",
                    margin: "10px 1rem",
                    fontWeight: "500",
                    textAlign: "center"
                  }}
                >
                  {cor}
                </div>
              ))}
            </>
          )}
        </div>
      ))}
    </section>
  );
};

export default App;
