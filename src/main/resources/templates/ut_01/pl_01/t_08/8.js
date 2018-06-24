var prNum = Math.floor(Math.random() * 10 + 1);
// var tempOut = document.getElementById("tempOut");
// tempOut.innerHTML = prNum;
console.log(prNum);

function f1() {
    var num = document.getElementById("num1").value;
    var out = document.getElementById("out");

    if (num == prNum) {
        out.innerHTML = "ok";
    } else if (num > prNum) {
        out.innerHTML = ">";
    } else {
        out.innerHTML = "<";
    }

}