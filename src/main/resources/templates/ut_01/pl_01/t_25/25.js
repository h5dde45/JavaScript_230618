// document.onkeypress=function (event) {
//     console.log(event.key);
//     console.log(event.shiftKey);
// }

document.getElementById("test").onkeyup=function (event) {
    // console.log(event);
    if(event.keyCode<48 || event.keyCode>57){
        console.log("this is not a figure");
        return false;
    }
}