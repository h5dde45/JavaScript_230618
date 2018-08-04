let shift = 0;
let timer2;

let test = document.getElementById("test");
// move();
function move() {
    test.style.marginLeft = shift + "px";
    shift += 11;
    timer2 = setTimeout(move, 50);
}

// let timer = setInterval(move,50);

document.getElementById("stop").onclick =
    function () {
        // clearInterval(timer);
        clearTimeout(timer2);
    };

// setTimeout(move,3000);

let a = 10;
let p = document.getElementById("out");
obr();
function obr() {
    a--;
    if (a < 0) {
        clearTimeout(timer2);
        alert("sdf");
    } else {
        timer2 = setTimeout(obr, 500);
    }
    p.innerHTML = a;

}