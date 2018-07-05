let rating = document.querySelector(".rating");
let ratingItem = document.querySelectorAll(".rating-item");

rating.onclick = function (e) {
    let target = e.target;
    if (target.classList.contains("rating-item")) {
        target.classList.add("active", "current-active");
    }
};

// rating.onmouseover = function () {
//     addClass(ratingItem, "active");
// };

rating.onmouseout = function (e) {
    let target = e.target;
    if (target.classList.contains("rating-item")) {
        removeClass(ratingItem, "active", "current-active");
        target.classList.add("active");
        mouseOverActiveClass(ratingItem);
    }
};

function removeClass(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arguments.length; j++) {
            ratingItem[i].classList.remove(arguments[j]);
        }
    }
}
function addClass(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arguments.length; j++) {
            ratingItem[i].classList.add(arguments[j]);
        }
    }
}
function mouseOverActiveClass(arr) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[j].classList.contains("active")) {
            break;
        } else {
            arr[j].classList.add("active");
        }
    }
}
// function mouseOutActiveClass(arr) {
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[j].classList.contains("active")) {
//             break;
//         } else {
//             arr[j].classList.add("active");
//         }
//     }
// }
