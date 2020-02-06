function calcNewPosi(ctx, snake, lastPosi){ 

    lastPosi = { x: snake[snake.length - 1].x, y: snake[snake.length - 1].y };

    for (let i = 0; i < snake.length; i++) {

        switch (snake[i].d) {
            case 0:
                snake[i].y -= posiLen;
                break;
            case 1:
                snake[i].x += posiLen;
                break;
            case 2:
                snake[i].y += posiLen;
                break;
            case 3:
                snake[i].x -= posiLen;
                break;
            default:
                break;
        }
    }
    renderSnake(ctx, snake, lastPosi);

    // Loop to check if snake head is at same position of your body
    for (let i = 1; i < snake.length; i++)
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) game = false;
    
    renderInfo(0, "Life = " + game);
}

// Here the calculations will be made to obtain the neural network inputs
function calcHead(snake, apple) {

    let distance = [[ 0, 0, 0, 0],
                    [ 0, 0, 0, 0],
                    [ 0, 0, 0, 0]];

    let values   = [[ 0, 0, 0, 0],
                    [ 0, 0, 0, 0],
                    [ 0, 0, 0, 0]]; 

    let finalValues = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    let s = { x: (snake[0].x / posiLen), y: (snake[0].y / posiLen) }
    let a = { x: (apple.x / posiLen), y: (apple.y / posiLen) }
    let limit = [ 0, (posiNum - 1), (posiNum - 1), 0]; // Map limits

    // Calculation of apple distance

    if (a.y == s.y) {

        if (a.x < s.x)      distance[0][3] = (s.x - a.x);
        else if (a.x > s.x) distance[0][1] = (a.x - s.x);
    }
    if (a.x == s.x) {

        if (a.y < s.y)      distance[0][0] = (s.y - a.y);
        else if (a.y > s.y) distance[0][2] = (a.y - s.y);
    }

    // Calculation of wall distance

    distance[1][0] = (s.y - limit[0]);
    
    distance[1][1] = (limit[1] - s.x);

    distance[1][2] = (limit[2] - s.y);
    
    distance[1][3] = (s.x - limit[3]);

    // Calculation of body distance

    let minDistX = posiNum;
    let minDistY = posiNum;

    for (let i = 1; i < snake.length; i++) {

        let snakeX = (snake[i].x / posiLen);
        let snakeY = (snake[i].y / posiLen);

        if (s.y == snakeY) {

            if (s.x > snakeX) {

                if ((s.x - snakeX) <= minDistX) {

                    minDistX = (s.x - snakeX);
                    distance[2][3] = minDistX;
                }
            }
            else if (s.x < snakeX) {
                if ((snakeX - s.x) <= minDistX) {

                    minDistX = (snakeX - s.x);
                    distance[2][1] = minDistX;
                }
            }

        }   
        if (s.x == snakeX) {
            if (s.y > snakeY) {

                if ((s.y - snakeY) <= minDistY) {

                    minDistY = (s.y - snakeY);
                    distance[2][0] = minDistY;
                }
            }
            else if (s.y < snakeY) {
                if ((snakeY - s.y) <= minDistY) {

                    minDistY = (snakeY - s.y);
                    distance[2][2] = minDistY;
                }
            }
        }
    }

    // Calculation of apple, wall and body values

    for (let i = 0; i < distance.length; i++) {

        for (let j = 0; j < distance[i].length; j++) {

            if (i == 0)
                values[i][j] = (distance[i][j] * 100);
            
            else if (i == 1) {
                if (distance[i][j] == 1) values[i][j] = distance[i][j] * -100;
            }
            else if (i == 2) 
                values[i][j] = (distance[i][j] * -10);
        }
    }

    // Tranfer the values in the matrix values to the array finalValues

    finalValues = [ 
        values[0][0], values[0][1], values[0][2], values[0][3],
        values[1][0], values[1][1], values[1][2], values[1][3],
        values[2][0], values[2][1], values[2][2], values[2][3],
                  ];

    // Debug tool
    //console.log(finalValues)

    return finalValues;
}