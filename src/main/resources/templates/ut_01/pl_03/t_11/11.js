document.getElementById("check").onclick = function () {
    let login = document.getElementById("login").value;
    let pass = document.getElementById("password").value;

    if (login == "iv" && pass == "asd") {
        alert("ok");
    }else if(login == "el" && pass == "123") {
        alert("ok")
    }else {
        alert("dont ok");
    }

};