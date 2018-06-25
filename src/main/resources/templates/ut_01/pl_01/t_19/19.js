var gd = {
    "2243": {
        "name": "банан",
        "cost": 33,
        "img": "https://cdn3.iconfinder.com/data/" +
        "icons/fruits-52/150/icon_fruit_banana-128.png",
        "sklad": "есть"
    },
    "6873": {
        "name": "помидор",
        "cost": 233,
        "img": "https://cdn0.iconfinder.com/data/" +
        "icons/fruits/128/Tomato.png",
        "sklad": "нет"
    },
    "567": {
        "name": "сыр",
        "cost": 456,
        "img": "https://cdn0.iconfinder.com/data/icons/" +
        "kameleon-free-pack/110/Cheese-128.png",
        "sklad": "есть"
    }
};

console.log(gd);

var out = "";

for (var key in gd) {
    out += "Артикл: " + key + "<br>";
    out += "Название: " + gd[key].name + "<br>";
    out += "Цена: " + gd[key].cost + "<br>";
    out += "Наличие: " + gd[key].sklad + "<br>";
    out += "<img src='"+gd[key].img+"'> <br>";
    out += "<hr>";
}
document.getElementById("out").innerHTML = out;