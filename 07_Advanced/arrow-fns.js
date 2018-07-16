// shorthand syntax
const square = (num) => num * num

const squareLong = (num) => {
    return num * num
}

// console.log(square(5))

const people = [
    {
        name: 'Sam',
        age: 27
    },
    {
        name: 'Steve',
        age: 15
    },
    {
        name: 'Josh',
        age: 31
    }
]

// regular function
const under30 = people.filter(function (person) {
    return person.age < 30
})

// arrow function
const under30_b = people.filter((person) => {
    return person.age < 30
})

// arrow shorthand
const under30_c = people.filter((person) => person.age < 30)

// console.log(under30)
// console.log(under30_b)
// console.log(under30_c)

const findAge15 = people.find((person) => person.age === 15).name 
console.log(findAge15)