document.querySelector("#out").innerHTML =
    navigator.userAgent;
// console.log(navigator);

if (navigator.userAgent.match('iPhone') ||
    navigator.userAgent.match("iPad")) {
    alert("mobile");
} else {
    alert("desktop");

}
