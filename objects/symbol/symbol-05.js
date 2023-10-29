// Для глобальных символов, кроме Symbol.for(key) который ищет символ по имени
// существует обратный метод: Symbol.keyFor(sym), который, наоборот, принимает 
// глобальный символ и возвращает его имя.

// получаем символ по имени
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// получаем имя по символу
console.log(Symbol.keyFor(sym)); // name
console.log(Symbol.keyFor(sym2)); // id

// Внутри метода Symbol.keyFor используется глобальный реестр символов 
// для нахождения имени символа. Так что этот метод не будет работать 
// для неглобальных символов. Если символ неглобальный, метод не сможет 
// его найти и вернёт undefined.

// Впрочем, для любых символов доступно свойство description.

let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

console.log(Symbol.keyFor(globalSymbol)); // name, глобальный символ
console.log(Symbol.keyFor(localSymbol)); // undefined для неглобального символа

console.log(localSymbol.description); // name