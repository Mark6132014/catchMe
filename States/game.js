/* Positions */
/* Get Positions */
const positions = [
    {
        posName: "TopLeft",
        x: 0,
        y: 0
    },
    {
        posName: "TopCenter",
        x: 450,
        y: 0
    },
    {
        posName: "TopRight",
        x: 1000,
        y: 0
    },
    {
        posName: "Left",
        x: 0,
        y: 200
    },
    {
        posName: "Center",
        x: 430,
        y: 200
    },
    {
        posName: "Right",
        x: 1000,
        y: 200
    },
    {
        posName: "BottomLeft",
        x: 0,
        y: 400
    },
    {
        posName: "BottomCenter",
        x: 430,
        y: 400
    },
    {
        posName: "BottomRight",
        x: 1000,
        y: 400
    }
];
/* Get New Position */
var newPosition = positions[Math.floor(Math.random()*positions.length)];
function run() {
    newPosition = positions[Math.floor(Math.random()*positions.length)];
    window.moveTo(newPosition.x, newPosition.y);
}
var running = setInterval(run, 500);
window.addEventListener("click", () => {
    clearInterval(running);
    location.assign("caught.html");
    window.moveTo(430, 150);
    window.resizeTo(400, 450);
});