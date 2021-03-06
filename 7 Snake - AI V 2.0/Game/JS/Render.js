function renderApple(ctx, apple) {

    ctx.fillStyle = "red";
    ctx.fillRect(apple.x, apple.y, posiLen, posiLen);
    ctx.fillStyle = bgColor;
    
    //ctx.drawImage(imgApple, 0, 0, 720, 720, apple.x, apple.y, posiLen, posiLen);
}   

function renderInfo(num, txt) {
    document.getElementById("info" + num).innerHTML = txt;
}


function renderSnake(ctx, snake, lastPosi) {

    let imgSnake = document.getElementById("imgSnake");

    let v = [spriteLen * 0, spriteLen * 1, spriteLen * 2, spriteLen * 3]

    ctx.fillRect(lastPosi.x, lastPosi.y, posiLen, posiLen);

    for (let i = 0; i < snake.length; i++) {

        let x = snake[i].x;
        let y = snake[i].y;

        ctx.fillRect(x, y, posiLen, posiLen);

        if (i > 0 && i < snake.length - 1) {
            switch (snake[i].d) {
                case 0:

                    if (snake[i - 1].d == 0 && 
                       (snake[i + 1].d == 0 || 
                        snake[i + 1].d == 1 || 
                        snake[i + 1].d == 3 ))
                        ctx.drawImage(imgSnake, v[0], v[1], spriteLen, spriteLen, snake[i].x, snake[i].y, posiLen, posiLen);

                    if (snake[i - 1].d == 1 &&
                       (snake[i + 1].d == 0 || 
                        snake[i + 1].d == 1 || 
                        snake[i + 1].d == 3 ))
                        ctx.drawImage(imgSnake, v[1], v[2], spriteLen, spriteLen, snake[i].x, snake[i].y, posiLen, posiLen);

                    if (snake[i - 1].d == 3 && 
                       (snake[i + 1].d == 0 || 
                        snake[i + 1].d == 1 || 
                        snake[i + 1].d == 3 ))
                        ctx.drawImage(imgSnake, v[0], v[2], spriteLen, spriteLen, snake[i].x, snake[i].y, posiLen, posiLen);

                    break;

                case 1:

                    if (snake[i - 1].d == 0 && 
                       (snake[i + 1].d == 0 || 
                        snake[i + 1].d == 1 || 
                        snake[i + 1].d == 2 ))
                        ctx.drawImage(imgSnake, v[0], v[3], spriteLen, spriteLen, snake[i].x, snake[i].y, posiLen, posiLen);

                    if (snake[i - 1].d == 1 &&
                       (snake[i + 1].d == 0 || 
                        snake[i + 1].d == 1 || 
                        snake[i + 1].d == 2 ))
                        ctx.drawImage(imgSnake, v[1], v[1], spriteLen, spriteLen, snake[i].x, snake[i].y, posiLen, posiLen);

                    if (snake[i - 1].d == 2 &&
                       (snake[i + 1].d == 0 || 
                        snake[i + 1].d == 1 || 
                        snake[i + 1].d == 2 ))
                        ctx.drawImage(imgSnake, v[1], v[3], spriteLen, spriteLen, snake[i].x, snake[i].y, posiLen, posiLen);

                    break;
                    
                case 2:

                    if (snake[i - 1].d == 2 &&
                       (snake[i + 1].d == 1 ||
                        snake[i + 1].d == 2 ||
                        snake[i + 1].d == 3 ))
                        ctx.drawImage(imgSnake, v[2], v[1], spriteLen, spriteLen, snake[i].x, snake[i].y, posiLen, posiLen);
                    
                    if (snake[i - 1].d == 3 &&
                       (snake[i + 1].d == 1 ||
                        snake[i + 1].d == 2 ||
                        snake[i + 1].d == 3 ))
                        ctx.drawImage(imgSnake, v[2], v[2], spriteLen, spriteLen, snake[i].x, snake[i].y, posiLen, posiLen);

                    if (snake[i - 1].d == 1 &&
                       (snake[i + 1].d == 1 ||
                        snake[i + 1].d == 2 || 
                        snake[i + 1].d == 3 ))
                        ctx.drawImage(imgSnake, v[3], v[2], spriteLen, spriteLen, snake[i].x, snake[i].y, posiLen, posiLen);

                    break;

                case 3:

                    if (snake[i - 1].d == 0 &&
                       (snake[i + 1].d == 0 ||
                        snake[i + 1].d == 2 ||
                        snake[i + 1].d == 3 ))
                        ctx.drawImage(imgSnake, v[2], v[3], spriteLen, spriteLen, snake[i].x, snake[i].y, posiLen, posiLen);
                    
                    if (snake[i - 1].d == 2 &&
                       (snake[i + 1].d == 0 ||
                        snake[i + 1].d == 2 ||
                        snake[i + 1].d == 3 ))
                        ctx.drawImage(imgSnake, v[3], v[3], spriteLen, spriteLen, snake[i].x, snake[i].y, posiLen, posiLen);
                    
                    if (snake[i - 1].d == 3 &&
                       (snake[i + 1].d == 0 ||
                        snake[i + 1].d == 2 ||
                        snake[i + 1].d == 3 ))
                        ctx.drawImage(imgSnake, v[3], v[1], spriteLen, spriteLen, snake[i].x, snake[i].y, posiLen, posiLen);

                    break;
                    
                default:
                    break;
            }
        }
        else {
            switch (snake[i].d) {
                case 0:
                    if (i == 0)
                        ctx.drawImage(imgSnake, v[0], v[0], spriteLen, spriteLen, snake[i].x, snake[i].y, posiLen, posiLen);

                    else {

                        if (snake[i - 1].d == 0)
                            ctx.drawImage(imgSnake, 0, v[1], spriteLen, spriteLen, snake[i].x, snake[i].y, posiLen, posiLen);

                        if (snake[i - 1].d == 1)
                            ctx.drawImage(imgSnake, v[1], v[1], spriteLen, spriteLen, snake[i].x, snake[i].y, posiLen, posiLen);

                        if (snake[i - 1].d == 3)
                            ctx.drawImage(imgSnake, v[3], v[1], spriteLen, spriteLen, snake[i].x, snake[i].y, posiLen, posiLen);
                    }
                    break;
                case 1:
                    if (i == 0)
                        ctx.drawImage(imgSnake, v[1], v[0], spriteLen, spriteLen, snake[i].x, snake[i].y, posiLen, posiLen);

                    else {

                        if (snake[i - 1].d == 0)
                            ctx.drawImage(imgSnake, v[0], v[1], spriteLen, spriteLen, snake[i].x, snake[i].y, posiLen, posiLen);

                        if (snake[i - 1].d == 1)
                            ctx.drawImage(imgSnake, v[1], v[1], spriteLen, spriteLen, snake[i].x, snake[i].y, posiLen, posiLen);

                        if (snake[i - 1].d == 2)
                            ctx.drawImage(imgSnake, v[2], v[1], spriteLen, spriteLen, snake[i].x, snake[i].y, posiLen, posiLen);
                    }

                    break;
                case 2:
                    if (i == 0)
                        ctx.drawImage(imgSnake, v[2], v[0], spriteLen, spriteLen, snake[i].x, snake[i].y, posiLen, posiLen);

                    else {
                        
                        if (snake[i - 1].d == 1)
                            ctx.drawImage(imgSnake, v[1], v[1], spriteLen, spriteLen, snake[i].x, snake[i].y, posiLen, posiLen);

                        if (snake[i - 1].d == 2)
                            ctx.drawImage(imgSnake, v[2], v[1], spriteLen, spriteLen, snake[i].x, snake[i].y, posiLen, posiLen);

                        if (snake[i - 1].d == 3)
                            ctx.drawImage(imgSnake, v[3], v[1], spriteLen, spriteLen, snake[i].x, snake[i].y, posiLen, posiLen);
                    }
                    break;

                case 3:

                    if (i == 0)
                        ctx.drawImage(imgSnake, v[3], v[0], spriteLen, spriteLen, snake[i].x, snake[i].y, posiLen, posiLen);

                    else {

                        if (snake[i - 1].d == 0)
                            ctx.drawImage(imgSnake, v[0], v[1], spriteLen, spriteLen, snake[i].x, snake[i].y, posiLen, posiLen);

                        if (snake[i - 1].d == 2)
                            ctx.drawImage(imgSnake, v[2], v[1], spriteLen, spriteLen, snake[i].x, snake[i].y, posiLen, posiLen);       
                        
                        if (snake[i - 1].d == 3)
                            ctx.drawImage(imgSnake, v[3], v[1], spriteLen, spriteLen, snake[i].x, snake[i].y, posiLen, posiLen);
                    }
                    break;
            }
        }    
    }
}

