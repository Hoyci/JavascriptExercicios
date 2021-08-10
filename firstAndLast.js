function firstAndLast(array){
    new_array = [];
    new_array.push(array[0], array[array.length -1]);
    return new_array
}

console.log(firstAndLast([0, 2, 4]))