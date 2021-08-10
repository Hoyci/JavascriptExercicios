function filter(array){
    new_array = []
    for (let item of array)
        if(typeof item == 'number')
            new_array.push(item)
    return new_array
}

console.log(filter(["Javascript", 1, "3", "Web", 20]))