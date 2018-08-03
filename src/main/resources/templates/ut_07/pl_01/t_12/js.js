// document.getElementById("sliderLeft").onclick =
//     sliderLeft;
let left = 0;
let timer = 0;
autoSlider();

function autoSlider() {
    timer=setTimeout(function () {
        let polosa = document.getElementById("polosa");
        left -= 128;
        if(left< -512){
            left=0;
            clearTimeout(timer);
        }
        polosa.style.left = left + "px";
        autoSlider();
    }, 1000);
}
