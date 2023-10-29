function multiplyNumeric(object) {
    for (let key in object) {
        if (typeof object[key] == 'number') {
            object[key] *= 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

console.log(menu);

multiplyNumeric(menu);
  
console.log(menu);