var val = "";
document.getElementById("test").onkeypress=
    function (event) {
        val += event.key;
        console.log(val);
        // this.val=rand(65,122);
        this.val+=String.fromCharCode(rando(65,122));
        // return false;
    }

    function rando(min, max) {
        return Math.floor(Math.random()*(max-min))+min;
    }