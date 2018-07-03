let tab = document.getElementsByClassName("tab");
let tabContent = document.getElementsByClassName("tabContent");
hideTabsContent(1);

function hideTabsContent(a) {
    for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove("show");
        tabContent[i].classList.add("hide");
        tab[i].classList.remove("whiteborder");
    }
}

document.getElementById("tabs").onclick = function (event) {
    let target = event.target;
    if (target.className == "tab") {
        for (let i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                showTabsContent(i);
                break;
            }
        }
    }
};
function showTabsContent(a) {
    if (tabContent[a].classList.contains("hide")) {
        hideTabsContent(0);
        tab[a].classList.add("whiteborder");
        tabContent[a].classList.remove("hide");
        tabContent[a].classList.add("show");
    }
}