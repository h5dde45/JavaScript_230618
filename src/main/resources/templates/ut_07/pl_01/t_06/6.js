function out() {
    let p = document.getElementById("out");
    // p.innerHTML+=" <b>asd</b>";

    // p.insertAdjacentHTML("beforeBegin","111");
    // p.insertAdjacentHTML("afterBegin","222");
    // p.insertAdjacentHTML("beforeEnd","333");
    // p.insertAdjacentHTML("afterEnd","444");

    p.outerHTML="<div class='one'>asd</div>";
}