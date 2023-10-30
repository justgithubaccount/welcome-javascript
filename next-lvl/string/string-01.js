// Write a function ucFirst(str) that returns the string str
// with the uppercased first character, for instance:

function ucFirst(str) {
  if (!str) return str;

  const firstLetter = str[0].toUpperCase();
  const otherLetters = str.slice(1);

  return firstLetter + otherLetters;
}

console.log(ucFirst("hi"));
console.log(ucFirst("helloween"));
console.log(ucFirst("Hi"));
console.log(ucFirst(""));
