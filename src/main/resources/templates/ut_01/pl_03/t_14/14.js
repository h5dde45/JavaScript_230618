let out = document.getElementById("out");
let out2 = document.getElementById("out2");

let str = ["15px", "-12pt", "34em", "-3px", '2%'];
out.innerHTML = str;

function toNum(arr) {
    let out = [];
    let temp = 0;
    for (let i = 0; i < arr.length; i++) {
        temp = parseFloat(arr[i]);
        if (temp >= 0) {
            out.push(temp);
        }
    }
    out.sort(function (a, b) {
        return a - b;
    });
    return out;
}

function toNum2(arr) {
    let map = arr.map(function (sz) {
        return parseFloat(sz);
    });
    map=map.filter(function (sz) {
        if(sz>0){
            return sz;
        }
    });
    map.sort(function (a, b) {
        return a - b;
    });

    return map;
}

function f1(arr) {

}

out2.innerHTML = toNum2(str);

