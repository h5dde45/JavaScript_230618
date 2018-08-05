let line = document.getElementById("line");
let speed = document.getElementById("speed");

document.onwheel = function (event) {
    if (event.deltaY > 0) {
        line.innerHTML = "down";
    } else {
        line.innerHTML = "up";
    }
    if (event.deltaY <= 3) {
        speed.innerHTML = "low";
    } else {
        speed.innerHTML = "hi";
    }
};

let left = 290;

document.getElementById("test").onwheel =
    function (event) {
        let line = event.deltaY;
        // left += line;
        document.getElementById("test2").style
            .left = left + line*15 + "px";
        return false;
    };