document.getElementById("r1").oninput=cssGenerator;

function cssGenerator() {
    var div = document.getElementById("test");
    var out = document.getElementById("out");
    // console.log(this.value);
    div.style.borderRadius = this.value + "px";

    out.innerHTML = "webkitborderRadius: " + this.value + "px;\n";
    out.innerHTML += "borderRadius: " + this.value + "px;";
}