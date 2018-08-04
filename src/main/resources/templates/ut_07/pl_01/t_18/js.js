let man = {
    "name": "n1",
    "age": 22,
    "id": "asd",
    "range": "s"
};
let man2 = {
    "name": "n1",
    "age": 22,
    "id": "asd",
    "range": "s",
    "year": function () {
        return 2018 - this.age;
    }
};

console.log(man);
console.log(man.id);
console.log(man["id"]);
console.log(man2.year());

let m = {
    "mas": [3, 6, 4, 5],
    "sum": function () {
        let sum = 0;
        for (let i = 0; i < this.mas.length; i++) {
            sum += this.mas[i];
        }
        return sum;
    }
};
console.log(m.sum());
