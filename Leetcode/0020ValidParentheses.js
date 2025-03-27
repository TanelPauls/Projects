/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let lastOpen;
  let newString = [];
  for (x in s) {
    newString.push(s[x]);
    if (newString[newString.length - 1] === ")") {
      if (newString[newString.length - 2] != "(") {
        return false;
      } else {
        newString.splice(-2);
      }
    }
    if (newString[newString.length - 1] === "]") {
      if (newString[newString.length - 2] != "[") {
        return false;
      } else {
        newString.splice(-2);
      }
    }
    if (newString[newString.length - 1] === "}") {
      if (newString[newString.length - 2] != "{") {
        return false;
      } else {
        newString.splice(-2);
      }
    }
  }
  if (newString.length == 0) {
    return true;
  } else {
    return false;
  }
};

let s = "()[]{}";
console.log(isValid(s));
