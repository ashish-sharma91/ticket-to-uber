// Print in spiral order of 2D Matrix


function printSpiral(arr) {
    let startCol = 0;
    let endCol = arr.length - 1;
    let startRow = 0;
    let endRow = arr[0].length - 1;
    while (startCol <= endCol && startRow <= endRow) {
        for (let i = startCol; i <= endCol; i++) {
            console.log(arr[startRow][i]);
        }
        startRow++;
        for (let j = startRow; j <= endRow; j++) {
            console.log(arr[j][endCol]);

        }

        endCol--;

        for (let i = endCol; i >= startCol; i--) {
            console.log(arr[endRow][i]);
        }

        endRow--;
        for (let i = endRow; i >= startRow; i--) {
            console.log(arr[i][startCol]);
        }

        startCol++;

    }
}
const a = [[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]];
printSpiral(a);