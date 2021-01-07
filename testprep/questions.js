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

Answer: This code defines an object called `cat` with the const keyword. `cat` has two propterties who's values are methods: `name` and `age`. When the name method is called it returns the string butterscotcha and similarly, 
when the method age() is called, will return the number 13. This code domonstrates the typical structure of a javascript object and also a the shorthand way of defining methods within a Javasctript object.

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

Answer: Currently ,this code will will raise a reference error, stating that title and author are not defined. This is becuase simply using `title` or `author` as variables does not reference the properties on the book object
to fix this code, you must change `title` to this.title and author to this.author. `this` references the book object, so this.title will reference the value of the `title` property on the book object.

3. Describe how the the value cat in the pete object is a collaberator object. How would you call the makeNoise method on pete's cat?

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

Answer: the `cat` object, which is the value of the `pete` objects `pet` property, acts as a reference and collaberator with the `cat` object which is declared above the `pete` object. Becuase `cat` is a value
inside of the `pete` object we can call the methods on `cat` through `pete` like this: pete.pet.eat(). You could also say that the `pet` property links pete with the cat object. 

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

Answer: The raceCar object has three properties and four methods. The first three properties, `make` `fuellevel` and engineOn describes the state of `raceCar` that is important within the context of the progrom.
the first method `startEngine` sets the `ngineOn` property to true. the second method decreases the amount of fuel by reassigning the fuelLevel property. The third function is similar to the `startEngine` method but
it turns chagens the engineOn property to false. LAstly, the `refuel` method takes a percent argument, which represents how much fuel is going into the car, and adds it to the `fuelLevel`'s value. if the amount going into
the car exceeds 1, then `fuelLevel` is set to 1.

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

Answer: Lines 97 to 107 define a function called `createBook`. This function returns an object with three properties, title, author, and read. The object also has one method `getDescription` that returns a string description
of the book. Line, 109 calls the `createBook` function with the arguments Mythos, and Stephen Fry. These arguments are assigned to the new objects properties `title` and `author`. finally line 111 calls the method on `book1`
which logs to the console 'Mythos was written by Stephen Fry'. This demonstrates how one might use factory functions to create book objects.

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

Answer: line 129 calls the `qux` method on the `baz` object. When the method is invoked, javascript searches the baz object for its own qux method. When it fails to find one, it searches `baz`'s prototype whihc in this case
is `foo`. `foo` happens to contain a qux() method, so that method is invoked, loggin the string `pudding` to the console. This code domonstrates how objects delegate the calling of a method to its prototype. Baz delegates the
the invocation of qux to the foo object.

7. List all the properties and methods of the global object that are represented here, explain why this happens.

global.foo = 5;
if (isFinite(foo)) {
  let bar = 3;
  xyz = 5;
  console.log(bar);
}

Answer: there are 2 properties and 1 methods in Global object represented here . the first is the property`foo` that is initialized on the first line, and assigned a value of 5. the next is the method isFinite(), a method which is on the
global object by default. the next is the property xyz. When a variable is declared without the let, const or var keyword, it is set to the global object. Finally, console is an object which is on the global object.

8. What happens when this code runs?

function foo() {
  return this;
}

foo();

Answer: When the foo function is called, it returns the value of `this`. In this case, the execution context of the function call is the global object, so `this` referes to the global object. The function call will return the
global object.

9. Explain in detail what this code does:

let a = {
  foo: 1,
};

let b = {
  foo: 2,
};

Object.setPrototypeOf(b, a);

let c = Object.create(b);
console.log(c.foo); 
c.foo = 42;
console.log(c.foo); 
console.log(b.foo);

Answer: This code defines two objects called `a` and `b`. Each of these objects has a `foo` property set to 1 and 2 repectivley. Next the code sets the object `b`'s protoyep to the `a` object. Then it creates a new object called
`c` which inherits the object `b` as its protoype. So, when the `foo` method is called on `c` javascript first looks inside of `c` for `foo` because it doesn't find it, it then looks in `c`s prototype which is `b`. It
finds the `foo` method in `b` so 2 is logged to the console. When `c.foo` is assigned to `42` on the next line, a `foo` property is created inside of `c`. so when `c.foo` is called javascript finds `c`'s `foo` property and
logs its value `42` to the console. `b`'s `foo` property remains unchanged and will log `2` to the console. this demonstrates how objects inherit properties from other objects in javascript.

10. What is different between the two following loops? 

for (let property in foo) {
  console.log(`${property}: ${foo[property]}`);
}

Object.keys(foo).forEach(property => {
  console.log(`${property}: ${foo[property]}`);
});

Answer: The first loop is a `for` loop that will iterate over all iterable properties in the foo object, including inherited properties. The second loop differs becuase when `Object,keys()` is called with `foo` as an argument
only `foo`'s own properties will be returned. The forEach loop will loop through `foo`'s own properites. 

11. What happens when yo urun the following code?

function logNum(num) {
  console.log('Number: ' + num);
}

[1, 2, 3].forEach(logNum());

Answer: This code throws an error when run beucase of how the function logNum() is passed into the forEach method call. Because logNum() is called with parentheses, javascript invokes `logNum`. forEach will then use the return
value of `logNum` which in this case is `undefined`. This demonstrates how when functions are passed to other functions, they need to be passed without the parentheses, or just the name of the method. Simply removing the parenthese
at the end of logNum() on the last line will fix this code.

