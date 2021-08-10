function leapYear(year){
    if (year % 400 === 0){
        return true
    } else {
        if (year % 4 === 0 & year % 100 != 0){
            return true
        } else{
            return false
        }
    }
}

console.log(leapYear(2020))
console.log(leapYear(2024))
console.log(leapYear(2044))
console.log(leapYear(2050))
console.log(leapYear(2060))
console.log(leapYear(2064))
console.log(leapYear(2090))
console.log(leapYear(2092))
console.log(leapYear(2100))