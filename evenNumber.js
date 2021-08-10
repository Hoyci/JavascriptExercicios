function evenNumber(array){
    new_array = []
    for(let i = 0; i < array.length; i++){
        if (array[i] % 2 == 0 & i % 2 == 0){
            new_array.push(array[i])
        }
    }
    return new_array
}

console.log(evenNumber(([1, 2, 3, 4])))
console.log(evenNumber(([10, 70, 22, 43])))