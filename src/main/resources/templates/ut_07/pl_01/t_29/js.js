let scrolled;
let timer;

document.getElementById("top").onclick = function () {
    scrolled = window.pageYOffset;
    scrollToTop();
    // window.scrollTo(0, 0);
};
function scrollToTop() {
    if (scrolled > 0) {
        window.scrollTo(0, scrolled);
        scrolled -= 100;
        timer = setTimeout(scrollToTop, 100);
    } else {
        clearTimeout(timer);
        window.scrollTo(0, 0);
    }
}