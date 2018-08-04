document.onmousemove=function () {
    document.getElementsByTagName("body")[0]
        .insertAdjacentHTML("beforeEnd",
        '<img src="https://cdn3.iconfinder.com/' +
        'data/icons/animals-105/150/icon_animal_gato-48.png"' +
        ' id="cat">');
    let cat = document.getElementById("cat");
    cat.style.position = "fixed";

    document.onmousemove = function (event) {
        cat.style.left = event.clientX - 48 + "px";
        cat.style.top = event.clientY - 48 + "px";

    };
};






