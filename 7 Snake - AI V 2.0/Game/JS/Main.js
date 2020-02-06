let screen = document.getElementById("screen");
let ctx = screen.getContext("2d");

resetGame();
renderCanvas();

// Real player controls
// document.addEventListener("keydown", (event) => {

//     moves++;

//     switch (event.keyCode) {
//         case 37: // Left
//             if (direction != 1) direction = 3;
//             else direction = -1;
//             break;
//         case 38: // up
//             if (direction != 2) direction = 0;
//             else direction = -1;
//             break;
//         case 39: // right
//             if (direction != 3) direction = 1
//             else direction = -1;
//             break;
//         case 42: // down
//             if (direction != 0) direction = 2
//             else direction = -1;
//             break;         
//         default:
//             break;
//     }

//     if (game) {

//         moveSnake(ctx, snake, direction, lastPosi);

//         checkHead(ctx, snake, apple, appleCount, game, lastPosi);

//         renderInfo(3, "Moves = " + moves);
//         renderInfo(4, "X = " + (snake[0].x / posiLen));
//         renderInfo(5, "Y = " + (snake[0].y / posiLen));
//         renderInfo(6, "A = " + inputData[0]);
//         renderInfo(7, "W = " + inputData[1]);
//         renderInfo(8, "B = " + inputData[2]);
//      }
//  });

// AI control
matrixIndex = 0;
generations = 0;

setInterval( controlAI => { 

    if (matrixIndex < matrix.length) {

        discolorNodes();

        if (game) {

            moves++;
            
            if (moves == limiter) game = false;

            inputData = calcHead(snake, apple);
            
            renderInfo(3, "Moves = " + moves);
            renderInfo(4, "X = " + (snake[0].x / posiLen));
            renderInfo(5, "Y = " + (snake[0].y / posiLen));
            renderInfo(6, "A = " + inputData[0] + ", " + inputData[1] + ", " + inputData[2] + ", " + inputData[3]);
            renderInfo(7, "W = " + inputData[4] + ", " + inputData[5] + ", " + inputData[6] + ", " + inputData[7]);
            renderInfo(8, "B = " + inputData[8] + ", " + inputData[9] + ", " + inputData[10] + ", " + inputData[11]);
            renderInfo(9, "Individual: " + matrixIndex + "/" + snakesCount);
            renderInfo(10, "Generation: " + generations);
            renderInfo(11, "BestSnake: " + mostSnake[0]);
            renderInfo(12, "MostApples: " + mostSnake[1]);
            renderInfo(13, "AverageA: " + "no works :/"); //averageApples
            renderInfo(14, "MostMoves: " + mostSnake[2]);
            renderInfo(15, "AverageM: " + "no works :/"); //averageMoves
            renderInfo(16, "bestWeights: " + bestWeights);

            snakePlaying = matrix[matrixIndex];
            for (let i = 0; i < neurons.length; i++) neurons[i] = 0; 

            propagateToHiden(inputData, snakePlaying, neurons);
            outputData = propagateToOutput(neurons, snakePlaying);

            //Debug tool
            //console.log(outputData);

            switch (outputData) {
                case 0: // up
                    if (direction != 2) direction = 0;
                    else direction = -1;
                    break;
                case 1: // right
                    if (direction != 3) direction = 1
                    else direction = -1;
                    break;
                case 2: // down
                    if (direction != 0) direction = 2
                    else direction = -1;
                    break;       
                case 3: // Left
                    if (direction != 1) direction = 3;
                    else direction = -1;
                    break;  
                default:
                    break;
            }

            moveSnake(ctx, snake, direction, lastPosi);

            averageApples += appleCount;
            averageMoves += moves;

            if (snake[0].x == apple.x && snake[0].y == apple.y) {

                appleCount += 1;
                renderInfo(0,"Life = " + game);
                renderInfo(1,"Apples = " + appleCount);
        
                snake.push( { x: snake[snake.length - 1].x , y: snake[snake.length - 1].y} );
                lastPosi = { x: snake[snake.length - 1].x , y: snake[snake.length - 1].y}
        
                renderInfo(2,"Len = " + snake.length);
        
                randomApple(ctx, apple, snake);
            }

        }
        if (game == false) {

            // if (appleCount > mostApples[1]) {
            //     mostApples[0] = generations + " => " + matrixIndex;
            //     mostApples[1] = appleCount;
            //     mostMoves[0] = generations + " => " + matrixIndex;
            //     mostMoves[1] = moves;
            //     bestWeights = matrix[matrixIndex];  
            // }
    
            //if (moves >= mostMoves[1] && moves < limiter) {
            //     mostMoves[0] = generations + " => " + matrixIndex;
            //     mostMoves[1] = moves;
            //     bestWeights = matrix[matrixIndex];
            // }
    
            if (appleCount >= mostSnake[1] && moves < limiter) {
                mostSnake[0] = generations + " => " + matrixIndex;
                mostSnake[1] = appleCount;
                mostSnake[2] = moves;
                bestWeights = matrix[matrixIndex];
            }

            resetGame();
            matrixIndex++;
        }
    } 
    else {

        matrix = naturalSelection(matrix, bestWeights);

        generations++;
        matrixIndex = 0;
    }

}, 1);
