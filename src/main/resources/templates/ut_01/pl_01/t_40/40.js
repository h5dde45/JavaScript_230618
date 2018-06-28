// var div4 = document.getElementById("four4");
// var p = div4.getElementsByTagName("p");
// var div = document.getElementsByTagName("div");
// div[2].style.background="green";
// var className = document.getElementsByClassName("test");
// console.log(className);

// var element = document.querySelector("div p");
//     // .querySelector("p");
// console.log(element);
//
// var element = document.querySelector("#four4 p");
// console.log(element);

// var element = document.querySelectorAll("div");
// console.log(element[0]);

// four4.style.background = "red";

// var div = document.querySelector("div");
// var childNodes = div.childNodes;
// childNodes=div.children
// console.log(childNodes);

var element = document.querySelector("a");
var node = element.parentElement;
console.log(node);
console.log(node.nextElementSibling);
console.log(node.nextElementSibling.previousElementSibling);
console.log(node.parentElement);