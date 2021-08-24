
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let result = [];

    if (matrix === undefined) {
        result = [];
    } else {
        for (let i=0; i < matrix.length; i++){
            if ( i%2 === 0) {
                for (let j=0; j <matrix[i].length; j++){
                    result.push(matrix[i][j]);
                }
            } else {
                let reverseMatrix = [];
                for (let j=0; j <matrix[i].length; j++){
                    reverseMatrix.push(matrix[i][j]);
                }
                    reverseMatrix.reverse();
                    for (let i=0; i<reverseMatrix.length; i++) {
                        result.push(reverseMatrix[i]);
                    }
                    
                }               
            }
        }
    
  return result;
}
