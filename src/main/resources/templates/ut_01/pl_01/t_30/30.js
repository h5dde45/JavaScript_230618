var n = Math.floor(Math.random() * (10) + 1);
document.getElementById("control").innerHTML = n;
var count = 3;

document.getElementById("check").onclick =
    function () {
        var c = document.getElementById("count");
        var un = document.getElementById("num").value;
        un = parseInt(un);
        var out = document.getElementById("out");
        if (count > 0) {
            if (un == n) {
                out.innerHTML = "into the point";
                c.innerHTML = "okey"
                count = 0;
            } else if (un < n) {
                if (count > 1) {
                    out.innerHTML = "undershoot";
                    c.innerHTML = (count - 1) + " attempts left";
                } else {
                    c.innerHTML = "attempts have been";
                    out.innerHTML = "..........";
                }
                count--;
            } else {
                if (count > 1) {
                    out.innerHTML = "fly over";
                    c.innerHTML = (count - 1) + " attempts left";
                } else {
                    c.innerHTML = "attempts have been";
                    out.innerHTML = "..........";
                }
                count--;
            }
        }else {
            location.reload();
        }
    }