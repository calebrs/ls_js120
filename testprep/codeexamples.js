// create code examples of all the flashcards, reread the stduy guide
//Example of a javascript object

let obj = {
  name: 'Caleb',
  age: 25,
  
  speak() {
    console.log('blah, blah, blah');
  },
  
  talk: function() {
    console.log('blah, blah');
  }
}

// example of js factory function ---------------------------------------------------

function createPerson(name, age, profession) {
  return {
    name,
    age,
    profession,
    
    introduce() {
      console.log(`I am ${this.name}. I am ${this.age} years old and am a ${this.profession} by profession.`)
    }
  }
}

// let caleb = createPerson('Caleb', 25, 'Analyst');
// caleb.introduce();

//ES6 class example -------------------------------------------------------

class Person {
  // static people = []; // this throws an error in cloud9 but works in VScode.
  
  constructor(name, age) {
    this.name = name;
    this.age = age;
    // Person.people.push(this);
  }
  
  talk() {
    console.log(`I am ${this.name}`);
  }
  
  static listPeople() {
    console.log(Person.people.map(person => person.name).join(', '));
  }
}

let caleb = new Person('Caleb', 25);
let nathan = new Person('Nathan', 30);
// Person.listPeople(); // Caleb, Nathan
// console.log(caleb.constructor.name === 'Person'); //true
// console.log(Object.getPrototypeOf(caleb));

// Objects linked with other objects OLOO -------------------------------------

let personPrototype = {
  init(name, age) {
    this.name = name;
    this.age = age;
    return this;
  },
  
  talk() {
    console.log(`I am ${this.name}`);
  }
}

// let jimbo = Object.create(personPrototype).init('Jimbo', 32);
// jimbo.talk();
// console.log(jimbo.constructor.name === 'Object'); //true

// Prototypal/psudoclassical inheritance -------------------------------------

function Vehicle(name, wheels) {
  this.wheels = wheels;
  this.name = name;
}

Vehicle.prototype.info = function() {
  console.log(`Name: ${this.name} Number of Wheels: ${this.wheels}`);
}

function Truck(name, wheels, haulWeight) {
  Vehicle.call(this, name, wheels);
  this.haulWeight = haulWeight;
}

Truck.prototype = Object.create(Vehicle.prototype);
// console.log(Truck.prototype.constructor.name);
Truck.prototype.constructor = Truck;

Truck.prototype.pull = function() {
  console.log('pulling...');
}


let newTruck = new Truck('Ford', 6, 150);
// newTruck.info();

// mixins --------------------------------------

let swimMixin = {
  swim() {
    console.log('swimming...');
  }
}

class Animal {
  
}

class Mammal extends Animal {
  
}

class Platypus extends Mammal {
  // swim() {
  //   console.log('Swimming...');
  // }
}
Object.assign(Platypus.prototype, swimMixin);

class Fish extends Animal {
  // swim() {
  //   console.log('Swimming...')
  // }
}
Object.assign(Fish.prototype, swimMixin);

let perry = new Platypus();
let fish = new Fish();
// perry.swim();
// fish.swim();

// polymorphism------------------------------------
class Cat {
  makeNoise() {
    console.log('Meow!');
  }
}

class Bird {
   makeNoise() {
    console.log('Chirp!');
  }
}

class Lizard {
   makeNoise() {
    console.log('Hissss!');
  }
}

let animalArray = [new Cat(), new Bird(), new Lizard()];
// animalArray.forEach(animal => animal.makeNoise());

// Collaborator Objects -------------------------------------

let frog = {
  name: 'froggy',
  
  makeSound() {
    console.log('ribbit!');
  }
}

let owner = {
  name: 'Caleb',
  pet: frog,
}

// owner.pet.makeSound();

// Examples of coppied code context loss -----------------------------------------------------

let obj1 = {
  name: 'Caleb',
  
  doSomthing() {
    console.log(this);
  }
}

obj1.doSomthing();
let newFunc = obj1.doSomthing.bind(obj1); // loses context
newFunc();

// examples of context loss from function not using surrounding context ----------------------------------------------

let obj2 = {
  name: 'Carson',
  
  doSomthing: function() {
    let hello = () => {
      console.log(this.name);
    }
    
    // hello(); // becasue we use an arrow function, the hello function will be able to access the name property on obj2 
  }
}

obj2.doSomthing();
// arrow function
// use self variable
// call
// bind
// if availabe, use the thisArg argument.

// examples of context loss from passing a function as a variable ------------------------------------------------

let obj3 = {
  name: 'Carson',
  
  doSomthing() {
    console.log(this.name);
  }
}

// obj3.doSomthing() // implicit execution context
// obj3.doSomthing.call(obj3);  // explicit execution context

// use the bind method
// create a context argument for you function

// built0in constructors ----------------------------------------------


