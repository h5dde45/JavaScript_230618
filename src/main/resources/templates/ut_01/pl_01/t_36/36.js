window.onload = function () {
    function fTabs(event) {
        // console.log(event);
        if (event.target.className == "tab-h") {
            var dataTab = event.target.getAttribute("data-tab");

            var tabBody = document.getElementsByClassName("tab-b");
            var listH = document.getElementsByClassName("tab-h");
            for (var i = 0; i < listH.length; i++) {
                listH[i].classList.remove("active");
            }
            event.target.classList.add("active");
            for (var i = 0; i < tabBody.length; i++) {
                if (dataTab == i) {
                    tabBody[i].style.display = "block";
                } else {
                    tabBody[i].style.display = "none";
                }
            }
        }
    }

    document.querySelector(".tabs-headers")
        .addEventListener("click", fTabs);
}