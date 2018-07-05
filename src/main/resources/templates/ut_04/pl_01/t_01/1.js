let title = document.getElementsByClassName("accordion-title");
let cont = document.getElementsByClassName("accordion-cont");

// for (let i = 0; i < title.length; i++) {
//     title[i].addEventListener("click", function () {
//         if (!(this.classList.contains("active"))) {
//             for (let i = 0; i < title.length; i++) {
//                 title[i].classList.remove("active");
//             }
//             this.classList.add("active");
//         }
//     });
// }

for (let i = 0; i < title.length; i++) {
    let curTitle = title[i];
    title[i].addEventListener("click", function () {
        let classes = this.getAttribute("class");
        let newClasses = "";
        let classesArr = classes.split(" ");
        let newClassesArr = classes.split(" ");

        for (let j = 0; j < classesArr.length; j++) {
            if (classesArr[j] == "active") {
                classesArr.splice(j, 1);
            }
        }
        if (classesArr.length == newClassesArr.length) {
            classesArr.push("active");
            newClasses = classesArr.join(" ");
        } else {
            newClasses = classesArr.join(" ");
        }
        for (let k = 0; k < title.length; k++) {
            let oldClasses = title[k].getAttribute("class");
            let oldClassesArr = oldClasses.split(" ");
            for (let n = 0; n < oldClassesArr.length; n++) {
                if (oldClassesArr[n] == "active") {
                    oldClassesArr.splice(n, 1);
                }
                oldClasses=oldClassesArr.join(" ");
                title[k].setAttribute("class", oldClasses);
            }
        }
        this.setAttribute("class", newClasses);
    });
}