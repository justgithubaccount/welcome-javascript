// Function pow(x,n)
// In other words, multiplies x by itself n times and returns the result.

function isNatural(n) {
    if (n % 1 == 0 && n >= 1) {
        return true;        
    } else {
        return false;
    }
}

function calcPow(x, n) {

    let result = x;

    if (!isNatural(n)) {
        return "Please input natural number or try again later"
    };

    for (let i = 1; i < n; i++) {
        result =+ result * x;
    }
    return result;
}

console.log(calcPow(3, 3));
console.log(calcPow(3, 2.5));
console.log(calcPow(4, 4));
console.log(calcPow(1, 100));
console.log(calcPow(5, 99.99));