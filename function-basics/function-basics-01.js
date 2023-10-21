// Is "else" required?

function checkAgeVerOne(age) {
    if (age > 18) {
        return true;
    } else {
        return console.log('Did parents allow you?');
    }
}

console.log(checkAgeVerOne(15));

function checkAgeVerTwo(age) {
    if (age > 18) {
        return true;
    }
    return console.log('Did parents allow you?');
}

console.log(checkAgeVerTwo(15));