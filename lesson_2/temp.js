let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    function bar() {
      console.log(this.a + ' ' + this.b);
    }

    this.foo();
  },
};

console.log(obj.foo());        // => undefined undefined