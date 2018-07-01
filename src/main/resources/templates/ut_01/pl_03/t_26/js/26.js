let book = {};

$(document).ready(function () {
    $("#modal-add-book-ok").on("click", addBookToLibrary);
});


function addBookToLibrary() {
    let formData = $("form").serializeArray();
    console.log(formData);
    let newArray = [];
    for(key in formData){
        newArray[formData[key]["name"]]=
            formData[key]["value"];
    }
    console.log(newArray);
}