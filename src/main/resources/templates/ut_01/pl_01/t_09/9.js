function f1() {
    var p = document.getElementById("out");

    for (var i = 0; i < 100; i++) {
        p.innerHTML += i + " ";

    }
}
function f2() {
    var i = 0;
    var p = document.getElementById("out2");

    while (i < 50) {
        p.innerHTML += i + " ";
        i++;
    }
}
function f3() {
    var i = 0;
    var p = document.getElementById("out3");

    do {
        p.innerHTML += i + " ";
        i++;
    } while (i < 5);
}