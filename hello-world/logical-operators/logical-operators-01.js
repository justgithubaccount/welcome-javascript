console.log('Task 1');
console.log(null || 2 || undefined);

console.log('Task 2');
console.log((console.log(1) || 2 || console.log(3)));

console.log('Task 3');
console.log(1 && null && 2);

console.log('Task 4');
console.log(console.log(1) && console.log(2));

console.log('Task 5');
console.log(null || 2 && 3 || 4);

console.log('Task 6');

let value = NaN;

value &&= 10;
value ||= 20;
value &&= 30;
value ||= 40;

console.log(value);

console.log('Task 7');

let age = 59;

if (age >= 14 && age <= 90) {
    console.log('OK')
} else {
    console.log('Not OK')
}

console.log('Task 8.1');

age = 69

if (!(age >= 14 && age <= 90)) {
    console.log('OK')
} else {
    console.log('Not OK')
}

console.log('Task 8.2');

age = 79

if (age < 14 || age > 90) {
    console.log('OK')
} else {
    console.log('Not OK')
}

console.log('Task 9')

if (-1 || 0) console.log('first');
if (-1 && 0) console.log('second');
if (null || -1 && 1) console.log('third');