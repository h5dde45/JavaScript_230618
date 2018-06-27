var event = window.event;

document.querySelector('.jlehman').onmousewheel =
    function (event) {
        // event = event || window.event;
        var y = Math.round(event.deltaY);
        console.log(y);
        return false;
    }