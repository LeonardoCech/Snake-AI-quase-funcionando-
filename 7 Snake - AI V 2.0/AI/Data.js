let snakesCount = 1500;

let inputs = 12;
let hiden = 6;
let outputs = 4;
let totalWeights = (inputs * hiden) + (hiden * outputs);

let inputData = Array(inputs);
let outputData;

let limiter = 2000;

let matrix = [];
let bias = [];
let newMatrix = [];
let snakePlaying = Array(totalWeights);
let matrixIndex;
let generations;

let neurons = Array(hiden);

let mostSnake = [-1, 0, 0];
let bestWeights = [];
let averageApples = 0;
let averageMoves = 0;