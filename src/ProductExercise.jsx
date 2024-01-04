import React from 'react'

const ProductExercise = ({data}) => {
    return (
        <div>
            <h1>{data.nome}</h1>
            <img width="100%" src={data.fotos[0].src} alt={data.fotos[0].titulo} />
            <p>Description: {data.descricao}</p>
            <p>R$ {data.preco}</p>
            <p>Sold: {data.vendido ? "Yes" : "No"}</p>
        </div>
    )
}
export default ProductExercise