function totalExpenses(object){
    return object.map(object => object.preco).reduce((acumulator, atualValue) => acumulator + atualValue)
}

console.log(totalExpenses([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
    ]))

console.log(totalExpenses([
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
    ]))