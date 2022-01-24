var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');

context.lineWidth = 20;
context.lineCap = 'round';

// draw a funnel







drawGrid(10,10,'lightgray');

function drawGrid(stepX, stepY, color) {
    context.save();
    context.strokeStyle = color;

    for (let xCounter = 0 + 0.5; xCounter < canvas.width; xCounter += stepX) {
        context.beginPath();
        context.moveTo(xCounter, 0);
        context.lineTo(xCounter, canvas.height);
        context.stroke();
    }

    for (let yCounter = 0 + 0.5; yCounter < canvas.height; yCounter += stepY) {
        context.beginPath();
        context.moveTo(0, yCounter);
        context.lineTo(canvas.width, yCounter);
        context.stroke();
    }

    context.stroke();
    context.restore();
}