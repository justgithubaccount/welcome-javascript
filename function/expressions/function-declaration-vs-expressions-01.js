// Function Declaration
function sum(a, b) {
    return a + b;
}

// Function Expression
let sum = function (a, b) {
    return a + b;
};

// A Function Expression is created when the execution reaches it and is usable only from that moment.
// A Function Declaration can be called earlier than it is defined.

sayHi("John"); // Hello, John

function sayHi(name) {
    console.log(`Hello, ${name}`);
}

sayHi("John"); // error!

let sayHi = function (name) {  // (*) no magic any more
    console.log(`Hello, ${name}`);
};