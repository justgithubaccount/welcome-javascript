let age = prompt("What is your age?", 18);

let welcome;

if (age < 18) {

    welcome = function () {
        alert("Hello!");
    };

} else {

    welcome = function () {
        console.lo("Greetings!");
    };

}

welcome(); // ok now