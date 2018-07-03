let divShow = document.getElementById("divShow");

let inp1 = document.getElementById("inp1");
let out1 = document.getElementById("out1");
inp1.oninput =
    function () {
        out1.value = inp1.value;
        divShow.style.borderTopLeftRadius = inp1.value + "px";
    };

let inp2 = document.getElementById("inp2");
let out2 = document.getElementById("out2");
inp2.oninput =
    function () {
        out2.value = inp2.value;
        divShow.style.borderTopRightRadius = inp2.value + "px";
    };

let inp3 = document.getElementById("inp3");
let out3 = document.getElementById("out3");
inp3.oninput =
    function () {
        out3.value = inp3.value;
        divShow.style.borderBottomRightRadius = inp3.value + "px";
    };

let inp4 = document.getElementById("inp4");
let out4 = document.getElementById("out4");
inp4.oninput =
    function () {
        out4.value = inp4.value;
        divShow.style.borderBottomLeftRadius = inp4.value + "px";
    };