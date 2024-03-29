```javascript
function matrixMultiplication(matrixA, matrixB) {
    let result = [];
    for(let i = 0; i < matrixA.length; i++) {
        result[i] = [];
        for(let j = 0; j < matrixB[0].length; j++) {
            let sum = 0;
            for(let k = 0; k < matrixA[0].length; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}

let matrixA = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let matrixB = [[10, 11, 12], [13, 14, 15], [16, 17, 18]];

console.log(matrixMultiplication(matrixA, matrixB));
```