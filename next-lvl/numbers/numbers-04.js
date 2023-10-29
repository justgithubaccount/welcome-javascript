function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

console.log(randomInteger(1, 3));
console.log(randomInteger(1, 13));
console.log(randomInteger(1, 31));
