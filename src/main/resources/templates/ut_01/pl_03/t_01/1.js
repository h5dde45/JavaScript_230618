document.onclick=function (event) {
    // console.log(event.target);
    if(event.target.tagName == "IMG"){
        event=event || window.event;
       event.target.classList.add("bordered");
    }
}