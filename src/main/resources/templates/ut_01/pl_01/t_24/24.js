var sdvig = 250;
var test = document.getElementById("test");
// move();
var timer;


function move() {
    test.style.marginLeft = sdvig + "px";
    sdvig += 11;
    timer = setTimeout(move, 550);
}

// var timer = setInterval(move,50);

document.getElementById("stop")
    .onclick = function () {
    // clearInterval(timer);
    clearTimeout(timer);
};

// setTimeout(move, 5000);

var a = 10;
function obr() {
    document.getElementById("out").innerHTML = a;
    a--;
    if (a == 0) {
        clearTimeout(timer);
    } else {
        timer = setTimeout(obr, 1000);
    }
}
obr();