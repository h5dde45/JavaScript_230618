// document.write("<p>qwe \"55\" lk<a href='#'>234</a> </p>")

let colorArray = ["#2745c8", "#37d46f", "#456abc", "#dd5675", "#f23dfc"];
let i = 0;

function changeColor() {
    document.body.style.background = colorArray[i];
    i++;
    if (i >= colorArray.length) {
        i = 0;
    }
}

