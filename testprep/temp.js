// translate to a OLOO
let personPrototype = {
  people: [],
  
  init(name, age) {
    this.name = name;
    this.age = age;
    personPrototype.people.push(this);
    
    return this;
  },
  
  introduce() {
    console.log(`Hello, I am ${this.name}`);
  }
}

let ellie = Object.create(personPrototype).init('ellie', 26);
let caleb2 = Object.create(personPrototype).init('caleb', 25);
// console.log(ellie.constructor.name); //global object

// console.log(personPrototype.introduce());

function Organism(name) {
  this.name = name;
}

Organism.thing = 10;

Organism.prototype.sayName = function() {
  console.log(`I am ${this.name}`);
}

Organism.sayThing = function() {
  console.log(this.thing);
}



class Organism2 {
  static importantNumber = 10;
  
  constructor(name) {
    this.name = name
  }
  
  sayName() {
    console.log(`I am ${this.name}`);
  }
  
  static sayImportantNumber() {
    console.log(this.importantNumber);
  }
}

Organism.sayThing();