let slideIndex = 0;
showSlides(slideIndex);

// document.getElementById("p1")
//     .onclick = plusSlides(-1);
// document.getElementById("p2")
//     .onclick = plusSlides(1);
//
// document.getElementById("d1")
//     .onclick = currentSlide(0);
// document.getElementById("d2")
//     .onclick = currentSlide(1);
// document.getElementById("d3")
//     .onclick = currentSlide(2);

function plusSlides(number) {
    slideIndex += number;
    showSlides(slideIndex);
}
function currentSlide(number) {
    slideIndex = number;
    showSlides(slideIndex);
}
function showSlides(n) {
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length-1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className
            .replace("active", "");
    }
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += "active";
}

