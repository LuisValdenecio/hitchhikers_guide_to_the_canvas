var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');
    context.fillStyle = 'orange';
    context.strokeStyle = 'green';

function drawCircle() {
    context.beginPath();
    context.arc(canvas.width / 2, canvas.height / 2, 200 , 0, Math.PI*2, false);
    context.stroke();
}

function animateTheGuide(arg) {
    
    context.clearRect(0,0,context.canvas.width, context.canvas.height);

    ANGLE = -Math.PI/4 + new Date().getSeconds();

        drawGuideWire(ANGLE);

    drawGrid(10,10,'lightgray');
    drawCircle();
    drawNumerals();
    drawInnerCircle();
    drawSmallCircle();

    
}


function drawSmallCircle() {

    context.save();
    context.strokeStyle = 'orange';
    context.fillStyle = 'yellow';

    context.beginPath();
    context.arc(context.canvas.width / 2, context.canvas.height / 2, 10, 0, Math.PI*2, false);
    context.fill();
    context.stroke();

    context.restore();
}

function drawInnerCircle() {
    context.beginPath();
    context.arc(context.canvas.width / 2, context.canvas.height/2, 180, 0, Math.PI*2,false);
    context.stroke();
}

function drawGuideWire(ANGLE) {
    var RADIUS = 200;

    context.save();

    
    context.beginPath();
    context.moveTo(context.canvas.width / 2, context.canvas.height/2);
    context.lineTo(
       (context.canvas.width / 2) + RADIUS * Math.cos(ANGLE),
       (context.canvas.height / 2) + RADIUS * Math.sin(ANGLE)
    );
    context.stroke();

    context.restore();
}

function drawNumerals() {
    context.save();

    context.font = '14pt Helvetica';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    var counter = 1;

    var RADIUS = 200;

    for (let angleCounter = 0; angleCounter < Math.PI*2; angleCounter += Math.PI/8 ) {
        context.beginPath();
       
        context.moveTo(
            (context.canvas.width / 2) + Math.cos(angleCounter) * (RADIUS - 20),
            (context.canvas.height / 2) + Math.sin(angleCounter) * (RADIUS - 20)
        );

        context.lineTo(
            (context.canvas.width / 2) + Math.cos(angleCounter) * RADIUS,
            (context.canvas.height / 2) + Math.sin(angleCounter) * RADIUS
        );


        context.stroke();   
        counter++;
    }

}

function drawGrid(stepX, stepY, color) {
    context.save();
    context.strokeStyle = color;

    for (let i = stepX + 0.5; i < context.canvas.width; i += stepX) {
        context.beginPath();
        context.moveTo(i, 0);
        context.lineTo(i, context.canvas.height);
        context.stroke();
    }

    for (let i = stepY + 0.5; i < context.canvas.height; i += stepY) {
        context.beginPath();
        context.moveTo(0, i);
        context.lineTo(context.canvas.width, i);
        context.stroke();
    }

    context.restore();
}

context.shadowColor = 'rgba(100,120,150,0.5)';
context.shadowOffSetX = 15;
context.shadowOffSetY = 15;
context.shadowBlur = 10;

setInterval(animateTheGuide, 1000);


