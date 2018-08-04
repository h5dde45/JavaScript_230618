let block = document.getElementById("one");
let col = 1;

// block.onclick = function () {
//     this.style.background = "blue";
// };

block.ondblclick = function () {
    this.style.background = "red";
};

block.oncontextmenu = function () {
    this.style.background = "black";
    return false;
};

// document.oncontextmenu=function () {
//     return false;
// };
//
// block.onmouseenter=function () {
//     col+=10;
//     this.style.background="#"+col;
//     console.log(col);
// };
//
// block.onmouseleave=function () {
//     col-=20;
//     this.style.background="#"+col;
//     console.log(col);
// };

// block.onmousemove = function () {
//     col++;
//     this.style.width = 100 + col + "px";
// }

block.onmousedown = function (event) {
    this.style.background = "#555";
    console.log(event.button);
    console.log(event.which);
};

block.onmouseup = function () {
    this.style.background = "#999";
};