function moveSnake(ctx, snake, direction, lastPosi) {

    if (direction == -1) {
        //game = false;
        //renderInfo(0,"Life = " + game);
    }
    else {
        if (direction == 0) {
            if ((snake[0].y - posiLen) >= 0) snake[0].d = 0;
            else {
                game = false;
                renderInfo(0,"Life = " + game);
            }
        }
        else if (direction == 1) {
            if ((snake[0].x + posiLen) <= (gridLen - posiLen)) snake[0].d = 1;
            else {
                game = false;
                renderInfo(0,"Life = " + game);
            }
        }
        else if (direction == 2) {
            if ((snake[0].y + posiLen) <= (gridLen - posiLen)) snake[0].d = 2;
            else {
                game = false;
                renderInfo(0,"Life = " + game);
            }
        }
        else if (direction == 3) {
            if ((snake[0].x - posiLen) >= 0) snake[0].d = 3;
            else {
                game = false;
                renderInfo(0,"Life = " + game);
            }
        }

        if (game) calcNewPosi(ctx, snake, lastPosi);   
        
        for (let i = snake.length - 1; i > 0; i--) snake[i].d = snake[i - 1].d;
    }
}