function lucky(number){
    const min = 1
    const max = 10
    const new_number = Math.floor(Math.random() * (max - min + 1) + min)

    return (number === new_number ? `Parabéns! O número sorteado foi ${new_number}` : `Que pena! O número sorteado foi ${new_number}`)
}

console.log(lucky(5))