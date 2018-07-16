const add = function () {
    return arguments[0] + arguments[1]
}

console.log(add(11, 22, 33, 44))

const car = {
    color: 'black',
    getSummary: function () {
        return `The car is ${this.color}`
    },
    getSummaryAltSyntax() {
        return `The car is ${this.color}`
    },
    getSummaryArrow: () => `The car is ${this.color}`
}

console.log(car.getSummary())
console.log(car.getSummaryAltSyntax())
console.log(car.getSummaryArrow())