// Nullish coalescing operator '??'
console.log("Example 1");

let user;

console.log(user ?? "Anonymous"); // Anonymous (user is undefined)

user = "John";

console.log(user ?? "Anonymous"); // John (user is not null/undefined)

/* Comparison with ||
The important difference between them is that:
|| returns the first truthy value.
?? returns the first defined value.
*/
console.log("Example 2.1");

let firstName = null;
let lastName = null;
let nickName = "SuperCoder";

// shows the first defined value
console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

console.log("Example 2.2");

firstName = null;
lastName = null;
nickName = "SuperCoder";

// shows the first truthy value
console.log(firstName || lastName || nickName || "Anonymous"); // Supercoder

console.log("Example 2.3");

let height = 0;

console.log(height || 100); // 100
console.log(height ?? 100); // 0

// Nullish assignment ??= 
console.log("Example 3.1");

let userAge = null;

if (userAge === null || userAge === undefined) {
    userAge = 18;
}

console.log(userAge); // 18

console.log("Example 3.2");

userAge = null;

userAge ??= 18;

console.log(userAge); // 18

console.log("Example 3.1");

userAge = 18;

userAge ??= console.log("Do not work");
userAge ??= 21;
userAge ??= null;

console.log(userAge) // 18