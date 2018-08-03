function f1() {
    let n = document.getElementById("n1").value;
    let out = document.getElementById("out");

    n = parseInt(n);

    if (n == 100) {
        out.innerHTML = "ok";
    } else if (n < 100) {
        out.innerHTML = "<";
    } else {
        out.innerHTML = ">";
    }


}