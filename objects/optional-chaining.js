// obj?.prop – возвращает obj.prop если obj существует, в противном случае undefined.
// obj?.[prop] – возвращает obj[prop] если obj существует, в противном случае undefined.
// obj.method?.() – вызывает obj.method(), если obj.method существует, в противном случае возвращает undefined.

/* --- */

let userOne = {}; // пользователь без адреса

console.log(userOne?.address?.street); // undefined (без ошибки)

// console.log(user.address.street); // ошибка

/* --- */

let userTwo = null;

console.log(userOne?.address); // undefined
console.log(userTwo?.address.street); // undefined

/* --- */

let userThree = null;
let x = 0;

userThree?.sayHi(x++); // нет "userThree", поэтому выполнение не достигает вызова sayHi и x++

console.log(x);

/* --- */

let userAdmin = {
    admin() {
        console.log("Я админ");
    }
};
  
let userGuest = {};
  
userAdmin.admin?.(); // Я админ
userGuest.admin?.(); // ничего не произойдет (такого метода нет)

/* --- */

let key = "firstName";

let user1 = {
    firstName: "John"
};

let user2 = null;

console.log(user1?.[key]); // John
console.log(user2?.[key]); // undefined

/* --- */

// delete user?.name;