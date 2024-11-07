/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    /* const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }; */
    if(num<1||num>3999){return 0}
    let answer="";
    if(Math.floor(num/1000)==1){answer += "M";num-=1000}
    else if(Math.floor(num/1000)==2){answer += "MM";num-=2000}
    else if(Math.floor(num/1000)==3){answer += "MMM";num-=3000}
    
    if(Math.floor(num/100)==1){answer += "C";num-=100}
    else if(Math.floor(num/100)==2){answer += "CC";num-=200}
    else if(Math.floor(num/100)==3){answer += "CCC";num-=300}
    else if(Math.floor(num/100)==4){answer += "CD";num-=400}
    else if(Math.floor(num/100)==5){answer += "D";num-=500}
    else if(Math.floor(num/100)==6){answer += "DC";num-=600}
    else if(Math.floor(num/100)==7){answer += "DCC";num-=700}
    else if(Math.floor(num/100)==8){answer += "DCCC";num-=800}
    else if(Math.floor(num/100)==9){answer += "CM";num-=900}

    if(Math.floor(num/10)==1){answer += "X";num-=10}
    else if(Math.floor(num/10)==2){answer += "XX";num-=20}
    else if(Math.floor(num/10)==3){answer += "XXX";num-=30}
    else if(Math.floor(num/10)==4){answer += "XL";num-=40}
    else if(Math.floor(num/10)==5){answer += "L";num-=50}
    else if(Math.floor(num/10)==6){answer += "LX";num-=60}
    else if(Math.floor(num/10)==7){answer += "LXX";num-=70}
    else if(Math.floor(num/10)==8){answer += "LXXX";num-=80}
    else if(Math.floor(num/10)==9){answer += "XC";num-=90}

    if(num==1){answer += "I"}
    else if(num==2){answer += "II"}
    else if(num==3){answer += "III"}
    else if(num==4){answer += "IV"}
    else if(num==5){answer += "V"}
    else if(num==6){answer += "VI"}
    else if(num==7){answer += "VII"}
    else if(num==8){answer += "VIII"}
    else if(num==9){answer += "IX"}


    return answer
};

s=3998
console.log(intToRoman(s))