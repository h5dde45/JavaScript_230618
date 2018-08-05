let block = document.getElementById("test");
let left = 0;
let top2 = 0;

document.onkeydown = function (event) {
    console.log(event);
    if (event.key == "ArrowRight") {
        left += 55;
        block.style.left = left + "px";
    }
    if (event.key == "ArrowDown") {
        top2 += 55;
        block.style.top = top2 + "px";
    }
};