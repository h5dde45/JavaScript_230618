let sel = document.getElementById("s1");
sel.onchange = function () {
    let index = sel.selectedIndex;
    let options = sel.options;
    alert(" = " + index + " = " + options[index].text);
};

let inp1 = document.getElementById("inp1");
let inp2 = document.getElementById("inp2");
let div1 = document.getElementById("d1");
let p = document.getElementById("one");
inp1.oninput = function () {
    div1.style.width = parseInt(inp1.value) * 10 + 300 + "px";
    inp2.value = inp1.value;
    p.innerHTML = inp1.value;
}
