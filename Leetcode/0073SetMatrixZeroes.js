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

/* var setZeroes = function(matrix) {
    let firstRowZeroes = false;
    let firstColumnZeroes = false;
    let rows = matrix.length;
    let cols = matrix[0].length;

    // Check if first row has any zeroes
    for (let j = 0; j < cols; j++) {
        if (matrix[0][j] === 0) {
            firstRowZeroes = true;
            break;
        }
    }

    // Check if first column has any zeroes
    for (let i = 0; i < rows; i++) {
        if (matrix[i][0] === 0) {
            firstColumnZeroes = true;
            break;
        }
    }

    // Use the first row and column as flags
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    // Zero out cells based on flags in the first row and column
    for (let i = 1; i < rows; i++) {
        if (matrix[i][0] === 0) {
            for (let j = 1; j < cols; j++) {
                matrix[i][j] = 0;
            }
        }
    }

    for (let j = 1; j < cols; j++) {
        if (matrix[0][j] === 0) {
            for (let i = 1; i < rows; i++) {
                matrix[i][j] = 0;
            }
        }
    }

    // Zero out the first row if needed
    if (firstRowZeroes) {
        for (let j = 0; j < cols; j++) {
            matrix[0][j] = 0;
        }
    }

    // Zero out the first column if needed
    if (firstColumnZeroes) {
        for (let i = 0; i < rows; i++) {
            matrix[i][0] = 0;
        }
    }

    return matrix;
}; */

matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
console.log(setZeroes(matrix))