console.log("2222");
console.error("errrr");
console.warn("!!!!!!!!");
console.info("info.........");

let a={
    one:{
        text:"hello",
        age:111,
        iin:"asd"
    },
    two:{
        text: "hello2",
        age: 112,
        iin: "asd2"
    }
};

console.log(a);
console.table(a,["age","iin"]);