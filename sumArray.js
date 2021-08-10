function sumArray(array){
    result = 0
    for (let i = 0; i < array.length; i++){
        result += array[i]
    }
    return result
}

console.log(sumArray([10, 10, 10]))
console.log(sumArray([10, 15, 20]))