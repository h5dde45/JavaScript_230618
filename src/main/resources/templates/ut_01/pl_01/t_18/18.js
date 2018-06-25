var mas = {
    "name": "n1",
    "age": 34,
    "id": "23565",
    "sex": "m"
};
var mas2 = {
    "name": "n1",
    "age": 34,
    "id": "23565",
    "sex": "m",
    "year": function () {
        return 2017 - this.age;
    }
};

console.log(mas2.year());

// console.log(mas);
// console.log(mas.name);

var m = {
    "mas": [5, 6, 7, 8, 35, 44, 15],
    "sum": function () {
        var sum = 0;
        for (var i = 0; i < this.mas.length; i++) {
            sum += this.mas[i];
        }
        return sum;
    }
};
console.log(m.sum());