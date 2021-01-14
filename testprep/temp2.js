let greeter = {
  a: 'hello',
  b: 'world',
  greet() {
    let self = this;

    function sayHello() {
      console.log(self.a + ' ' + self.b);
    }

    sayHello();
  }
};

greeter.greet(); // logs 'hello world'