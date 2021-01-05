/*
SECTION 1: Intro to OOP

1. Describe the following code:

const cat = {
  name() {
    return "Butterscotch";
  },

  age() {
    return 13;
  },
};

Answer:

2. How would you modify line 5 of this program so that it returns the desired value? write a solution that create the correct result.

let book = {
  title: "Snow Crash",
  author: "Neal Stephenson",
  getDescription() {
    return `${title} by ${author}`;
  },
};

// desired return value: 'Snow Crash by Neal Stephenson'
book.getDescription(); // => ReferenceError: title is not defined

Answer:

3. Describe how the the value cat in the pete object is a collaboerator object. How would you call the makeNoise method on pete's cat?

let cat = {
  name: 'Fluffy',

  makeNoise() {
    console.log('Meow! Meow!');
  },

  eat() {
    // implementation
  },
};

let pete = {
  name: 'Pete',
  pet: cat,

  printName() {
    console.log(`My name is ${this.name}!`);
    console.log(`My pet's name is ${this.pet.name}`);
  },
};

Answer:

4.Describe the raceCar object. Also, name all of the state and behavior of the raceCar object.

let raceCar = {
  make: 'BMW',
  fuelLevel: 0.5,
  engineOn: false,

  startEngine: function() {
    raceCar.engineOn = true;
  },

  drive: function() {
    raceCar.fuelLevel -= 0.1;
  },

  stopEngine: function() {
    raceCar.engineOn = false;
  },

  refuel: function(percent) {
    if ((raceCar.fuelLevel + (percent / 100)) <= 1) {
      raceCar.fuelLevel += (percent / 100);
    } else {
      raceCar.fuelLevel = 1;
    }
  },
};

Answer:

5. What does the following code log to the console? Why?

function createBook(title, author) {
  return {
    title,   // see solution for previous problem
    author,  // see solution for previous problem
    read: false,

    getDescription: function() {
      return `${this.title} was written by ${this.author}.`;
    },
  };
}

let book1 = createBook('Mythos', 'Stephen Fry');

console.log(book1.getDescription());

Answer:

SECTION 2: Functions, Objects, prototypes

6. Describe what happens on the last line of this code. 

let foo = {
  bar: 42,
  qux() {
    console.log("Pudding");
  },
};

let baz = Object.create(foo);
baz.qux()

Answer:

7. List all the properties and methods of the global object, explain why this happens.

global.foo = 5;
if (isFinite(foo)) {
  let bar = 3;
  xyz = 5;
  console.log(bar);
}

Answer:

8. What happens when this code runs?

function foo() {
  return this;
}

foo();

Answer:

9. Explain in detail what this code does:

let a = {
  foo: 1,
};

let b = {
  foo: 2,
};

Object.setPrototypeOf(b, a);

let c = Object.create(b);
console.log(c.foo); // => 2
c.foo = 42;
console.log(c.foo); // => 42
console.log(b.foo); // => 2

Answer:

10. What is different between the two following loops?

for (let property in foo) {
  console.log(`${property}: ${foo[property]}`);
}

Object.keys(foo).forEach(property => {
  console.log(`${property}: ${foo[property]}`);
});

Answer: 

11. What happens when yo urun the following code?

function logNum(num) {
  console.log('Number: ' + num);
}

[1, 2, 3].forEach(logNum());

Answer:

12. What does the following code do when it runs? what is the execution context of the last line?

function logNum() {
  console.log(this.num);
}

let obj = {
  num: 42
};

logNum.call(obj); // logs 42

Answer:

13. Exain the purpose of the bind method in this code:

function sumNum(num1) {
  return this.num + num1;
}

let obj = {
  num: 42
};

let sumNum2 = sumNum.bind(obj);
sumNum2(5); // => 47

Answer:

14. Explain what this code logs. Why? How is the context stripped?

let john = {
  firstName: 'John',
  lastName: 'Doe',
  greetings() {
    console.log('hello, ' + this.firstName + ' ' + this.lastName);
  },
};

john.greetings();         // context is john
let foo = john.greetings; // Strips context
foo();                    // context is now the global object

Answer:

15. explain how this code avoids context loss.

let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    function bar() {
      console.log(this.a + ' ' + this.b);
    }

    bar.call(this);
  },
};

obj.foo(); // => hello world

Answer:

16. What does the following code log and why?

function repeatThreeTimes(func) {
  func();
  func();
  func();
}

let john = {
  firstName: 'John',
  lastName: 'Doe',
  greetings: function() {
    repeatThreeTimes(function() {
      console.log('hello, ' + this.firstName + ' ' + this.lastName);
    });
  },
};

john.greetings();

Answer:

SECTION 3: Object creation patterns

17. Decscribe what happens when the 'new' keyword is used to invoke the function Car.

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.started = false;

  this.start = function() {
    this.started = true;
  };

  this.stop = function() {
    this.started = false;
  };
}

let corrola = new Car('Toyota', 'Corolla', 2016);

Answer:

18. What principle does the following code illistrate? What is the output of the two function calls?

function Dog(name, breed, weight) {
  // deleted Object.setPrototypeOf(this, Dog.myPrototype);
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

Dog.prototype.bark = function() {
  console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
};

let maxi = new Dog('Maxi', 'German Shepherd', 32);
maxi.bark();

let biggie = new Dog('Biggie', 'Whippet', 9);
biggie.bark();

Answer:

19. Describe what the following code does and how it could be useful.

function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  Dog.allDogs.push(this);
}

Dog.allDogs = [];

Answer: 

20. Explain how this ES6 class works and what the code outputs.

class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  static getDescription() {
    return 'A rectangle is a shape with 4 sides';
  }

  getArea() {
    return this.length * this.width;
  }
}

console.log(Rectangle.getDescription()); // A rectangle is a shape with 4 sides

Answer:

21. Explain why this code works and what OO principle it demonstrates

let carPrototype = {
  // code omitted for brevity

  init(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    return this;
  },
};

let car1 = Object.create(carPrototype).init('Toyota', 'Corolla', 2016);

Answer:

22. What does the following code do? Why would we do that?

function Square(size) {
  this.length = size;
  this.width = size;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Answer:

23. What does the following code do? Why? How would you fix it?

let Person = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayName() {
    console.log(`My name is ${this.name}.`);
  }
};

let Student = class Person {
  constructor(name, age, semester) {
    super(name, age);
    this.semester = semester;
  }

  enrollInCourse(courseNumber) {
    console.log(`${this.name} has enrolled in course ${courseNumber}.`);
  }
};

let student = new Student('Kim', 22, 'Fall');
student.sayName();
student.enrollInCourse('JS120');

Answer:

24. Why are we calling the assign method in this code? What Javascript principe does it domonstrate?

const Speed = {
  goFast() {
    console.log(`I'm a ${this.constructor.name} and going super fast!`);
  }
};

class Car {
  goSlow() {
    console.log(`I'm safe and driving slow.`);
  }
}

Object.assign(Car.prototype, Speed);

class Truck {
  goVerySlow() {
    console.log(`I'm a heavy truck and like going very slow.`);
  }
}

Object.assign(Truck.prototype, Speed);

25. Explain why the last line of this code works.

class Animal {
  move() {}
}

class Fish extends Animal {
  move() {
    console.log("swimming");
  }
}

class Cat extends Animal {
  move() {
    console.log("walking");
  }
}

// Sponges and Corals don't have a separate move method - they don't move
class Sponge extends Animal {}
class Coral extends Animal {}

let animals = [new Fish(), new Cat(), new Sponge(), new Coral()];
animals.forEach(animal => animal.move());

Answer: 
*/