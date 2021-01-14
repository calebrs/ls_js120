// Basic Javascript object and encapsulation:

let pet = {
  name: 'Fido',
  
  bark: function() {
    console.log('Bark!');
  }
}

let person = {
  name: 'Caleb', //state
  age: 25,
  pet: pet,
  
  sayHi: function() { //behavior
    console.log('Hi!');
  }
}

// console.log(person.pet.name);
// person.sayHi();

// Object Factories ----------------------------------
function createCar(name, type) {
  return {
    name: name,
    type: type,
    
    goFast: function() {
      console.log('zoom!');
    }
  }
}

let zoomy = createCar('zoomy', 'turbo');
let zippy = createCar('zippy', 'truck');
// zoomy.goFast();

// Execution Context and the 'this' keyword. -----------------------------------
// the this keywaord refers to the execution context of a function/method. 'This' is determined by how the method is invoked.
// 
let caleb = {
  name: 'caleb',
  age: 25,
  
  whoAmI: function() {
    console.log(this.name);
  }
}

// caleb.whoAmI(); //javascript implicitly sets caleb as the execution context.
// let whoFunc = caleb.whoAmI; //stripped the context
// whoFunc.call(caleb); // explicitly set the execution context of the 'this' keyword.

// context loss through copying => see above example. --------------------------

// context loss through not using surrounding context. -------------------------------

let cat = {
  name: 'chewie',
  
  identify: function() {
    function sayName() {
      console.log(`${this.name}`); //nested functions loose context. They don't use the surrounding context.
    }
    
    sayName.call(this);
  }
}

// cat.identify();

// context loss from passing functions as arguments -----------------------------------

let bigObj = {
  name: 'battleship',
  
  whatAmI() {
    console.log(`I am a ${this.name}`);
  }
}

function callFunc(func) {
  func();
}

// callFunc(bigObj.whatAmI.bind(bigObj)); // context is lost when a method is passed as an argument

// Constructors, what is a constructor how is it different from a factory function? ---------------------------------
// constructors can create objects quickly, reuse code. constructors are invoked with the `new` keyword.
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayName = function() {
  console.log(this.name);
}

let ellie = new Person('ellie', 26);
// console.log(Object.getPrototypeOf(ellie) === Person.prototype);
// ellie.sayName();

// return a new object
// invoke the function
// set the prototype of the new object to the prototype property of the constructor

//prototypal delegation -----------------------------
// prototypal delegation refers to how how js objects inherit methods from other objects.
let obj1 = {
  baz() {return 'hi'}
}

// let obj2 = Object.create(obj1); //creates new object that has obj1 as its prototype
// console.log(obj1.isPrototypeOf(obj2));
// console.log(obj2.baz()); //obj2 does not have the baz() method so js looks for the method in obj1. obj2 delegates the method call to obj1.

// pseudo-classical inheritance
// when a constructor's prototype property inherits from a parent constructor's prototype protperty.

class VideoGame { //function
  constructor(name) {
    this.name = name;
  }
  
  whatAmI() {
    console.log(this.name);
  }
  
  //prototype property
}

class RacingGame extends VideoGame { //function
  constructor(name) {
    super(name);
  }
  
  //RacingGame pototype property inherits from VideoGame's prototype property
}

// console.log(Object.getPrototypeOf(RacingGame.prototype) === VideoGame.prototype);
// let speedGame = new RacingGame('Super Speeder');
// speedGame.whatAmI();

// Built-in constructors ----------------------------
// Javascript has built in constructors: Number, String, Array, Object

// Assign versus create -------------------------
let thing1 = {a: 1, b: 2};
let thing2 = {c: 3};
Object.assign(thing1, thing2); //mutates thing1 by adding a the new property to it. thing 1 now has three of its own properties
console.log(thing1.c); // logs 3

let thing3 = Object.create(thing2); //creates a new object where thing2 is the prototype.
thing3.d = 4; //thing3 only has one own property d.


// mixins. What is a mixin and why use it? -------------------------------------
// a mixin is a way to add methods to a constructor without inheriting it from its prototypcal chain.
// do this when multiple objects "have an ability to" do somthing
let swimMixin = {
  swim() {
    console.log('swimming...');
  }
}

class Animal {
  
}

class Fish extends Animal {
  
}
Object.assign(Fish.prototype, swimMixin);

class Mammal extends Animal {
  
}

class Dog extends Mammal {
  
}
Object.assign(Dog.prototype, swimMixin);

let dog = new Dog();
dog.swim();

//polymorphism. What is it? why is it important?
// When objects of different types react in a different way to the same call.

class Monster {
  makeSound() {
    console.log('no sound...');
  }
}

class Dragon extends Monster {
  makeSound() {
    console.log('Screech!');
  }
}

class Chimera extends Monster {
  makeSound() {
    console.log('Roar!');
  }
}

class Phoenix extends Monster {
  
}

let creatures = [new Dragon(), new Chimera(), new Phoenix()];
creatures.forEach(creature => {
  creature.makeSound();
})