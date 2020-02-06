let network = document.getElementById("network");
let netCtx = network.getContext("2d");

function renderCanvas() {

    netCtx.strokeStyle = "lightgray";

    let j = 30;
    for (let i = 0; i < 12; i++) {

        netCtx.beginPath();
        netCtx.moveTo(20, j + 10);
        netCtx.lineTo(330, 110);
        netCtx.closePath();

        netCtx.stroke();

        netCtx.beginPath();
        netCtx.moveTo(20, j + 10);
        netCtx.lineTo(330, 190);
        netCtx.closePath();

        netCtx.stroke();

        netCtx.beginPath();
        netCtx.moveTo(20, j + 10);
        netCtx.lineTo(330, 270);
        netCtx.closePath();

        netCtx.stroke();

        netCtx.beginPath();
        netCtx.moveTo(20, j + 10);
        netCtx.lineTo(330, 350);
        netCtx.closePath();

        netCtx.stroke();

        netCtx.beginPath();
        netCtx.moveTo(20, j + 10);
        netCtx.lineTo(330, 430);
        netCtx.closePath();

        netCtx.stroke();

        netCtx.beginPath();
        netCtx.moveTo(20, j + 10);
        netCtx.lineTo(330, 510);
        netCtx.closePath();

        netCtx.stroke();

        j += 50;
    }

    j = 100
    for (let i = 0; i < 6; i++) {

        netCtx.beginPath();
        netCtx.moveTo(330, j + 10);
        netCtx.lineTo(610, 190);
        netCtx.closePath();

        netCtx.stroke();

        netCtx.beginPath();
        netCtx.moveTo(330, j + 10);
        netCtx.lineTo(610, 270);
        netCtx.closePath();

        netCtx.stroke();

        netCtx.beginPath();
        netCtx.moveTo(330, j + 10);
        netCtx.lineTo(610, 350);
        netCtx.closePath();

        netCtx.stroke();

        netCtx.beginPath();
        netCtx.moveTo(330, j + 10);
        netCtx.lineTo(610, 430);
        netCtx.closePath();

        netCtx.stroke();

        j += 80;
    }

    netCtx.fillStyle = "black";
    netCtx.font = "35px Arial";
    netCtx.fillText("↑", 630, 200);
    netCtx.fillText("→", 630, 280);
    netCtx.fillText("↓", 630, 360);
    netCtx.fillText("←", 630, 440);
}

function colorInput(input) {

    netCtx.fillStyle = "red";

    let j = 50;
    for (let i = 0; i < input.length; i++) {

        if (input[i] != 0)
            netCtx.fillRect(10, (i * j) + 30, 20, 20);
    } 
}

function colorHiden(neurons) {

    let j = 80;
    for (let i = 0; i < neurons.length; i++) {

        if (neurons[i] > 0)
            netCtx.fillRect(320, (i * j) + 100, 20, 20);
    } 
}

function colorOutput(output) {

    let j = 80;
    netCtx.fillRect(600, (output * j) + 180, 20, 20);
}

function discolorNodes() {

    netCtx.fillStyle = "white"; 
    netCtx.strokeStyle = "gray";     

    let j = 30;
    for (let i = 0; i < 12; i++) {
        netCtx.fillRect(10, j, 20, 20);
        netCtx.strokeRect(10, j, 20, 20);
        j += 50;
    }
    j = 100
    for (let i = 0; i < 6; i++) {
        netCtx.fillRect(320, j, 20, 20);
        netCtx.strokeRect(320, j, 20, 20);
        j += 80;
    }

    j = 180
    for (let i = 0; i < 4; i++) {
        netCtx.fillRect(600, j, 20, 20);
        netCtx.strokeRect(600, j, 20, 20);
        j += 80;
    }
}