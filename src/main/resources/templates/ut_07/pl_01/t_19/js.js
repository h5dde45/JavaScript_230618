let goods = {
    "28292": {
        "name": "banana",
        "cost": 123,
        "img": "https://cdn0.iconfinder." +
        "com/data/icons/fruits/128/Banana.png",
        "warehouse": "yes"
    },
    "28393": {
        "name": "tomato",
        "cost": 222,
        "img": "https://cdn0.iconfinder." +
        "com/data/icons/fruits/128/Tomato.png",
        "warehouse": "no"
    },
    "56432": {
        "name": "pear",
        "cost": 23,
        "img": "https://cdn0.iconfinder." +
        "com/data/icons/fruits/128/Pear.png",
        "warehouse": "yes"
    }
};
let out = "";
for (let key in goods) {
    out += "Name of goods: " + goods[key].name + "<br>";
    out += "Cost of goods: " + goods[key].cost + "<br>";
    out += "Stock availability: " + goods[key].warehouse + "<br>";
    out += "<img src='"+goods[key].img+"'>";
    out += "<hr>";
}
// console.log(goods);
document.getElementById("out").innerHTML=out;

