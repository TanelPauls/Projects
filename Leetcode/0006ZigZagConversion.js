var convert = function (s, numRows) {
  if (numRows == 1 || numRows == 2) {
    if (numRows == 1) {
      return s;
    } else {
      let aa = "";
      let bb = "";
      for (let q = 0; q < s.length; q++) {
        if (q % 2 == 0) {
          aa += s[q];
        }
        if (q % 2 == 1) {
          bb += s[q];
        }
      }
      return aa + bb;
    }
  } else {
    let groups = {};
    for (let x = 0; x < numRows; x++) {
      groups[x] = [];
    }
    for (let z = 0; z < s.length; z++) {
      let index = z % (numRows + numRows - 2);
      if (groups[index] !== undefined) {
        groups[index].push(s[z]);
      } else {
        groups[2 * (numRows - 1) - index].push(s[z]);
      }
      //console.log(index)
    }

    //console.log(groups)
    return Object.values(groups).flat().join("");
  }
};

let s = "PAYPALISHIRING";
let numRows = 4;

console.log(convert(s, numRows));

/* 
  Input: s = "PAYPALISHIRING", numRows = 4
  Output: "PINALSIGYAHRPI"
  Explanation:
  P     I    N
  A   L S  I G
  Y A   H R
  P     I 
  */