12. What does the following code do when it runs? what is the execution context of the last line?

function logNum() {
  console.log(this.num);
}

let obj = {
  num: 42
};

logNum.call(obj); // logs 42

Answer: This code defines a funtion `logNum` and an object `obj`. the last line of this code uses the Function.prototype.call() method to invoke the function `logNum` with `obj` as its execution context. So, the value of `this`
on line 2 refers to `obj` meaning that the number 42 will be logged to the console.

13. Exain the purpose of the bind method in this code:

function sumNum(num1) {
  return this.num + num1;
}

let obj = {
  num: 42
};

let sumNum2 = sumNum.bind(obj);
sumNum2(5); // => 47

Answer: When the bind method is called on the sumNum function, it creates a new function who's execution context is permanantely set to `obj`. So, whenever `sumNum2` is called, the value of `this` will always refer 
to the `obj` object.Therefore, `42` is logged to the console as shown on the last line of the code.

14. Explain what this code logs. Why? How is the context stripped?

let john = {
  firstName: 'John',
  lastName: 'Doe',
  greetings() {
    console.log('hello, ' + this.firstName + ' ' + this.lastName);
  },
};

john.greetings();         
let foo = john.greetings;
foo();                    

Answer: When `john.greetings()` is invoked on line 247, the execution context is the object `john`. This is clear by investigating the invokation itself: `john.greetings()`. making a copy of the method, strips the context execution
for the new variable `foo`. So, when `foo` is called on the next line, `this` references the global object instead of the `john`. `foo()` logs 'hello undefined undefined' to the console because `Object` has no defined 
`firstName` or `lastName` properties.

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

Answer: because the code on line 265 uses the `call` method to invoke `bar` with an execution context of `this` the values of `this` on lines 262 refer to `obj`. If line 265 read `bar()` instead, then `this` would refere to
the global object becuse nested functions do not use the surrounding scope for their execution context. This code demonstrates how one might fix this kind of context loss. 

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

Answer: This code will log 'hello undefined undefined'. This is becuase functions that are passed as arguments to other functions loss their exeution context. So, when func is called within the repeatThreeTimes funciton, `func`
execution context is the global object. this.firstName and this.lastName will evaluate to undefined beucase the global object does not have those properties defined.

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

Answer: When the new keyword is used before invoking the `Car` function 1. the statment returns a new object of `Car` type. The parameter values are assigned to the property values listed on lines 302 - 313. `corrola` is 
a new object that now has access to the properties and functions listed within the `Car` function.

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

Answer: This code demonstrates how any objects created using the `Dog` constructor will inherit properites from `Dog.prototype`. the first function call will log `woof`, while the other will log `yip`. This also demonstrates
how `this` references the calling object which in turn will detremine which kind of bark the dog has as shown by the `bark` method.

19. Describe what the following code does and how it could be useful.

function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  Dog.allDogs.push(this);
}

Dog.allDogs = [];

Answer: The `Dog` function here has a static property `Dogs.allDogs` which keeps track of all the objects created usnig the `Dog` constructor by storing any newly created objects in an array assigned to the `allDogs` property.
This might be useful to keep track of any objects that are craeted by this constructor and demonstrates how one might use static methods on a constructor.

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

Answer: This code defines a class called `Rectangle` with three methods. The first method is the sontructor method which is called when the `new` keywaord is used to call `Rectangle`. The next method `getDescription`, uses the
`static` keyword meaning that this method can only be called directly on `Rectangle`. The last method `getArea()` is a simple method that calculkates the Rectangles area. The last line of code calls the getDescription() method
direcnlty on the Rectangle class, on will log `a rectangle is a shape with 4 sides.` This code shows how static methods can be used to store generic methods that apply to all rectangles instead of a specific rectangle.

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

Answer: This code demonstrats the OLOO pattern of javascript. Thge first line declars an object variable called carPrototype with a method called `init`. When the `init` method is called it will return an object with 
the properties `make`, `model`, and `year`, and the objects prototype will reference `carPrototype`.

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

Answer: This code defines two classes: `Person` and `Student`, each containing two methods: a constructor and a class specific method. When the second to last line of code is called an error is thrown becuase student does
not have a `sayName` method. This is because student does not inherit from `Person`. To fix this code you would change the Student declaration to read: let Student = class extends Person.

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

Answer: When we call the `Object.assign()` method below the `Truck` and `Car` classes, we're assigning the Speed object to the class's prototype. Meaning that objects created using the `Car` and `Truck` constructor will 
have access to the `goFast()` moethod that appears on line 444. This demonstrates how a developer can use mix-ins to add methods to constructors without uysing inheritance. Mix-ns are helpgul in a situation where
an object 'has an ability' to do somthing.

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

Answer: This code defines three classes: Animal, Fish, and Cat. Each of them has a move() method. The last line of code here iterates through three objects, each having a unique type of Cat, Fish, or Animal and calls the move()
method on them. Even though the move() meethod does different things for each object, and each object has a different type, the code will still execute each of the method calls. This will log: 'swimming', 'walking' to the console
Sponge and coral's `move()` method does not log anything to the console in this case. This deomonstrates how javascrip tuses polymorphism.
*/