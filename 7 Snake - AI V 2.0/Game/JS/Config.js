// === Configuration parameters ===

// GAME
let game = true;

// GRID
let gridLen = 400;
let posiNum = 16;
let posiLen = gridLen / posiNum;
let bgColor = "black";

// SNAKE
let snake = [
    { x: (posiNum - 5) * posiLen, y: (posiNum - 9) * posiLen, d: 3 },
    { x: (posiNum - 4) * posiLen, y: (posiNum - 9) * posiLen, d: 3 },
    { x: (posiNum - 3) * posiLen, y: (posiNum - 9) * posiLen, d: 3 },
    { x: (posiNum - 2) * posiLen, y: (posiNum - 9) * posiLen, d: 3 },
    { x: (posiNum - 1) * posiLen, y: (posiNum - 9) * posiLen, d: 3 }
];

let lastPosi = {x: snake[snake.length - 1].x, y: snake[snake.length - 1].y};
let direction = -1;
let moves = 0;

let imgSize = 720;
let spriteLen = 720 / 4;

// APPLE
let apple = { x: (posiNum - 8) * posiLen , y: (posiNum - 9) * posiLen };
let appleCount = 0;

// Debug tool
console.log()