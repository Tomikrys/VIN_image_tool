// Define bez_canvas and context
const bez_canvas = document.getElementById('bezier');
const bez_ctx = bez_canvas.getContext('2d');

// Define the points as {x, y}
let start = { x: 50,    y: 20  };
let cp1 =   { x: 230,   y: 30  };
let cp2 =   { x: 150,   y: 80  };
let end =   { x: 250,   y: 100 };

// Cubic Bézier curve
bez_ctx.beginPath();
bez_ctx.moveTo(start.x, start.y);
bez_ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);
bez_ctx.stroke();

// Start and end points
bez_ctx.fillStyle = 'blue';
bez_ctx.beginPath();
bez_ctx.arc(start.x, start.y, 5, 0, 2 * Math.PI);  // Start point
bez_ctx.arc(end.x, end.y, 5, 0, 2 * Math.PI);      // End point
bez_ctx.fill();

// Control points
bez_ctx.fillStyle = 'red';
bez_ctx.beginPath();
bez_ctx.arc(cp1.x, cp1.y, 5, 0, 2 * Math.PI);  // Control point one
bez_ctx.arc(cp2.x, cp2.y, 5, 0, 2 * Math.PI);  // Control point two
bez_ctx.fill();