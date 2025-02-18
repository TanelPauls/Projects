var isPalindrome = function (x) {
  if (x.length <= 1) {
    return true;
  } else {
    let paired = 0;
    if (x.length % 2 == 1) {
      paired = 1;
    }
    for (let y = 0; y < (x.length - paired) / 2; y++) {
      if (x[y] != x[x.length - 1 - y]) {
        return false;
      }
    }
    return true;
  }
};

var longestPalindrome = function (s) {
  if (s.length <= 1) {
    return s;
  } else {
    if (isPalindrome(s) == true) {
      return s;
    } else {
      for (let q = s.length - 1; q > 1; q--) {
        for (let z = 0; z < s.length - q + 1; z++) {
          if (isPalindrome(s.substring(z, q + z)) == true) {
            return s.substring(z, q + z);
          }
        }
      }
      return s[0];
    }
  }
};

s = "asdff";
console.log(s.substring(0, 4));
console.log(s.substring(1, 5));
console.log(longestPalindrome(s));
console.log(isPalindrome(s));
/* Given a string s, return the longest 
palindromic
 
substring
 in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters. */
