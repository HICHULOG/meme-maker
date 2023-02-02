const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(200, 200, 15, 100);
ctx.fillRect(300, 200, 15, 100);
ctx.fillRect(225, 200, 60, 200);

ctx.arc(250, 100 + 25, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(230, 100 + 25, 8, 0, 2 * Math.PI);
ctx.arc(270, 100 + 25, 8, 0, 2 * Math.PI);
ctx.fillRect(248, 120, 5, 25);
ctx.fill();
