let aboutNew = "";
$(document).ready(function () {
    $(document).on("keydown", startCollect);
});

function startCollect(e) {
    if (e.key == "z") {
        $(document).off("onkeydown", startCollect);
        $(document).on("keydown", collectSymbol);
        console.log(aboutNew);
    }
}


function collectSymbol(e) {
    if (e.key == " " || e.key == "Escape") {
        stopCollect();
    } else {
        aboutNew += e.key;
        console.log(aboutNew);
        if(aboutNew=="asd"){
            $("#exampleModal").modal({
                show : true
            });
        }
    }
}

function stopCollect() {
    console.log("stop");
    aboutNew = "";
    $(document).off("keydown", collectSymbol);
    $(document).on("keydown", startCollect);
}