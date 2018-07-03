// Undefined for variable 
// a) if variable is created, but not assigned to value (can test if undefined and act on that)
// b) can also explicitly overwrite var value as undefined

let name;
// name = "Sam";
// name = undefined;
// name = null; //null implies it was explicitly cleared by devs, an important destinction

if(name === undefined) {
    console.log("Please provide a name");
} else {
    console.log(name);
}

// Undefined for functions
// a) undefined if you don't pass in a value it needs
// b) undefined is the default return val if not otherwise set
let square = function(num) {
    console.log(num);
}

let result = square();