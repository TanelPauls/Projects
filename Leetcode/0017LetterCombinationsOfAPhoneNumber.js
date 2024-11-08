/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  let map = new Map([["2", ["a", "b", "c"]]]);
  map.set("3",["d","e","f"]);
  map.set("4",["g","h","i"]);
  map.set("5",["j","k","l"]);
  map.set("6",["m","n","o"]);
  map.set("7",["p","q","r","s"]);
  map.set("8",["t","u","v"]);
  map.set("9",["w","x","y","z"]);
  let ans;

  //console.log(map.get("3"))
  if(digits===""){return[]}
  else if(digits==="2"){return map.get("2")}
  else if(digits==="3"){return map.get("3")}
  else if(digits==="4"){return map.get("4")}
  else if(digits==="5"){return map.get("5")}
  else if(digits==="6"){return map.get("6")}
  else if(digits==="7"){return map.get("7")}
  else if(digits==="8"){return map.get("8")}
  else if(digits==="9"){return map.get("9")}

  else{
      ans=map.get(digits[0]);
      //console.log(ans)
      for(let x=1;x<digits.length;x++){
          //console.log(x)
          //console.log(digits[x])
          const newCombinations = [];
          for(let y=0;y<ans.length;y++){
              //console.log(y)
              //console.log(ans[y])
              for(let q=0;q<map.get(digits[x]).length;q++){
                  //console.log(q)
                  //console.log(ans[y]+map.get(digits[x])[q])
                  newCombinations.push(ans[y] + map.get(digits[x])[q]);

              }
          }
          ans=newCombinations;
          //console.log(ans)
      }

  }
  return ans
  
};

let s="22"
console.log(letterCombinations(s))