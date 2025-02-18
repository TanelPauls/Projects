/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let k = "";
  let neg = 1;
  if (x < 0) {
    neg = -1;
    x = x * -1;
  }
  for (let y = x.toString().length - 1; y >= 0; y--) {
    k += x.toString()[y];
  }
  if (parseInt(k) * neg < -2147483648 || parseInt(k) * neg > 2147483647) {
    return 0;
  }
  return parseInt(k) * neg;
};

x = -1230;
console.log(x.toString());
console.log(reverse(x));

/* Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21 */
