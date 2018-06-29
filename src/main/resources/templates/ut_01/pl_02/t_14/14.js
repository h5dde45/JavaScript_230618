let a = [3, 4, 5];
let b = [];
delete a[1];
for (let i = 0; i < a.length; i++) {
    b[i] = a[i] * 2;
}
console.log(a);
console.log(b);

console.log("===================");
let c = [31, 41, 51];
c[5] = 6;
delete c[0];
let d = c.map(function (cv, y, z) {
    console.log(y);
    console.log(z);
    return cv * 2;
});
console.log(c);
console.log(d);

console.log("===================");
let f = [3, -34, 0, 4, -12, 5];
let e = [];
for (let i = 0; i < f.length; i++) {
    if (f[i] < 0) {
        e.push(f[i]);
    }
}
console.log(f);
console.log(e);

console.log("===================");
let m = f.filter(function (elem, index) {
    return index % 2 == 0;
});
console.log(m);




