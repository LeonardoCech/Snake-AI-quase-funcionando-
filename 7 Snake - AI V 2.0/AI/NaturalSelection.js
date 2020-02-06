function naturalSelection(matrix, bestWeights) {

    bias = [];
    newMatrix = [];

    for (let i = 0; i < snakesCount; i++) {

        let arr = Array(totalWeights);
    
        for (let j = 0; j < arr.length; j++) {
            if ((matrix[i][j] > -70 && matrix[i][j] < 0) || (matrix[i][j] > 0 && matrix[i][j] < 70))
                arr[j] = Math.floor(Math.random() * 60) - 30;
            else arr[j] = 0;
        }
    
        bias.push(arr);
    }

    for (let i = 0; i < snakesCount; i++) matrix[i] = bestWeights;
    
    for (let x = 0; x < matrix.length; x++) {

        let arrX = [];

        for (let y = 0; y < matrix[x].length; y++) {

            let arrY = matrix[x][y] + bias[x][y];

            arrX.push(arrY);
        }

        newMatrix.push(arrX);
    }

    //console.log(matrix);
    //console.log(bias);
    //console.log(newMatrix)

    return newMatrix;
}