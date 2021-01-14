class Person {
  static people = [];
  
  constructor(name, age) {
    this.name = name;
    this.age = age;
    Person.people.push(this);
  }
  
  talk() {
    console.log(`I am ${this.name}`);
  }
  
  static listPeople() {
    console.log(Person.people.map(person => person.name).join(', '));
  }
}

let caleb = new Person('Caleb', 25);
let nathan = new Person('Nathan', '30');
Person.listPeople();