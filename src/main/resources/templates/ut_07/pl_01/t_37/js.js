function equalHeight() {
    document.querySelector(".left").style.height="auto";
    document.querySelector(".right").style.height="auto";

    let left = document.querySelector(".left").offsetHeight;
    let right = document.querySelector(".right").offsetHeight;

    let max = Math.max(left,right);

    document.querySelector(".left").style.height=max+"px";
    document.querySelector(".right").style.height=max+"px";
    // console.log(left);
    // console.log(right);
}

equalHeight();
window.onresize=equalHeight;