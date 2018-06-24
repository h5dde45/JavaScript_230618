function f1() {
    var checked;
    var check = 100;
    checked = document.getElementById("num1").value;
    checked = parseInt(checked);
    showNum = document.getElementById("out");

    if (checked == check) {
        showNum.innerHTML = "the number is equal 100";
    } else if (checked < check) {
        showNum.innerHTML = "the number is less 100";
    } else {
        showNum.innerHTML = "the number is more 100";
    }
}