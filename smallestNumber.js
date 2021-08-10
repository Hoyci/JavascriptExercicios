function smallestNumber(list){
    let result = list[0]
    for (let i = 1; i < list.length; i++){
        if (list[i] < result){
            result = list[i]
            return result
        }
    }
    return result
}

console.log(smallestNumber([10, 5, 35, 65]))
console.log(smallestNumber([5, -15, 50, 3]))


function smallestNumber1(array){
    let result = list[0]
    for (let index in array)
        if (array[index] < result)
            result = array[index]
            
    return result
}

function smallestNumber2(array){
    return array.reduce((previous, atual) => previous < atual ? previous : atual)
}
