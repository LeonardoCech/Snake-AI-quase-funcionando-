// Find the best score e get the snake with this score
function getMax(score, matrix) {

    let max = 0;
    let index = -1;

    for (let i = 0; i < score.length; i++)
        if (score[i] > max) {
            index = i;
            max = score[i];
        }

    return matrix[index];
}

function setInput(input) { 
    inputData = input;
}

function propagateToHiden(input, snakePlaying, neurons) { // Take the snake weights and propagate for the neurons

    colorInput(input);
    
    let w = 0;
    for (let x = 0; x < neurons.length; x++) {

        let y = -hiden + w;

        for (let z = 0 ; z < input.length; z++) {

            y += hiden;
            neurons[x] += input[z] * snakePlaying[y]; // Sums in the neuron
        }

        w += 1;
    }

    for (let i = 0; i < neurons.length; i++)
        neurons[i] = activationFuncHiden(neurons[i]);
        
    //Debug tool
    //console.log(neurons); 

    colorHiden(neurons);
}

function propagateToOutput(neurons, snakePlaying) {
    
    let outputData = Array(outputs);

    for (let i = 0; i < outputs; i++) outputData[i] = 0;

    let w = 72;

    for (let x = 0; x < outputs; x++) {
        
        let y = -outputs + w;

        for (let z = 0 ; z < neurons.length; z++) {

            y += outputs;

            outputData[x] += neurons[z] * snakePlaying[y]; // Sums in the output
        }

        w += 1;
    }

    for (let i = 0; i < outputData.length; i++)
        outputData[i] = activationFuncHiden(outputData[i]);

    //Debug tool
    //console.log(outputData); 

    colorOutput(returnMax(outputData));
    
    return returnMax(outputData);
}

function activationFuncHiden(data) { // The data are the result of sums in the neuron
    
    // Function ReLU
    // f(x) = 0 for x < 0 and x for x >= 0
    return (data >= 0 ? data : 0 );
}

function activationFuncOut(data) {

    // Function Sigmoid
    // f(x) = 1 / 1 + e^-x
    return ((1 / (1 + Math.exp(-data))) > 0.5 ? 1 : 0);
}

function returnMax(data) {

    let max = [0,0];

    for (let i = 0; i < data.length; i++) 
        if (activationFuncOut(data[i]) > max[0]) {
            max[0] = activationFuncOut(data[i]);
            max[1] = i;
        }

    //Debug tool
    //console.log(max);
    return max[1];
}