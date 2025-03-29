var kuusk = function (s) {
  n = 1;
  let s2 = s;
  for (let x = 0; x < s; x++) {
    let row = "";

    for (let y = s2; y > 1; y--) {
      row += " ";
    }
    s2 = s2 - 1;
    for (let q = 0; q < n; q++) {
      row += "*";
    }
    n = n + 2;
    console.log(row);
  }
  row = "";
  for (let mm = 0; mm < s - 1; mm++) {
    row += " ";
  }
  console.log(row + "|");
};

kuusk(10);
