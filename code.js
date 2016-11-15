/*
*
*
*
*
*/

// Initialize and get context
// let canvas = document.getElementById("starfield"),
// context = canvas.getContext("2d"),
// stars = 200;

// Generating stars

// for (let i = 0; i < stars; i++) {
//     x = Math.random() * canvas.offsetWidth;
//     y = Math.random() * canvas.offsetHeight;
//    context.fillStyle = "white";
//     context.fillRect(x,y,1,1);
// }

// for (let i = 0; i < stars; i++) {
//     let x = Math.random() * canvas.offsetWidth;
//     y = Math.random() * canvas.offsetHeight,
//     radius = Math.random() * 1.2;
//     context.beginPath();
//     context.arc(x, y, radius, 0, 360);
//     context.fillStyle = "hsla(200,100%,50%,0.8)";
//     context.fill();
// }

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let canvas = document.getElementById("starfield"),
context = canvas.getContext("2d"),
stars = 500,
colorrange = [0,60,240];

function drawCanvas() {
    for (var i = 0; i < stars; i++) {
        var x = Math.random() * canvas.offsetWidth;
        y = Math.random() * canvas.offsetHeight,
        radius = Math.random() * 1.2,
        hue = colorrange[getRandom(0,colorrange.length - 1)],
        sat = getRandom(50,100);

        context.beginPath();
        context.arc(x, y, radius, 0, 360);
        context.fillStyle = "hsl(" + hue + ", " + sat + "%, 88%)";
        context.fill();
    }
}


function makeCanvasFullscreen(ev) {
    let starfield = document.getElementById('starfield'),
        screenWidth = screen.availWidth,
        screenHeight = screen.availHeight;

    starfield.width = screenWidth;
    starfield.height = screenHeight;
}

makeCanvasFullscreen();
drawCanvas();

window.addEventListener('resize', makeCanvasFullscreen)
window.addEventListener('resize', drawCanvas)