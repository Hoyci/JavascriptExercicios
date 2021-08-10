function objectToArray(object){
    new_array = []
    for (let key in object){
        new_array.push([key, object[key]])
    }
    return new_array
}

object = {
    nome: "Maria",
    profissao: "Desenvolvedora de software"
    }
console.log(objectToArray(object))