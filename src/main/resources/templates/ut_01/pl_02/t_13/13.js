let p = document.getElementsByTagName("p");
console.log(p);

for (let i = 0; i < p.length; i++) {
    p[i].style.color = "red";
}

let name = document.getElementsByClassName("t3");
console.log(name);

let name2 = document.querySelectorAll(".t3");
for (let i = 0; i < name2.length; i++) {
    name2[i].onclick = function () {
        alert("clock");
    }
}
console.log(name2);
