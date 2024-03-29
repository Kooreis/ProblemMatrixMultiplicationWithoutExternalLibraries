Here is a TypeScript console application that performs matrix multiplication without using external libraries:

```typescript
class MatrixMultiplication {
    static multiplyMatrix(A: number[][], B: number[][]): number[][] {
        let rowsA = A.length, colsA = A[0].length,
            rowsB = B.length, colsB = B[0].length,
            C: number[][] = [];

        if (colsA != rowsB) return C;

        for (let i = 0; i < rowsA; i++) C[i] = [];

        for (let k = 0; k < colsB; k++) {
            for (let i = 0; i < rowsA; i++) {
                let t = 0;
                for (let j = 0; j < rowsB; j++) t += A[i][j] * B[j][k];
                C[i][k] = t;
            }
        }

        return C;
    }
}

let A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let B = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(MatrixMultiplication.multiplyMatrix(A, B));
```

This program defines a class `MatrixMultiplication` with a static method `multiplyMatrix` that takes two 2D arrays (matrices) as input and returns their product as a new 2D array. The method first checks if the number of columns in the first matrix is equal to the number of rows in the second matrix, as this is a requirement for matrix multiplication. If this condition is not met, it returns an empty matrix. It then performs the multiplication and stores the result in a new matrix, which it returns. The main part of the program creates two 3x3 matrices and prints their product to the console.