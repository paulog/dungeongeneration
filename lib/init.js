window.onload = function(){

    initializeCanvas();

};

function initializeCanvas(){

    //Initialize the canvas
    canvas = document.getElementById("canvas");
    canvas.width = 900;
    canvas.height = 600;

    var options = {
        canvas: canvas, //The canvas object on which our dungeon is placed on
        tilesX: 60, //The number of horizontal tiles on this map
        tilesY: 40, //The number of vertical tiles on this map
        tileSize: 25, //The width and height of a single tile
        maxRooms: 10, //The maximum number of rooms on this map
        minRoomWidth: 6, //The minimum width of a single room
        maxRoomWidth: 12, //The maximum width of a single room
        minRoomHeight: 6, //The minimum height of a single room
        maxRoomHeight: 12, //The maximum height of a single room
        debug: false //Boolean to enable or disable the debugger
    };

    //Create a new game
    game = new Roguelike.Game(options);

}