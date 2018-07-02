// let
//     a = prompt("how much?");
// console.log(a + 10);
// console.log(+a + 10);
// console.log(Number(a) + 10);
// console.log(parseInt(a) + 10);
let today = new Date();
let year = today.getFullYear();

let name = prompt("what is your name?");
let birthday = prompt("how old are you?");

let number = year - birthday;
alert(name +
    ", Ваш год рождения " +
    (number));
