// Create a function truncate(str, maxlength) that checks the length
// of the str and, if it exceeds maxlength – replaces the end of str
// with the ellipsis character "…", to make its length equal to maxlength.
// The result of the function should be the truncated (if needed) string.

function truncate(str, maxLength) {
  let newStr = "";

  if (str.length > maxLength) {
    newStr = `${str.slice(0, maxLength - 1)}...`;
  } else {
    newStr = str;
  }

  return console.log(newStr);
}

truncate("What I'd like to tell on this topic is:", 17);
truncate("Hi everyone!", 7);
truncate("Hi everyone!", 20);
truncate("The result of the function should be the truncated (if needed) string.", 50);
