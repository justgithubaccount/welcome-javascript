// What is this code going to show?

let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
const shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
console.log(fruits.length); // 4 (так как массивы это объекты ссылающиеся на один и тот же массив)
