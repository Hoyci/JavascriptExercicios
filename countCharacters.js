function countCharacters(character, string){
    let count = 0
    string = string.toUpperCase()
    character = character.toUpperCase()
    for (let i = 0; i <= string.length; i++){
        if (string[i] === character){
            count++
        }
    }
    return count
}

console.log(countCharacters('c',  "Conhece-te a ti mesmo"))
console.log(countCharacters('e',  "A sorte favorece os audazes"))
console.log(countCharacters('r',  "Ruan Pablo Ribeiro de Sousa"))