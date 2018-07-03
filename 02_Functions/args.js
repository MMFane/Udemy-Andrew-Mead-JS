// multiple args
let add = function(num1, num2) {
    return num1 + num2;
}

console.log(add(2, 3));

// default args
let getScoreText = function(name = "anon", score = 0) {
    // return name + " scored " + score + " points!";
    return `${name} scored ${score} points!`;
}

console.log(getScoreText());
console.log(getScoreText("Sam"));
console.log(getScoreText(undefined, 90));
console.log(getScoreText("Steve", 20));

//Template Strings
let name = "Sam"
let age = 27;
console.log(`Hey my name is ${name}! I am ${age} years old`);



// Challenge
let getTip = function(total, tipPercent = 0.15) {
    //Challenge 2 - Template String
    console.log(`A ${tipPercent * 100}% tip on $${total} would be $${total * tipPercent}.`)
    return total * tipPercent;
}

console.log(getTip());
console.log(getTip(100));
console.log(getTip(50, 0.20));
console.log(getTip(17, 0.30));