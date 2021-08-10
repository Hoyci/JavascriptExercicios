function repeat(value, number){
    list = []
    for (i = 0; i < number; i++){
        list.push(value)
    }
    return list
}

console.log(repeat("código", 3))
console.log(repeat(7, 3))