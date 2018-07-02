let books = {};

$(document).ready(function () {
    $("#modal-add-book-ok").on("click", addBookToLibrary);
});

function addBookToLibrary() {
    let formData = $("form").serializeArray();
    // console.log(formData);
    let newArray = [];
    for (key in formData) {
        newArray[formData[key]["name"]] =
            formData[key]["value"];
    }
    // console.log(newArray);
    let randomArticle = Math.round(Math.random() * 10000);
    books[randomArticle] = newArray;
    drawBook(randomArticle);
}

function drawBook(article) {
    let div = document.createElement("div");
    div.className = "col-lg-3 book";
    div.setAttribute("data", article);

    let cover = document.createElement("div");
    div.className = "book-cover";
    cover.style.backgroundImage="url(${books[article[])"


}