let age = prompt("What is your age?", 18);

// conditionally declare a function
if (age < 18) {

    function welcome() {
        console.log("Hello!");
    }

} else {

    function welcome() {
        console.log("Greetings!");
    }

}

// ...use it later
welcome(); // Error: welcome is not defined