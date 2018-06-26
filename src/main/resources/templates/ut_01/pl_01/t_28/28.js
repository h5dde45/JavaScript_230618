document.onwheel = function (event) {
    if (event.deltaY > 0) {
        document.getElementById("line")
            .innerHTML = "вниз";
    } else {
        document.getElementById("line")
            .innerHTML = "вверх";
    }

    document.getElementById("speed")
        .innerHTML = event.deltaY;
}
var left = 290;
document.getElementById("test").onwheel = function (event) {
    var line = event.deltaY;
    left += line * 2;
    document.getElementById("test2")
        .style.left = left + "px";
    return false;
}