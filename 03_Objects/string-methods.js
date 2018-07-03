let name = 'Sam Yeager'

console.log(name.length)

console.log(name.toUpperCase())
console.log(name.toLowerCase())

let password = 'abc123password456'
password = 'abc123otherword456'
console.log(password.includes('password'))

let trimWord = '  Turt le  '
console.log(trimWord)
console.log(trimWord.trim())


// Challenge
let isValidPassword = function(password) {
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abcdefg123!@blah'))
console.log(isValidPassword('asdlakslkdjpasswordasld'))