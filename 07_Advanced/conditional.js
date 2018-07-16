// const myAge = 27
// // conditional aka ternary operator
// const message = myAge >= 18 ? 'You can vote' : 'You cannot vote'

// console.log(message)

const myAge = 27

const showPage = () => {
    return 'You can see the boozy page'
}

const showErrorPage = () => {
    return `You see an error saying you're not old enough`
}

const message = myAge >= 21 ? showPage() : showErrorPage()
console.log(message)

const team = [
    'Sam',
    'Sarah',
    'Natalie',
    'Hallie',
    'Olivia'
]

team.length <= 4 ? console.log(`Team Size: ${team.length}`) : console.log(`You have too many people on your team. 4 max`)