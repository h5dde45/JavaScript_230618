for (var i = 0; i < 9; i++) {
    document.getElementById("game")
        .innerHTML += "<div class='block'></div>";
}

var hod = 0;

function checkWinner() {
    var allBlock = document.getElementsByClassName("block");
    if (allBlock[0].innerHTML == "X" &&
        allBlock[1].innerHTML == "X" &&
        allBlock[2].innerHTML == "X") {
        alert("победа Х");
// document.
    }

}
document.getElementById("game").onclick =
    function (event) {
        console.log(event);
        if (event.target.className == "block") {
            if (hod % 2 == 0) {
                event.target.innerHTML = "O";
            } else {
                event.target.innerHTML = "X";
            }
            hod++;
            checkWinner();
        }
    }