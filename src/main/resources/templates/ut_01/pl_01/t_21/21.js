var block = document.getElementById("one");

// block.onclick = function () {
//     this.style.background = "green";
//     // this.onclick=null;
// }
//
// block.ondblclick=function () {
//     this.style.background="black";
// }

block.oncontextmenu = function () {
    this.style.background = "green";
    return false;
}
// block.onmouseenter=function () {
//     console.log("in");
//     this.style.background="green";
// }
// block.onmouseout=function () {
//     console.log("out");
//     this.style.background="red";
// }

var a = 0;
// block.onmousemove = function () {
//     a++;
//     this.style.width = 100 + a + "px";
//     console.log(a + 100);
// }
block.onmousedown = function (event) {
    this.style.background = "blue";
    console.log("button: " + event.button);
    console.log("which: " + event.which);
}
block.onmouseup = function (event) {
    this.style.background = "pink";
}
