if(localStorage.getItem("bgColor")!=null){
    let color = localStorage.getItem("bgColor");
    document.getElementsByTagName("body")[0]
        .style.background =color;
}

document.getElementById("green").onclick =
    function () {
        document.getElementsByTagName("body")[0]
            .style.background = "green";
        localStorage.setItem("bgColor","green");
    };
document.getElementById("red").onclick =
    function () {
        document.getElementsByTagName("body")[0]
            .style.background = "red";
        localStorage.setItem("bgColor","red");
    };