/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let firstRowZeroes=false;
    let firstColumnZeroes=false;
    matrix[0].forEach((element) => {
        if(element==0){
            firstRowZeroes=true;
            return
        }
    })
    
    matrix.forEach((element) => {
        if(element[0]==0){
            firstColumnZeroes=true;
            return
        }
    })
    //creates flags
    matrix.forEach((element,index) => {
        if (index === 0) {return};
        element.forEach((element2,index2)=>{
            if(element2==0){
                matrix[0][index2]=0;
                matrix[index][0]=0;
            }
        })
    })
    // rows to 0
    matrix[0].forEach((element,index) => {
        if(index === 0) return;
        if(element==0){
            matrix.forEach((element1,index1) => {
                if (index1 === 0) return;
                matrix[index1][index]=0;
            })
        }
    })
    // columns to 0
    matrix.forEach((element,index) => {
        if (index === 0) return;
        element.forEach((element1,index1) => {
            if (index1 === 0){
                if(element1===0){
                    matrix[index].forEach((element2,index2)=>{
                        matrix[index][index2]=0;
                    })
                }
            }
            else return
        })
    })
    if(firstRowZeroes===true){
        matrix[0].forEach((element,index) => {
            matrix[0][index]=0;
        })
    }
    if(firstColumnZeroes===true){
        matrix.forEach((element,index) => {
            matrix[index][0]=0
        })
    }
    

    
    return matrix
};

matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
console.log(setZeroes(matrix))