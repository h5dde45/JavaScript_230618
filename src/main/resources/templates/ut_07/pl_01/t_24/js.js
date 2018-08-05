// document.onkeypress=function (event) {
//   console.log(event);
// if(event.shiftKey){
//     console.log(event.key);
// }
// };
let str = "";
document.getElementById("test").onkeypress =
    function (event) {
        str += event.key;
        console.log(str);
        this.value += String.fromCharCode(
            getRandomArbitrary(65, 122));
        return false;
    };

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}