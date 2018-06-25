document.onmousemove = function () {
    document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeEnd",
        "<img src='https://cdn3.iconfinder.com/data/icons/animals-105/150/icon_animal_gato-32.png' " +
        "id='cat'>");

    var cat = document.getElementById("cat");
    cat.style.position = "fixed";

    document.onmousemove = function (event) {
        cat.style.left = event.clientX + 20 + "px";
        cat.style.top = event.clientY + 20 + "px";
    }
}


