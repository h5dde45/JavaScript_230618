window.onload = function () {

    var sec = 0;
    var min = 0;

    setInterval(fSet, 200);

    function fSet() {
        document.querySelector("#sec")
            .style.transform = "rotate(" + sec + "deg)";
        if (sec == 360) {
            sec = 0;
            min+=6;
        }
        document.querySelector("#min")
            .style.transform = "rotate(" + min + "deg)";
        sec += 6;
    }

    document.getElementById("sec");
}