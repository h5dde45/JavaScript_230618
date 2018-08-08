function myAlert() {
    alert("alert....");
}

document.getElementById("block2").onclick=
    function () {
        console.log("work...")
    };
document.getElementById("block2").ondblclick=
    function () {
        console.log("work dbl click...");
        document.getElementsByTagName("p")[0]
            .innerHTML="hello";
    };