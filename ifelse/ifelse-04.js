// Rewrite 'if' into '?'

let a = 2;
let b = 5;

let result;

if (a + b < 4) {
    result = 'Below';
} else {
    result = 'Over';
}

let sameResult = (a + b < 4) ? 'Below' : 'Over';

console.log(result)
console.log(sameResult)