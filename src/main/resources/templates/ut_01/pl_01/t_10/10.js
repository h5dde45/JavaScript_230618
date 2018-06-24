// var m = [];
var m1 = [23, 65, "asd"];
m1[3] = 3.4;
m1[3] = 344;
// console.log(m1[1]);
// console.log(m1[23]);
// console.log(m1);
// console.log(m1.length);
function masOut() {
    var p = document.getElementById("out");
    var str = "";
    for (var i = 0; i < m1.length; i++) {
        str += i + " = " + m1[i] + "<br>";
    }
    p.innerHTML = str;
}
masOut();

function p1() {
    var i=document.getElementById("i1").value;
    m1.push(i);
    masOut();
}
function p2() {
    m1.pop();
    masOut();
}