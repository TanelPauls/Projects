/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let numStr = "";
  let empty = true;
  for (let x = 0; x < s.length; x++) {
    if (empty) {
      if (/\s/.test(s[x])) {
      } else {
        if (s[x] == "-") {
          numStr += s[x];
          x++;
          if (s[x] == "+") {
            return 0;
          }
        }
        if (s[x] == "+") {
          x++;
        }
        empty = false;
      }
    }
    if (empty == false) {
      if (/[0-9]/.test(s[x])) {
        numStr += s[x];
      } else {
        console.log();
        break;
      }
    }
  }
  if (numStr) {
    if (numStr == "-") {
      return 0;
    }
    if (parseInt(numStr) > 2147483647) return 2147483647;
    if (parseInt(numStr) < -2147483648) return -2147483648;
  }
  return numStr ? parseInt(numStr) : 0;
};

let s = "-+12";

console.log(myAtoi(s));
