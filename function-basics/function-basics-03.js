// Function min(a, b)

function getMinNumberVerOne(a, b) {
    if (a > b) {
        return b;
    } else {
        return a;
    }
}

function getMinNumberVerTwo(a, b) {
    return a < b ? a : b;
}

console.log(gGetMinNumberVerOne(-1, 66));
console.log(getMinNumberVerTwo(66, 55));