// // var y=5;
// // if(y>0){
// //     y=9;
// //     console.log(y);
// // }
// // console.log(y);
//
//
// // let y = 5;
// // if (y > 0) {
// //     let y = 9;
// //     console.log(y);
// // }
// // console.log(y);
//
// const a=9;
//
// console.log(a);
// "use strict"
//
// let a=5;
// console.log(typeof a);
// let b=5.4;
// console.log(typeof b);
// let c="assd";
// console.log(typeof c);
// let d=true;
// console.log(typeof d);
// let e;
// console.log(typeof e*e);
// console.log(typeof null);
//
// let g=[2,3,4];
// console.log(typeof g);
// let e = prompt("qwe asd","");
// console.log(typeof e);
// console.log(e+2);
// console.log(e*3);
// e=parseInt(e);
// console.log(typeof e);
// console.log(e+2);
//
// let a=3;
// let b=2;
// let c;
// c=a+b;
// if(c==b){
//     alert("asd");
// }
// alert(c);

let newVar = [2, 3, 4];
newVar[6] = 3;
console.log(newVar);
for (let l in newVar) {
    console.log(typeof l);
}
delete newVar[6];
console.log(newVar);

let element = document.getElementById("out");
let str = "";
newVar.push(23);
newVar.push(223);
newVar.pop();
newVar.shift();
newVar.unshift(5);
for (let i = 0; i < newVar.length; i++) {
    // if (newVar[i] != undefined) {
        str += newVar[i] + " ";
    // }
}
element.innerHTML = str;

let s = "qwe, rt, gh";
let splitN = s.split(",");
console.log(splitN);
console.log(splitN.join("..."));
let nm = splitN.slice(0,2);
console.log(nm,splitN);

