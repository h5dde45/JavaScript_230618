let number = Math.floor(Math.random() * 10 + 1);
console.log(number);
let count = 3;

document.getElementById("check").onclick =
    function () {
        if (count > 0) {
            let userNum = document.getElementById("num").value;
            let out = document.getElementById("out");
            let counter = document.getElementById("count");
            if (userNum == number) {
                out.innerHTML = "ok";
            } else if (userNum > number) {
                out.innerHTML = ">";
            } else {
                out.innerHTML = "<";
            }
            count--;
            counter.innerHTML=" Осталось "+count+" попытки... "
        } else {
            alert("end");
            location.reload();
        }
    };