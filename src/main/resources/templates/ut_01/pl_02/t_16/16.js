// let sum = 0;
// let j=0;
//
// // for (let i = 0; i < 5000000; i++) {
// //     sum += i;
// // }
//
// while (j<=5000000){
//     sum+=j;
//     j++;
// }
//
//
// console.log(sum);

let arr = [3, 4, 5, 67];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 5) {
//         console.log(arr[i]);
//     }
// }
// let b2 = arr.every(function (b) {
//     return b > 0;
// });
// let b2 = arr.some(function (b) {
//     return b < 0;
// });
// console.log(b2);

let r = arr.reduce(function (accum, currentValue, index) {
    console.log("prev = " + accum);
    console.log("i = " + index);
    console.log("curr = " + currentValue);
return accum+currentValue;
});

console.log(r);
console.log(arr);

let rr = arr.reduceRight(function (accum, currentValue, index) {
    console.log("prev = " + accum);
    console.log("i = " + index);
    console.log("curr = " + currentValue);
return accum+currentValue;
});

console.log(rr);
console.log(arr);
