// Rewrite the function using '?' or '||'

function checkAgeVerOne(age) {
    if (age > 18) {
        return true;
    } else {
        return console.log('Did parents allow you?');
    }
}

function checkAgeVerTwo(age) {
    return (age > 18) ? true : console.log('Did parents allow you?');
}

function checkAgeVerThree(age) {
    return (age > 18) || console.log('Did parents allow you?');
}

checkAgeVerOne(15);
checkAgeVerTwo(16);
checkAgeVerThree(17);