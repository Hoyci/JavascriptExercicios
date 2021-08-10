function multi(first_number, second_number){
    var result = 0
    for (let i = 0; i < second_number; i++){
        result += first_number
    }
    return result
}

console.log(multi(5, 5))
console.log(multi(0, 7))
console.log(multi(7, 0))
console.log(multi(25, 3))
