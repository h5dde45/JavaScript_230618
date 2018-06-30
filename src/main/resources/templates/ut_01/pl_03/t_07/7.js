document.getElementById("in").oninput =
    function () {
        const offset = 3;
        let str = this.value;
        let out = "";
        let help = "";
        for (let i = 0; i < str.length; i++) {
            let code = str.charCodeAt(i);
            help += code + " ";
            code += offset;
            out += String.fromCharCode(code);
        }

        let helpStr = document.getElementById("help");
        let outStr = document.getElementById("out");
        helpStr.innerHTML = help;
        outStr.innerHTML = out;


    };

document.getElementById("deshAr").oninput =
    function () {
        const offset = 3;
        let str = this.value;
        let out = "";

        for (let i = 0; i < str.length; i++) {
            let code = str.charCodeAt(i);
            code -= offset;
            out += String.fromCharCode(code);
        }
        let outStr = document.getElementById("desh");
        outStr.innerHTML = out;
    };