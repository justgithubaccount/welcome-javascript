// Довольно часто нам нужно единое «универсальное» место 
// для обработки всех примитивных преобразований. 
// В этом случае мы можем реализовать только toString

let user = {
    name: "John",
  
    toString() {
      return this.name;
    }
};
  
console.log(user); // toString -> John
console.log(user + 500); // toString -> John500