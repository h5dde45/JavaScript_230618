let checkBox = document.getElementById("one");
checkBox.onchange =
    function () {
        if (checkBox.checked) {
            alert("ok");
        } else {
            alert("don't ok")
        }
    };

let rad = document.getElementsByName("r1");
let b = document.getElementById("but");
b.onclick=foo;
function foo() {
    for (let i = 0; i < rad.length; i++) {
        if (rad[i].checked) {
            alert("=>" + i);
        }
    }
};





