/*
https://learn.javascript.ru/object-toprimitive 

Все встроенные объекты, за исключением одного (объект Date)
реализуют "default" преобразование тем же способом, что и "number". 

И нам следует поступать так же.

Чтобы выполнить преобразование, JavaScript пытается найти и вызвать три следующих метода объекта:

1. Вызвать obj[Symbol.toPrimitive](hint) – метод с символьным ключом Symbol.toPrimitive
(системный символ) если такой метод существует,

2. Иначе, если хинт равен "string"
    - попробовать вызвать obj.toString() или obj.valueOf(), смотря какой из них существует.

3. Иначе, если хинт равен "number" или "default"
    - попробовать вызвать obj.valueOf() или obj.toString(), смотря какой из них существует.

*/

let user = {
    name: "John",
    money: 1000,
  
    [Symbol.toPrimitive](hint) {
        console.log(`hint: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
};
  
// демонстрация результатов преобразований:
console.log(user); // hint: string -> {name: "John"}                                                                                                                                                                                                                                                                   ame: "John"}
console.log(+user); // hint: number -> 1000
console.log(user + 500); // hint: default -> 1500

/*
Как мы можем видеть из кода, user становится либо строкой
со своим описанием либо суммой денег в зависимости от преобразования. 
Единый метод user[Symbol.toPrimitive] обрабатывает все случаи преобразования.
*/