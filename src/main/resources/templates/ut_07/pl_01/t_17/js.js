let n = {
    "one": 12,
    "two": 33,
    "hello": "asd",
    "double key": 444
};
n.one = 44;

// console.log(n["two"]);
console.log(n.one);
console.log(n["double key"]);
let pp = "one";
console.log(n[pp]);

let out = document.getElementById("out");

for (let key in n) {
    out.innerHTML += key + " - " + n[key] + "<br>";

}
