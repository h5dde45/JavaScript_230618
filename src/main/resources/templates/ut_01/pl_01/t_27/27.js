var element = document.getElementById("test");
var left = 0;
var top2 = 0;
document.onkeydown = function (event) {
    // console.log(event);
    if (event.key == "ArrowRight") {
        element.style.left = left + "px";
        left += 10;
    }
    if (event.key == "ArrowDown") {
        element.style.top = top2 + "px";
        top2 += 10;
    }
    // if (event.key == "ArrowDown") {
    //     element.style. = right + "px";
    //     right++;
    // }
    // if (event.key == "ArrowLeft") {
    //     element.style.right = right + "px";
    //     right++;
    // }
}