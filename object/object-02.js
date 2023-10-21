function isEmpty(object) {
    for (key in object) {
        return false;    
    }
    return true;
}

let schedule = {};

console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

console.log(isEmpty(schedule)); // false

delete schedule["8:30"];

console.log(isEmpty(schedule)); // true