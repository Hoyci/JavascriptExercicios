function contains(word, list){
    const new_list = []
    for (let i of list){
        if (i.includes(word)){
            new_list.push(i)
        }
    }
    return new_list
}
console.log(contains('pro',  ["programação", "mobile", "profissional"]))
console.log(contains('python', ['javascript', 'java', 'c++']))