let text = ""; // blank
let text2 = null; // null
let text3; // undefined

if (text2 === null) {
}

if (text.trim().length === 0) {
}

if (text3 === undefined) {
}

if (typeof text3 === "undefined") {
}

// nullish ==> ??
let role = text2 ?? "Guest";

// === !== > < >= <=

let text4 = "a" + 1 + 1;

let array = "";

console.log(Array.isArray(array));

console.log(text4);

if (true) {
  let a = 10;
}

function fun() {
  sample = "happy";
}

fun();
console.log(sample);

function finance() {
  let data = null; // single scours of truth
  return {
    signIn(_data) {
      data = _data;
    },
    read() {
      return data;
    },
  };
}

let obj = finance();
obj.signIn("Deepak");
console.log(obj.read());

// function
//let fun = function () {};
let fun2 = () => {};

// curring

function funA() {
  this.name1 = "Deepakkumar";
}

funA.prototype.printName = function () {
  console.log(this.name1);
};

let f = new funA();
f.printName();
