//Draw3ing Basics

//setuup the cancvas and the graphics context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

let cloudimg = document.getElementById("cloud-img");

ctx.fillStyle = "rgb(0, 0, 255)";
ctx.fillRect(0, 0, 400, 300); // Draw a filled square

ctx.fillStyle = "rgb(255, 0, 0)";
ctx.beginPath();
ctx.arc(200, 300, 15, 0, 2 * Math.PI); // half circle ( 0 to pi) with center (250,500) and radius 20
ctx.fill();

ctx.fillStyle = "rgb(34, 140, 34)";
ctx.fillRect(0, 300, 100000000, 5000000000); // Draw a filled square

// draw images
ctx.drawImage(cloudimg, 130, 120); // draw image with top left corner of (200,200)
ctx.drawImage(cloudimg, 170, 100, 100, 57); // Draw image with the top left corner of (200, 350) scale to 50 x 50
