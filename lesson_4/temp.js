// let Animal = {};
// let Cat = Object.create(Animal);
// let fluffy = Object.create(Cat);
// console.log(fluffy instanceof Animal);

let object1 = {
  prop1: 1,
  prop: 2
}

let object2 = Object.create(object1);
console.log(object2.prop1);