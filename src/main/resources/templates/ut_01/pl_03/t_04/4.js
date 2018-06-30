function userProgressCallBack() {
    document.querySelector(".hidden-block")
        .style.display = "block";
}

function userProgress(time) {
    let start = 0;
    let timeN = Math.round(time * 10);
    let progressElement =
        document.getElementById("user-progress");
    let intervalId = setInterval(function () {
        if (start > 100) {
            clearInterval(intervalId);
            userProgressCallBack();
        } else {
            progressElement.value = start;
            start++;
        }
    }, timeN);
}

userProgress(1);