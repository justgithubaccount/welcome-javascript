function User(name) {
    // this = {};  (implicitly)

    // add properties to this
    this.name = name;
    this.isAdmin = false;

    // return this;  (implicitly)
}
  
let user = new User("Jack");
  
console.log(user.name); // Jack
console.log(user.isAdmin); // false