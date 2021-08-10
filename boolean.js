function rola(value){
    if (typeof value == 'boolean'){
        return !value
    } else if (typeof value == 'number') {
        return value * -1
    } else {
        return 'Booleano ou númerico esperado, mas o parâmetro é do tipo string'
    }
}

console.log(rola(true))
console.log(rola(false))
console.log(rola(100))
console.log(rola('rola'))