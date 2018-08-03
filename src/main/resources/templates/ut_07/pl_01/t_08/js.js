let randNum = Math.floor(Math.random() * 10 + 1);
let tempNum =
    document.getElementById("tempNum");
tempNum.innerHTML=randNum;

function f1() {
    let n = document.getElementById("n1").value;
    let out = document.getElementById("out");


    if (n == randNum) {
        out.innerHTML = "ok";
    } else if (n < randNum) {
        out.innerHTML = "It's too small";
    } else {
        out.innerHTML = "it's a lot";
    }


}