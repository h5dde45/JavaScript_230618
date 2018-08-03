let n1 = document.getElementById("num1").value;
let n2 = document.getElementById("num2").value;
n1=parseInt(n1);
n2=parseInt(n2);

function add() {
    document.getElementById("out").innerHTML = n1 + n2;
}
function substract() {
    document.getElementById("out").innerHTML = n1 - n2;
}