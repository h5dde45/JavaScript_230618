setInterval(fSec, 200);
let sec = 0;
let min = 0;
function fSec() {
    document.querySelector("#sec").style.transform =
        "rotate(" + sec + "deg)";
    document.querySelector("#min").style.transform =
        "rotate(" + min + "deg)";
    sec += 6;
    if(sec==360){
        sec=0;
        min+=6;
    }
}
