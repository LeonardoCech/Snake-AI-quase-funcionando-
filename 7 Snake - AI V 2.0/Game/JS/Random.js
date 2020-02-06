function randomApple(ctx, apple, snake) {

    let x, y;
    let check = true;

    while (check) {

        check = false;

        x = Math.floor(Math.random() * posiNum);
        y = Math.floor(Math.random() * posiNum);
    
        if (x != 0) x *= posiLen;
        if (y != 0) y *= posiLen;

        for (let i = 0; i < snake.length; i++) {
            if (snake[i].x == x && snake[i].y == y) {
                check = true;
                break;
            }   
            else {
                apple.x = x;
                apple.y = y;
            }

        }
    }
    renderApple(ctx, apple)
}