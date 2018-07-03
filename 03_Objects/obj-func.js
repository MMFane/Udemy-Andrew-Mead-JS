let myBook = {
    title: 'Butt Sniffing Adventure',
    author: 'Arin Hanson',
    pageCount: 256
};

let otherBook = {
    title: 'Fwip Fwip FwipFwip',
    author: 'Danny Avedan',
    pageCount: 5960
};

let getSummary = function(book) {
    return {
        summary: `"${book.title}" by ${book.author}`,
        pageCountSummary: `"${book.title}" is ${book.pageCount} pages long`,
    }
}

console.log(getSummary(myBook).summary);
console.log(getSummary(otherBook).pageCountSummary);

// Challenge
let convertFahrenheit = function(temp) {
    return {
        fahrenheit: temp,
        celsius: ((temp - 32) * 5 / 9).toFixed(2),
        kelvin: ((temp + 459.67) * 5 / 9).toFixed(2)
    }
}

console.log(convertFahrenheit(32).celsius);
console.log(convertFahrenheit(32).kelvin);
console.log(convertFahrenheit(76).celsius);
console.log(convertFahrenheit(76).kelvin);
console.log(convertFahrenheit(100).celsius);
console.log(convertFahrenheit(100).kelvin);

