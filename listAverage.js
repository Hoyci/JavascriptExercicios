function listAverage(list){
    const total = list.reduce((acumulator, atualValue) => acumulator + atualValue);
    return total / list.length
}

console.log(listAverage([0, 10]))
console.log(listAverage([1, 2, 3, 4, 5]))