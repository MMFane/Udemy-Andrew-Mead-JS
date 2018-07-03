// Variable Shadowing - redefining same var name inside a smaller scope
// Leaked global - assign value to undefined variable ends up getting implicitly declared in global scope

// let name = "Sam";

if (true) {
    // let name = "Mike";
    if (true) {
        name = "Genny";
        console.log(name);
    }
}

if (true) {
    console.log(name);
}