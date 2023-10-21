function isEmpty(object) {
    for (key in object) {
        return false;    
    }
    return true;
}

function calcSalary(object) {

    total = 0;

    if (!isEmpty(object)) {
        for (key in object) {
            total += object[key];
        }        
    } else {
        return total = "deneg net, no vi znaete chto delat";
    }
    return total;
}

function clearObject(object) {
    for (key in object) {
        delete object[key];  
    }
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}

console.log(calcSalary(salaries));

clearObject(salaries);

console.log(calcSalary(salaries));