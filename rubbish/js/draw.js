var canvas, ctx, flag = false,
    prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0,
    dot_flag = false;

var x = "black",
    y = 2;

function init() {
    canvas = document.getElementById('can');
    ctx = canvas.getContext("2d");
    w = canvas.width;
    h = canvas.height;

    canvas.addEventListener("mousemove", function (e) {
        findxy('move', e)
    }, false);
    canvas.addEventListener("mousedown", function (e) {
        findxy('down', e)
    }, false);
    canvas.addEventListener("mouseup", function (e) {
        findxy('up', e)
    }, false);
    canvas.addEventListener("mouseout", function (e) {
        findxy('out', e)
    }, false);
}

function color(obj) {
    switch (obj.id) {
        case "green":
            x = "green";
            break;
        case "blue":
            x = "blue";
            break;
        case "red":
            x = "red";
            break;
        case "yellow":
            x = "yellow";
            break;
        case "orange":
            x = "orange";
            break;
        case "black":
            x = "black";
            break;
        case "white":
            x = "white";
            break;
    }
    if (x == "white") y = 14;
    else y = 2;

}

var points_array_X = [];
var points_array_Y = [];

function draw() {
    // ctx.beginPath();
    // ctx.moveTo(prevX, prevY);
    // ctx.lineTo(currX, currY);
    console.log(currX, " ", currY);
    points_array_X.push(currX);
    points_array_Y.push(currY);
    // ctx.strokeStyle = x;
    // ctx.lineWidth = y;
    // ctx.stroke();
    // ctx.closePath();
}

function erase() {
    var m = confirm("Want to clear");
    if (m) {
        ctx.clearRect(0, 0, w, h);
        document.getElementById("canvasimg").style.display = "none";
    }
}

function save() {
    document.getElementById("canvasimg").style.border = "2px solid";
    var dataURL = canvas.toDataURL();
    document.getElementById("canvasimg").src = dataURL;
    document.getElementById("canvasimg").style.display = "inline";
}
var startX, startY;
function findxy(res, e) {
    if (res == 'down') {
        points_array_X = [];
        points_array_Y = [];
        prevX = currX;
        prevY = currY;
        currX = e.clientX - canvas.offsetLeft;
        currY = e.clientY - canvas.offsetTop;
        startX = currX;
        startY = currY;


        flag = true;
        dot_flag = true;
        if (dot_flag) {
            // ctx.beginPath();
            // ctx.fillStyle = x;
            // ctx.fillRect(currX, currY, 2, 2);
            // ctx.closePath();
            dot_flag = false;
        }
    }
    if (res == 'up' || res == "out") {
        flag = false;
        endX = e.clientX - canvas.offsetLeft;
        endY = e.clientY - canvas.offsetTop;
        cp1X = points_array_X[Math.round(points_array_X.length / 3)]
        cp1Y = points_array_Y[Math.round(points_array_Y.length / 3)]
        cp2X = points_array_X[Math.round((points_array_X.length / 3) * 2)]
        cp2Y = points_array_Y[Math.round((points_array_Y.length / 3) * 2)]
        console.log(cp1X," " ,cp1Y, " " ,cp2X, " " ,cp2Y);
        // Cubic Bézier curve
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, endX, endY);
        ctx.lineWidth = 5;  
        ctx.lineCap = "round"
        ctx.strokeStyle = 'blue';  
        ctx.stroke();

        // // Start and end points
        // ctx.fillStyle = 'blue';
        // ctx.beginPath();
        // ctx.arc(startX, startY, 5, 0, 2 * Math.PI);  // Start point
        // ctx.arc(endX, endY, 5, 0, 2 * Math.PI);      // End point
        // ctx.fill();

        // // Control points
        // ctx.fillStyle = 'red';
        // ctx.beginPath();
        // ctx.arc(cp1X, cp1Y, 5, 0, 2 * Math.PI);  // Control point one
        // ctx.arc(cp2X, cp2Y, 5, 0, 2 * Math.PI);  // Control point two
        // ctx.fill();
    }
    if (res == 'move') {
        if (flag) {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - canvas.offsetLeft;
            currY = e.clientY - canvas.offsetTop;
            draw();
        }
    }
}