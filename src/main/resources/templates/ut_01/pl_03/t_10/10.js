document.getElementById("calc").onclick =
    function () {
        let year = document.getElementById("year").value;
        year = parseInt(year);

        if (year >= 17) {
            alert("1");
        } else {
            alert("2");
        }

    };