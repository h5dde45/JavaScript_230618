document.getElementById("calc").onclick =
    function () {
        let flat = document.getElementById("flat").value;
        flat = parseInt(flat);
        // console.log(flat);
        // console.log(flat + 1);

        if (flat >= 1 && flat <= 20) {
            alert("1");
        } else if (flat >= 21 && flat <= 40) {
            alert("2");
        } else if (flat >= 41 && flat <= 60) {
            alert("3");
        } else if (flat >= 61 && flat <= 80) {
            alert("4");
        } else if (flat >= 81 && flat <= 100) {
            alert("5");
        } else {
            alert("нет данных");
        }

    };