function one() {
    // alert("asd");
    return 45;
}
// console.log(3+one());

function sum(a, b) {

    a = a || 10;
    b = b || 11;
    alert(a + b);
    // return a + b;
}
// console.log(sum( 3));

document.getElementById("b1").onclick =
    function () {
        sum(11, 4);
    };