function remove(object, element){
    const copy = Object.assign({}, object)
    delete copy[element]
    return copy
}

object = {
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
}

console.log(remove(object, "descricao"))
console.log(remove(object, "nome"))
console.log(remove(object, "id"))