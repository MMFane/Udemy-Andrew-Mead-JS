let num = 190.915

console.log(num.toFixed(2))

console.log(Math.round(num))

console.log(Math.floor(num))

console.log(Math.ceil(num))

// let min = 0
// let max = 1
// let randNum = Math.floor(Math.random() * (max - min + 1)) + min; // random number between 10 and 20
// console.log(randNum)

// Challenge
let min = 1
let max = 5
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

let makeGuess = function(guess) {
    return guess === randomNum
}

console.log(makeGuess(1))
console.log(makeGuess(2))
console.log(makeGuess(3))
console.log(makeGuess(4))
console.log(makeGuess(5))