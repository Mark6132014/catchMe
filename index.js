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
document.querySelector(".startGame").addEventListener("click", () => {
    /* Change variable to same value */
    newPosition = positions[Math.floor(Math.random()*positions.length)];
    /* Prevent opening many windows */
    document.querySelector(".startGame").style.display = "none";
    /* Open window */
    let gameClient = window.open("States/run.html", "popup", "height=300,width=400");
    gameClient.focus();
    gameClient.moveTo(newPosition.x, newPosition.y);
});