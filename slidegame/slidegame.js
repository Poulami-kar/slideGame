var row = 3;
var colums = 3;
var curTile;
var otherTile;
var turns = 0;


//var imgOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var imgOrder = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];





window.onload = function() {
    for (let r = 0; r < row; r++) {
        for (let c = 0; c < colums; c++) {
            // <img > id ="0.0" src= " 1.jpeg" and so on 
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = "shinchan" + imgOrder.shift() + ".jpeg";

            //Drag function
            tile.addEventListener("dragstart", dragStart); //click the img to drag
            tile.addEventListener("dragover", dragOver); //moving img around while clicking
            tile.addEventListener("dragenter", dragEnter); //draging img on to another one
            tile.addEventListener("dragleave", dragLeave); //draging img leaving another one
            tile.addEventListener("drop", dropDrop); //drag an img over another img, drop the img
            tile.addEventListener("dragend", dragEnd); //after drag swap the 2 img

            document.getElementById("board").append(tile); //take the img tag & store into board

        }
    }
}

function dragStart() {
    curTile = this; // "this " => img that drag
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dropDrop() {
    otherTile = this; //"this"=> img which being dropped on
}

function dragEnd() {

    let currCoder = curTile.id.split("-");
    let r = parseInt(currCoder[0]);
    let c = parseInt(currCoder[1]);

    let otherCodder = otherTile.id.split("-");
    let r2 = parseInt(otherCodder[0]);
    let c2 = parseInt(otherCodder[1]);

    let moveLeft = (r == r2 && c2 == c - 1);
    let moveRight = (r == r2 && c2 == c + 1);

    let moveUp = (c == c2 && r2 == r - 1);
    let moveDown = (c == c2 && r2 == r + 1);

    let isAjdust = moveUp || moveDown || moveLeft || moveRight;

    if (isAjdust) {
        let currImg = curTile.src;
        let otherImg = otherTile.src;

        curTile.src = otherImg;
        otherTile.src = currImg;
    }
    turns += 1;
    document.getElementById("turns").innerText = turns;
}