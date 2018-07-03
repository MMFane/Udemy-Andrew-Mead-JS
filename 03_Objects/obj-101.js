let myBook = {
    title: 1984,
    author: 'George Orwell',
    pageCount: 200
};

console.log(myBook)
console.log(`${myBook.title} by ${myBook.author} is ${myBook.pageCount} pages long`);

myBook.title = 'Animal Farm';
myBook.author = 'George Orwell';
myBook.pageCount = 234;

console.log(myBook)
console.log(`${myBook.title} by ${myBook.author} is ${myBook.pageCount} pages long`);

// Challenge
let person = {
    name: 'Sam',
    age: 27,
    location: 'Seattle, WA'
};

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`);

person.age += 1;
console.log(`${person.name} is now ${person.age} and still lives in ${person.location}.`);
