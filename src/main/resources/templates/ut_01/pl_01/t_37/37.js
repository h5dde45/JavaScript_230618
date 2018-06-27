window.onload = function () {
    equalHeight();

    function equalHeight() {
        document.querySelector(".left").style.height =  "auto";
        document.querySelector(".right").style.height =  "auto";

        var left = document.querySelector(".left").offsetHeight;
        var right = document.querySelector(".right").offsetHeight;
        var max = Math.max(left, right);
        document.querySelector(".left").style.height = max + "px";
        document.querySelector(".right").style.height = max + "px";

        console.log(left);
        console.log(right);
    }

    window.onresize = equalHeight;
}