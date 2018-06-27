window.onload = function () {

    if (localStorage.getItem("bgColor") != null) {
        var color = localStorage.getItem("bgColor");
        document.getElementsByTagName("body")[0]
            .style.background = color;
    }
    console.log(localStorage.getItem("qwe"));


    document.getElementById("green").onclick =
        function () {
            document.getElementsByTagName("body")[0]
                .style.background = "green";
            localStorage.setItem("bgColor", "green");

        }
    document.getElementById("red").onclick =
        function () {
            document.getElementsByTagName("body")[0]
                .style.background = "red";
            localStorage.setItem("bgColor", "red");

        }

}