function User(name) {
    this.name = name;
  
    this.sayHi = function() {
        console.log("My name is: " + this.name);
    };
}
  
let john = new User("John");

let jack = new User("Jack");
  
john.sayHi(); // My name is: John
jack.sayHi(); // My name is: John
