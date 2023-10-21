// Реализация toString и valueOf вместо Symbol.toPrimitive

let user = {
    name: "John",
    money: 1000,
  
    // для хинта равного "string"
    toString() {
      return `{name: "${this.name}"}`;
    },
  
    // для хинта равного "number" или "default"
    valueOf() {
      return this.money;
    }
};
  
console.log(user); // toString -> {name: "John"}
console.log(+user); // valueOf -> 1000
console.log(user + 500); // valueOf -> 1500