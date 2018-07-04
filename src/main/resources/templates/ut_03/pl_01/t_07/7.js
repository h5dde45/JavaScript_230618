let btn = document.getElementsByTagName("button")[0];
let a = 0;
// let mCont = document.getElementById("mainContainer");
let aCont = document.getElementById("animalContainer");

btn.onclick = function () {
    // let count = mCont.offsetWidth;
    // console.log(count);
    // while (x < count) {
    let id = setInterval(step, 10);

    function step() {
        a++;
        if (a >= 350) {
            clearInterval(id);
        } else {
            aCont.style.left = a + "px";
            aCont.style.top = a + "px";
        }

    }

    // }
};
