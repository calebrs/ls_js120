// Today: Go through all flahscards and craeate code examples for each card
// Briefly scan through written exam
// reread the interview prep page

//Examples:

// Javascript Objects, what are they, how do they work? -----------------

// let num = 25; //primitive data type
// let obj = {
//   age: 25,
//   greeting: 'Hello',

//   sayHi: function() {
//     console.log('Hi');
//   }
// }

// obj.sayHi();

// Object Factories why use them, what are they? ------------------------------------

// function createPerson(name, age) {
//   return {
//     name, 
//     age,

//     walk() {
//       console.log('walking...');
//     }
//   }
// }

// let caleb = createPerson('caleb', '25');
// caleb.walk();

//constructors: What are they how are they different from factory functions? ----------------------------------

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.sayName = function() {
//   console.log(`I am ${this.name}`);
// }

// let caleb = new Person('Caleb', 25);
// console.log(Object.getPrototypeOf(caleb) === Person.prototype);
// console.log(caleb.hasOwnProperty('name'));
// caleb.sayName();


//Prototypes, what are they? ----------------------------------
// prototype may refer to two different things: the object that an objects __proto__ referes to, or the prototype property on functions.

// let obj = { // constructor, __proto__ are the hidden properties on a JS object
//   name: 'Caleb',
//   age: 25,
// }

// console.log(Object.getPrototypeOf(obj) === Object.prototype);

//OLOO why use it, how does it work? ----------------------------------

// let objPrototype = {
//   init(name, age) {
//     this.name = name;
//     this.age = age;
//     return this;
//   },

//   sayHi() {
//     console.log(`I am ${this.name}`);
//   }
// }

// let caleb = Object.create(objPrototype).init('Caleb', 25);
// caleb.sayHi();

//ES6 classes ----------------------------------

// class Person {
//   static property = "I am the Person Object";

//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   sayHi() {
//     console.log(`I am ${this.name}`);
//   }
// }

// let caleb = new Person('Caleb', 25);
// caleb.sayHi();

//Static Methods and properties on, OLOO, psuedoclassical, ES6 classes ----------------------------------

// class Person {
//   static name = 'Person';
// }

// function Person2() {

// }

// Person2.name = 'Person2';

// let personPrototype = {
//   name: 'PersonPrototype',
// }
//NOTE: methods are declated the same way as the properties in this example.
// Prototypal vs psudo-classical inheritance ----------------------------------
// // prototypal delegation:
// let obj1 = {a: 1, b: 2};
// let obj2 = Object.create(obj1);
// console.log(obj2.b); //Js first looks inside of obj2 for b, but does not find it. Then, it looks in the prototype and finds it.
// // obj2 => obj1

// // refers to how constructors inherit method from eachother
// // functions have a prototype property which is an object. That object inherits from a parent constructor's prototype property.
// class Person {
//   sayHi() {
//     console.log('Hi!');
//   }
// }

// class Student extends Person {
// }

// let caleb = new Student();
// caleb.sayHi();
// // caleb => Student.prototype => Person.prototype

// Encapsulation, what is it? ----------------------------------
// philosophy, that a thing is made up of state and behavior. This is the basis of OO in that everyting in a program can be made into an object that has state/properties and behavior/methods
// let obj = {
//   name: 'Caleb', // state

//   walk() { //behavior
//   }
// }

// Polymorphism: duck typing and inheritance -----------------------------------
// is the ability for objects of different types to respond to the same call.
// class Animal {
//   move() {
//     console.log(`moving`);
//   }
// }

// class fish extends Animal {
//   move() {
//     console.log(`swimming`);
//   }
// }

// class Mammal extends Animal {
//   move() {
//     console.log(`walking`);
//   }
// }

// class Sloth extends Mammal {

// }

// let array = [new Sloth(), new fish()];
// array.forEach(animal => animal.move());

// collaborator object ----------------------------------
// objects that serve as links between objects

// let person = {
//   name: 'Caleb',
//   age: '25',
// }

// let pet = {
//   name: 'Jimbo',
//   owner: person,

//   myOwner() {
//     console.log(`My owner is: ${this.owner.name}`);
//   }
// }

// pet.myOwner();

// Mix-ins: single vs multiple inheritance. How does this work? ----------------------------------
// Js does not support multiple inheritance. JS is only sing inheritance
// let swimMixin = {
//   swim() {
//     console.log('swimming');
//   }
// }

// class Organism {
// }

// class Fish extends Organism {
// }
// Object.assign(Fish.prototype, swimMixin);

// class Mammal extends Organism {
// }

// class Dog extends Organism {
// }
// Object.assign(Dog.prototype, swimMixin);

// let dog = new Dog();
// dog.swim();

// let fish = new Fish();
// fish.swim();

// execution context, the value of this ----------------------------------------------------------
// The value of this, also refereed to as the execution context, is determined by how a method/functionm is invoked.
// let obj = {
//   name: 'Caleb',

//   sayName() {
//     console.log(`I am ${this.name}`);
//   }
// }

// obj.sayName(); // implicit execution context is obj. in other words this' value is 'obj'.
// let func = obj.sayName;
// func(); //implicit execution context is the global object.

// inplicit execution context ----------------------------------------------------------
// see above example. depends how the funciton is invoked. calling object is execution context or the global object when there is no claling object.

// explicit exectuion context ----------------------------------------------------------
// refers to when the developer explicitly states what the execution context should be.
// use the call, apply, or bind JS methods to do this.

// let obj = {
//   name: 'Caleb',

//   sayName() {
//     console.log(`I am ${this.name}`);
//   }
// }

// obj.sayName(); // implicit execution context is obj. in other words this' value is 'obj'.
// let func = obj.sayName; //loses context because a copy is created.
// func.call(obj) // explicitly states that the execution context is obj.

// Context loss 1: copying ----------------------------------------------------------
// see the code above

// context loss 2: not using surrounding context ----------------------------------------------------------

// let obj = {
//   name: 'Caleb',

//   whatAmI() {
//     let iAm = () => {
//       console.log(`I am ${this.name}`);  //loses context becuase the method does not use surrounding context.
//     }
    
//     iAm();
//   }
// }

// obj.whatAmI();

// context loss 3: function passed as an argument ----------------------------------------------------------

// let obj = {
//   name: 'obj',

//   doSomthing() {
//     console.log(`This is: ${this.name}`);
//   }
// }

// function callFunc(func) {
//   func();
// }

// callFunc(obj.doSomthing.bind(obj)); //loses context

//Function.prototype.call() ----------------------------------------------------------
//call cuntion explicitly sets the execution context of a function. The second argument is used as  arguments for the called function
// function whatIsThis() {
//   console.log(this.name);
// }

// let obj = {
//   name: "Caleb",
// }

// whatIsThis.call(obj); //used to call whatisThis with an execution context of obj.

// Function.prototype.apply() ----------------------------------------------------------


// Function.prototype.bind() ----------------------------------------------------------


//Object.assign() ----------------------------------------------------------
//copies all own properties from one object to another. first arg is target second is source.

// let obj = {
//   name: "Caleb",

//   sayName() {
//     console.log(`${this.name}`);
//   }
// }

// let obj2 = {};
// Object.assign(obj2, obj); //copies all props from obj to obj2.
// console.log(obj2.hasOwnProperty('sayName')); //now has it's own properties.

//Object.create() ----------------------------------------------------------
// creates an empty object who's prototype is set to the input argument

// let obj = {
//   name: "Caleb",
  
//   sayName() {
//     console.log(`${this.name}`);
//   }
// }

// let obj2 = Object.create(obj);
// console.log(obj2.hasOwnProperty('sayName'));
// obj2.sayName();

//Object.getprototypeOf() ----------------------------------------------------------