var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');

writesBigTitle('Product Roadmap', canvas.width/2, 80);

writesParagraph(
    `fdsjfhsk fshfkjhs kfskj fksjhfkjsh fkjh sfkjshfkjs fkjshfkjs fhkjs fhsfsfhkjshfsd/ndsadadasdsad dadafkfdf
   `,
    canvas.width/2,
    130
);

writesParagraph(
    `fdh sfkjshfkjs fkjshfkjs fhkjs fhsfsfhkjshfsd/ndsadadasdsad dadafkfdf
   `,
    canvas.width/2,
    150
);

//drawsTheRectangle();
drawsFirstRows();



//drawGrid(10,10,'lightgray');
function drawsFirstRows() {
    let horizontalSpacing = canvas.width/4;

    for (; horizontalSpacing < canvas.width; horizontalSpacing += canvas.width/4) {
        drawsArrows(horizontalSpacing, canvas.height/2 + 60,60,'rgba(233, 182, 16, 0.6)')  
    }

    horizontalSpacing = canvas.width/4;
    
    for (; horizontalSpacing < canvas.width; horizontalSpacing += canvas.width/4) {
        drawsArrows(horizontalSpacing,canvas.height/2 + 200,60,'rgba(75, 165, 177, 0.6)')
    }
}

function writesBigTitle(text, x, y) {
    context.save();
    context.fillStyle = 'rgba(39, 48, 51, 0.725)';
    context.textAlign = 'center';
    context.font = ' 3em Arial';
    context.fillText(text, x, y);
    context.restore();
}

function writesParagraph(text, x, y) {
    context.save();
    context.fillStyle = 'rgba(39, 48, 51, 0.625)';
    context.textAlign = 'center';
    context.font = '1em Arial'
    context.fillText(text, x, y);
    context.restore();
}

function drawsTheRectangle() {
    context.save();
    context.fillStyle = 'rgba(90,120,300,0.2)';
    context.beginPath();
    context.fillRect(canvas.width/2 - 470, 200, 870, 60);
}

function drawsArrows(x,y, radius, fillColor) {

    context.save();
    context.fillStyle = fillColor;

    var angle = -Math.PI/2;
   
    context.beginPath();
    context.moveTo(x+radius,y);
    context.lineTo(x + radius * Math.cos(angle), y + radius * Math.sin(angle));
    context.lineTo(x + radius * Math.cos(angle), y + radius * Math.sin(angle) + radius/2);
    context.lineTo(x + radius * Math.cos(angle) - 120,y + radius * Math.sin(angle) + radius/2);
    context.lineTo(x + radius * Math.cos(angle) - 120,y + radius * Math.sin(angle) + 80);
    context.lineTo(x + radius * Math.cos(angle), y + radius * Math.sin(angle) + 80);
    context.lineTo(x + radius * Math.cos(angle), y + radius * Math.sin(angle) + radius/2 + 80);

    context.closePath();    
    
    context.fill();
    context.restore();
}

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