function resetGame() {

    game = true;

    // RESET GRID
    bgColor = "black";

    // RESET SNAKE
    snake = [
        { x: (posiNum - 5) * posiLen, y: (posiNum - 9) * posiLen, d: 3 },
        { x: (posiNum - 4) * posiLen, y: (posiNum - 9) * posiLen, d: 3 },
        { x: (posiNum - 3) * posiLen, y: (posiNum - 9) * posiLen, d: 3 },
        { x: (posiNum - 2) * posiLen, y: (posiNum - 9) * posiLen, d: 3 },
        { x: (posiNum - 1) * posiLen, y: (posiNum - 9) * posiLen, d: 3 }
    ];

    lastPosi = {x: snake[snake.length - 1].x, y: snake[snake.length - 1].y};
    direction = -1;
    moves = 0;

    imgSize = 720;
    spriteLen = 720 / 4;

    // RESET APPLE
    apple = { x: (posiNum - 8) * posiLen , y: (posiNum - 9) * posiLen };
    appleCount = 0;

    ctx.fillStyle = bgColor;

    for (let i = posiLen; i <= gridLen; i += posiLen)
    ctx.fillRect( 0, 0, i, i);

    renderInfo(0,"Life = " + game);
    renderInfo(1,"Apples = " + appleCount);
    renderInfo(2,"Len = " + snake.length);
    renderInfo(3, "Moves = " + moves);
    renderInfo(4, "X = " + (snake[0].x / posiLen));
    renderInfo(5, "Y = " + (snake[0].y / posiLen));
    renderInfo(6, "A = " + inputData[0]);
    renderInfo(7, "W = " + inputData[1]);
    renderInfo(8, "B = " + inputData[2]);
    renderInfo(9, "Individual: " + matrixIndex + "/" + snakesCount);
    renderInfo(10, "Generation: " + generations);
    renderInfo(11, "BestSnake: " + mostSnake[0]);
    renderInfo(12, "MostApples: " + mostSnake[1]);
    renderInfo(13, "AverageA: " + "no works :/"); //averageApples
    renderInfo(14, "MostMoves: " + mostSnake[2]);
    renderInfo(15, "AverageM: " + "no works :/"); //averageMoves
    renderInfo(16, "bestWeights: " + bestWeights);

    renderSnake(ctx, snake, lastPosi);
    renderApple(ctx, apple);
    
    discolorNodes();
}