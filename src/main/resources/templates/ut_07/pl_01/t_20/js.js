function one() {
    return 11;
}

// console.log("sd" + one());

function sum(a, b) {
    a = a || 11;
    b = b || 13;
    alert(a + b);
    // return a + b;
}

// console.log(sum());

document.getElementById("b1").onclick = function () {
    sum(12,3);
};