function timerLeft() {
    setInterval(function () {
        let hoursLeft = document.getElementById("timer-v-hours"),
            hoursText = document.getElementById("timer-v-hours__text"),
            minutesLeft = document.getElementById("timer-v-minutes"),
            minutesText = document.getElementById("timer-v-minutes__text"),
            secLeft = document.getElementById("timer-v-seconds"),
            secText = document.getElementById("timer-v-seconds__text"),
            dateNow = new Date().getTime(),
            dateFinish = new Date(2018, 8, 5),
            sec = Math.floor((dateFinish - dateNow) / 1000),
            secToMinutes = sec % 3600,
            hoursNumber = Math.floor(sec / 3600),
            minutesNumber = Math.floor(secToMinutes / 60),
            secNumbers = secToMinutes % 60;

        hoursLeft.innerHTML = hoursNumber;
        minutesLeft.innerHTML = minutesNumber;
        secLeft.innerHTML = secNumbers;

        hoursText.innerHTML="часы";
        minutesText.innerHTML="минуты";
        secText.innerHTML="секунды";
    })
}
timerLeft();