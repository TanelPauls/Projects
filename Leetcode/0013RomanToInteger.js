/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function(s) {
    let value=0;
    if(s.includes("MMMCM")){
        value+=3900;
    }
    else if(s.includes("MMM")){
        value+=3000;
    }
    else if(s.includes("MMCM")){
        value+=2900;
    }
    else if(s.includes("MM")){
        value+=2000;
    }
    else if(s.includes("MCM")){
        value+=1900;
    }
    else if(s.includes("CM")){
        value+=900;
    }
    else if(s.includes("M")){
        value+=1000;
    }
   

    if(s.includes("CD")){
        value+=400;
    }
    else if(s.includes("D")){
        value+=500;
    }

    if(s.includes("CCCXC")){
        value+=390;
    }
    else if(s.includes("CCC")){
        value+=300;
    }
    else if(s.includes("CCXC")){
        value+=290;
    }
    else if(s.includes("CC")){
        value+=200;
    }
    else if(s.includes("CXC")){
        value+=190;
    }
    else if(s.includes("XC")){
        value+=90;
    }
    else if(s.includes("C")&&!s.includes("CD")&&!s.includes("CM")&&!s.includes("MCM")&&!s.includes("MMCM")&&!s.includes("MMMCM")){
        value+=100;
    }
    
    if(s.includes("XL")){
        value+=40;
    }
    else if(s.includes("L")){
        value+=50;
    }

    if(s.includes("XXXIX")){
        value+=39;
    }
    else if(s.includes("XXX")){
        value+=30;
    }
    else if(s.includes("XXIX")){
        value+=29;
    }
    else if(s.includes("XX")){
        value+=20;
    }
    else if(s.includes("XIX")){
        value+=19;
    }
    else if(s.includes("IX")){
        value+=9;
    }
    else if(s.includes("X")&&!s.includes("XL")&&!s.includes("XC")&&!s.includes("CXC")&&!s.includes("CCXC")&&!s.includes("CCCXC")){
        value+=10;
    }

    if(s.includes("IV")){
        value+=4;
    }
    else if(s.includes("V")){
        value+=5;
    }

    if(s.includes("III")){
        value+=3;
    }
    else if(s.includes("II")){
        value+=2;
    }
    else if(s.includes("I")&&!s.includes("IV")&&!s.includes("IX")&&!s.includes("XIX")&&!s.includes("XXIX")&&!s.includes("XXXIX")){
        value+=1;
    }



    return value
};

/* var romanToInt = function(s) {
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        const currValue = romanValues[s[i]];

        if (i < s.length - 1 && currValue < romanValues[s[i + 1]]) {
            result -= currValue;
        } else {
            result += currValue;
        }
    }

    return result;
}; */

s="CMLII"
console.log(romanToInt(s))


