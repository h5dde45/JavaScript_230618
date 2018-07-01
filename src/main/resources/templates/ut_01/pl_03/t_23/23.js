"use strict"

class CutNum {
    constructor(a) {
        this.n = Math.floor(a % 10);
        this.nn = Math.floor(a / 10 % 10);
        this.nnn = Math.floor(a / 100 % 10);
    }
}

document.getElementById("calc").onclick =
    function () {
        let n1 = document.getElementById("num1").value;
        n1 = parseInt(n1);
        if (typeof n1 == "number" && n1 >= 0 && n1 < 1000) {
            let n2 = new CutNum(n1);
            document.getElementById("num2").innerHTML =
                n2.n + ' ' + n2.nn + ' ' + n2.nnn;
        } else {
            alert("error...");
        }
    };
