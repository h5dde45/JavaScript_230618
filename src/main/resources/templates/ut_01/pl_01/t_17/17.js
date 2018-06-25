// var m=[22,45,"qwe"];
// console.log(m);

// var m = {};
var n = {
    "one": 12,
    "hello": "world",
    "prim": 2000,
    "double key": 777
};
n.one = "asd";
console.log(n.one);
console.log(n["double key"]);

var pp = "hello";
console.log(n[pp]);
var out = document.getElementById("out");
for (var key in n) {
    out.innerHTML += key +
        " = " + n[key] + "<br>";
}