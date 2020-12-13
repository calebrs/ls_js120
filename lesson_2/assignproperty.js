/*
input: an object, the property, the new value of that property in the objects prototype
output: side effect: change the property in the prototype to the input property

algorithm:



*/

function assignProperty(obj, prop, newVal) {
  while (obj !== null) {
    if (obj.hasOwnProperty(prop)) {
      obj[prop] = newVal;
      break;
    }
    
    obj = Object.getPrototypeOf(obj);
  }
}

let fooA = { bar: 1 };
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);

assignProperty(fooC, "bar", 2);
console.log(fooA.bar); // 2
console.log(fooC.bar); // 2

assignProperty(fooC, "qux", 3);
console.log(fooA.qux); // undefined
console.log(fooC.qux); // undefined
console.log(fooA.hasOwnProperty("qux")); // false
console.log(fooC.hasOwnProperty("qux")); // false