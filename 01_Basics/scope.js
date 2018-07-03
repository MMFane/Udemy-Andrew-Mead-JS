// JS uses Lexical / Static Scoping
// code blocks define variable scope
// global scope - all things defined outside all code blocks
// local scope - all things defined inside code block (or in parent/ancestor scope)

let varOne = "varOne"

if (true) {
    console.log(varOne)
    let varTwo = "varTwo"
    console.log(varTwo)
}

if (true) {
    let varThree = "varThree"
    if (true) {
        let varFour = "varFour"
    }
}

console.log(varTwo)