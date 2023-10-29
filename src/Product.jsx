import React from 'react'

const Product = ({ nome, propriedades }) => {
    return (
        <div style={{border: '1px solid blue', margin: '1rem 0', padding: '2rem'}}>
            <p>{nome}</p>
            <ul>
                {propriedades.map((propriedade) => (
                    <li key={propriedade}>{propriedade}</li>
                ))}
            </ul>
        </div>
    )

}


export default Product