for (let i = 0; i < 9; i++) {
    document.getElementById("game").innerHTML +=
        "<div class='block'></div>";
}

let hod = 0;

document.getElementById("game").onclick = function (event) {
    console.log(event);
    if (event.target.className == "block") {
        if (hod % 2 == 0) {
            event.target.innerHTML = "X";
        } else {
            event.target.innerHTML = "O";
        }
        hod++;
        checkWinner();
    }
};

function checkWinner() {
    var allBlock = document.getElementsByClassName("block");
    if (allBlock[0].innerHTML == "X" &&
        allBlock[1].innerHTML == "X" &&
        allBlock[2].innerHTML == "X") {
        alert("победа Х");
// document.
    }

}