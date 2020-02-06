
// First generation 
for (let i = 0; i < snakesCount; i++) {

    let weight = Array(totalWeights);

    for (let j = 0; j < totalWeights; j++) 
        weight[j] = Math.floor(Math.random() * 200) - 100;

    matrix.push(weight);
}

// Debug tool
//console.log(matrix)